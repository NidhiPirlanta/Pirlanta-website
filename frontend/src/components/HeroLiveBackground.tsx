import ConstellationBackground from './ConstellationBackground'

type HeroLiveBackgroundProps = {
  className?: string
}

export default function HeroLiveBackground({ className }: HeroLiveBackgroundProps) {
  const classes = ['home-hero-constellation', className].filter(Boolean).join(' ')

  return (
    <>
      <ConstellationBackground
        className={classes}
        count={110}
        connectionDistance={170}
        nodeColor="rgba(124, 193, 61, 0.85)"
        lineColor="rgba(124, 193, 61, 0.1)"
        nodeSize={2.1}
        mouseRadius={180}
        glow
      />
      <div className="hero-orb hero-orb--left" aria-hidden="true" />
      <div className="hero-orb hero-orb--right" aria-hidden="true" />
    </>
  )
}
