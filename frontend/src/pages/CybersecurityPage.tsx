import { useEffect, useRef, useState, type CSSProperties } from 'react'
import HeroLiveBackground from '../components/HeroLiveBackground'
import SiteFooter from '../components/SiteFooter'

export default function CybersecurityPage() {
  const resultsSectionRef = useRef<HTMLElement | null>(null)
  const [resultsVisible, setResultsVisible] = useState(false)
  const resultsAnimatedRef = useRef(false)
  const capabilitiesSectionRef = useRef<HTMLElement | null>(null)
  const [capabilitiesVisible, setCapabilitiesVisible] = useState(false)
  const faqSectionRef = useRef<HTMLElement | null>(null)
  const [faqVisible, setFaqVisible] = useState(false)
  const benefitsSectionRef = useRef<HTMLElement | null>(null)
  const [benefitsVisible, setBenefitsVisible] = useState(false)

  const resultStats = [
    { value: 85, suffix: '%', label: 'Reduction in MTTD', sub: 'Cisco XDR' },
    { value: 95, suffix: '%', label: 'Faster Response', sub: 'AI-Augmented SOC' },
    { value: 24, suffix: '×7', label: 'Monitoring', sub: 'Always On' },
    { value: 48, suffix: '+', label: 'Years Experience', sub: 'Combined Team' },
  ]

  const capabilityCards = [
    {
      title: 'AI-Powered MDR',
      copy: 'Machine learning threat detection with 24×7 SOC operations. 85% faster mean time to detect.',
      icon: 'radar',
    },
    {
      title: 'AI-Generated Code Security',
      copy: 'Security audits for vibe-coded and AI-assisted applications: SAST, DAST, and prompt injection testing.',
      icon: 'code',
    },
    {
      title: 'AI-Assisted Incident Response',
      copy: 'Automated playbooks with ML-driven triage. Reduce response times and analyst fatigue.',
      icon: 'pulse',
    },
    {
      title: 'Secure Hosting & Infrastructure',
      copy: 'Hardened servers, next-gen firewalls, DDoS protection, and automated backups.',
      icon: 'shield',
    },
    {
      title: 'Zero Trust Architecture',
      copy: 'AI-verified identity, least privilege access, and continuous verification across all users.',
      icon: 'lock',
    },
    {
      title: 'Strong Authentication',
      copy: 'Multi-factor authentication, role-based permissions, and robust password policies.',
      icon: 'key',
    },
    {
      title: 'Web Application Firewall',
      copy: 'Block SQL injection, XSS, CSRF, and OWASP Top 10 attacks via intelligent filtering.',
      icon: 'globe',
    },
    {
      title: 'Cloud Security & Compliance',
      copy: 'Zero-trust controls aligned with GDPR, HIPAA, ISO 27001, and PCI-DSS frameworks.',
      icon: 'cloud',
    },
    {
      title: 'Data Protection & Backup',
      copy: 'Encryption at rest and in transit, with disaster recovery runbooks and immutable backups.',
      icon: 'database',
    },
  ]

  useEffect(() => {
    const section = resultsSectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setResultsVisible(entry.isIntersecting)
      },
      { threshold: 0.3 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

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
    const section = faqSectionRef.current
    if (!section) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setFaqVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFaqVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
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

  useEffect(() => {
    if (!resultsVisible || resultsAnimatedRef.current) return
    const section = resultsSectionRef.current
    if (!section) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const counters = section.querySelectorAll<HTMLElement>('[data-count]')
    if (prefersReducedMotion) {
      counters.forEach((counter) => {
        const value = counter.dataset.value ?? counter.textContent ?? ''
        const prefix = counter.dataset.prefix ?? ''
        const suffix = counter.dataset.suffix ?? ''
        counter.textContent = `${prefix}${value}${suffix}`
      })
      resultsAnimatedRef.current = true
      return
    }

    const animateCount = (counter: HTMLElement) => {
      const end = Number.parseFloat(counter.dataset.value ?? '0')
      const prefix = counter.dataset.prefix ?? ''
      const suffix = counter.dataset.suffix ?? ''
      const decimals = Number.parseInt(counter.dataset.decimals ?? '0', 10)
      const duration = Number.parseInt(counter.dataset.duration ?? '1200', 10)
      const startTime = performance.now()

      const step = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        const current = end * eased
        counter.textContent = `${prefix}${current.toFixed(decimals)}${suffix}`
        if (progress < 1) {
          requestAnimationFrame(step)
        } else {
          counter.textContent = `${prefix}${end.toFixed(decimals)}${suffix}`
        }
      }

      requestAnimationFrame(step)
    }

    counters.forEach((counter) => animateCount(counter))
    resultsAnimatedRef.current = true
  }, [resultsVisible])

  const benefitItems = [
    'AI-driven threat detection catches what traditional tools miss—85% faster mean time to detect.',
    'Achieve compliance efficiently (PCI DSS 4.0, SEBI CSCRF, ISO 27001) with AI-assisted evidence mapping.',
    'Secure your AI-built applications with purpose-built audits for vibe-coded software.',
    'Minimize attack surface with AI-verified Zero Trust across hybrid and multi-cloud environments.',
    'Reduce analyst fatigue with ML-powered alert triage and automated response playbooks.',
  ]

  const cyberFaqs = [
    {
      question: 'What is included in MDR (Managed Detection & Response)?',
      answer:
        'Our MDR service includes detection engineering, 24×7 monitoring, proactive threat hunting, and automated response capabilities to reduce attacker dwell time and minimize impact.',
    },
    {
      question: 'Do you provide Incident Response services?',
      answer:
        'Yes, we offer comprehensive incident response including triage, containment, eradication, and recovery with documented timelines, audit indicators, and post-incident analysis.',
    },
    {
      question: 'Can you deploy XDR (Extended Detection & Response) in India?',
      answer:
        'Yes, we implement XDR solutions that correlate signals across endpoints, identity systems, email, and cloud platforms for improved detection accuracy and faster response.',
    },
    {
      question: 'Do you offer SIEM/SOC as a Service?',
      answer:
        'Yes, our SOCaaS includes high-signal analytics, response workflows, 24×7 operations with defined SLAs, and executive reporting dashboards.',
    },
    {
      question: 'How do you secure Microsoft 365 environments?',
      answer:
        'We harden identities, data, and devices while enabling monitoring across Microsoft Defender, Purview, and Entra ID with incident response readiness.',
    },
    {
      question: 'Do you provide Zero Trust consulting?',
      answer:
        'Yes, our Zero Trust consulting covers least privilege access, network segmentation, device health verification, and continuous verification aligned to your business needs.',
    },
    {
      question: 'How fast is MDR deployment?',
      answer:
        'Typically deployment takes a few weeks, including use-case agreement, tooling integration, baseline establishment, and reporting alignment.',
    },
    {
      question: 'How do you prove security outcomes?',
      answer:
        'We provide coverage maps, MTTD/MTTR metrics, incident narratives, and remediation progress in regular executive reviews.',
    },
    {
      question: 'Can you integrate with our existing security tools?',
      answer:
        'Yes, we integrate with Microsoft 365, Azure, AWS, and existing security stacks including SIEM, EDR, and identity platforms.',
    },
    {
      question: 'Do you support regulatory compliance requirements?',
      answer:
        'Yes, we map controls to frameworks like PCI DSS, SEBI CSCRF, ISO 27001, and HIPAA, producing audit-ready evidence during operations.',
    },
  ]

  const [openCyberFaq, setOpenCyberFaq] = useState<number | null>(null)

  return (
    <main className="cyber-page relative overflow-hidden pt-24">
      <section className="hero-section live-hero cyber-hero-section relative flex items-center">
        <HeroLiveBackground />
        <div className="cyber-hero-content mx-auto max-w-7xl px-6 py-24 relative z-10">
          <div className="cyber-hero-copy-wrap">
            <div className="cyber-hero-icon cyber-hero-fade cyber-hero-fade-1">
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
            <h1 className="cyber-hero-title cyber-hero-fade cyber-hero-fade-2">
              Cybersecurity
            </h1>
            <p className="cyber-hero-kicker cyber-hero-fade cyber-hero-fade-3">
              AI-Driven Threat Detection. Expert-Led Response. Measurable Outcomes.
            </p>
            <p className="cyber-hero-description cyber-hero-fade cyber-hero-fade-4">
              AI-powered security operations with 24x7 SOC, automated threat hunting, and
              compliance alignment for regulated organizations.
            </p>
            <div className="cyber-hero-actions cyber-hero-fade cyber-hero-fade-5">
              <a href="/contact">
                <button className="cyber-hero-button cyber-hero-button--primary">
                  Get Started →
                </button>
              </a>
              <a href = "#capabilities">
              <button className="cyber-hero-button cyber-hero-button--ghost">
                View Capabilities
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="hero-wave" aria-hidden="true" />

      <section
        className={`section-dark section-dark--muted cyber-results-section${resultsVisible ? ' is-visible' : ''}`}
        ref={resultsSectionRef}
      >
        <div className="cyber-results-wrapper mx-auto max-w-7xl px-6 py-20 text-center">
          <span className="pill pill--tight cyber-results-pill">AI-Powered Outcomes</span>
          <h2 className="cyber-results-title">Measurable Security Results</h2>
          <p className="cyber-results-subtitle">
            Powered by Cisco XDR, Fortinet FortiAI, and our expert implementation team.
          </p>
          <div className="cyber-stat-grid mt-10">
            {resultStats.map((stat) => (
              <div key={`${stat.value}${stat.suffix}`} className="cyber-stat-card">
                <strong data-count data-value={stat.value} data-suffix={stat.suffix} data-duration="2400">
                  {`${stat.value}${stat.suffix}`}
                </strong>
                <span>{stat.label}</span>
                <small>{stat.sub}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`section-light cyber-capabilities-section${capabilitiesVisible ? ' is-visible' : ''}`}
        ref={capabilitiesSectionRef}
        id = "capabilities"
      >
        <div className="cyber-capabilities-wrapper mx-auto max-w-7xl px-6 py-20 text-center">
          <span className="pill pill--tight cyber-capabilities-pill cyber-cap-reveal" style={{ '--delay': '0s' } as CSSProperties}>
            <span className="cyber-cap-pill-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
                <path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            AI-Enhanced Security
          </span>
          <h2 className="cyber-capabilities-title cyber-cap-reveal" style={{ '--delay': '0.08s' } as CSSProperties}>
            Cybersecurity Capabilities
          </h2>
          <p className="cyber-capabilities-subtitle cyber-cap-reveal" style={{ '--delay': '0.16s' } as CSSProperties}>
            AI-powered security coverage from threat detection to compliance auditing.
          </p>
          <div className="cyber-cap-grid">
            {capabilityCards.map((item, index) => (
              <div
                key={item.title}
                className="cyber-cap-reveal"
                style={{ '--delay': `${0.24 + index * 0.08}s` } as CSSProperties}
              >
                <div className="cyber-cap-card">
                  <div className="cyber-cap-icon" aria-hidden="true">
                  {item.icon === 'radar' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 4v8l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                    </svg>
                  )}
                  {item.icon === 'code' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M8 6l-4 6 4 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M16 6l4 6-4 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M10 20l4-16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'pulse' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M3 12h4l3-6 4 12 3-6h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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
                  {item.icon === 'lock' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M8 11V8a4 4 0 1 1 8 0v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'key' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="8" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                      <path d="M11 12h10M18 12v3M21 12v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'globe' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
                      <path d="M4 12h16M12 4a12 12 0 0 1 0 16M12 4a12 12 0 0 0 0 16" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
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
                  {item.icon === 'database' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <ellipse cx="12" cy="5" rx="7" ry="3" stroke="currentColor" strokeWidth="2" />
                      <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" stroke="currentColor" strokeWidth="2" />
                      <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" stroke="currentColor" strokeWidth="2" />
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
        className={`section-light cyber-benefits-section${benefitsVisible ? ' is-visible' : ''}`}
      >
        <div className="cyber-benefits-wrapper mx-auto max-w-7xl px-6">
          <div className="cyber-benefits-grid">
            <div className="cyber-benefits-copy">
              <h2 className="cyber-benefits-title benefits-fade benefits-left benefits-delay-1">
                Key Benefits
              </h2>
              <p className="cyber-benefits-subtitle benefits-fade benefits-left benefits-delay-2">
                Our cybersecurity services deliver measurable outcomes that protect your business
                and demonstrate compliance.
              </p>
              <a
                className="cyber-benefits-button benefits-fade benefits-left benefits-delay-3"
                href="/contact"
              >
                Schedule Assessment →
              </a>
            </div>
            <div className="cyber-benefits">
              {benefitItems.map((item, index) => (
                <div
                  key={item}
                  className={`cyber-benefit-card benefits-fade benefits-right benefits-delay-${index + 1}`}
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

      <section
        className={`section-light cyber-faq-section${faqVisible ? ' is-visible' : ''}`}
        ref={faqSectionRef}
      >
        <div className="cyber-faq-wrapper mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="cyber-faq-copy">
            <h2 className="cyber-faq-title cyber-faq-reveal" style={{ '--delay': '0s' } as CSSProperties}>
              <span className="block">Cybersecurity</span>
              <span className="block">FAQs</span>
            </h2>
            <p className="cyber-faq-subtitle cyber-faq-reveal" style={{ '--delay': '0.08s' } as CSSProperties}>
              Common questions about our security services, MDR, compliance, and implementation.
            </p>
            <a href="/contact">
              <button className="cyber-faq-button cyber-faq-reveal" style={{ '--delay': '0.16s' } as CSSProperties}>
                Ask a Question
              </button>
            </a>
          </div>
          <div className="cyber-faq cyber-faq-list">
            {cyberFaqs.map((item, index) => {
              const isOpen = openCyberFaq === index
              return (
                <div
                  key={item.question}
                  className={`cyber-faq-block cyber-faq-reveal ${isOpen ? 'cyber-faq-block--open' : ''}`}
                  style={{ '--delay': `${0.2 + index * 0.06}s` } as CSSProperties}
                >
                  <button
                    className="cyber-faq-trigger"
                    onClick={() => setOpenCyberFaq(isOpen ? null : index)}
                    type="button"
                  >
                    <span>{item.question}</span>
                    <span className="faq-toggle">▾</span>
                  </button>
                  <div className={`cyber-faq-answer ${isOpen ? 'cyber-faq-answer--open' : ''}`}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-dark section-dark--cta">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-white">
            Ready to Strengthen Your Security Posture?
          </h2>
          <p className="mt-3 text-sm text-emerald-100/70">
            Start with a security assessment to identify gaps and build a roadmap for comprehensive
            protection.
          </p>
          <a
            className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-600"
            href="/contact"
          >
            Get Your Assessment →
          </a>
          <SiteFooter />
        </div>
      </section>
    </main>
  )
}
