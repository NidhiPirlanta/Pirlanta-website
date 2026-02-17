import { useState } from 'react'
import SiteFooter from '../components/SiteFooter'

export default function CybersecurityPage() {
  const resultStats = [
    { value: '85%', label: 'Reduction in MTTD', sub: 'Cisco XDR' },
    { value: '95%', label: 'Faster Response', sub: 'AI-Augmented SOC' },
    { value: '24×7', label: 'Monitoring', sub: 'Always On' },
    { value: '48+', label: 'Years Experience', sub: 'Combined Team' },
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

  const benefitItems = [
    'AI-driven threat detection catches what traditional tools miss—85% faster mean time to detect.',
    'Achieve compliance efficiently (PCI DSS 4.0, SEBI CSCRF, ISO 27001) with AI-assisted evidence mapping.',
    'Secure your AI-built applications with purpose-built audits for vibe-coded software.',
    'Minimize attack surface with AI-verified Zero Trust across hybrid and multi-cloud environments.',
    'Reduce analyst fatigue with ML-powered alert triage and automated response playbooks.',
  ]

  const cyberFaqs = [
    'What is included in MDR (Managed Detection & Response)?',
    'Do you provide Incident Response services?',
    'Can you deploy XDR (Extended Detection & Response) in India?',
    'Do you offer SIEM/SOC as a Service?',
    'How do you secure Microsoft 365 environments?',
    'Do you provide Zero Trust consulting?',
    'How fast is MDR deployment?',
    'How do you prove security outcomes?',
    'Can you integrate with our existing security tools?',
    'Do you support regulatory compliance requirements?',
  ]

  const [openCyberFaq, setOpenCyberFaq] = useState<number | null>(null)

  return (
    <main className="cyber-page relative overflow-hidden pt-24">
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
              <a href="/contact">
                <button className="rounded-full bg-emerald-700 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-600/40 transition hover:bg-emerald-600">
                  Get Started →
                </button>
              </a>
              <button className="rounded-full border border-emerald-200/40 px-7 py-3.5 text-base font-semibold text-emerald-100 transition hover:border-emerald-200">
                View Capabilities
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="hero-wave" aria-hidden="true" />

      <section className="section-dark section-dark--muted">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <span className="pill pill--tight">AI-Powered Outcomes</span>
          <h2 className="mt-4 text-3xl font-semibold text-white">Measurable Security Results</h2>
          <p className="mt-2 text-sm text-emerald-100/70">
            Powered by Cisco XDR, Fortinet FortiAI, and our expert implementation team.
          </p>
          <div className="cyber-stat-grid mt-10">
            {resultStats.map((stat) => (
              <div key={stat.value} className="cyber-stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
                <small>{stat.sub}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <span className="pill pill--tight">AI-Enhanced Security</span>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900">
            Cybersecurity Capabilities
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            AI-powered security coverage from threat detection to compliance auditing.
          </p>
          <div className="cyber-cap-grid mt-10">
            {capabilityCards.map((item) => (
              <div key={item.title} className="cyber-cap-card">
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
            ))}
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">Key Benefits</h2>
            <p className="mt-3 text-sm text-slate-500">
              Our cybersecurity services deliver measurable outcomes that protect your business
              and demonstrate compliance.
            </p>
            <a href="/contact">
              <button className="mt-6 rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-600">
                Schedule Assessment →
              </button>
            </a>
          </div>
          <div className="cyber-benefits">
            {benefitItems.map((item) => (
              <div key={item} className="cyber-benefit-card">
                <span className="benefit-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">Cybersecurity FAQs</h2>
            <p className="mt-3 text-sm text-slate-500">
              Common questions about our security services, MDR, compliance, and implementation.
            </p>
            <a href="/contact">
              <button className="mt-6 rounded-full border border-emerald-200 px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300">
                Ask a Question
              </button>
            </a>
          </div>
          <div className="cyber-faq">
            {cyberFaqs.map((question, index) => {
              const isOpen = openCyberFaq === index
              return (
                <button
                  key={question}
                  className={`cyber-faq-item ${isOpen ? 'cyber-faq-item--open' : ''}`}
                  onClick={() => setOpenCyberFaq(isOpen ? null : index)}
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
