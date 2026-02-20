import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import HeroLiveBackground from './HeroLiveBackground'
import SiteFooter from './SiteFooter'

export default function BarracudaSecurityPage() {
  const useCasesSectionRef = useRef<HTMLElement | null>(null)
  const [useCasesVisible, setUseCasesVisible] = useState(false)
  const whySectionRef = useRef<HTMLElement | null>(null)
  const [whyVisible, setWhyVisible] = useState(false)
  const whyPoints = [
    'Barracuda Certified Partner with implementation and support expertise',
    'Unified email, backup, and security solutions from a single vendor',
    'Cloud-native architecture with rapid deployment',
    'AI-powered threat detection with high accuracy',
    'Comprehensive M365 and Google Workspace protection',
  ]

  const solutions = [
    {
      title: 'Email Protection',
      copy: 'AI-powered email security blocking phishing, BEC, ransomware, and spam.',
      bullets: ['Advanced threat protection', 'Impersonation detection', 'Link protection & sandboxing', 'Email encryption'],
      icon: 'email',
    },
    {
      title: 'XDR (Extended Detection & Response)',
      copy: 'Unified threat detection and response across email, endpoints, and cloud.',
      bullets: ['Automated threat correlation', 'Incident investigation', '24x7 SOC integration', 'Threat intelligence'],
      icon: 'chart',
    },
    {
      title: 'Cloud-to-Cloud Backup',
      copy: 'Comprehensive backup for Microsoft 365, Google Workspace, and cloud data.',
      bullets: ['Microsoft 365 backup', 'Google Workspace protection', 'Granular recovery', 'Unlimited retention'],
      icon: 'cloud',
    },
    {
      title: 'Web Application Firewall',
      copy: 'Protect web applications from OWASP Top 10 and DDoS attacks.',
      bullets: ['OWASP threat protection', 'Bot mitigation', 'API security', 'DDoS protection'],
      icon: 'shield',
    },
    {
      title: 'Data Protection & Backup',
      copy: 'Enterprise backup and disaster recovery for on-premises and cloud workloads.',
      bullets: ['Physical & virtual backup', 'Cloud archiving', 'Instant recovery', 'Ransomware protection'],
      icon: 'database',
    },
    {
      title: 'Zero Trust Access',
      copy: 'Secure remote access without traditional VPN complexity.',
      bullets: ['Identity-based access', 'Device posture checks', 'Application-level access', 'Secure web gateway'],
      icon: 'lock',
    },
  ]

  const useCases = [
    {
      title: 'M365 Email Security',
      copy: 'Layer advanced threat protection over Microsoft 365 native security to block sophisticated phishing and BEC attacks.',
      icon: 'email',
    },
    {
      title: 'Ransomware Recovery',
      copy: 'Ensure business continuity with immutable backups and instant recovery for critical workloads and cloud data.',
      icon: 'backup',
    },
    {
      title: 'Unified Threat Response',
      copy: 'Consolidate security operations with XDR that correlates threats across email, endpoints, and cloud environments.',
      icon: 'chart',
    },
  ]

  const faqs = [
    {
      question: 'What email security solutions does Pirlanta offer with Barracuda?',
      answer:
        'We deploy Barracuda Email Protection including advanced threat protection, impersonation detection, link protection, and email encryption for comprehensive email security.',
    },
    {
      question: 'Can Barracuda protect Microsoft 365 environments?',
      answer:
        'Yes, Barracuda provides native integration with Microsoft 365 for email security, backup, and archiving. We implement and manage the full M365 protection stack.',
    },
    {
      question: 'What is Barracuda XDR and how does it work?',
      answer:
        'Barracuda XDR correlates threats across email, endpoints, servers, and cloud workloads to provide unified detection and automated response, reducing alert fatigue and investigation time.',
    },
    {
      question: 'Do you provide backup for cloud applications?',
      answer:
        'Yes, we implement Barracuda Cloud-to-Cloud Backup for Microsoft 365 and Google Workspace, ensuring protection against accidental deletion, ransomware, and compliance requirements.',
    },
    {
      question: 'How does Barracuda Zero Trust Access differ from VPN?',
      answer:
        'Barracuda Zero Trust Access provides application-level access based on identity and device posture, eliminating the network-wide access risks associated with traditional VPN.',
    },
    {
      question: 'Can you protect web applications with Barracuda WAF?',
      answer:
        'Yes, we deploy Barracuda WAF to protect web applications and APIs from OWASP Top 10 threats, bot attacks, and DDoS with cloud-delivered or on-premises options.',
    },
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    const section = useCasesSectionRef.current
    if (!section) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setUseCasesVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setUseCasesVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const section = whySectionRef.current
    if (!section) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setWhyVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWhyVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <main className="partner-page relative overflow-hidden pt-24">
      <section className="partner-hero live-hero barracuda-hero relative">
        <HeroLiveBackground />
        <div className="partner-hero-content barracuda-hero-content w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="barracuda-hero-logo barracuda-hero-fade barracuda-hero-fade-1">
            <img
              src="/partners/Barracuda_Networks.png"
              alt="Barracuda"
              className="barracuda-hero-logo-img"
            />
          </div>
          <span className="pill pill--tight barracuda-hero-pill barracuda-hero-fade barracuda-hero-fade-2">
            Barracuda Certified Partner
          </span>
          <h1 className="barracuda-hero-title barracuda-hero-fade barracuda-hero-fade-3">
            Barracuda <span className="barracuda-hero-accent">Partner</span>
          </h1>
          <p className="barracuda-hero-kicker barracuda-hero-fade barracuda-hero-fade-4">
            Email Security, XDR &amp; Cloud Backup
          </p>
          <p className="barracuda-hero-copy barracuda-hero-fade barracuda-hero-fade-5">
            As a Barracuda Certified Partner, we deliver integrated email protection, extended
            detection and response, and cloud backup solutions for modern enterprises.
          </p>
        </div>
        <div
          className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[1px]"
          aria-hidden="true"
        >
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px] fill-white"
          >
            <path d="M0,0 Q600,120 1200,0 L1200,120 L0,120 Z" className="fill-white" />
          </svg>
        </div>
      </section>

      <section
        ref={whySectionRef}
        className={`section-light cisco-why-section${whyVisible ? ' is-visible' : ''}`}
      >
        <div className="cisco-why-wrapper mx-auto max-w-7xl px-6">
          <div className="cisco-why-grid">
            <div className="cisco-why-copy">
              <h2 className="cisco-why-title cisco-why-fade cisco-why-delay-1">
                Why Pirlanta for Barracuda?
              </h2>
              <p className="cisco-why-subtitle cisco-why-fade cisco-why-delay-2">
                Our Barracuda partnership enables us to deliver comprehensive email security, data
                protection, and XDR solutions with cloud-native simplicity and AI-powered threat detection.
              </p>
              <div className="cisco-why-points">
                {whyPoints.map((point, index) => (
                  <div
                    key={point}
                    className={`cisco-point cisco-why-fade cisco-why-delay-${index + 3}`}
                  >
                    <span className="benefit-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="cisco-card cisco-why-card cisco-why-fade cisco-why-delay-8">
              <div className="partner-logo partner-logo--small barracuda-logo" aria-label="Barracuda">
                <img src="/partners/Barracuda_Networks.png" alt="Barracuda" />
              </div>
              <h3>Barracuda Certified Partner</h3>
              <p>
                Certified to implement and support the full Barracuda portfolio including email, backup,
                and security solutions.
              </p>
              <div className="cisco-badges">
                <div>
                  <strong>Email</strong>
                  <span>Protection</span>
                </div>
                <div>
                  <strong>XDR</strong>
                  <span>Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Barracuda Solutions We Deliver</h2>
          <p className="mt-2 text-sm text-slate-500">
            Comprehensive security and data protection across email, cloud, and applications.
          </p>
          <div className="cisco-solution-grid mt-10">
            {solutions.map((item) => (
              <div key={item.title} className="cyber-cap-card cisco-solution-card">
                <div className="cyber-cap-icon" aria-hidden="true">
                  {item.icon === 'email' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M22 6L12 13 2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'chart' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" />
                      <path d="M7 16l4-4 4 4 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'cloud' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {item.icon === 'shield' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {item.icon === 'database' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="2" />
                      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" stroke="currentColor" strokeWidth="2" />
                      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" stroke="currentColor" strokeWidth="2" />
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
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={useCasesSectionRef}
        className={`section-light barracuda-use-section${useCasesVisible ? ' is-visible' : ''}`}
      >
        <div className="barracuda-use-wrapper mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="barracuda-use-title barracuda-use-reveal" style={{ '--delay': '0s' } as CSSProperties}>
            Common Use Cases
          </h2>
          <p className="barracuda-use-subtitle barracuda-use-reveal" style={{ '--delay': '0.08s' } as CSSProperties}>
            How enterprises leverage Barracuda through Pirlanta.
          </p>
          <div className="barracuda-use-grid">
            {useCases.map((item, index) => (
              <div
                key={item.title}
                className="barracuda-use-reveal"
                style={{ '--delay': `${0.16 + index * 0.08}s` } as CSSProperties}
              >
                <div className="cyber-cap-card barracuda-use-card">
                  <div className="cyber-cap-icon" aria-hidden="true">
                  {item.icon === 'email' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M22 6L12 13 2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'backup' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect x="4" y="4" width="16" height="8" rx="1" stroke="currentColor" strokeWidth="2" />
                      <path d="M4 16v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" stroke="currentColor" strokeWidth="2" />
                      <path d="M8 12v4h8v-4" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {item.icon === 'chart' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" />
                      <path d="M7 16l4-4 4 4 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light cisco-faq-section">
        <div className="cisco-faq-grid mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="cisco-faq-title">Barracuda FAQs</h2>
            <p className="cisco-faq-subtitle">
              Common questions about Barracuda email security, XDR, and backup solutions.
            </p>
            <Link to="/contact">
              <button className="cisco-faq-button">
                Ask a Question
              </button>
            </Link>
          </div>
          <div className="cisco-faq-list">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index
              return (
                <button
                  key={item.question}
                  className={`cisco-faq-item ${isOpen ? 'cisco-faq-item--open' : ''}`}
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  type="button"
                >
                  <span className="cisco-faq-question">{item.question}</span>
                  <span className="cisco-faq-toggle">▾</span>
                  <span className="cisco-faq-answer">{item.answer}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-dark section-dark--cta">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-white">
            Ready for Comprehensive Email &amp; Data Protection?
          </h2>
          <p className="mt-3 text-sm text-emerald-100/70">
            Let&apos;s discuss how Barracuda solutions can secure your email, protect your data, and simplify your security operations.
          </p>
          <Link
            className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-600"
            to="/contact"
          >
            Schedule Consultation →
          </Link>
          <SiteFooter />
        </div>
      </section>
    </main>
  )
}
