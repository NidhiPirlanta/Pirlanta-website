import { useState } from 'react'
import AntigravityBackground from './AntigravityBackground'

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
      {/* Hero Section */}
      <section className="partner-hero barracuda-hero relative">
        <div className="partner-hero-content barracuda-hero-content mx-auto max-w-7xl px-6 py-24">
          <AntigravityBackground className="hero-antigravity" />
          <div className="barracuda-hero-logo" aria-label="Barracuda">
            <svg viewBox="0 0 120 60" aria-hidden="true">
              <path d="M6 54L30 6l24 48H6z" fill="currentColor" />
              <path d="M56 54l12-24 12 24H56z" fill="currentColor" />
            </svg>
            <span className="barracuda-wordmark">Barracuda.</span>
          </div>
          <span className="pill pill--tight barracuda-hero-pill">Barracuda Certified Partner</span>
          <h1 className="barracuda-hero-title">
            Barracuda <span className="barracuda-hero-accent">Partner</span>
          </h1>
          <p className="barracuda-hero-kicker">Email Security, XDR & Cloud Backup</p>
          <p className="barracuda-hero-description">
            As a Barracuda Certified Partner, we deliver integrated email protection, extended
            detection and response, and cloud backup solutions for modern enterprises.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[1px]">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px] fill-white">
            <path d="M0,0 Q600,120 1200,0 L1200,120 L0,120 Z" className="fill-white" />
          </svg>
        </div>
      </section>

      {/* Why Pirlanta for Barracuda */}
      <section className="section-light barracuda-why-section">
        <div className="barracuda-why-wrapper mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="barracuda-why-copy">
            <h2 className="barracuda-why-title">Why Pirlanta for Barracuda?</h2>
            <p className="barracuda-why-subtitle">
              Our Barracuda partnership enables us to deliver comprehensive email security, data protection,
              and XDR solutions with cloud-native simplicity and AI-powered threat detection.
            </p>
            <div className="barracuda-why-list">
              {whyPoints.map((point) => (
                <div key={point} className="barracuda-why-item">
                  <span className="barracuda-why-icon" aria-hidden="true">
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
          <div className="barracuda-why-card">
            <div className="barracuda-why-logo" aria-label="Barracuda">
              <svg viewBox="0 0 120 60" aria-hidden="true">
                <path d="M6 54L30 6l24 48H6z" fill="currentColor" />
                <path d="M56 54l12-24 12 24H56z" fill="currentColor" />
              </svg>
              <span className="barracuda-wordmark">Barracuda.</span>
            </div>
            <h3>Barracuda Certified Partner</h3>
            <p>
              Certified to implement and support the full Barracuda portfolio including email, backup, and security solutions.
            </p>
            <div className="barracuda-why-badges">
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

      {/* Barracuda Solutions We Deliver */}
      <section className="section-light barracuda-solutions-section">
        <div className="barracuda-solutions-wrapper mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="barracuda-solutions-title">Barracuda Solutions We Deliver</h2>
          <p className="barracuda-solutions-subtitle">
            Comprehensive security and data protection across email, cloud, and applications.
          </p>
          <div className="barracuda-solutions-grid">
            {solutions.map((item) => (
              <div key={item.title} className="barracuda-solution-card">
                <div className="barracuda-solution-icon" aria-hidden="true">
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
                <ul className="barracuda-solution-list">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Use Cases */}
      <section className="section-light barracuda-use-section">
        <div className="barracuda-use-wrapper mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="barracuda-use-title">Common Use Cases</h2>
          <p className="barracuda-use-subtitle">
            How enterprises leverage Barracuda through Pirlanta.
          </p>
          <div className="barracuda-use-grid">
            {useCases.map((item) => (
              <div key={item.title} className="barracuda-use-card">
                <div className="barracuda-use-icon" aria-hidden="true">
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

      {/* Barracuda FAQs */}
      <section className="section-light cyber-faq-section">
        <div className="cyber-faq-wrapper mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="cyber-faq-copy">
            <h2 className="cyber-faq-title">Barracuda FAQs</h2>
            <p className="cyber-faq-subtitle">
              Common questions about Barracuda email security, XDR, and backup solutions.
            </p>
            <a href="/contact" className="cyber-faq-button">
              Ask a Question
            </a>
          </div>
          <div className="cyber-faq">
            {faqs.map((question, index) => {
              const isOpen = openFaq === index
              return (
                <div key={question} className={`cyber-faq-block ${isOpen ? 'cyber-faq-block--open' : ''}`}>
                  <button
                    className="cyber-faq-trigger"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    type="button"
                  >
                    <span>{question}</span>
                    <span className="faq-toggle">▾</span>
                  </button>
                  <div className={`cyber-faq-answer ${isOpen ? 'cyber-faq-answer--open' : ''}`}>
                    <p>
                      Contact us to learn more about our Barracuda solutions and how they can benefit your organization.
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-dark section-dark--cta relative overflow-hidden bg-slate-900">
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-white">
            Ready for Comprehensive Email & Data Protection?
          </h2>
          <p className="mt-3 text-sm text-emerald-100/70">
            Let&apos;s discuss how Barracuda solutions can secure your email, protect your data, and simplify your security operations.
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
