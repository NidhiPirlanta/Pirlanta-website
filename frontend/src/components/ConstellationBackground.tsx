import { useEffect, useRef, type ReactNode } from 'react'

export interface ConstellationBackgroundProps {
  className?: string
  children?: ReactNode
  count?: number
  connectionDistance?: number
  nodeColor?: string
  lineColor?: string
  nodeSize?: number
  mouseRadius?: number
  glow?: boolean
}

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

const joinClasses = (...values: Array<string | undefined | false>) =>
  values.filter(Boolean).join(' ')

export default function ConstellationBackground({
  className,
  children,
  count = 80,
  connectionDistance = 150,
  nodeColor = 'rgba(124, 193, 61, 0.9)',
  lineColor = 'rgba(124, 193, 61, 0.18)',
  nodeSize = 2,
  mouseRadius = 100,
  glow = true,
}: ConstellationBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let animationId = 0
    let mouseX = -1000
    let mouseY = -1000
    let lastPointerTime = 0
    const idleTimeout = 500

    const createNode = (): Node => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      radius: Math.random() * nodeSize + nodeSize * 0.5,
    })

    let nodes: Node[] = []

    const resize = () => {
      const rect = container.getBoundingClientRect()
      width = rect.width
      height = rect.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      nodes = Array.from({ length: count }, createNode)
    }

    const handlePointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect()
      mouseX = event.clientX - rect.left
      mouseY = event.clientY - rect.top
      lastPointerTime = performance.now()
    }

    const handlePointerLeave = () => {
      lastPointerTime = 0
    }

    const animate = () => {
      const now = performance.now()
      const idle = !lastPointerTime || now - lastPointerTime > idleTimeout
      const idleX = width * (0.5 + 0.34 * Math.sin(now * 0.00055))
      const idleY = height * (0.45 + 0.28 * Math.cos(now * 0.00065))
      const targetX = idle ? idleX : mouseX
      const targetY = idle ? idleY : mouseY

      ctx.clearRect(0, 0, width, height)

      for (const node of nodes) {
        if (mouseRadius > 0) {
          const dx = node.x - targetX
          const dy = node.y - targetY
          const dist = Math.hypot(dx, dy)
          if (dist < mouseRadius && dist > 0) {
            const force = ((mouseRadius - dist) / mouseRadius) * (idle ? 0.015 : 0.045)
            node.vx += (dx / dist) * force
            node.vy += (dy / dist) * force
          }
        }

        node.x += node.vx
        node.y += node.vy
        node.vx *= 0.99
        node.vy *= 0.99

        node.vx += (Math.random() - 0.5) * 0.025
        node.vy += (Math.random() - 0.5) * 0.025

        if (node.x < 0 || node.x > width) {
          node.vx *= -1
          node.x = Math.max(0, Math.min(width, node.x))
        }
        if (node.y < 0 || node.y > height) {
          node.vy *= -1
          node.y = Math.max(0, Math.min(height, node.y))
        }
      }

      ctx.strokeStyle = lineColor
      ctx.lineWidth = 1
      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.hypot(dx, dy)
          if (dist < connectionDistance) {
            const opacity = 1 - dist / connectionDistance
            ctx.globalAlpha = opacity * 0.5
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      ctx.globalAlpha = 1
      for (const node of nodes) {
        if (glow) {
          ctx.save()
          ctx.globalAlpha = 0.35
          const gradient = ctx.createRadialGradient(
            node.x,
            node.y,
            0,
            node.x,
            node.y,
            node.radius * 4,
          )
          gradient.addColorStop(0, nodeColor)
          gradient.addColorStop(1, 'transparent')
          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()
        }

        ctx.fillStyle = nodeColor
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      animationId = window.requestAnimationFrame(animate)
    }

    resize()
    animationId = window.requestAnimationFrame(animate)

    const ro = new ResizeObserver(resize)
    ro.observe(container)

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerleave', handlePointerLeave)

    return () => {
      window.cancelAnimationFrame(animationId)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', handlePointerLeave)
      ro.disconnect()
    }
  }, [count, connectionDistance, nodeColor, lineColor, nodeSize, mouseRadius, glow])

  return (
    <div
      ref={containerRef}
      className={joinClasses('constellation-bg', className)}
      aria-hidden={children ? undefined : true}
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="constellation-glow" />
      <div className="constellation-vignette" />
      {children ? <div className="constellation-content relative z-10 h-full w-full">{children}</div> : null}
    </div>
  )
}
