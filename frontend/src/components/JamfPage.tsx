import { useEffect, useRef, useState, type CSSProperties } from 'react'
import HeroLiveBackground from './HeroLiveBackground'

export default function JamfPage() {
  const whySectionRef = useRef<HTMLElement | null>(null)
  const [whyVisible, setWhyVisible] = useState(false)
  const solutionsSectionRef = useRef<HTMLElement | null>(null)
  const [solutionsVisible, setSolutionsVisible] = useState(false)
  const useCasesSectionRef = useRef<HTMLElement | null>(null)
  const [useCasesVisible, setUseCasesVisible] = useState(false)
  const whyPoints = [
    'Registered Jamf Partner with trained deployment specialists',
    'Same-day support for new Apple OS releases',
    'End-to-end implementation from planning to production',
    'Migration expertise from other MDM platforms',
    'Ongoing managed services and support',
  ]

  const solutions = [
    {
      title: 'Jamf Pro',
      copy: 'Enterprise-grade Apple device management for Mac, iPad, iPhone, and Apple TV.',
      bullets: ['Zero-touch deployment', 'Automated device enrollment', 'App & configuration management', 'Inventory & reporting'],
      icon: 'monitor',
    },
    {
      title: 'Jamf Now',
      copy: 'Simple, cloud-based MDM for small and mid-sized businesses managing Apple devices.',
      bullets: ['Quick device setup', 'Remote lock & wipe', 'Passcode enforcement', 'App distribution'],
      icon: 'briefcase',
    },
    {
      title: 'Jamf Protect',
      copy: 'Purpose-built endpoint security for Mac with threat prevention and compliance.',
      bullets: ['Mac malware prevention', 'Behavioral analytics', 'Compliance monitoring', 'Threat hunting'],
      icon: 'shield',
    },
    {
      title: 'Jamf Connect',
      copy: 'Unified identity and access management connecting users to resources securely.',
      bullets: ['Cloud identity integration', 'Single sign-on (SSO)', 'Zero Trust access', 'Passwordless authentication'],
      icon: 'key',
    },
  ]

  const useCases = [
    {
      title: 'Zero-Touch Deployment',
      copy: 'Ship devices directly to employees. Jamf configures them automatically on first power-on with your apps, settings, and security policies.',
      icon: 'gear',
    },
    {
      title: 'MDM Migration',
      copy: 'Transitioning from Intune, Workspace ONE, or manual management? We migrate your fleet to Jamf with minimal disruption.',
      icon: 'migration',
    },
    {
      title: 'Mac Security Hardening',
      copy: 'Deploy Jamf Protect alongside Jamf Pro to enforce compliance, detect threats, and meet security benchmarks like CIS and NIST.',
      icon: 'shield',
    },
  ]

  const faqs = [
    {
      question: 'What is Jamf and why is it important for Apple devices?',
      answer:
        'Jamf is the industry-leading Apple device management platform trusted by organizations worldwide. It enables IT teams to deploy, manage, and secure Mac, iPad, iPhone, and Apple TV devices at scale while maintaining the native Apple experience users expect.',
    },
    {
      question: 'Can you migrate us from another MDM solution to Jamf?',
      answer:
        'Yes, we provide complete migration services from other MDM platforms such as Microsoft Intune, VMware Workspace ONE, Kandji, Mosyle, or manual management. Our migration process ensures zero downtime and preserves your existing configurations where possible.',
    },
    {
      question: 'What is the difference between Jamf Pro and Jamf Now?',
      answer:
        'Jamf Pro is the enterprise solution with advanced workflows, smart groups, custom scripting, and deep integration capabilities. Jamf Now is designed for SMBs with straightforward requirements—it offers essential MDM features in a simpler, more cost-effective package.',
    },
    {
      question: 'Does Jamf work with employee-owned devices (BYOD)?',
      answer:
        'Yes, Jamf supports both corporate-owned and BYOD deployments. With User Enrollment, employees can enroll personal devices while maintaining privacy—IT manages work apps and data without access to personal content.',
    },
    {
      question: 'How does Jamf Protect differ from traditional antivirus?',
      answer:
        'Jamf Protect is purpose-built for macOS, leveraging Apple security frameworks rather than fighting against them. It provides real-time threat prevention, behavioral detection, and compliance enforcement without impacting Mac performance or user experience.',
    },
    {
      question: 'Do you offer ongoing managed services for Jamf?',
      answer:
        'Yes, we provide managed MDM services including policy updates, app deployments, OS upgrade planning, compliance reporting, and incident support under defined SLAs. This allows your IT team to focus on strategic initiatives.',
    },
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

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

  useEffect(() => {
    const section = solutionsSectionRef.current
    if (!section) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setSolutionsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSolutionsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

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

  return (
    <main className="partner-page relative overflow-hidden pt-24">
      {/* Hero Section */}
      <section className="partner-hero live-hero jamf-hero relative">
        <HeroLiveBackground />
        <div className="partner-hero-content jamf-hero-content w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="jamf-hero-logo jamf-hero-fade jamf-hero-fade-1">
            <img
              src="/partners/JAMF.png"
              alt="Jamf"
              className="jamf-hero-logo-img"
            />
          </div>
          <span className="pill pill--tight jamf-hero-pill jamf-hero-fade jamf-hero-fade-2">
            Registered Partner
          </span>
          <h1 className="jamf-hero-title jamf-hero-fade jamf-hero-fade-3">
            Jamf <span className="jamf-hero-accent">Partner</span>
          </h1>
          <p className="jamf-hero-kicker jamf-hero-fade jamf-hero-fade-4">
            Apple Device Management & Security
          </p>
          <p className="jamf-hero-copy jamf-hero-fade jamf-hero-fade-5">
            As a Jamf Registered Partner, we help organizations deploy, manage, and secure their Apple ecosystem—from zero-touch deployment to endpoint protection and identity management.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[1px]">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px] fill-white">
            <path d="M0,0 Q600,120 1200,0 L1200,120 L0,120 Z" className="fill-white" />
          </svg>
        </div>
      </section>

      {/* Why Pirlanta for Jamf */}
      <section
        ref={whySectionRef}
        className={`section-light jamf-why-section${whyVisible ? ' is-visible' : ''}`}
      >
        <div className="jamf-why-wrapper mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="jamf-why-copy">
            <h2 className="jamf-why-title jamf-why-fade jamf-why-delay-1">Why Pirlanta for Jamf?</h2>
            <p className="jamf-why-subtitle jamf-why-fade jamf-why-delay-2">
              Apple devices work best when managed with Apple-native tools. Our Jamf expertise ensures your Mac, iPad, and iPhone fleet is deployed efficiently, secured comprehensively, and maintained seamlessly—without compromising the user experience.
            </p>
            <div className="jamf-why-points">
              {whyPoints.map((point, index) => (
                <div
                  key={point}
                  className={`jamf-why-point jamf-why-fade jamf-why-delay-${index + 3}`}
                >
                  <span className="jamf-why-icon" aria-hidden="true">
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
          <div className="jamf-why-card jamf-why-fade jamf-why-delay-8">
            <div className="jamf-why-logo">
              <img src="/partners/JAMF.png" alt="Jamf" className="jamf-why-logo-img" />
            </div>
            <h3>Jamf Registered Partner</h3>
            <p>
              Trained and certified to deploy Jamf solutions across enterprise environments, from initial planning through ongoing operations.
            </p>
            <div className="jamf-why-metrics">
              <div className="jamf-why-metric">
                <strong>MDM</strong>
                <span>Specialists</span>
              </div>
              <div className="jamf-why-metric">
                <strong>Apple</strong>
                <span>Focused</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jamf Solutions We Deploy */}
      <section
        ref={solutionsSectionRef}
        className={`section-light jamf-solutions-section${solutionsVisible ? ' is-visible' : ''}`}
      >
        <div className="jamf-solutions-wrapper mx-auto max-w-7xl px-6">
          <div className="jamf-solutions-header jamf-solutions-fade jamf-solutions-delay-1">
            <h2 className="jamf-solutions-title">Jamf Solutions We Deploy</h2>
            <p className="jamf-solutions-subtitle">
              Comprehensive Apple device management and security for organizations of every size.
            </p>
          </div>
          <div className="jamf-solutions-grid">
            {solutions.map((item, index) => (
              <div
                key={item.title}
                className={`jamf-solutions-card jamf-solutions-fade jamf-solutions-delay-${index + 2}`}
              >
                <div className="jamf-solutions-icon">
                  {item.icon === 'monitor' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <path d="M8 21h8M12 17v4" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'briefcase' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="7" width="20" height="14" rx="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {item.icon === 'shield' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {item.icon === 'key' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10" stroke="currentColor" strokeWidth="2">
                      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <h3 className="jamf-solutions-name">{item.title}</h3>
                <p className="jamf-solutions-copy">{item.copy}</p>
                <ul className="jamf-solutions-list">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="jamf-solutions-bullet">
                      <span className="jamf-solutions-dot" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Use Cases */}
      <section
        ref={useCasesSectionRef}
        className={`section-light jamf-use-section${useCasesVisible ? ' is-visible' : ''}`}
      >
        <div className="jamf-use-wrapper mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="jamf-use-title jamf-use-reveal" style={{ '--delay': '0s' } as CSSProperties}>
            Common Use Cases
          </h2>
          <p className="jamf-use-subtitle jamf-use-reveal" style={{ '--delay': '0.08s' } as CSSProperties}>
            How organizations leverage our Jamf expertise.
          </p>
          <div className="jamf-use-grid">
            {useCases.map((item, index) => (
              <div
                key={item.title}
                className="jamf-use-reveal"
                style={{ '--delay': `${0.16 + index * 0.08}s` } as CSSProperties}
              >
                <div className="cyber-cap-card jamf-use-card">
                  <div className="cyber-cap-icon" aria-hidden="true">
                    {item.icon === 'gear' && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                    {item.icon === 'migration' && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 17h6m-3-3v6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                    {item.icon === 'shield' && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
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

      {/* Jamf FAQs */}
      <section className="section-light cisco-faq-section">
        <div className="cisco-faq-grid mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="cisco-faq-title">Jamf FAQs</h2>
            <p className="cisco-faq-subtitle">
              Common questions about Jamf and our implementation services.
            </p>
            <a href="/contact" className="cisco-faq-button">
              Ask a Question
            </a>
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

      {/* CTA Section */}
      <section className="section-dark section-dark--cta relative overflow-hidden bg-slate-900">
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-white">
            Ready to Manage Your Apple Fleet?
          </h2>
          <p className="mt-3 text-sm text-emerald-100/70">
            Let&apos;s discuss how Jamf can simplify Apple device management and strengthen security across your organization.
          </p>
          <a
            className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-600"
            href="/contact"
          >
            Schedule Consultation →
          </a>
        </div>
      </section>
    </main>
  )
}
