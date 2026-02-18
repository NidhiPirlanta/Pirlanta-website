import { useState } from 'react'
import { Link } from 'react-router-dom'
import AntigravityBackground from './AntigravityBackground'
import SiteFooter from './SiteFooter'

export default function BarracudaSecurityPage() {
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
    'What email security solutions does Pirlanta offer with Barracuda?',
    'Can Barracuda protect Microsoft 365 environments?',
    'What is Barracuda XDR and how does it work?',
    'Do you provide backup for cloud applications?',
    'How does Barracuda Zero Trust Access differ from VPN?',
    'Can you protect web applications with Barracuda WAF?',
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="partner-page relative overflow-hidden pt-24">
      <section className="partner-hero relative">
        <div className="partner-hero-content mx-auto max-w-7xl px-6 py-24 relative">
          <AntigravityBackground className="hero-antigravity" />
          <div className="partner-logo barracuda-logo" aria-label="Barracuda">
            <span>Barracuda</span>
          </div>
          <span className="pill pill--tight">Barracuda Certified Partner</span>
          <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
            Barracuda <span className="ai-accent">Partner</span>
          </h1>
          <p className="mt-3 text-sm text-emerald-100/70 md:text-base">
            Email Security, XDR &amp; Cloud Backup
          </p>
          <p className="mt-4 max-w-2xl text-sm text-emerald-100/60 md:text-base">
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

      <section className="section-light">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">Why Pirlanta for Barracuda?</h2>
            <p className="mt-2 text-sm text-slate-500">
              Our Barracuda partnership enables us to deliver comprehensive email security, data protection,
              and XDR solutions with cloud-native simplicity and AI-powered threat detection.
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
            <div className="partner-logo partner-logo--small barracuda-logo" aria-label="Barracuda">
              <span>Barracuda</span>
            </div>
            <h3>Barracuda Certified Partner</h3>
            <p>
              Certified to implement and support the full Barracuda portfolio including email, backup, and security solutions.
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

      <section className="section-light">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Common Use Cases</h2>
          <p className="mt-2 text-sm text-slate-500">
            How enterprises leverage Barracuda through Pirlanta.
          </p>
          <div className="cisco-use-grid mt-10">
            {useCases.map((item) => (
              <div key={item.title} className="cyber-cap-card">
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
            ))}
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">Barracuda FAQs</h2>
            <p className="mt-3 text-sm text-slate-500">
              Common questions about Barracuda email security, XDR, and backup solutions.
            </p>
            <Link to="/contact">
              <button className="mt-6 rounded-full border border-emerald-200 px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300">
                Ask a Question
              </button>
            </Link>
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
