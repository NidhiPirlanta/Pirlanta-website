import { useState } from 'react'
import AntigravityBackground from './AntigravityBackground'

export default function CrowdStrikeSecurityPage() {
  const whyPoints = [
    'CrowdStrike Partner with certified deployment and support expertise',
    'Single lightweight agent—no reboots, no performance impact, no signatures',
    'AI-native platform processing trillions of security events daily',
    'Unified protection across endpoint, identity, cloud, and data',
    'Local implementation with access to CrowdStrike threat intelligence',
  ]

  const solutions = [
    {
      title: 'Falcon Endpoint Protection',
      copy: 'AI-powered endpoint security with real-time threat prevention and detection.',
      bullets: ['Next-gen antivirus (NGAV)', 'Behavioral AI detection', 'Attack indicators (IOAs)', 'Automated threat response'],
      icon: 'shield',
    },
    {
      title: 'Falcon Identity Protection',
      copy: 'Detect and prevent identity-based attacks across Active Directory and cloud.',
      bullets: ['AD threat detection', 'Lateral movement prevention', 'Identity risk scoring', 'Conditional access policies'],
      icon: 'identity',
    },
    {
      title: 'Falcon Cloud Security',
      copy: 'Unified visibility and protection across multi-cloud and hybrid environments.',
      bullets: ['Cloud workload protection', 'Container security', 'Posture management (CSPM)', 'Runtime protection'],
      icon: 'cloud',
    },
    {
      title: 'Falcon LogScale (Next-Gen SIEM)',
      copy: 'Petabyte-scale log management with real-time threat detection and investigation.',
      bullets: ['Unlimited data retention', 'Sub-second search', 'Streaming analytics', 'Compliance reporting'],
      icon: 'logs',
    },
    {
      title: 'Falcon Data Protection',
      copy: 'Prevent data exfiltration and insider threats with unified data visibility.',
      bullets: ['Data loss prevention (DLP)', 'Insider threat detection', 'GenAI data leak prevention', 'Browser & app monitoring'],
      icon: 'lock',
    },
    {
      title: 'Falcon Exposure Management',
      copy: 'Continuous visibility into your attack surface with risk-based prioritization.',
      bullets: ['Vulnerability assessment', 'External attack surface', 'Risk prioritization', 'Remediation workflows'],
      icon: 'search',
    },
  ]

  const useCases = [
    {
      title: 'Ransomware Prevention',
      copy: 'Stop ransomware before execution with AI-powered behavioral detection that identifies attack patterns, not just known signatures.',
      icon: 'warning',
    },
    {
      title: 'Legacy AV Replacement',
      copy: 'Replace resource-heavy legacy antivirus with a single lightweight agent that delivers better protection with zero performance impact.',
      icon: 'chip',
    },
    {
      title: 'Unified Security Operations',
      copy: 'Consolidate endpoint, identity, cloud, and log data into a single platform for faster investigation and coordinated response.',
      icon: 'eye',
    },
  ]

  const faqs = [
    'What CrowdStrike solutions does Pirlanta implement?',
    'How does CrowdStrike differ from traditional antivirus?',
    'Can CrowdStrike protect our cloud workloads?',
    'Do you provide managed detection and response (MDR)?',
    'How does Falcon Identity Protection work?',
    'What is the deployment process like?',
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="partner-page relative overflow-hidden pt-24">
      {/* Hero Section */}
      <section className="partner-hero relative">
        <div className="partner-hero-content mx-auto max-w-7xl px-6 py-24">
          <AntigravityBackground className="hero-antigravity" />
          <div className="partner-logo flex items-center justify-center rounded-lg bg-white/10 px-4 py-2 text-white font-bold tracking-wider">
            CROWDSTRIKE
          </div>
          <span className="pill pill--tight mt-3 inline-block rounded border border-emerald-500/60 bg-slate-800 px-4 py-1.5 text-sm font-medium text-white">
            CrowdStrike Partner
          </span>
          <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
            CrowdStrike <span className="ai-accent">Partner</span>
          </h1>
          <p className="mt-3 text-emerald-300">AI-Native Cybersecurity Platform</p>
          <p className="mt-4 max-w-2xl text-sm text-emerald-100/60 md:text-base">
            As a CrowdStrike Partner, we deliver the unified Falcon platform—AI-powered endpoint protection, identity security, cloud workload defense, and next-gen SIEM through a single lightweight agent.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[1px]">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px] fill-white">
            <path d="M0,0 Q600,120 1200,0 L1200,120 L0,120 Z" className="fill-white" />
          </svg>
        </div>
      </section>

      {/* Why Pirlanta for CrowdStrike */}
      <section className="section-light">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">Why Pirlanta for CrowdStrike?</h2>
            <p className="mt-2 text-sm text-slate-500">
              Our CrowdStrike partnership combines certified expertise with practical experience deploying AI-native security across endpoints, identities, and cloud. We help organizations stop breaches with unified visibility and automated response.
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
            <div className="partner-logo partner-logo--small flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 font-bold tracking-wider text-slate-900">
              CROWDSTRIKE
            </div>
            <h3 className="mt-4 text-xl font-semibold text-slate-900">CrowdStrike Partner</h3>
            <p className="mt-2 text-sm text-slate-600">
              Certified to deploy and support the unified Falcon platform for comprehensive threat prevention across your entire environment.
            </p>
            <div className="mt-6 flex gap-4">
              <div className="flex-1 rounded-lg border-2 border-emerald-600 bg-white p-4 text-center">
                <strong className="block text-emerald-700">Endpoint</strong>
                <span className="text-sm text-slate-600">Certified</span>
              </div>
              <div className="flex-1 rounded-lg border-2 border-emerald-600 bg-white p-4 text-center">
                <strong className="block text-emerald-700">Cloud</strong>
                <span className="text-sm text-slate-600">Specialized</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Falcon Platform Solutions We Deliver */}
      <section className="section-light">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Falcon Platform Solutions We Deliver</h2>
          <p className="mt-2 text-sm text-slate-500">
            Unified AI-native security across endpoint, identity, cloud, and data.
          </p>
          <div className="cisco-solution-grid mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item) => (
              <div key={item.title} className="cyber-cap-card cisco-solution-card rounded-xl border border-slate-200 bg-white p-6 text-left">
                <div className="cyber-cap-icon mb-4 text-emerald-600">
                  {item.icon === 'shield' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {item.icon === 'identity' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
                      <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M12 14v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'cloud' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {item.icon === 'logs' && (
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
                  {item.icon === 'search' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                      <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                      <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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
            How enterprises leverage CrowdStrike through Pirlanta.
          </p>
          <div className="cisco-use-grid mt-10 grid gap-6 sm:grid-cols-3">
            {useCases.map((item) => (
              <div key={item.title} className="cyber-cap-card rounded-xl border border-slate-200 bg-white p-6 text-left">
                <div className="cyber-cap-icon mb-4 text-emerald-600">
                  {item.icon === 'warning' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                      <path d="M12 9v4M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {item.icon === 'chip' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                      <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M9 9h6v6H9z" stroke="currentColor" strokeWidth="2" />
                      <path d="M9 4v4M15 4v4M9 16v4M15 16v4M4 9h4M4 15h4M16 9h4M16 15h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'eye' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                      <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6z" stroke="currentColor" strokeWidth="2" />
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
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

      {/* CrowdStrike FAQs */}
      <section className="section-light">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">CrowdStrike FAQs</h2>
            <p className="mt-3 text-sm text-slate-500">
              Common questions about the Falcon platform and our implementation services.
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
                      Contact us to learn more about our CrowdStrike Falcon platform implementation and support services.
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
            Ready for AI-Native Security?
          </h2>
          <p className="mt-3 text-sm text-emerald-100/70">
            Let&apos;s discuss how the CrowdStrike Falcon platform can unify your security and stop breaches before they happen.
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
