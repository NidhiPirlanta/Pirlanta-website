import { useEffect, useRef } from 'react'

const GREEN = 'rgba(163, 230, 53, 0.6)'

const getParticleCount = (width: number, height: number) =>
  Math.max(120, Math.floor((width * height) / 12000))

type AntigravityBackgroundProps = {
  className?: string
}

export default function AntigravityBackground({ className }: AntigravityBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId = 0
    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)

    const pointer = { x: 0, y: 0, active: false }

    type Particle = {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      alpha: number
    }

    let particles: Particle[] = []

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = getParticleCount(width, height)
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        radius: Math.random() * 1.6 + 0.6,
        alpha: Math.random() * 0.45 + 0.25,
      }))
    }

    const step = () => {
      ctx.clearRect(0, 0, width, height)
      ctx.save()
      ctx.fillStyle = GREEN
      ctx.shadowColor = 'rgba(163, 230, 53, 0.35)'
      ctx.shadowBlur = 10

      for (const p of particles) {
        if (pointer.active) {
          const dx = p.x - pointer.x
          const dy = p.y - pointer.y
          const dist = Math.hypot(dx, dy)
          if (dist < 140 && dist > 0.1) {
            const force = (140 - dist) / 140
            p.vx += (dx / dist) * force * 0.25
            p.vy += (dy / dist) * force * 0.25
          }
        }

        p.vx *= 0.98
        p.vy *= 0.98
        p.x += p.vx
        p.y += p.vy

        if (p.x < -20) p.x = width + 20
        if (p.x > width + 20) p.x = -20
        if (p.y < -20) p.y = height + 20
        if (p.y > height + 20) p.y = -20

        ctx.globalAlpha = p.alpha
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.restore()
      animationId = requestAnimationFrame(step)
    }

    const handleMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = event.clientX - rect.left
      pointer.y = event.clientY - rect.top
      pointer.active = true
    }

    const handleLeave = () => {
      pointer.active = false
    }

    resize()
    step()

    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', handleMove)
    window.addEventListener('pointerleave', handleLeave)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', handleMove)
      window.removeEventListener('pointerleave', handleLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className={className ?? 'audit-antigravity'} aria-hidden="true" />
}
