import { useState } from 'react'
import SiteFooter from '../components/SiteFooter'

export default function DataCentrePage() {
  const resultStats = [
    { value: '85%', label: 'Reduction in MTTD', sub: 'Predictive Ops' },
    { value: '95%', label: 'Faster Response', sub: 'Intelligent DR' },
    { value: '24×7', label: 'Monitoring', sub: 'Always On' },
    { value: '48+', label: 'Years Experience', sub: 'Combined Team' },
  ]

  const capabilityCards = [
    {
      title: 'AI-Optimized Cloud Migration',
      copy: 'Intelligent workload analysis and predictive scaling for seamless migration to hybrid clouds.',
      icon: 'cloud',
    },
    {
      title: 'Predictive Infrastructure',
      copy: 'AI-powered capacity planning and proactive resource optimization to reduce TCO.',
      icon: 'trend',
    },
    {
      title: 'Intelligent DR',
      copy: 'AI-driven failover decision and automated recovery testing with predictive alerts.',
      icon: 'pulse',
    },
    {
      title: 'Data Centre Modernisation',
      copy: 'Software-defined systems, AI orchestration, and energy-efficient infrastructure.',
      icon: 'server',
    },
    {
      title: 'Serverless & Container Platforms',
      copy: 'Elastic Kubernetes environments and event-driven architectures for modern apps.',
      icon: 'cube',
    },
    {
      title: 'Edge & Real-Time Processing',
      copy: 'Bring computing closer to endpoints for IoT and AI workloads.',
      icon: 'globe',
    },
    {
      title: 'Zero-Trust Security for Cloud',
      copy: 'Advanced encryption, identity management, and continuous verification.',
      icon: 'lock',
    },
  ]

  const benefitItems = [
    'AI-driven workload analysis optimizes migration paths and reduces risk.',
    'Predictive capacity planning eliminates over-provisioning and cuts costs.',
    'Intelligent DR with automated failover testing ensures RPO/RTO targets.',
    'AI-assisted compliance monitoring keeps operations audit-ready.',
    'Hybrid and multi-cloud orchestration with intelligent resource balancing.',
  ]

  const dataFaqs = [
    'Do you provide data centre modernization services in India?',
    'What is Disaster Recovery as a Service (DRaaS)?',
    'How do you reduce migration risk?',
    'How do you ensure compliance and observability post-migration?',
    'Do you support hybrid and multi-cloud environments?',
    'How do you control costs post-migration?',
    'Do you provide DR testing and reporting?',
    'Do you provide team training for day-2 operations?',
    'What is the typical migration timeline?',
    'How do we get started with a migration project?',
  ]

  const [openDataFaq, setOpenDataFaq] = useState<number | null>(null)

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
                <ellipse cx="12" cy="5" rx="7" ry="3" stroke="currentColor" strokeWidth="2" />
                <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" stroke="currentColor" strokeWidth="2" />
                <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h1 className="mt-6 text-4xl font-semibold text-white md:text-5xl">Data Centre</h1>
            <p className="mt-3 text-lg text-emerald-200">
              AI-Optimized Infrastructure. Predictive Scaling. Intelligent Recovery.
            </p>
            <p className="mt-4 text-sm text-emerald-100/70 md:text-base">
              Transform your enterprise with AI-powered cloud migration, intelligent disaster
              recovery, and predictive capacity planning for hybrid environments.
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

      <section className="section-light">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <span className="pill pill--tight">AI-Optimized Infrastructure</span>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900">Data Centre Capabilities</h2>
          <p className="mt-2 text-sm text-slate-500">
            AI-powered infrastructure services from intelligent migration to predictive operations.
          </p>
          <div className="cyber-cap-grid mt-10">
            {capabilityCards.map((item) => (
              <div key={item.title} className="cyber-cap-card">
                <div className="cyber-cap-icon" aria-hidden="true">
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
                  {item.icon === 'trend' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4 16l5-5 4 4 7-8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path d="M16 7h5v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'pulse' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M3 12h4l3-6 4 12 3-6h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'server' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect x="4" y="5" width="16" height="6" rx="2" stroke="currentColor" strokeWidth="2" />
                      <rect x="4" y="13" width="16" height="6" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M8 8h.01M8 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'cube' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M12 3l7 4-7 4-7-4 7-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                      <path d="M5 11v6l7 4 7-4v-6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    </svg>
                  )}
                  {item.icon === 'globe' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
                      <path d="M4 12h16M12 4a12 12 0 0 1 0 16M12 4a12 12 0 0 0 0 16" stroke="currentColor" strokeWidth="2" />
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
              Our data centre services deliver reliable, compliant, and cost-effective
              infrastructure transformations.
            </p>
            <a href="/contact">
              <button className="mt-6 rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-600">
                Start Assessment →
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
            <h2 className="text-3xl font-semibold text-slate-900">Data Centre FAQs</h2>
            <p className="mt-3 text-sm text-slate-500">
              Common questions about cloud migration, DRaaS, and infrastructure modernization.
            </p>
            <a href="/contact">
              <button className="mt-6 rounded-full border border-emerald-200 px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300">
                Ask a Question
              </button>
            </a>
          </div>
          <div className="cyber-faq">
            {dataFaqs.map((question, index) => {
              const isOpen = openDataFaq === index
              return (
                <button
                  key={question}
                  className={`cyber-faq-item ${isOpen ? 'cyber-faq-item--open' : ''}`}
                  onClick={() => setOpenDataFaq(isOpen ? null : index)}
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
            Ready to Modernise Your Infrastructure?
          </h2>
          <p className="mt-3 text-sm text-emerald-100/70">
            Begin with a readiness assessment to scope workloads, dependencies, and build your
            migration roadmap.
          </p>
          <a
            className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-600"
            href="/contact"
          >
            Get Readiness Assessment →
          </a>
          <SiteFooter />
        </div>
      </section>
    </main>
  )
}
