import { useState } from 'react'
import AntigravityBackground from './AntigravityBackground'

export default function ForcepointSecurityPage() {
  const whyPoints = [
    'Unified data security with single policy across cloud, web, email, and endpoint',
    'AI-native classification and discovery for sensitive data protection',
    'Data-first approach that adapts to how employees interact with information',
    'Comprehensive visibility into data movement across all channels',
    'Simplified compliance with pre-built regulatory templates',
  ]

  const solutions = [
    {
      title: 'Data Loss Prevention (DLP)',
      copy: 'Prevent unauthorized data exfiltration across all channels with unified policies.',
      bullets: ['Cross-channel policy enforcement', 'Content-aware inspection', 'Endpoint, cloud & network DLP', 'Regulatory compliance support'],
      icon: 'lock',
      featured: false,
    },
    {
      title: 'Data Security Posture Management',
      copy: 'Discover, classify, and protect sensitive data with AI-powered insights.',
      bullets: ['AI-driven data discovery', 'Automated classification', 'Risk prioritization', 'Posture remediation'],
      icon: 'database',
      featured: false,
    },
    {
      title: 'Cloud Access Security Broker',
      copy: 'Secure data in cloud applications with visibility and control.',
      bullets: ['Shadow IT discovery', 'Cloud app governance', 'Inline & API protection', 'SaaS security posture'],
      icon: 'cloud',
      featured: false,
    },
    {
      title: 'Secure Web Gateway',
      copy: 'Protect users and data on the web with advanced threat prevention.',
      bullets: ['URL & content filtering', 'Malware protection', 'SSL/TLS inspection', 'Remote browser isolation'],
      icon: 'globe',
      featured: false,
    },
    {
      title: 'Email Security & DLP',
      copy: 'Prevent sensitive data loss through email with intelligent protection.',
      bullets: ['Outbound email DLP', 'Attachment inspection', 'Policy-based encryption', 'Compliance enforcement'],
      icon: 'email',
      featured: false,
    },
    {
      title: 'Next-Gen Firewall (NGFW)',
      copy: 'Network security with integrated SD-WAN and advanced threat prevention.',
      bullets: ['Application control', 'Intrusion prevention', 'SD-WAN integration', 'Centralized management'],
      icon: 'shield',
      featured: true,
    },
  ]

  const useCases = [
    {
      title: 'Data Visibility & Protection',
      copy: 'Discover where sensitive data resides, classify it automatically, and enforce protection policies across all channels.',
      icon: 'eye',
    },
    {
      title: 'Insider Threat Prevention',
      copy: 'Monitor user behavior and data interactions to detect and prevent insider threats before data leaves the organization.',
      icon: 'users',
    },
    {
      title: 'Compliance Automation',
      copy: 'Automate compliance with pre-built templates for GDPR, HIPAA, PCI-DSS, and industry-specific regulations.',
      icon: 'fingerprint',
    },
  ]

  const faqs = [
    "What is Forcepoint's data-first approach to security?",
    'How does Forcepoint DLP differ from traditional solutions?',
    'What is Data Security Posture Management (DSPM)?',
    'Can Forcepoint protect data in cloud applications?',
    'Does Forcepoint offer insider threat protection?',
    'How does Forcepoint help with compliance?',
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="partner-page relative overflow-hidden pt-24">
      {/* Hero Section */}
      <section className="partner-hero relative">
        <div className="partner-hero-content mx-auto max-w-7xl px-6 py-24">
          <AntigravityBackground className="hero-antigravity" />
          <div className="partner-logo flex items-center justify-center rounded-lg bg-white/10 px-4 py-2 text-white font-bold tracking-wider">
            Forcepoint
          </div>
          <span className="pill pill--tight mt-3 inline-block rounded border border-emerald-500/60 bg-slate-800 px-4 py-1.5 text-sm font-medium text-white">
            Forcepoint Partner
          </span>
          <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
            Forcepoint <span className="ai-accent">Partner</span>
          </h1>
          <p className="mt-3 text-emerald-300">Data-First Security for the Modern Enterprise</p>
          <p className="mt-4 max-w-2xl text-sm text-emerald-100/60 md:text-base">
            As a Forcepoint Partner, we deliver AI-native data security solutions—from unified DLP and CASB to DSPM and Secure Web Gateway—protecting your sensitive data across every channel.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[1px]">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px] fill-white">
            <path d="M0,0 Q600,120 1200,0 L1200,120 L0,120 Z" className="fill-white" />
          </svg>
        </div>
      </section>

      {/* Why Pirlanta for Forcepoint */}
      <section className="section-light">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">Why Pirlanta for Forcepoint?</h2>
            <p className="mt-2 text-sm text-slate-500">
              Our Forcepoint partnership enables comprehensive data protection with a unified platform that secures sensitive information across cloud, web, email, endpoint, and network—without slowing down your business.
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
          <div className="cisco-card rounded-2xl border border-slate-200 bg-slate-50/50 p-8 shadow-sm">
            <div className="partner-logo partner-logo--small flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 font-bold tracking-wider text-slate-900">
              Forcepoint
            </div>
            <h3 className="mt-4 text-xl font-semibold text-slate-900">Forcepoint Partner</h3>
            <p className="mt-2 text-sm text-slate-600">
              Delivering data-first security solutions that protect sensitive information wherever it resides and moves.
            </p>
            <div className="mt-6 flex gap-4">
              <div className="flex-1 rounded-lg border-2 border-emerald-600 bg-white p-4 text-center">
                <strong className="block text-emerald-700">DLP</strong>
                <span className="text-sm text-slate-600">Unified</span>
              </div>
              <div className="flex-1 rounded-lg border-2 border-emerald-600 bg-white p-4 text-center">
                <strong className="block text-emerald-700">CASB</strong>
                <span className="text-sm text-slate-600">Cloud Security</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forcepoint Solutions We Deliver */}
      <section className="section-light">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Forcepoint Solutions We Deliver</h2>
          <p className="mt-2 text-sm text-slate-500">
            Comprehensive data security across cloud, web, email, and network.
          </p>
          <div className="cisco-solution-grid mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item) => (
              <div
                key={item.title}
                className={`cyber-cap-card cisco-solution-card rounded-xl border p-6 text-left ${
                  item.featured
                    ? 'border-emerald-600 bg-emerald-600 text-white shadow-lg shadow-emerald-600/20'
                    : 'border-slate-200 bg-white'
                }`}
              >
                <div className={`cyber-cap-icon mb-4 ${item.featured ? 'text-white' : 'text-emerald-600'}`}>
                  {item.icon === 'lock' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                      <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M8 11V8a4 4 0 1 1 8 0v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'database' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                      <ellipse cx="12" cy="12" rx="8" ry="4" stroke="currentColor" strokeWidth="2" />
                      <path d="M4 12v4c0 2.2 3.6 4 8 4s8-1.8 8-4v-4" stroke="currentColor" strokeWidth="2" />
                      <path d="M4 8c0 2.2 3.6 4 8 4s8-1.8 8-4" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {item.icon === 'cloud' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {item.icon === 'globe' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {item.icon === 'email' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M22 6L12 13 2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'shield' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                </div>
                <h3 className={`text-lg font-semibold ${item.featured ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
                <p className={`mt-2 text-sm ${item.featured ? 'text-white/90' : 'text-slate-600'}`}>{item.copy}</p>
                <ul className={`mt-3 space-y-1 text-sm ${item.featured ? 'text-white/80' : 'text-slate-500'}`}>
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2">
                      <span className={item.featured ? 'text-white' : 'text-emerald-600'}>•</span> {bullet}
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
            How enterprises leverage Forcepoint data-first security.
          </p>
          <div className="cisco-use-grid mt-10 grid gap-6 sm:grid-cols-3">
            {useCases.map((item) => (
              <div key={item.title} className="cyber-cap-card rounded-xl border border-slate-200 bg-white p-6 text-left">
                <div className="cyber-cap-icon mb-4 text-emerald-600">
                  {item.icon === 'eye' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                      <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6z" stroke="currentColor" strokeWidth="2" />
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {item.icon === 'users' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'fingerprint' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                      <path d="M12 11c2.2 0 4-1.8 4-4V5a4 4 0 0 0-8 0v2c0 2.2 1.8 4 4 4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M12 14v6M9 17h6v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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

      {/* Forcepoint FAQs */}
      <section className="section-light">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">Forcepoint FAQs</h2>
            <p className="mt-3 text-sm text-slate-500">
              Common questions about Forcepoint data security solutions.
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
                      Contact us to learn more about our Forcepoint data security implementation and support services.
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
            Ready for Data-First Security?
          </h2>
          <p className="mt-3 text-sm text-emerald-100/70">
            Let&apos;s discuss how Forcepoint solutions can protect your sensitive data across cloud, web, and endpoint.
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
