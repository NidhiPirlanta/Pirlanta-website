import { useState } from 'react'

export default function CheckPointSecurityPage() {
  const whyPoints = [
    'Prevention-first security approach blocking threats before breach',
    'Unified Infinity architecture across network, cloud, and endpoints',
    'ThreatCloud AI with real-time intelligence from global sensor network',
    'Consolidated management reducing operational complexity',
    'Consistent policy enforcement across all environments',
  ]

  const solutions = [
    {
      title: 'Quantum Security Gateways',
      copy: 'High-performance next-generation firewalls with advanced threat prevention built-in.',
      bullets: ['SandBlast threat prevention', 'IoT device discovery', 'Hyperscale networking', 'Autonomous threat prevention'],
      icon: 'shield',
    },
    {
      title: 'CloudGuard',
      copy: 'Unified cloud-native security for workloads, applications, and networks across any cloud.',
      bullets: ['Cloud workload protection', 'Application security (AppSec)', 'Cloud network security', 'Posture management (CSPM)'],
      icon: 'cloud',
    },
    {
      title: 'Harmony Endpoint',
      copy: 'Complete endpoint protection with threat prevention, detection, and response capabilities.',
      bullets: ['Anti-ransomware protection', 'Zero-day prevention', 'Forensics & threat hunting', 'Full disk encryption'],
      icon: 'lock',
    },
    {
      title: 'Harmony Email & Collaboration',
      copy: 'Advanced protection for email and collaboration tools against phishing and malware.',
      bullets: ['Anti-phishing & BEC protection', 'Malware & attachment scanning', 'Microsoft 365 & Google integration', 'DLP for sensitive data'],
      icon: 'email',
    },
    {
      title: 'Harmony Mobile',
      copy: 'Mobile threat defense protecting corporate data on employee devices.',
      bullets: ['Network attack prevention', 'Malicious app detection', 'OS vulnerability protection', 'Zero-touch deployment'],
      icon: 'mobile',
    },
    {
      title: 'Harmony SASE',
      copy: 'Secure access service edge combining network and security for remote and hybrid work.',
      bullets: ['Zero Trust Network Access', 'Secure web gateway', 'FWaaS & SD-WAN', 'Unified management'],
      icon: 'globe',
    },
  ]

  const useCases = [
    {
      title: 'Perimeter Modernization',
      copy: 'Replace aging firewalls with Quantum gateways featuring integrated threat prevention, sandboxing, and IoT security.',
      icon: 'shield',
    },
    {
      title: 'Branch & SD-WAN Security',
      copy: 'Secure distributed locations with Quantum SD-WAN combining optimized connectivity with enterprise-grade security.',
      icon: 'network',
    },
    {
      title: 'Cloud Workload Protection',
      copy: 'Secure multi-cloud environments with CloudGuard for consistent policy and visibility across AWS, Azure, and GCP.',
      icon: 'cloud',
    },
    {
      title: 'Endpoint & Email Security',
      copy: 'Protect users with Harmony Endpoint anti-ransomware and Harmony Email anti-phishing across the workforce.',
      icon: 'lock',
    },
    {
      title: 'Data Centre Segmentation',
      copy: 'Implement micro-segmentation with Quantum gateways to contain lateral movement and protect critical workloads.',
      icon: 'datacenter',
    },
    {
      title: 'Hybrid Workforce Security',
      copy: 'Enable secure remote access with Harmony SASE and protect mobile devices with Harmony Mobile for anywhere work.',
      icon: 'building',
    },
  ]

  const faqs = [
    "What is Check Point's prevention-first approach?",
    'Can Check Point protect our cloud workloads?',
    'How does Check Point handle ransomware?',
    'Can Check Point replace our existing firewall?',
    'Does Check Point support remote and hybrid workers?',
    'How does Infinity architecture simplify security?',
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="partner-page relative overflow-hidden pt-24">
      {/* Hero Section */}
      <section className="partner-hero relative">
        <div className="partner-hero-content mx-auto max-w-7xl px-6 py-24">
          <div className="partner-logo flex items-center justify-center rounded-lg bg-white/10 px-4 py-2 text-white font-bold tracking-wider">
            CHECK POINT™
          </div>
          <span className="pill pill--tight mt-3 inline-block rounded border border-emerald-500/60 bg-slate-800 px-4 py-1.5 text-sm font-medium text-white">
            Check Point Technology Partner
          </span>
          <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
            Check Point <span className="ai-accent">Partner</span>
          </h1>
          <p className="mt-3 text-emerald-300">Prevention-First Security Across Every Attack Surface</p>
          <p className="mt-4 max-w-2xl text-sm text-emerald-100/60 md:text-base">
            We deliver Check Point&apos;s prevention-first security portfolio—from Quantum next-gen firewalls to CloudGuard cloud protection and Harmony unified user security for comprehensive threat prevention.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[1px]">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px] fill-white">
            <path d="M0,0 Q600,120 1200,0 L1200,120 L0,120 Z" className="fill-white" />
          </svg>
        </div>
      </section>

      {/* Why Pirlanta for Check Point */}
      <section className="section-light">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">Why Pirlanta for Check Point?</h2>
            <p className="mt-2 text-sm text-slate-500">
              Our Check Point practice brings prevention-first security to your organization, delivering the Infinity architecture that unifies protection across network, cloud, and users with real-time threat intelligence.
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
              CHECK POINT™
            </div>
            <h3 className="mt-4 text-xl font-semibold text-slate-900">Check Point Technology Partner</h3>
            <p className="mt-2 text-sm text-slate-600">
              Implementing the full Check Point Infinity portfolio for prevention-first enterprise security.
            </p>
            <div className="mt-6 flex gap-4">
              <div className="flex-1 rounded-lg border-2 border-emerald-600 bg-white p-4 text-center">
                <strong className="block text-emerald-700">Quantum</strong>
                <span className="text-sm text-slate-600">NGFW</span>
              </div>
              <div className="flex-1 rounded-lg border-2 border-emerald-600 bg-white p-4 text-center">
                <strong className="block text-emerald-700">Infinity</strong>
                <span className="text-sm text-slate-600">Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Check Point Solutions We Deliver */}
      <section className="section-light">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Check Point Solutions We Deliver</h2>
          <p className="mt-2 text-sm text-slate-500">
            Comprehensive prevention-first security across network, cloud, and users.
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
                  {item.icon === 'cloud' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {item.icon === 'lock' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                      <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M8 11V8a4 4 0 1 1 8 0v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'email' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M22 6L12 13 2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'mobile' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                      <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'globe' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2" />
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
            How enterprises leverage Check Point through Pirlanta.
          </p>
          <div className="cisco-use-grid mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item) => (
              <div key={item.title} className="cyber-cap-card rounded-xl border border-slate-200 bg-white p-6 text-left">
                <div className="cyber-cap-icon mb-4 text-emerald-600">
                  {item.icon === 'shield' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {item.icon === 'network' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                      <rect x="4" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
                      <rect x="14" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
                      <path d="M7 10h4M13 10h4M10 7v6M7 14h4M13 14h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'cloud' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {item.icon === 'lock' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                      <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M8 11V8a4 4 0 1 1 8 0v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'datacenter' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                      <line x1="6" y1="8" x2="8" y2="8" stroke="currentColor" strokeWidth="2" />
                      <line x1="10" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="2" />
                      <line x1="16" y1="8" x2="18" y2="8" stroke="currentColor" strokeWidth="2" />
                      <line x1="6" y1="12" x2="8" y2="12" stroke="currentColor" strokeWidth="2" />
                      <line x1="10" y1="12" x2="14" y2="12" stroke="currentColor" strokeWidth="2" />
                      <line x1="16" y1="12" x2="18" y2="12" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {item.icon === 'building' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                      <path d="M3 21h18M5 21V7l7-4 7 4v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M9 9v2M9 13v2M9 17v2M15 9v2M15 13v2M15 17v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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

      {/* Check Point FAQs */}
      <section className="section-light">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">Check Point FAQs</h2>
            <p className="mt-3 text-sm text-slate-500">
              Common questions about Check Point Infinity, Quantum, CloudGuard, and Harmony solutions.
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
                      Contact us to learn more about our Check Point implementation and support services.
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
            Ready for Prevention-First Security?
          </h2>
          <p className="mt-3 text-sm text-emerald-100/70">
            Let&apos;s discuss how Check Point Infinity can consolidate your security and stop threats before they become breaches.
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
