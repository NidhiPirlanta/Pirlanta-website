import { useEffect, useRef, useState, type CSSProperties } from 'react'
import HeroLiveBackground from '../components/HeroLiveBackground'
import SiteFooter from '../components/SiteFooter'

export default function DataCentrePage() {
  const capabilitiesSectionRef = useRef<HTMLElement | null>(null)
  const [capabilitiesVisible, setCapabilitiesVisible] = useState(false)
  const benefitsSectionRef = useRef<HTMLElement | null>(null)
  const [benefitsVisible, setBenefitsVisible] = useState(false)

  const resultStats = [
    { value: '85%', label: 'Reduction in MTTD', sub: 'Predictive Ops' },
    { value: '95%', label: 'Faster Response', sub: 'Intelligent DR' },
    { value: '24×7', label: 'Monitoring', sub: 'Always On' },
    { value: '48+', label: 'Years Experience', sub: 'Combined Team' },
  ]

  const capabilityCards = [
    {
      title: 'AI-Optimized Cloud Migration',
      copy: 'Intelligent workload analysis and predictive scaling for seamless migration to hybrid clouds.',
      icon: 'cloud',
    },
    {
      title: 'Predictive Infrastructure',
      copy: 'AI-powered capacity planning and proactive resource optimization to reduce TCO.',
      icon: 'trend',
    },
    {
      title: 'Intelligent DR',
      copy: 'AI-driven failover decision and automated recovery testing with predictive alerts.',
      icon: 'pulse',
    },
    {
      title: 'Data Centre Modernisation',
      copy: 'Software-defined systems, AI orchestration, and energy-efficient infrastructure.',
      icon: 'server',
    },
    {
      title: 'Serverless & Container Platforms',
      copy: 'Elastic Kubernetes environments and event-driven architectures for modern apps.',
      icon: 'cube',
    },
    {
      title: 'Edge & Real-Time Processing',
      copy: 'Bring computing closer to endpoints for IoT and AI workloads.',
      icon: 'globe',
    },
    {
      title: 'Zero-Trust Security for Cloud',
      copy: 'Advanced encryption, identity management, and continuous verification.',
      icon: 'lock',
    },
  ]

  const benefitItems = [
    'AI-driven workload analysis optimizes migration paths and reduces risk.',
    'Predictive capacity planning eliminates over-provisioning and cuts costs.',
    'Intelligent DR with automated failover testing ensures RPO/RTO targets.',
    'AI-assisted compliance monitoring keeps operations audit-ready.',
    'Hybrid and multi-cloud orchestration with intelligent resource balancing.',
  ]

  const dataFaqs = [
    {
      question: 'Do you provide data centre modernization services in India?',
      answer:
        'Yes, we offer comprehensive modernization including assessment, wave-based migrations, landing zone setup, and governance with cost and performance optimization.',
    },
    {
      question: 'What is Disaster Recovery as a Service (DRaaS)?',
      answer:
        'Our DRaaS provides reliable backups, tested recovery procedures, and runbooks aligned to your RPO/RTO targets with documented evidence for compliance.',
    },
    {
      question: 'How do you reduce migration risk?',
      answer:
        'We use pre-flight checks, phased cutovers, and rollback plans with transparent communication throughout the migration process.',
    },
    {
      question: 'How do you ensure compliance and observability post-migration?',
      answer:
        'We implement guardrails, logging, and monitoring to keep operations compliant and transparent after go-live.',
    },
    {
      question: 'Do you support hybrid and multi-cloud environments?',
      answer:
        'Yes, we design secure interconnects, identity integration, and operations spanning on-premises and multiple cloud providers.',
    },
    {
      question: 'How do you control costs post-migration?',
      answer:
        'We optimize through right-sizing resources, setting budgets and alerts, and optimizing storage, networking, and disaster recovery tiers.',
    },
    {
      question: 'Do you provide DR testing and reporting?',
      answer:
        'Yes, we conduct scheduled DR tests that prove RPO/RTO capabilities and produce leadership-friendly evidence reports.',
    },
    {
      question: 'Do you provide team training for day-2 operations?',
      answer:
        'Yes, handover includes runbooks, dashboards, and processes with co-management available if needed.',
    },
    {
      question: 'What is the typical migration timeline?',
      answer:
        'Timeline varies by scope. We confirm waves and success criteria during the initial assessment phase.',
    },
    {
      question: 'How do we get started with a migration project?',
      answer:
        'Start with a readiness assessment where we scope workloads, identify dependencies, and prioritize the migration plan.',
    },
  ]

  const [openDataFaq, setOpenDataFaq] = useState<number | null>(null)

  useEffect(() => {
    const section = capabilitiesSectionRef.current
    if (!section) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setCapabilitiesVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCapabilitiesVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const section = benefitsSectionRef.current
    if (!section) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setBenefitsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBenefitsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <main className="cyber-page relative overflow-hidden pt-24">
      <section className="hero-section live-hero data-hero-section relative flex items-center">
        <HeroLiveBackground />
        <div className="data-hero-content mx-auto max-w-7xl px-6 py-24 relative z-10">
          <div className="data-hero-copy-wrap">
            <div className="data-hero-icon data-hero-fade data-hero-fade-1">
              <svg viewBox="0 0 24 24" fill="none">
                <ellipse cx="12" cy="5" rx="7" ry="3" stroke="currentColor" strokeWidth="2" />
                <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" stroke="currentColor" strokeWidth="2" />
                <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h1 className="data-hero-title data-hero-fade data-hero-fade-2">Data Centre</h1>
            <p className="data-hero-kicker data-hero-fade data-hero-fade-3">
              AI-Optimized Infrastructure. Predictive Scaling. Intelligent Recovery.
            </p>
            <p className="data-hero-description data-hero-fade data-hero-fade-4">
              Transform your enterprise with AI-powered cloud migration, intelligent disaster
              recovery, and predictive capacity planning for hybrid environments.
            </p>
            <div className="data-hero-actions data-hero-fade data-hero-fade-5">
              <a href="/contact">
                <button className="data-hero-button data-hero-button--primary">
                  Get Started →
                </button>
              </a>
              <a href = "#capabilities">
              <button className="data-hero-button data-hero-button--ghost">
                View Capabilities
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="hero-wave" aria-hidden="true" />

      <section
        className={`section-light data-capabilities-section${capabilitiesVisible ? ' is-visible' : ''}`}
        ref={capabilitiesSectionRef}
        id = "capabilities"
      >
        <div className="data-capabilities-wrapper mx-auto max-w-7xl px-6 py-20 text-center">
          <span className="pill pill--tight data-capabilities-pill data-cap-reveal" style={{ '--delay': '0s' } as CSSProperties}>
            <span className="data-cap-pill-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
                <path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            AI-Optimized Infrastructure
          </span>
          <h2 className="data-capabilities-title data-cap-reveal" style={{ '--delay': '0.08s' } as CSSProperties}>
            Data Centre Capabilities
          </h2>
          <p className="data-capabilities-subtitle data-cap-reveal" style={{ '--delay': '0.16s' } as CSSProperties}>
            AI-powered infrastructure services from intelligent migration to predictive operations.
          </p>
          <div className="cyber-cap-grid">
            {capabilityCards.map((item, index) => (
              <div
                key={item.title}
                className="data-cap-reveal"
                style={{ '--delay': `${0.24 + index * 0.08}s` } as CSSProperties}
              >
                <div className="cyber-cap-card data-cap-card">
                  <div className="cyber-cap-icon" aria-hidden="true">
                  {item.icon === 'cloud' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 18a4 4 0 0 1 1-7 5 5 0 0 1 9 2h1a3 3 0 0 1 0 6H6z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  {item.icon === 'trend' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4 16l5-5 4 4 7-8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path d="M16 7h5v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'pulse' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M3 12h4l3-6 4 12 3-6h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'server' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect x="4" y="5" width="16" height="6" rx="2" stroke="currentColor" strokeWidth="2" />
                      <rect x="4" y="13" width="16" height="6" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M8 8h.01M8 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'cube' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M12 3l7 4-7 4-7-4 7-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                      <path d="M5 11v6l7 4 7-4v-6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    </svg>
                  )}
                  {item.icon === 'globe' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
                      <path d="M4 12h16M12 4a12 12 0 0 1 0 16M12 4a12 12 0 0 0 0 16" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {item.icon === 'lock' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M8 11V8a4 4 0 1 1 8 0v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                </div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <span className="cap-tag">AI-Powered</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={benefitsSectionRef}
        className={`section-light data-benefits-section${benefitsVisible ? ' is-visible' : ''}`}
      >
        <div className="data-benefits-wrapper mx-auto max-w-7xl px-6">
          <div className="data-benefits-grid">
            <div className="data-benefits-copy">
              <h2 className="data-benefits-title data-benefits-fade data-benefits-left data-benefits-delay-1">
                Key Benefits
              </h2>
              <p className="data-benefits-subtitle data-benefits-fade data-benefits-left data-benefits-delay-2">
                Our data centre services deliver reliable, compliant, and cost-effective
                infrastructure transformations.
              </p>
              <a
                className="data-benefits-button data-benefits-fade data-benefits-left data-benefits-delay-3"
                href="/contact"
              >
                Start Assessment →
              </a>
            </div>
            <div className="cyber-benefits">
              {benefitItems.map((item, index) => (
                <div
                  key={item}
                  className={`cyber-benefit-card data-benefits-fade data-benefits-right data-benefits-delay-${index + 4}`}
                >
                  <span className="benefit-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
                      <path
                        d="M9 12l2 2 4-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-light data-faq-section">
        <div className="data-faq-grid mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="data-faq-title">Data Centre FAQs</h2>
            <p className="data-faq-subtitle">
              Common questions about cloud migration, DRaaS, and infrastructure modernization.
            </p>
            <a href="/contact">
              <button className="data-faq-button">
                Ask a Question
              </button>
            </a>
          </div>
          <div className="data-faq-list">
            {dataFaqs.map((item, index) => {
              const isOpen = openDataFaq === index
              return (
                <button
                  key={item.question}
                  className={`data-faq-item ${isOpen ? 'data-faq-item--open' : ''}`}
                  onClick={() => setOpenDataFaq(isOpen ? null : index)}
                  type="button"
                >
                  <span className="data-faq-question">{item.question}</span>
                  <span className="data-faq-toggle">▾</span>
                  <span className="data-faq-answer">{item.answer}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-dark section-dark--cta">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-white">
            Ready to Modernise Your Infrastructure?
          </h2>
          <p className="mt-3 text-sm text-emerald-100/70">
            Begin with a readiness assessment to scope workloads, dependencies, and build your
            migration roadmap.
          </p>
          <a
            className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-600"
            href="/contact"
          >
            Get Readiness Assessment →
          </a>
          <SiteFooter />
        </div>
      </section>
    </main>
  )
}
