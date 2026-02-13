import { useEffect, useRef } from 'react'
import createGlobe from 'cobe'

import type { Attack } from '../data/threatData'

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

export default function ThreatGlobe({ onHover }: ThreatGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null)
  const phiRef = useRef(0)
  const pointerRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const setupGlobe = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(rect.width * dpr)
      canvas.height = Math.round(rect.height * dpr)

      const globe = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width: canvas.width,
        height: canvas.height,
        phi: 0,
        theta: 0,
        // dark: 1,
        // diffuse: 1.05,

        dark: 5,
        diffuse: 1.1,
        mapBrightness: 10,

        scale: 0.8,
        mapSamples: 24000,
        // mapBrightness: 9.0,
        // baseColor: [0.01, 0.03, 0.01],
        // markerColor: [0.62, 1, 0.18],
        // glowColor: [0.14, 0.45, 0.08],

        baseColor: [0.01, 0.03, 0.01],
        markerColor: [0.85, 1.0, 0.32],
        glowColor: [0.22, 0.65, 0.18],

        offset: [0, 1],
        markers: [],
        onRender: (state) => {
          phiRef.current += 0.0105
          const pointer = pointerRef.current
          pointer.x += (pointer.targetX - pointer.x) * 0.08
          pointer.y += (pointer.targetY - pointer.y) * 0.08
          state.phi = phiRef.current + pointer.x
          state.theta = pointer.y
          state.mapBrightness = 10.8
        },
      })

      return globe
    }

    globeRef.current = setupGlobe()

    const handleResize = () => {
      globeRef.current?.destroy()
      globeRef.current = setupGlobe()
    }

    const handleMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2
      pointerRef.current.targetX = x * 0.2
      pointerRef.current.targetY = -y * 0.15
    }

    const handleLeave = () => {
      pointerRef.current.targetX = 0
      pointerRef.current.targetY = 0
      onHover(null)
    }

    window.addEventListener('resize', handleResize)
    canvas.addEventListener('mousemove', handleMove)
    canvas.addEventListener('mouseleave', handleLeave)

    return () => {
      window.removeEventListener('resize', handleResize)
      canvas.removeEventListener('mousemove', handleMove)
      canvas.removeEventListener('mouseleave', handleLeave)
      globeRef.current?.destroy()
    }
  }, [onHover])

  return (
    <div className="globe-canvas-wrap">
      <canvas
        ref={canvasRef}
        className="h-full w-full cursor-pointer"
        style={{ background: 'transparent' }}
      />
    </div>
  )
}
