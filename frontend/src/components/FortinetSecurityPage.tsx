import { useState } from 'react'
import AntigravityBackground from './AntigravityBackground'
import SiteFooter from './SiteFooter'

export default function FortinetSecurityPage() {
  const whyPoints = [
    'Authorized Fortinet Partner with Security Fabric expertise',
    'Unified security architecture reducing complexity and gaps',
    'High-performance solutions with industry-leading throughput',
    'Integration across network, endpoint, and cloud security',
    'Local implementation and managed services support',
  ]

  const solutions = [
    {
      title: 'FortiGate Next-Gen Firewall',
      copy: 'Industry-leading NGFW with integrated security and high-performance throughput.',
      bullets: ['Advanced threat protection', 'SSL/TLS inspection', 'Application control', 'Intrusion prevention (IPS)'],
      icon: 'shield',
    },
    {
      title: 'FortiMail Email Security',
      copy: 'Comprehensive email protection against phishing, malware, and spam.',
      bullets: ['Anti-spam & anti-phishing', 'Outbreak protection', 'Data loss prevention', 'Email encryption'],
      icon: 'email',
    },
    {
      title: 'Fortinet Security Fabric',
      copy: 'Integrated security architecture connecting all Fortinet solutions.',
      bullets: ['Unified visibility', 'Automated response', 'Fabric connectors', 'Single pane of glass'],
      icon: 'fabric',
    },
    {
      title: 'FortiAP Secure Wireless',
      copy: 'Enterprise wireless with integrated security and management.',
      bullets: ['Wi-Fi 6/6E support', 'WIPS integration', 'Centralized management', 'Guest access control'],
      icon: 'wifi',
    },
    {
      title: 'FortiSASE & SD-WAN',
      copy: 'Secure access and optimized connectivity for distributed enterprises.',
      bullets: ['Secure SD-WAN', 'ZTNA as a service', 'Cloud-delivered security', 'Application optimization'],
      icon: 'cloud',
    },
    {
      title: 'FortiEDR & FortiXDR',
      copy: 'Endpoint protection and extended detection with automated response.',
      bullets: ['Pre & post-infection protection', 'Automated playbooks', 'Cross-product correlation', 'Threat intelligence'],
      icon: 'lock',
    },
  ]

  const useCases = [
    {
      title: 'Perimeter Consolidation',
      copy: 'Replace multiple point products with FortiGate NGFW for unified security, better performance, and simplified management.',
      icon: 'shield',
    },
    {
      title: 'Secure Branch Connectivity',
      copy: 'Deploy Secure SD-WAN for optimized, secure connectivity across distributed locations with integrated NGFW security.',
      icon: 'network',
    },
    {
      title: 'Data Centre Security',
      copy: 'Protect data centre workloads with high-performance FortiGate appliances and micro-segmentation.',
      icon: 'datacenter',
    },
  ]

  const faqs = [
    'What Fortinet solutions does Pirlanta implement?',
    'What is the Fortinet Security Fabric?',
    'Can FortiGate replace our existing firewall?',
    'Do you provide FortiMail email security?',
    'Can Fortinet secure our SD-WAN deployment?',
    'Do you offer managed services for Fortinet?',
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="partner-page relative overflow-hidden pt-24">
      <section className="partner-hero relative">
        <div className="partner-hero-content mx-auto max-w-7xl px-6 py-24 relative">
          <AntigravityBackground className="hero-antigravity" />
          <div className="partner-logo fortinet-logo" aria-label="Fortinet">
            <img src="/partners/fortinet-logo.svg" alt="Fortinet" />
          </div>
          <span className="pill pill--tight">Authorized Fortinet Partner</span>
          <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
            Fortinet <span className="ai-accent">Partner</span>
          </h1>
          <p className="mt-3 text-sm text-emerald-100/70 md:text-base">
            Security Fabric for Complete Protection
          </p>
          <p className="mt-4 max-w-2xl text-sm text-emerald-100/60 md:text-base">
            As an Authorized Fortinet Partner, we deliver integrated security solutions—from next-generation firewalls to SD-WAN and endpoint protection through the Fortinet Security Fabric.
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

      <section className="section-light">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">Why Pirlanta for Fortinet?</h2>
            <p className="mt-2 text-sm text-slate-500">
              Our Fortinet partnership enables us to deliver the complete Security Fabric, providing integrated protection across network, endpoint, and cloud with unified visibility and automated response.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-slate-600">
              {whyPoints.map((point) => (
                <div key={point} className="cisco-point">
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
          <div className="cisco-card">
            <div className="partner-logo partner-logo--small fortinet-logo" aria-label="Fortinet">
              <img src="/partners/fortinet-logo.svg" alt="Fortinet" />
            </div>
            <h3>Authorized Fortinet Partner</h3>
            <p>
              Certified to implement and support the complete Fortinet Security Fabric portfolio for enterprise protection.
            </p>
            <div className="cisco-badges">
              <div>
                <strong>NGFW</strong>
                <span>Certified</span>
              </div>
              <div>
                <strong>SD-WAN</strong>
                <span>Specialized</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Fortinet Solutions We Deliver</h2>
          <p className="mt-2 text-sm text-slate-500">
            Comprehensive security through the integrated Fortinet Security Fabric.
          </p>
          <div className="cisco-solution-grid mt-10">
            {solutions.map((item) => (
              <div key={item.title} className="cyber-cap-card cisco-solution-card">
                <div className="cyber-cap-icon" aria-hidden="true">
                  {item.icon === 'shield' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {item.icon === 'email' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M22 6L12 13 2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'fabric' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect x="4" y="4" width="16" height="5" rx="1" stroke="currentColor" strokeWidth="2" />
                      <rect x="4" y="11" width="16" height="5" rx="1" stroke="currentColor" strokeWidth="2" />
                      <rect x="4" y="18" width="16" height="5" rx="1" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {item.icon === 'wifi' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M4 10c4-4 12-4 16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M7 13c3-3 7-3 10 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M10 16c2-2 4-2 6 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="12" cy="19" r="1" fill="currentColor" />
                    </svg>
                  )}
                  {item.icon === 'cloud' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M6 18a4 4 0 0 1 1-7 5 5 0 0 1 9 2h1a3 3 0 0 1 0 6H6z" stroke="currentColor" strokeWidth="2" />
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

      <section className="section-light">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Common Use Cases</h2>
          <p className="mt-2 text-sm text-slate-500">
            How enterprises leverage Fortinet through Pirlanta.
          </p>
          <div className="cisco-use-grid mt-10">
            {useCases.map((item) => (
              <div key={item.title} className="cyber-cap-card">
                <div className="cyber-cap-icon" aria-hidden="true">
                  {item.icon === 'shield' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {item.icon === 'network' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="6" r="2" stroke="currentColor" strokeWidth="2" />
                      <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
                      <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 8v4M10 14h4M8 16l4-4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'datacenter' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect x="4" y="5" width="16" height="6" rx="2" stroke="currentColor" strokeWidth="2" />
                      <rect x="4" y="13" width="16" height="6" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M8 8h.01M8 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                </div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">Fortinet FAQs</h2>
            <p className="mt-3 text-sm text-slate-500">
              Common questions about Fortinet Security Fabric, FortiGate, and our implementation services.
            </p>
            <a href="/contact">
              <button className="mt-6 rounded-full border border-emerald-200 px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300">
                Ask a Question
              </button>
            </a>
          </div>
          <div className="cyber-faq">
            {faqs.map((question, index) => {
              const isOpen = openFaq === index
              return (
                <button
                  key={question}
                  className={`cyber-faq-item ${isOpen ? 'cyber-faq-item--open' : ''}`}
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  type="button"
                >
                  <span>{question}</span>
                  <span className="faq-toggle">▾</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-dark section-dark--cta">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-white">
            Ready for Integrated Security Fabric?
          </h2>
          <p className="mt-3 text-sm text-emerald-100/70">
            Let&apos;s discuss how Fortinet Security Fabric can unify your security, reduce complexity, and strengthen your defenses.
          </p>
          <a
            className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-600"
            href="/contact"
          >
            Schedule Consultation →
          </a>
          <SiteFooter />
        </div>
      </section>
    </main>
  )
}
