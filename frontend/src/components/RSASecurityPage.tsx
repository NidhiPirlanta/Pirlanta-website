import { useState } from 'react'

export default function RSASecurityPage() {
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
      icon: 'users',
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
    'What is the RSA Unified Identity Platform?',
    'Can RSA help us go passwordless?',
    'Does RSA support hybrid and multi-cloud environments?',
    'How does RSA help with compliance requirements?',
    'Can RSA integrate with our existing identity systems?',
    'Does Pirlanta provide managed services for RSA deployments?',
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="partner-page relative overflow-hidden pt-24">
      {/* Hero Section */}
      <section className="partner-hero relative">
        <div className="partner-hero-content mx-auto max-w-7xl px-6 py-24">
          <span className="pill pill--tight inline-block rounded bg-slate-600/80 px-4 py-1.5 text-sm font-medium text-slate-200">
            RSA Identity & Access Security Partner
          </span>
          <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
            RSA <span className="ai-accent">Partner</span>
          </h1>
          <p className="mt-3 text-emerald-300">Identity-First Security for a Zero-Trust World</p>
          <p className="mt-4 max-w-2xl text-sm text-emerald-100/60 md:text-base">
            As an RSA Partner, we deliver identity-first security solutions—from modern authentication and SSO to comprehensive identity governance and lifecycle management.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[1px]">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px] fill-white">
            <path d="M0,0 Q600,120 1200,0 L1200,120 L0,120 Z" className="fill-white" />
          </svg>
        </div>
      </section>

      {/* Why Pirlanta for RSA */}
      <section className="section-light">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">Why Pirlanta for RSA?</h2>
            <p className="mt-2 text-sm text-slate-500">
              Our RSA partnership combines deep identity security expertise with practical experience across enterprise authentication, access management, and governance. We focus on Zero Trust implementations that secure your workforce and applications.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-slate-600">
              {whyPoints.map((point) => (
                <div key={point} className="cisco-point flex items-start gap-3">
                  <span className="benefit-icon mt-0.5 shrink-0 text-emerald-600">
                    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="cisco-card rounded-2xl border border-slate-200 bg-emerald-50/30 p-8 shadow-sm">
            <div className="partner-logo partner-logo--small flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 font-bold text-red-600">
              RSA
            </div>
            <h3 className="mt-4 text-xl font-semibold text-slate-900">RSA Identity Partner</h3>
            <p className="mt-2 text-sm text-slate-600">
              Recognized for expertise in designing and deploying RSA identity security solutions for Zero Trust and compliance requirements.
            </p>
            <div className="mt-6 flex gap-4">
              <div className="flex-1 rounded-lg border-2 border-emerald-600 bg-white p-4 text-center">
                <strong className="block text-emerald-700">Identity</strong>
                <span className="text-sm text-slate-600">Specialized</span>
              </div>
              <div className="flex-1 rounded-lg border-2 border-emerald-600 bg-white p-4 text-center">
                <strong className="block text-emerald-700">Zero Trust</strong>
                <span className="text-sm text-slate-600">Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RSA Solutions We Deliver */}
      <section className="section-light">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">RSA Solutions We Deliver</h2>
          <p className="mt-2 text-sm text-slate-500">
            Comprehensive RSA implementations spanning authentication, access management, and identity governance.
          </p>
          <div className="cisco-solution-grid mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item) => (
              <div key={item.title} className="cyber-cap-card cisco-solution-card rounded-xl border border-slate-200 bg-white p-6 text-left">
                <div className="cyber-cap-icon mb-4 text-emerald-600">
                  {item.icon === 'layers' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                      <rect x="4" y="4" width="16" height="5" rx="1" stroke="currentColor" strokeWidth="2" />
                      <rect x="4" y="11" width="16" height="5" rx="1" stroke="currentColor" strokeWidth="2" />
                      <rect x="4" y="18" width="16" height="5" rx="1" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {item.icon === 'lock' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                      <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M8 11V8a4 4 0 1 1 8 0v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'sso' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                      <rect x="3" y="8" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="2" />
                      <path d="M15 12h6M18 9v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'shield' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {item.icon === 'governance' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                      <circle cx="15" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                      <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'chart' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                      <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" />
                      <path d="M7 16v-5M12 16v-9M17 16v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'lifecycle' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M3 3v5h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.copy}</p>
                <ul className="mt-3 space-y-1 text-sm text-slate-500">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2">
                      <span className="text-emerald-600">•</span> {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Use Cases */}
      <section className="section-light">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Common Use Cases</h2>
          <p className="mt-2 text-sm text-slate-500">
            How enterprises leverage our RSA expertise.
          </p>
          <div className="cisco-use-grid mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item) => (
              <div key={item.title} className="cyber-cap-card rounded-xl border border-slate-200 bg-white p-6 text-left">
                <div className="cyber-cap-icon mb-4 text-emerald-600">
                  {item.icon === 'globe' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {item.icon === 'fingerprint' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                      <path d="M12 11a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 17v4M8 21h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M12 2v2M4.93 4.93l1.41 1.41M2 12h2M4.93 19.07l1.41-1.41M12 22v-2M19.07 4.93l-1.41 1.41M22 12h-2M19.07 19.07l-1.41-1.41" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {item.icon === 'clipboard' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                      <rect x="8" y="4" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M16 4V2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" strokeWidth="2" />
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'users' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                      <circle cx="15" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                      <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'cloud' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {item.icon === 'building' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                      <rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M9 6h2v2H9zM13 6h2v2h-2zM9 10h2v2H9zM13 10h2v2h-2zM9 14h2v2H9zM13 14h2v2h-2z" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RSA FAQs */}
      <section className="section-light">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">RSA FAQs</h2>
            <p className="mt-3 text-sm text-slate-500">
              Common questions about our RSA partnership and identity security services.
            </p>
            <a href="/contact" className="mt-6 inline-block rounded-full border-2 border-emerald-600 bg-emerald-50 px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100">
              Ask a Question
            </a>
          </div>
          <div className="cyber-faq space-y-2">
            {faqs.map((question, index) => {
              const isOpen = openFaq === index
              return (
                <button
                  key={question}
                  className={`cyber-faq-item w-full rounded-lg border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:border-emerald-200 hover:bg-slate-50 ${isOpen ? 'border-emerald-300 bg-emerald-50/50' : ''}`}
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  type="button"
                >
                  <span className="flex items-center justify-between">
                    {question}
                    <span className={`ml-2 shrink-0 text-emerald-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>▾</span>
                  </span>
                  {isOpen && (
                    <p className="mt-2 text-xs text-slate-500">
                      Contact us to learn more about our RSA identity solutions and implementation services.
                    </p>
                  )}
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
        </div>
      </section>
    </main>
  )
}
