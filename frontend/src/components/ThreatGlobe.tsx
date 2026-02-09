import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'

import { attackTypeColors, countries, type Attack } from '../data/threatData'

type CountryStats = {
  count: number
  latestType: string
  latestTimestamp: string
}

type HoverInfo = {
  country: string
  region: string
  attackCount: number
  attackType: string
  timestamp: string
  x: number
  y: number
}

type ThreatGlobeProps = {
  attacks: Attack[]
  activeTypes: Record<string, boolean>
  countryStats: Record<string, CountryStats>
  onSelectAttack: (attack: Attack) => void
  onHover: (info: HoverInfo | null) => void
}

const radius = 1

const latLonToVector = (lat: number, lon: number, scale = 1) => {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lon + 180) * (Math.PI / 180)
  const x = -(scale * Math.sin(phi) * Math.cos(theta))
  const z = scale * Math.sin(phi) * Math.sin(theta)
  const y = scale * Math.cos(phi)
  return new THREE.Vector3(x, y, z)
}

const createCurve = (start: THREE.Vector3, end: THREE.Vector3) => {
  const mid = start.clone().add(end).multiplyScalar(0.5)
  mid.setLength(radius * 1.45)
  return new THREE.CatmullRomCurve3([start, mid, end])
}

const pointInPolygon = (lon: number, lat: number, polygon: [number, number][]) => {
  let inside = false
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const [xi, yi] = polygon[i]
    const [xj, yj] = polygon[j]
    const intersect =
      yi > lat !== yj > lat &&
      lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi
    if (intersect) inside = !inside
  }
  return inside
}

const createDottedMapTexture = () => {
  const canvas = document.createElement('canvas')
  canvas.width = 1024
  canvas.height = 512
  const ctx = canvas.getContext('2d')
  if (!ctx) return null

  const continents: [number, number][][] = [
    [
      [-17, 37],
      [10, 37],
      [35, 35],
      [50, 25],
      [43, -35],
      [10, -35],
      [-5, -5],
    ], // Africa
    [
      [-10, 70],
      [10, 70],
      [40, 60],
      [35, 45],
      [0, 45],
      [-10, 55],
    ], // Europe
    [
      [40, 55],
      [110, 55],
      [150, 35],
      [120, 5],
      [70, 5],
      [45, 30],
    ], // Asia
    [
      [-170, 72],
      [-60, 72],
      [-50, 40],
      [-90, 10],
      [-140, 10],
      [-170, 40],
    ], // North America
    [
      [-85, 12],
      [-35, 12],
      [-35, -55],
      [-70, -55],
      [-85, -10],
    ], // South America
    [
      [110, -10],
      [155, -10],
      [155, -45],
      [120, -45],
    ], // Australia
  ]

  const isLand = (lon: number, lat: number) =>
    continents.some((poly) => pointInPolygon(lon, lat, poly))

  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = 'rgba(102, 255, 102, 0.95)'

  const step = 5
  for (let y = 0; y < canvas.height; y += step) {
    for (let x = 0; x < canvas.width; x += step) {
      const lon = (x / canvas.width) * 360 - 180
      const lat = 90 - (y / canvas.height) * 180
      if (!isLand(lon, lat)) continue
      const jitterX = x + (Math.random() * 2 - 1)
      const jitterY = y + (Math.random() * 2 - 1)
      ctx.beginPath()
      ctx.arc(jitterX, jitterY, 1.1, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  // Add extra density to Africa to make it more visible.
  const africa = continents[0]
  for (let y = 0; y < canvas.height; y += 4) {
    for (let x = 0; x < canvas.width; x += 4) {
      const lon = (x / canvas.width) * 360 - 180
      const lat = 90 - (y / canvas.height) * 180
      if (!pointInPolygon(lon, lat, africa)) continue
      const jitterX = x + (Math.random() * 2 - 1)
      const jitterY = y + (Math.random() * 2 - 1)
      ctx.beginPath()
      ctx.arc(jitterX, jitterY, 1.2, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.needsUpdate = true
  return texture
}

export default function ThreatGlobe({
  attacks,
  activeTypes,
  countryStats,
  onSelectAttack,
  onHover,
}: ThreatGlobeProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const globeRef = useRef<THREE.Group | null>(null)
  const linesRef = useRef<THREE.Group | null>(null)
  const nodesRef = useRef<THREE.Mesh[]>([])
  const sourceNodesRef = useRef<Set<string>>(new Set())
  const animationRef = useRef<number | null>(null)
  const pausedRef = useRef(false)
  const statsRef = useRef(countryStats)

  const activeAttacks = useMemo(
    () => attacks.filter((attack) => activeTypes[attack.attack_type]),
    [attacks, activeTypes]
  )

  useEffect(() => {
    statsRef.current = countryStats
  }, [countryStats])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    sceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    )
    camera.position.set(0, 0, 3.8)
    cameraRef.current = camera

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    rendererRef.current = renderer
    container.appendChild(renderer.domElement)

    const ambient = new THREE.AmbientLight('#46ff6b', 0.08)
    scene.add(ambient)
    const directional = new THREE.DirectionalLight('#6bff9a', 0.18)
    directional.position.set(3, 2, 3)
    scene.add(directional)
    const point = new THREE.PointLight('#6bff5b', 0.45, 8)
    point.position.set(-2.5, 1.5, 2.5)
    scene.add(point)

    const globeGroup = new THREE.Group()
    globeRef.current = globeGroup
    globeGroup.rotation.y = -0.8
    globeGroup.scale.set(0.95, 0.95, 0.95)
    scene.add(globeGroup)

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(radius, 64, 64),
      new THREE.MeshStandardMaterial({
        color: '#010202',
        emissive: '#050b07',
        metalness: 0.05,
        roughness: 0.9,
      })
    )
    globeGroup.add(sphere)

    const dottedTexture = createDottedMapTexture()
    if (dottedTexture) {
      const dots = new THREE.Mesh(
        new THREE.SphereGeometry(radius * 1.003, 64, 64),
        new THREE.MeshBasicMaterial({
          map: dottedTexture,
          transparent: true,
          opacity: 0.92,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        })
      )
      globeGroup.add(dots)
    }

    const rimGlow = new THREE.Mesh(
      new THREE.SphereGeometry(radius * 1.06, 64, 64),
      new THREE.MeshBasicMaterial({
        color: '#6bff5b',
        transparent: true,
        opacity: 0.28,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
      })
    )
    globeGroup.add(rimGlow)

    const wireframe = new THREE.Mesh(
      new THREE.SphereGeometry(radius * 1.01, 48, 48),
      new THREE.MeshBasicMaterial({
        color: '#0a1c12',
        wireframe: true,
        transparent: true,
        opacity: 0.08,
      })
    )
    globeGroup.add(wireframe)

    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(radius * 1.03, 64, 64),
      new THREE.MeshBasicMaterial({
        color: '#5cff5c',
        transparent: true,
        opacity: 0.08,
      })
    )
    globeGroup.add(atmosphere)

    const nodeGroup = new THREE.Group()
    scene.add(nodeGroup)
    nodesRef.current = []
    const nodeGeometry = new THREE.SphereGeometry(0.03, 10, 10)
    countries.forEach((country) => {
      const node = new THREE.Mesh(
        nodeGeometry,
        new THREE.MeshBasicMaterial({ color: '#9bff5a' })
      )
      node.position.copy(latLonToVector(country.lat, country.lon, radius * 1.01))
      node.userData = { country }
      nodeGroup.add(node)
      nodesRef.current.push(node)
    })

    const lineGroup = new THREE.Group()
    linesRef.current = lineGroup
    scene.add(lineGroup)

    const raycaster = new THREE.Raycaster()
    const pointer = new THREE.Vector2()

    const handlePointerMove = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect()
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
      raycaster.setFromCamera(pointer, camera)
      const intersects = raycaster.intersectObjects(nodesRef.current, false)
      if (intersects.length === 0) {
        onHover(null)
        return
      }
      const hit = intersects[0]
      const { country } = hit.object.userData as { country: (typeof countries)[number] }
      const stats = statsRef.current[country.name]
      const projected = hit.object.position.clone().project(camera)
      const x = (projected.x * 0.5 + 0.5) * rect.width
      const y = (-projected.y * 0.5 + 0.5) * rect.height
      onHover({
        country: country.name,
        region: country.region,
        attackCount: stats?.count ?? 0,
        attackType: stats?.latestType ?? 'Malware',
        timestamp: stats?.latestTimestamp ?? '—',
        x,
        y,
      })
    }

    const handleClick = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect()
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
      raycaster.setFromCamera(pointer, camera)
      const intersects = raycaster.intersectObjects(lineGroup.children, true)
      if (intersects.length === 0) return
      const hit = intersects[0]
      const attack = hit.object.userData.attack as Attack | undefined
      if (attack) {
        onSelectAttack(attack)
      }
    }

    const handlePointerLeave = () => onHover(null)
    renderer.domElement.addEventListener('mousemove', handlePointerMove)
    renderer.domElement.addEventListener('mouseleave', handlePointerLeave)
    renderer.domElement.addEventListener('click', handleClick)

    const handleResize = () => {
      if (!container || !rendererRef.current || !cameraRef.current) return
      const width = container.clientWidth
      const height = container.clientHeight
      rendererRef.current.setSize(width, height)
      cameraRef.current.aspect = width / height
      cameraRef.current.updateProjectionMatrix()
    }
    window.addEventListener('resize', handleResize)

    const clock = new THREE.Clock()
    const animate = () => {
      const delta = clock.getDelta()
      if (globeRef.current && !pausedRef.current) {
        globeRef.current.rotation.y += delta * 0.338
      }
      nodesRef.current.forEach((node) => {
        const countryName = (node.userData as { country: (typeof countries)[number] })
          .country.name
        if (sourceNodesRef.current.has(countryName)) {
          const pulse = 1 + Math.sin(Date.now() * 0.004) * 0.15
          node.scale.setScalar(pulse)
        } else {
          node.scale.setScalar(1)
        }
      })
      linesRef.current?.children.forEach((line: THREE.Object3D) => {
        if (!(line instanceof THREE.Line)) return
        const material = line.material as THREE.LineDashedMaterial & {
          dashOffset?: number
        }
        if (typeof material.dashOffset === 'number') {
          material.dashOffset -= delta * 0.6
        }
      })
      renderer.render(scene, camera)
      animationRef.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      renderer.domElement.removeEventListener('mousemove', handlePointerMove)
      renderer.domElement.removeEventListener('click', handleClick)
      renderer.domElement.removeEventListener('mouseleave', handlePointerLeave)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      renderer.dispose()
      container.removeChild(renderer.domElement)
    }
  }, [onHover, onSelectAttack])

  useEffect(() => {
    const lineGroup = linesRef.current
    if (!lineGroup) return
    lineGroup.children.forEach((line: THREE.Object3D) => {
      const geometry = (line as THREE.Line).geometry
      const material = (line as THREE.Line).material as THREE.Material
      geometry.dispose()
      material.dispose()
    })
    lineGroup.clear()

    sourceNodesRef.current = new Set(
      activeAttacks.map((attack) => attack.source_country)
    )

    activeAttacks.forEach((attack) => {
      const source = countries.find((node) => node.name === attack.source_country)
      const target = countries.find((node) => node.name === attack.target_country)
      if (!source || !target) return
      const start = latLonToVector(source.lat, source.lon, radius * 1.01)
      const end = latLonToVector(target.lat, target.lon, radius * 1.01)
      const curve = createCurve(start, end)
      const points = curve.getPoints(64)
      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      const material = new THREE.LineDashedMaterial({
        color: attackTypeColors[attack.attack_type],
        dashSize: 0.08,
        gapSize: 0.06,
        transparent: true,
        opacity: 0.9,
      })
      const line = new THREE.Line(geometry, material)
      line.computeLineDistances()
      line.userData = { attack }
      lineGroup.add(line)
    })
  }, [activeAttacks])

  return (
    <div
      ref={containerRef}
      className="relative h-[500px] w-[500px] max-w-full aspect-square"
    />
  )
}

