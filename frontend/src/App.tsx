import { Suspense, lazy, useEffect, useMemo, useState } from 'react'

import { makeRandomAttack, seedAttacks, type Attack, type AttackType } from './data/threatData'

const ThreatGlobe = lazy(() => import('./components/ThreatGlobe'))

type HoverInfo = {
  country: string
  region: string
  attackCount: number
  attackType: string
  timestamp: string
  x: number
  y: number
}

type HeaderProps = {
  scrolled: boolean
}

function Header({ scrolled }: HeaderProps) {
  return (
    <header
      className={`fixed left-0 right-0 top-0 z-20 transition ${
        scrolled
          ? 'bg-white/95 backdrop-blur border-b border-emerald-100'
          : 'bg-white/90'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <img src="/pir-logo.png" alt="Pirlanta" className="h-10 w-auto" />
        </div>
        <nav className="hidden items-center gap-3 text-sm text-slate-600 md:flex">
          <a className="nav-item nav-item--active" href="/">
            Home
          </a>
          <a className="nav-item" href="#">
            About Us
          </a>
          <a className="nav-item" href="#">
            Threat Map
          </a>
          <div className="group relative">
            <button className="nav-item inline-flex items-center gap-1" type="button">
              Services <span className="text-xs">▾</span>
            </button>
            <div className="nav-dropdown">
              <a className="dropdown-item block" href="/services/cybersecurity">
                <p className="font-semibold text-slate-900">Cybersecurity</p>
                <p className="text-[11px] text-slate-500">
                  MDR, compliance, cloud security & threat protection
                </p>
              </a>
              <div className="dropdown-divider">
                <p className="font-semibold text-slate-900">Data Centre</p>
                <p className="text-[11px] text-slate-500">
                  Cloud migration, modernization & backup solutions
                </p>
              </div>
              <div className="dropdown-divider">
                <p className="font-semibold text-slate-900">Secure Network</p>
                <p className="text-[11px] text-slate-500">
                  NAC, SD-WAN, Zero Trust & connectivity
                </p>
              </div>
              <div className="dropdown-divider">
                <p className="font-semibold text-slate-900">AI Code Audits</p>
                <p className="text-[11px] text-slate-500">
                  Security for AI-generated & vibe-coded apps
                </p>
              </div>
            </div>
          </div>
          <div className="group relative">
            <button className="nav-item inline-flex items-center gap-1" type="button">
              Partners <span className="text-xs">▾</span>
            </button>
            <div className="nav-dropdown nav-dropdown--compact">
              <div className="dropdown-item">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Partner Ecosystem</p>
                  <p className="text-[11px] text-slate-500">Our growing partner network</p>
                </div>
              </div>
              {['Networking', 'Security', 'Apple'].map((item) => (
                <div key={item} className="dropdown-item dropdown-item--row">
                  <span className="text-sm text-slate-700">{item}</span>
                  <span className="text-slate-300">›</span>
                </div>
              ))}
            </div>
          </div>
          <a className="nav-item" href="#">
            Contact Us
          </a>
        </nav>
        <button className="rounded-full bg-emerald-700 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-600/40 transition hover:bg-emerald-600">
          Get Started
        </button>
      </div>
    </header>
  )
}

function CybersecurityPage() {
  return (
    <main className="relative overflow-hidden pt-24">
      <section className="hero-section relative flex items-center">
        <div className="hero-network" aria-hidden="true" />
        <div className="hero-orb hero-orb--left" aria-hidden="true" />
        <div className="hero-orb hero-orb--right" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <div className="service-icon-box">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1 className="mt-6 text-4xl font-semibold text-white md:text-5xl">
              Cybersecurity
            </h1>
            <p className="mt-3 text-lg text-emerald-200">
              AI-Driven Threat Detection. Expert-Led Response. Measurable Outcomes.
            </p>
            <p className="mt-4 text-sm text-emerald-100/70 md:text-base">
              AI-powered security operations with 24x7 SOC, automated threat hunting, and
              compliance alignment for regulated organizations.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-emerald-700 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-600/40 transition hover:bg-emerald-600">
                Get Started →
              </button>
              <button className="rounded-full border border-emerald-200/40 px-7 py-3.5 text-base font-semibold text-emerald-100 transition hover:border-emerald-200">
                View Capabilities
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="hero-wave" aria-hidden="true" />
    </main>
  )
}

export default function App() {
  const [attacks, setAttacks] = useState<Attack[]>(seedAttacks)
  const [activeTypes] = useState<Record<AttackType, boolean>>({
    Malware: true,
    Phishing: true,
    Exploit: true,
    DDoS: true,
    Ransomware: true,
    Botnet: true,
  })
  const [hoverInfo, setHoverInfo] = useState<HoverInfo | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [threatsBlocked, setThreatsBlocked] = useState(15997)
  const [systemsCount, setSystemsCount] = useState('156+')
  const [monitorsCount, setMonitorsCount] = useState('24/7')
  const [useSimulation, setUseSimulation] = useState(true)
  const [threatDetectPercent, setThreatDetectPercent] = useState(1)
  const reasonOptions = [
    {
      key: 'integration',
      title: 'Integration-First',
      copy: 'Seamless cross-platform integration.',
      detail:
        "We don't just deploy tools; we weave them into your existing ecosystem to ensure unified visibility and control.",
    },
    {
      key: 'senior',
      title: 'Senior-Led',
      copy: 'Expert-led engagements, always.',
      detail:
        'Every project is led by a principal architect with 10+ years of experience. You get the experts you meet during the sales process.',
    },
    {
      key: 'ai',
      title: 'AI-Augmented',
      copy: 'AI tools amplify our experts.',
      detail:
        'We leverage Cisco XDR, Fortinet FortiAI, and leading AI platforms to accelerate detection, automate response, and deliver measurable outcomes.',
    },
    {
      key: 'compliance',
      title: 'Compliance-Ready',
      copy: 'Audit-ready frameworks.',
      detail:
        'Architectures aligned with NIST, ISO, and PCI-DSS to keep your infrastructure secure, compliant, and audit-ready.',
    },
  ]
  const [activeReasonKey, setActiveReasonKey] = useState(reasonOptions[0].key)
  const faqItems = [
    {
      question:
        'What cybersecurity, network security and cloud services does Pirlanta provide in India?',
      answer:
        'We provide 24x7 cybersecurity operations, secure network services (SD-WAN, ZTNA, SASE) and data-centre/cloud modernisation for enterprises across India.',
    },
    {
      question:
        'Are your managed security services suitable for Bengaluru and pan-India enterprises?',
      answer:
        'Yes, we are Bengaluru-based with India-wide delivery capabilities, supporting hybrid estates across on-premises, Microsoft 365, Azure, and multi-cloud environments.',
    },
    {
      question: 'Do you offer managed detection and response (MDR) and incident response (IR)?',
      answer:
        'Yes, our MDR services include detection engineering, threat hunting and automation. Our IR capabilities cover triage, containment and recovery with documented playbooks.',
    },
    {
      question: 'Can you help with Zero Trust consulting and secure remote access (ZTNA)?',
      answer:
        'Yes, we design Zero Trust architectures and implement ZTNA to replace legacy VPN solutions with identity-aware, policy-driven access controls.',
    },
    {
      question: 'Do you provide SIEM as a Service or SOC as a Service (SOCaaS)?',
      answer:
        'Yes, we offer high-signal analytics, response workflows and 24x7 monitoring with customized playbooks and defined SLAs.',
    },
    {
      question: 'Do you support Microsoft 365 and Azure security hardening?',
      answer:
        'Yes, we secure Microsoft 365 environments and harden Azure deployments with continuous monitoring and incident response readiness.',
    },
    {
      question: 'Can you design SD-WAN and SASE for distributed teams?',
      answer:
        'Yes, we deliver SD-WAN rollouts with full observability plus SASE implementations for unified cloud application access and security.',
    },
    {
      question: 'Do you deliver Disaster Recovery as a Service (DRaaS)?',
      answer:
        'Yes, our DRaaS includes backup solutions, DR testing and runbooks aligned to your specific RPO/RTO targets.',
    },
    {
      question: 'How do you measure outcomes and reduce MTTD/MTTR?',
      answer:
        'We track detection coverage and response times with executive reporting dashboards and continuous tuning based on metrics.',
    },
    {
      question: 'How do we get started with Pirlanta?',
      answer:
        'Begin with a short assessment call. We align scope, timelines and outcomes, then execute a phased implementation plan tailored to your needs.',
    },
  ]
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  useEffect(() => {
    const createId = () =>
      typeof crypto !== 'undefined' && 'randomUUID' in crypto
        ? crypto.randomUUID()
        : `atk-${Math.random().toString(16).slice(2)}`

    const mapCountry = (name: string) => {
      const mapping: Record<string, string> = {
        USA: 'United States',
        UK: 'United Kingdom',
        UAE: 'UAE',
      }
      return mapping[name] ?? name
    }

    const ws = new WebSocket('ws://localhost:9000/ws/threats')
    ws.onopen = () => setUseSimulation(false)
    ws.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data)
        if (message.event === 'stats:update') {
          const stats = message.data as Record<string, number | string>
          const total = Object.entries(stats)
            .filter(([key]) => ['malware', 'phishing', 'exploit', 'ransomware', 'botnet', 'ddos'].includes(key))
            .reduce((sum, [, value]) => sum + Number(value), 0)
          setThreatsBlocked(total)
          if (stats.systems) {
            setSystemsCount(`${stats.systems}+`)
          }
          if (stats.monitors) {
            setMonitorsCount(String(stats.monitors))
          }
          return
        }
        if (message.event !== 'threat:new') return
        const data = message.data as {
          origin: string
          target: string
          type: AttackType
          severity: string
          timestamp: string
        }
        const nextAttack: Attack = {
          id: createId(),
          source_country: mapCountry(data.origin),
          target_country: mapCountry(data.target),
          source_ip: '0.0.0.0',
          target_ip: '0.0.0.0',
          attack_type: data.type,
          severity: data.severity as Attack['severity'],
          timestamp: data.timestamp,
        }
        setAttacks((prev) => [nextAttack, ...prev].slice(0, 14))
        setThreatsBlocked((prev) => prev + 1)
      } catch {
        // Ignore malformed websocket payloads.
      }
    }
    ws.onerror = () => setUseSimulation(true)
    ws.onclose = () => setUseSimulation(true)
    return () => ws.close()
  }, [])

  useEffect(() => {
    if (!useSimulation) return
    const interval = setInterval(() => {
      const nextAttack = makeRandomAttack()
      setAttacks((prev) => [nextAttack, ...prev].slice(0, 14))
      setThreatsBlocked((prev) => prev + 1)
    }, 2500)
    return () => clearInterval(interval)
  }, [useSimulation])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`)
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`)
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  useEffect(() => {
    let rafId = 0
    const duration = 1200
    const start = performance.now()
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const nextValue = Math.max(1, Math.round(1 + progress * (85 - 1)))
      setThreatDetectPercent(nextValue)
      if (progress < 1) {
        rafId = requestAnimationFrame(animate)
      }
    }
    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [])

  const filteredAttacks = useMemo(
    () => attacks.filter((attack) => activeTypes[attack.attack_type]),
    [attacks, activeTypes]
  )

  const countryStats = useMemo(() => {
    const stats: Record<string, { count: number; latestType: string; latestTimestamp: string }> =
      {}
    attacks.forEach((attack) => {
      const key = attack.source_country
      if (!stats[key]) {
        stats[key] = {
          count: 0,
          latestType: attack.attack_type,
          latestTimestamp: attack.timestamp,
        }
      }
      stats[key].count += 1
      stats[key].latestType = attack.attack_type
      stats[key].latestTimestamp = attack.timestamp
    })
    return stats
  }, [attacks])

  const isCybersecurity =
    typeof window !== 'undefined' && window.location.pathname === '/services/cybersecurity'

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div
        className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden text-transparent"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(400px circle at var(--cursor-x, -1000px) var(--cursor-y, -1000px), rgba(39, 102, 0, 0.15), transparent 40%)',
          opacity: 1,
          transition: 'opacity 0.3s',
          willChange: 'background',
        }}
      />
      <div
        className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden text-transparent"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(400px circle at var(--cursor-x, -1000px) var(--cursor-y, -1000px), rgba(39, 102, 0, 0.15), transparent 40%)',
          opacity: 1,
          transition: 'opacity 0.3s',
          willChange: 'background',
        }}
      />
      <Header scrolled={scrolled} />
      {isCybersecurity ? (
        <CybersecurityPage />
      ) : (
        <main className="relative overflow-hidden pt-24">
        <section className="hero-section relative flex items-center">
          <div className="hero-network" aria-hidden="true" />
          <div className="hero-orb hero-orb--left" aria-hidden="true" />
          <div className="hero-orb hero-orb--right" aria-hidden="true" />
          <div
            className="hero-content mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[1.1fr_1fr] lg:items-center"
            style={{ padding: '0 24px 14rem' }}
          >
            <div>
            <div className="flex flex-wrap gap-3">
              <span className="badge-pill">
                <span className="badge-dot" aria-hidden="true" />
                48+ Years Experience
              </span>
              <span className="badge-pill">
                <span className="badge-sparkle" aria-hidden="true">✦</span>
                AI-Enhanced Operations
              </span>
            </div>
            <h1 className="mt-6 inline-flex flex-nowrap items-baseline gap-2 whitespace-nowrap text-5xl font-semibold leading-tight text-white md:text-6xl">
              <span className="text-white">Expert-Led.</span>
              <span className="ai-accent"> AI-Powered.</span>
            </h1>
            <p className="mt-4 text-xl text-emerald-100">
              Cybersecurity Services for the AI Era
            </p>
            <p className="mt-4 max-w-xl text-base text-emerald-100/70 md:text-lg">
              AI-driven threat detection, expert implementation, and measurable outcomes.
              Powered by Cisco, Fortinet, and industry-leading AI platforms.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="hero-cta">
                Get Started →
              </button>
              <button className="hero-cta-secondary">
                Learn More
              </button>
            </div>
          </div>

            <div className="relative">
            <div className="hidden md:block">
              <div className="globe-shell">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] font-semibold tracking-[0.3em] text-emerald-300">
                  MITIGATED
                </div>
                <div className="globe-tag globe-tag--right">DETECTED</div>
                <div className="globe-tag globe-tag--left">BLOCKED</div>
                <div className="globe-rings" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="absolute inset-0 pointer-events-none z-[15]">
                  <div
                    className="absolute flex items-center gap-1 animate-alert-pop"
                    style={{ left: '91.9201%', top: '33.6384%', transform: 'translate(-50%, -50%)' }}
                  >
                    <div className="alert-dot" />
                    <span className="alert-label">BLOCKED</span>
                  </div>
                  <div
                    className="absolute flex items-center gap-1 animate-alert-pop"
                    style={{ left: '6.60424%', top: '61.9083%', transform: 'translate(-50%, -50%)' }}
                  >
                    <div className="alert-dot" />
                    <span className="alert-label">MITIGATED</span>
                  </div>
                </div>
                <Suspense fallback={<div className="h-[360px] w-full rounded-2xl bg-slate-900/40" />}>
                  <ThreatGlobe
                    attacks={attacks}
                    activeTypes={activeTypes}
                    countryStats={countryStats}
                    onSelectAttack={() => undefined}
                    onHover={setHoverInfo}
                  />
                </Suspense>
                {hoverInfo && (
                  <div
                    className="absolute z-10 rounded-xl border border-emerald-500/40 bg-slate-950/90 px-3 py-2 text-xs text-slate-200 shadow-lg"
                    style={{ left: hoverInfo.x, top: hoverInfo.y }}
                  >
                    <p className="text-sm font-semibold text-white">{hoverInfo.country}</p>
                    <p className="text-[11px] text-emerald-200/70">{hoverInfo.region}</p>
                    <div className="mt-2 flex flex-col gap-1 text-[11px]">
                      <span>Attacks: {hoverInfo.attackCount}</span>
                      <span>Type: {hoverInfo.attackType}</span>
                      <span>{hoverInfo.timestamp}</span>
                    </div>
                  </div>
                )}
                <div className="mt-6 flex gap-3">
                  {[
                    { label: 'Threats Blocked', value: threatsBlocked.toLocaleString(), icon: 'shield' },
                    { label: 'Systems', value: systemsCount, icon: 'activity' },
                    { label: 'Monitors', value: monitorsCount, icon: 'eye' },
                  ].map((stat) => (
                    <div key={stat.label} className="stat-card">
                      <div className="stat-header">
                        <span className="stat-icon" aria-hidden="true">
                          {stat.icon === 'shield' && (
                            <svg viewBox="0 0 24 24" fill="none">
                              <path
                                d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                          {stat.icon === 'activity' && (
                            <svg viewBox="0 0 24 24" fill="none">
                              <path
                                d="M22 12h-2.5a2 2 0 0 0-1.9 1.4l-2.4 8.6-6-20-2.4 8.6A2 2 0 0 1 4.5 12H2"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                          {stat.icon === 'eye' && (
                            <svg viewBox="0 0 24 24" fill="none">
                              <path
                                d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                            </svg>
                          )}
                        </span>
                        <p className="stat-label">{stat.label}</p>
                      </div>
                      <p className="stat-value">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-emerald-500/20 bg-slate-950/70 p-6 md:hidden">
              <div className="globe-static" />
              <h3 className="mt-6 text-sm font-semibold text-white">Live Attack Feed</h3>
              <ul className="mt-3 space-y-2 text-xs text-emerald-100/70">
                {filteredAttacks.slice(0, 6).map((attack) => (
                  <li key={attack.id} className="flex items-center justify-between">
                    <span>{attack.attack_type}</span>
                    <span>{attack.timestamp.slice(11, 19)} UTC</span>
                  </li>
                ))}
              </ul>
            </div>
            </div>
          </div>
          <div className="hero-wave" aria-hidden="true">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
              className="hero-wave-svg"
            >
              <path d="M0,80 C240,120 480,120 720,100 960,80 1200,40 1440,60 L1440,0 L0,0 Z" />
            </svg>
          </div>
        </section>
        <section className="section-light">
          <div className="mx-auto max-w-7xl px-6 py-20 text-center">
            <span className="pill">
              <span className="pill-icon" aria-hidden="true">
                ✦
              </span>
              AI-ENHANCED SERVICES
            </span>
            <h2 className="mt-4 text-4xl font-semibold text-slate-900">Our Services</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-500 md:text-base">
              Three integrated pillars of IT excellence, amplified by AI and delivered with
              senior expertise.
            </p>
            <div className="mx-auto mt-12 grid gap-8 md:grid-cols-3">
              {[
                {
                  title: 'Cybersecurity',
                  description:
                    'AI-driven threat detection, MDR, and compliance for regulated enterprises.',
                  bullets: ['AI-Powered SOC', '95% Faster Response', 'Zero Trust Architecture'],
                  icon: 'shield',
                  href: '/services/cybersecurity',
                },
                {
                  title: 'Data Centre',
                  description:
                    'AI-optimized infrastructure, predictive scaling & intelligent DR.',
                  bullets: ['Smart Migration', 'Predictive Analytics', 'Automated Recovery'],
                  icon: 'database',
                },
                {
                  title: 'Secure Network',
                  description:
                    'AI-powered traffic analysis, self-healing networks & intelligent routing.',
                  bullets: ['Intelligent SD-WAN', 'AI Traffic Analysis', 'Adaptive Security'],
                  icon: 'network',
                },
              ].map((card) => (
                <div key={card.title} className="group relative h-full">
                  {card.href ? (
                    <a href={card.href} className="block h-full">
                      <div className="service-card-v2 text-left">
                        <div className="service-card-glow" aria-hidden="true" />
                        <div className="service-icon-box">
                          {card.icon === 'shield' && (
                            <svg viewBox="0 0 24 24" fill="none">
                              <path
                                d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                          {card.icon === 'database' && (
                            <svg viewBox="0 0 24 24" fill="none">
                              <ellipse cx="12" cy="5" rx="8" ry="3" stroke="currentColor" strokeWidth="2" />
                              <path
                                d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                              <path
                                d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            </svg>
                          )}
                          {card.icon === 'network' && (
                            <svg viewBox="0 0 24 24" fill="none">
                              <rect x="3" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
                              <rect x="15" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
                              <rect x="9" y="15" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
                              <path d="M6 9v3h12V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                              <path d="M12 12v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                          )}
                        </div>
                        <h3 className="service-title">{card.title}</h3>
                        <p className="service-copy">{card.description}</p>
                        <ul className="service-list">
                          {card.bullets.map((bullet) => (
                            <li key={bullet} className="service-list-item">
                              <svg viewBox="0 0 24 24" fill="none">
                                <path
                                  d="M9 18l6-6-6-6"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="service-link">
                          Explore Solution
                          <svg viewBox="0 0 24 24" fill="none">
                            <path
                              d="M5 12h14m-7-7 7 7-7 7"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="service-card-v2 text-left">
                      <div className="service-card-glow" aria-hidden="true" />
                      <div className="service-icon-box">
                        {card.icon === 'shield' && (
                          <svg viewBox="0 0 24 24" fill="none">
                            <path
                              d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                        {card.icon === 'database' && (
                          <svg viewBox="0 0 24 24" fill="none">
                            <ellipse cx="12" cy="5" rx="8" ry="3" stroke="currentColor" strokeWidth="2" />
                            <path
                              d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path
                              d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}
                        {card.icon === 'network' && (
                          <svg viewBox="0 0 24 24" fill="none">
                            <rect x="3" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
                            <rect x="15" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
                            <rect x="9" y="15" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
                            <path d="M6 9v3h12V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <path d="M12 12v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        )}
                      </div>
                      <h3 className="service-title">{card.title}</h3>
                      <p className="service-copy">{card.description}</p>
                      <ul className="service-list">
                        {card.bullets.map((bullet) => (
                          <li key={bullet} className="service-list-item">
                            <svg viewBox="0 0 24 24" fill="none">
                              <path
                                d="M9 18l6-6-6-6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="service-link">
                        Explore Solution
                        <svg viewBox="0 0 24 24" fill="none">
                          <path
                            d="M5 12h14m-7-7 7 7-7 7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section-light">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <span className="pill pill--tight">
                <span className="pill-icon" aria-hidden="true">
                  ✦
                </span>
                AI NATIVE TECHNOLOGY
              </span>
              <h2 className="mt-4 text-4xl font-semibold text-slate-900">
                AI-Powered Security
                <br />
                Operations
              </h2>
              <p className="mt-4 max-w-xl text-sm text-slate-500 md:text-base">
                We leverage AI tools from our CEM partners—Cisco XDR, Fortinet FortiAI, and
                more—combined with our implementation expertise to deliver faster detection,
                smarter automation, and measurable outcomes.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="stat-pill">
                  <span className="stat-pill-value">{threatDetectPercent}%</span>
                  <span className="stat-pill-label">Faster Threat Detection</span>
                </div>
                <div className="stat-pill">
                  <span className="stat-pill-value">24x7</span>
                  <span className="stat-pill-label">AI-Augmented Monitoring</span>
                </div>
              </div>
              <button className="mt-6 rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-600">
                Explore AI Capabilities →
              </button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: 'Cisco XDR & SecureX',
                  copy: 'Extended detection and response with automated threat correlation across endpoints, network, and cloud.',
                  icon: 'shield',
                },
                {
                  title: 'Fortinet FortiAI',
                  copy: 'Sub-second threat detection using deep neural networks trained on millions of malware samples.',
                  icon: 'bolt',
                },
                {
                  title: 'AI-Augmented SOC',
                  copy: '24x7 monitoring with AI-assisted alert triage, reducing analyst fatigue and improving accuracy.',
                  icon: 'eye',
                },
                {
                  title: 'Automated Threat Hunting',
                  copy: 'Proactive threat discovery using machine learning to detect anomalies and insider attacks.',
                  icon: 'radar',
                },
              ].map((item) => (
                <div key={item.title} className="ai-card">
                  <div className="ai-card-icon" aria-hidden="true">
                    {item.icon === 'shield' && (
                      <svg viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    {item.icon === 'bolt' && (
                      <svg viewBox="0 0 24 24" fill="none">
                        <path
                          d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    {item.icon === 'eye' && (
                      <svg viewBox="0 0 24 24" fill="none">
                        <path
                          d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    )}
                    {item.icon === 'radar' && (
                      <svg viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
                        <path
                          d="M12 4v8l5 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                      </svg>
                    )}
                  </div>
                  <h3 className="ai-card-title">{item.title}</h3>
                  <p className="ai-card-copy">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section-dark">
          <div className="hero-wave hero-wave--top hero-wave--dark" aria-hidden="true" />
          <div className="section-content mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <span className="pill pill--alert">
                <span className="pill-icon pill-icon--alert" aria-hidden="true">
                  ▲
                </span>
                New Threat Vector
              </span>
              <h2 className="mt-5 text-4xl font-semibold text-white">
                Secure Your AI-Built
                <br />
                Applications
              </h2>
              <p className="mt-4 text-sm text-emerald-100/70 md:text-base">
                48% of AI-generated code contains vulnerabilities
              </p>
              <p className="mt-3 max-w-xl text-sm text-emerald-100/60 md:text-base">
                Cursor, Copilot, and vibe-coded applications introduce security blind spots.
                Purpose-built audits catch what automated scanners miss.
              </p>
              <div className="mt-6 grid gap-3 text-sm text-emerald-100/80 md:grid-cols-2">
                {[
                  { label: 'SAST & DAST Analysis', icon: 'search' },
                  { label: 'Dependency Scanning', icon: 'layers' },
                  { label: 'AI Prompt Injection Testing', icon: 'shield' },
                  { label: 'Remediation Guidance', icon: 'spark' },
                ].map((item) => (
                  <div key={item.label} className="feature-row">
                    <span className="feature-icon" aria-hidden="true">
                      {item.icon === 'search' && (
                        <svg viewBox="0 0 24 24" fill="none">
                          <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2" />
                          <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      )}
                      {item.icon === 'layers' && (
                        <svg viewBox="0 0 24 24" fill="none">
                          <path d="M12 3l9 5-9 5-9-5 9-5z" stroke="currentColor" strokeWidth="2" />
                          <path d="M3 12l9 5 9-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M3 17l9 5 9-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      )}
                      {item.icon === 'shield' && (
                        <svg viewBox="0 0 24 24" fill="none">
                          <path
                            d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                      {item.icon === 'spark' && (
                        <svg viewBox="0 0 24 24" fill="none">
                          <path d="M12 2l2.2 5.4L20 9l-5.8 1.6L12 16l-2.2-5.4L4 9l5.8-1.6L12 2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                    {item.label}
                  </div>
                ))}
              </div>
              <button className="mt-7 rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-600">
                Get Your Code Audited →
              </button>
            </div>
            <div className="code-panel">
              <div className="code-panel-header">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
                <span className="code-title">security_audit.log</span>
              </div>
              <div className="code-panel-body">
                <p className="code-line code-line--alert">[CRITICAL] SQL Injection in user input handler</p>
                <p className="code-line code-line--warn">[WARNING] Hardcoded API key detected</p>
                <p className="code-line code-line--warn">[WARNING] Vulnerable dependency: lodash@4.17.15</p>
                <p className="code-line code-line--ok">[FIXED] XSS vulnerability patched</p>
                <p className="code-line code-line--ok">[FIXED] Authentication bypass resolved</p>
                <p className="code-line code-line--muted">Scan complete</p>
                <div className="code-footer">12 issues found, 8 fixed</div>
              </div>
            </div>
          </div>
          <div className="hero-wave" aria-hidden="true" />
        </section>
        <section className="section-dark section-dark--muted">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-white">Why Choose Pirlanta?</h2>
              <p className="mt-3 max-w-xl text-sm text-emerald-100/60 md:text-base">
                We bridge strategy and execution in converged Cybersecurity, Data Infrastructure,
                and Network environments to help you achieve measurable business outcomes.
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {reasonOptions.map((item) => (
                  <button
                    key={item.key}
                    className={`reason-card ${
                      item.key === activeReasonKey ? 'reason-card--active' : ''
                    }`}
                    onClick={() => setActiveReasonKey(item.key)}
                    type="button"
                  >
                    <div className="reason-icon" aria-hidden="true">
                      <span />
                    </div>
                    <h3 className="reason-title">{item.title}</h3>
                    <p className="reason-copy">{item.copy}</p>
                  </button>
                ))}
              </div>
              <button className="mt-6 rounded-full bg-emerald-700 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-600">
                About Our Approach
              </button>
            </div>
            {(() => {
              const active =
                reasonOptions.find((item) => item.key === activeReasonKey) ?? reasonOptions[0]
              const orbitLabels: Record<string, string[]> = {
                integration: ['Cloud', 'On-Prem', 'Hybrid', 'SOC'],
                senior: ['10+ yrs', 'Lead', 'Experts', 'Advisors'],
                ai: ['AI', 'XDR', 'SOAR', 'ML'],
                compliance: ['NIST', 'ISO', 'PCI-DSS', 'SOC2'],
              }
              const labels = orbitLabels[active.key] ?? []
              return (
                <div className="focus-card focus-card--interactive">
                  <div key={active.key} className="focus-graphic">
                    {active.key === 'integration' && (
                      <div className="focus-graph">
                        <svg className="focus-graph-lines" viewBox="0 0 200 200" aria-hidden="true">
                          <line x1="100" y1="100" x2="100" y2="30" />
                          <line x1="100" y1="100" x2="160" y2="70" />
                          <line x1="100" y1="100" x2="160" y2="130" />
                          <line x1="100" y1="100" x2="100" y2="170" />
                          <line x1="100" y1="100" x2="40" y2="130" />
                          <line x1="100" y1="100" x2="40" y2="70" />
                          <line x1="40" y1="70" x2="100" y2="30" />
                          <line x1="100" y1="30" x2="160" y2="70" />
                          <line x1="160" y1="70" x2="160" y2="130" />
                          <line x1="160" y1="130" x2="100" y2="170" />
                          <line x1="100" y1="170" x2="40" y2="130" />
                          <line x1="40" y1="130" x2="40" y2="70" />
                        </svg>
                        <span className="focus-node focus-node--center" />
                        <span className="focus-node focus-node--top" />
                        <span className="focus-node focus-node--top-right" />
                        <span className="focus-node focus-node--bottom-right" />
                        <span className="focus-node focus-node--bottom" />
                        <span className="focus-node focus-node--bottom-left" />
                        <span className="focus-node focus-node--top-left" />
                        <span className="focus-node focus-node--mid-top" />
                        <span className="focus-node focus-node--mid-bottom" />
                      </div>
                    )}
                    {active.key === 'senior' && (
                      <div className="focus-graphic-icon focus-graphic-icon--person">
                        <svg viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
                          <path
                            d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    )}
                    {active.key === 'ai' && (
                      <div className="focus-graphic-nodes">
                        {Array.from({ length: 12 }).map((_, idx) => (
                          <span key={idx} className="focus-node" />
                        ))}
                      </div>
                    )}
                    {active.key === 'compliance' && (
                      <div className="focus-graphic-icon focus-graphic-icon--shield">
                        <svg viewBox="0 0 24 24" fill="none">
                          <path
                            d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                    {active.key !== 'integration' && labels.length > 0 && (
                      <div className="orbit-group" aria-hidden="true">
                        {labels.map((label, index) => (
                          <div
                            key={label}
                            className="orbit-label"
                            style={
                              {
                                '--orbit-angle': `${index * (360 / labels.length)}deg`,
                              } as React.CSSProperties
                            }
                          >
                            {label}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <h3 className="focus-title">{active.title}</h3>
                  <p className="focus-copy">{active.detail}</p>
                </div>
              )
            })()}
          </div>
        </section>
        <section className="section-light">
          <div className="mx-auto max-w-7xl px-6 py-20 text-center">
            <h2 className="text-4xl font-semibold text-slate-900">Package Offerings</h2>
            <p className="mt-3 text-sm text-slate-500 md:text-base">
              Flexible engagement models designed to meet your security needs at every stage of
              growth.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  name: 'FLEX',
                  tag: 'Get Started',
                  copy:
                    'Everything you need to get started with cybersecurity and data center protection.',
                  bullets: ['Security Assessment', 'Vulnerability Scanning', 'Basic Monitoring', 'Incident Response Planning'],
                },
                {
                  name: 'CONNECT',
                  tag: 'Most Popular',
                  featured: true,
                  copy: 'Enhance visibility, prepare for cloud migration, and strengthen your posture.',
                  bullets: ['Everything in FLEX', '24x7 SOC Monitoring', 'Cloud Security Posture', 'Compliance Reporting', 'Quarterly Reviews'],
                },
                {
                  name: 'INTEGRATE',
                  tag: 'Enterprise',
                  copy:
                    'Full-stack cyber transformation with AI-driven defense and compliance.',
                  bullets: ['Everything in CONNECT', 'AI-Driven Detection', 'Custom Playbooks', 'Dedicated Account Team', 'Executive Reporting', 'DR as a Service'],
                },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className={`pricing-card ${plan.featured ? 'pricing-card--featured' : ''}`}
                >
                  <span className="pricing-tag">{plan.tag}</span>
                  <h3 className="pricing-name">{plan.name}</h3>
                  <p className="pricing-copy">{plan.copy}</p>
                  <ul className="pricing-list">
                    {plan.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <button className="pricing-button">Get Started</button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section-light">
          <div className="mx-auto max-w-7xl px-6 py-16 text-center">
            <h2 className="text-3xl font-semibold text-slate-900">Our Technology Partners</h2>
            <p className="mt-2 text-sm text-slate-500">
              We partner with industry leaders to deliver best-in-class solutions.
            </p>
            <div className="partners-row">
              <button className="partners-arrow" aria-label="Previous">
                ‹
              </button>
              {['Intel', 'Barracuda', 'Veeam', 'Apple', 'Jamf', 'AWS', 'Google'].map((logo) => (
                <span key={logo} className="partner-logo">
                  {logo}
                </span>
              ))}
              <button className="partners-arrow" aria-label="Next">
                ›
              </button>
            </div>
          </div>
        </section>
        <section className="section-light faq-section">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900">Frequently Asked Questions</h2>
              <p className="mt-3 text-sm text-slate-500 md:text-base">
                Get answers to common questions about our cybersecurity, network, and data centre
                services.
              </p>
              <button className="mt-6 rounded-full border border-emerald-200/60 px-5 py-2 text-sm font-semibold text-emerald-700">
                Still have questions? Contact Us
              </button>
            </div>
            <div className="faq-list">
              {faqItems.map((item, index) => {
                const isOpen = index === openFaqIndex
                return (
                  <button
                    key={item.question}
                    className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    type="button"
                  >
                    <span className="faq-question">{item.question}</span>
                    <span className="faq-chevron">{isOpen ? '▴' : '▾'}</span>
                    <span className="faq-answer">{item.answer}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </section>
        <section className="section-dark section-dark--cta">
          <div className="mx-auto max-w-7xl px-6 py-20 text-center">
            <h2 className="text-3xl font-semibold text-white">Ready to Secure Your Business?</h2>
            <p className="mt-3 text-sm text-emerald-100/70">
              Let's discuss how Pirlanta can help you achieve secure, scalable, and compliant IT
              infrastructure.
            </p>
            <button className="mt-6 rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-600">
              Start the Conversation →
            </button>
            <div className="footer-grid">
              <div className="footer-brand">
                <img src="/pir-logo.png" alt="Pirlanta" className="h-8 w-auto" />
                <p>
                  Secure. Data-Smart. Always Connected. Delivering integrated cybersecurity, data
                  infrastructure, and network solutions for enterprises across India.
                </p>
                <ul>
                  <li>+91 94296 93558</li>
                  <li>secure@pirlanta.in</li>
                  <li>90 Flex Coworks, 2nd Floor, 71, 15th Cross Road, J.P. Nagar, Bengaluru - 560078</li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
              </div>
              <div className="footer-column">
                <h4>Services</h4>
                <a href="/services/cybersecurity">Cybersecurity</a>
                <a href="#">Data Centre</a>
                <a href="#">Secure Network</a>
              </div>
              <div className="footer-column">
                <h4>Partners</h4>
                <a href="#">Cisco</a>
                <a href="#">Juniper Networks</a>
                <a href="#">RSA</a>
                <a href="#">CrowdStrike</a>
                <a href="#">Fortinet</a>
                <a href="#">Check Point</a>
                <a href="#">Forcepoint</a>
                <a href="#">Barracuda</a>
                <a href="#">Apple</a>
                <a href="#">Jamf</a>
              </div>
              <div className="footer-column">
                <h4>Legal</h4>
                <a href="#">Terms of Service</a>
                <a href="#">Refunds</a>
                <a href="#">Cancellation</a>
              </div>
            </div>
            <div className="footer-bottom">
              <span>© 2026 Pirlanta IT Solutions Pvt. Ltd. All rights reserved.</span>
              <div className="footer-socials">
                <span>✕</span>
                <span>in</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      )}
    </div>
  )
}

