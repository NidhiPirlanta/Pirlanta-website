import { useEffect, useRef, useState, type CSSProperties } from 'react'
import HeroLiveBackground from './HeroLiveBackground'
import SiteFooter from './SiteFooter'

export default function RSASecurityPage() {
  const whySectionRef = useRef<HTMLElement | null>(null)
  const [whyVisible, setWhyVisible] = useState(false)
  const useCasesSectionRef = useRef<HTMLElement | null>(null)
  const [useCasesVisible, setUseCasesVisible] = useState(false)
  const whyPoints = [
    'Expertise in RSA Unified Identity Platform & ID Plus',
    'Strong focus on Zero Trust & identity-first security',
    'Proven experience in compliance-driven industries',
    'Seamless integration across on-prem, cloud, and hybrid environments',
    'Nation-wide delivery and long-term operational support across India',
  ]

  const solutions = [
    {
      title: 'RSA Unified Identity Platform',
      copy: 'Comprehensive identity security platform for workforce and customer identity management.',
      bullets: ['Unified identity management', 'Identity orchestration', 'Multi-tenant architecture', 'Identity analytics'],
      icon: 'layers',
    },
    {
      title: 'RSA ID Plus - Authentication & Passwordless',
      copy: 'Modern multi-factor authentication with passwordless options for enhanced security.',
      bullets: ['Passwordless authentication', 'Adaptive MFA', 'FIDO2/WebAuthn support', 'Mobile push notifications'],
      icon: 'lock',
    },
    {
      title: 'RSA Single Sign-On (SSO)',
      copy: 'Seamless access to all applications with enterprise single sign-on capabilities.',
      bullets: ['SAML & OIDC support', 'Application portal', 'Session management', 'Federated identity'],
      icon: 'sso',
    },
    {
      title: 'RSA Access Management',
      copy: 'Centralized access control and policy management for enterprise resources.',
      bullets: ['Policy-based access control', 'Risk-based authentication', 'Context-aware security', 'API protection'],
      icon: 'shield',
    },
    {
      title: 'RSA Governance & Lifecycle (IGA)',
      copy: 'Identity governance and administration for compliance and access certification.',
      bullets: ['Access certification', 'Role management', 'Separation of duties', 'Audit & compliance reporting'],
      icon: 'governance',
    },
    {
      title: 'RSA Advanced Dashboards',
      copy: 'Real-time visibility into identity security posture and user activity.',
      bullets: ['Identity analytics', 'Risk scoring', 'Threat detection', 'Executive reporting'],
      icon: 'chart',
    },
    {
      title: 'Identity Lifecycle Automation',
      copy: 'Automated provisioning and deprovisioning across the identity lifecycle.',
      bullets: ['Joiner-mover-leaver automation', 'Workflow orchestration', 'Self-service requests', 'Connector ecosystem'],
      icon: 'lifecycle',
    },
  ]

  const useCases = [
    {
      title: 'Secure Workforce & Remote Access',
      copy: 'Enable secure access for remote and hybrid workforce with adaptive MFA and SSO across all enterprise applications.',
      icon: 'globe',
    },
    {
      title: 'Zero Trust Identity Access',
      copy: 'Implement identity-first Zero Trust with continuous verification and risk-based authentication at every access point.',
      icon: 'fingerprint',
    },
    {
      title: 'Identity Governance & Compliance',
      copy: 'Meet regulatory requirements with access certification, audit trails, and separation of duties enforcement.',
      icon: 'clipboard',
    },
    {
      title: 'Privileged & High-Risk User Protection',
      copy: 'Enhanced security controls for privileged accounts and high-risk users with step-up authentication and monitoring.',
      icon: 'user-gear',
    },
    {
      title: 'Hybrid & Multi-Cloud Identity Security',
      copy: 'Unified identity management across on-premises, cloud, and multi-cloud environments with consistent policies.',
      icon: 'cloud',
    },
    {
      title: 'Financial Services & Regulated Industries',
      copy: 'Compliance-focused identity solutions for BFSI, healthcare, and other regulated industries with strict requirements.',
      icon: 'building',
    },
  ]

  const faqs = [
    {
      question: 'What is the RSA Unified Identity Platform?',
      answer:
        'RSA Unified Identity Platform is a comprehensive identity security solution that combines authentication, access management, and identity governance in a single platform. It enables organizations to implement Zero Trust security by verifying identity at every access point.',
    },
    {
      question: 'Can RSA help us go passwordless?',
      answer:
        'Yes, RSA ID Plus supports passwordless authentication using FIDO2, WebAuthn, and mobile biometrics. This eliminates password-related vulnerabilities while improving user experience through seamless, secure authentication.',
    },
    {
      question: 'Does RSA support hybrid and multi-cloud environments?',
      answer:
        'Yes, RSA solutions are designed for hybrid environments, supporting identity management across on-premises, cloud, and multi-cloud deployments. The platform integrates with major cloud providers and enterprise applications.',
    },
    {
      question: 'How does RSA help with compliance requirements?',
      answer:
        'RSA Identity Governance & Lifecycle provides access certification, separation of duties enforcement, and detailed audit trails. This helps organizations meet regulatory requirements like SOX, HIPAA, GDPR, and industry-specific compliance mandates.',
    },
    {
      question: 'Can RSA integrate with our existing identity systems?',
      answer:
        'Yes, RSA offers extensive integration capabilities with existing identity providers, directories (Active Directory, LDAP), HR systems, and enterprise applications. The platform supports standard protocols like SAML, OIDC, and SCIM.',
    },
    {
      question: 'Does Pirlanta provide managed services for RSA deployments?',
      answer:
        'Yes, we offer comprehensive managed services including deployment, configuration, ongoing maintenance, policy management, and 24/7 support for RSA implementations under defined SLAs.',
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
      { threshold: 0.25 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <main className="partner-page relative overflow-hidden pt-24">
      <section className="partner-hero live-hero rsa-hero relative">
        <HeroLiveBackground />
        <div className="partner-hero-content rsa-hero-content w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="rsa-hero-logo rsa-hero-fade rsa-hero-fade-1">
            <img
              src="/partners/RSA_Security-Logo.wine.png"
              alt="RSA"
              className="rsa-hero-logo-img"
            />
          </div>
          <span className="pill pill--tight rsa-hero-pill rsa-hero-fade rsa-hero-fade-2">
            RSA Identity & Access Security Partner
          </span>
          <h1 className="rsa-hero-title rsa-hero-fade rsa-hero-fade-3">
            RSA <span className="rsa-hero-accent">Partner</span>
          </h1>
          <p className="rsa-hero-kicker rsa-hero-fade rsa-hero-fade-4">
            Identity-First Security for a Zero-Trust World
          </p>
          <p className="rsa-hero-copy rsa-hero-fade rsa-hero-fade-5">
            As an RSA Partner, we deliver identity-first security solutions—from modern authentication and SSO to comprehensive identity governance and lifecycle management.
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
                Why Pirlanta for RSA?
              </h2>
              <p className="cisco-why-subtitle cisco-why-fade cisco-why-delay-2">
                Our RSA partnership combines deep identity security expertise with practical experience across
                enterprise authentication, access management, and governance. We focus on Zero Trust implementations
                that secure your workforce and applications.
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
              <div className="partner-logo partner-logo--small rsa-logo" aria-label="RSA">
                <img src="/partners/RSA_Security-Logo.wine.png" alt="RSA" />
              </div>
              <h3>RSA Identity Partner</h3>
              <p>
                Recognized for expertise in designing and deploying RSA identity security solutions for Zero Trust and
                compliance requirements.
              </p>
              <div className="cisco-badges">
                <div>
                  <strong>Identity</strong>
                  <span>Specialized</span>
                </div>
                <div>
                  <strong>Zero Trust</strong>
                  <span>Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">RSA Solutions We Deliver</h2>
          <p className="mt-2 text-sm text-slate-500">
            Comprehensive RSA implementations spanning authentication, access management, and identity governance.
          </p>
          <div className="cisco-solution-grid mt-10">
            {solutions.map((item) => (
              <div key={item.title} className="cyber-cap-card cisco-solution-card">
                <div className="cyber-cap-icon" aria-hidden="true">
                  {item.icon === 'layers' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect x="4" y="4" width="16" height="5" rx="1" stroke="currentColor" strokeWidth="2" />
                      <rect x="4" y="11" width="16" height="5" rx="1" stroke="currentColor" strokeWidth="2" />
                      <rect x="4" y="18" width="16" height="5" rx="1" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {item.icon === 'lock' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M8 11V8a4 4 0 1 1 8 0v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'sso' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="8" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="2" />
                      <path d="M15 12h6M18 9v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'shield' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {item.icon === 'governance' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                      <circle cx="15" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                      <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'chart' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" />
                      <path d="M7 16v-5M12 16v-9M17 16v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'lifecycle' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M3 3v5h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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
        className={`section-light rsa-use-section${useCasesVisible ? ' is-visible' : ''}`}
      >
        <div className="rsa-use-wrapper mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="rsa-use-title rsa-use-reveal" style={{ '--delay': '0s' } as CSSProperties}>
            Common Use Cases
          </h2>
          <p className="rsa-use-subtitle rsa-use-reveal" style={{ '--delay': '0.08s' } as CSSProperties}>
            How enterprises leverage our RSA expertise.
          </p>
          <div className="rsa-use-grid">
            {useCases.map((item, index) => (
              <div
                key={item.title}
                className="rsa-use-reveal"
                style={{ '--delay': `${0.16 + index * 0.08}s` } as CSSProperties}
              >
                <div className="cyber-cap-card rsa-use-card">
                  <div className="cyber-cap-icon" aria-hidden="true">
                    {item.icon === 'globe' && (
                      <svg viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    )}
                  {item.icon === 'fingerprint' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M4 10a8 8 0 0 1 16 0v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M7 10a5 5 0 0 1 10 0v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M10 10a2 2 0 0 1 4 0v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M8 15v3M16 15v3M12 16v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                    {item.icon === 'clipboard' && (
                      <svg viewBox="0 0 24 24" fill="none">
                        <rect x="8" y="4" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                        <path d="M16 4V2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" strokeWidth="2" />
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    )}
                  {item.icon === 'user-gear' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="8.5" cy="7.5" r="3.5" stroke="currentColor" strokeWidth="2" />
                      <path d="M2.5 20v-1.5a6 6 0 0 1 12 0V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="17.5" cy="16" r="2.5" stroke="currentColor" strokeWidth="2" />
                      <path d="M17.5 12.5v1.2M17.5 19.3v1.2M14.8 16h1.2M19.8 16H21M15.7 13.9l.9.9M19 18.2l.9.9M15.7 18.1l.9-.9M19 13.8l.9-.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                    {item.icon === 'cloud' && (
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M6 18a4 4 0 0 1 1-7 5 5 0 0 1 9 2h1a3 3 0 0 1 0 6H6z" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    )}
                  {item.icon === 'building' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="5" width="10" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                      <rect x="13" y="9" width="8" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M6 8h2v2H6zM9 8h2v2H9zM6 12h2v2H6zM9 12h2v2H9zM6 16h2v2H6zM9 16h2v2H9z" stroke="currentColor" strokeWidth="2" />
                      <path d="M15.5 12h2v2h-2zM15.5 16h2v2h-2z" stroke="currentColor" strokeWidth="2" />
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
            <h2 className="cisco-faq-title">RSA FAQs</h2>
            <p className="cisco-faq-subtitle">
              Common questions about our RSA partnership and identity security services.
            </p>
            <a href="/contact">
              <button className="cisco-faq-button">
                Ask a Question
              </button>
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

      <section className="section-dark section-dark--cta">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-white">
            Ready to Secure Identity Across Your Enterprise?
          </h2>
          <p className="mt-3 text-sm text-emerald-100/70">
            Let&apos;s discuss how RSA identity solutions can enable Zero Trust security and streamline access management for your organization.
          </p>
          <a
            className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-600"
            href="/contact"
          >
            Contact Us →
          </a>
          <SiteFooter />
        </div>
      </section>
    </main>
  )
}
