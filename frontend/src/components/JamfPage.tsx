import { useState } from 'react'

export default function JamfPage() {
  const whyPoints = [
    'Registered Jamf Partner with trained deployment specialists',
    'Same-day support for new Apple OS releases',
    'End-to-end implementation from planning to production',
    'Migration expertise from other MDM platforms',
    'Ongoing managed services and support',
  ]

  const solutions = [
    {
      title: 'Jamf Pro',
      copy: 'Enterprise-grade Apple device management for Mac, iPad, iPhone, and Apple TV.',
      bullets: ['Zero-touch deployment', 'Automated device enrollment', 'App & configuration management', 'Inventory & reporting'],
      icon: 'monitor',
    },
    {
      title: 'Jamf Now',
      copy: 'Simple, cloud-based MDM for small and mid-sized businesses managing Apple devices.',
      bullets: ['Quick device setup', 'Remote lock & wipe', 'Passcode enforcement', 'App distribution'],
      icon: 'briefcase',
    },
    {
      title: 'Jamf Protect',
      copy: 'Purpose-built endpoint security for Mac with threat prevention and compliance.',
      bullets: ['Mac malware prevention', 'Behavioral analytics', 'Compliance monitoring', 'Threat hunting'],
      icon: 'shield',
    },
    {
      title: 'Jamf Connect',
      copy: 'Unified identity and access management connecting users to resources securely.',
      bullets: ['Cloud identity integration', 'Single sign-on (SSO)', 'Zero Trust access', 'Passwordless authentication'],
      icon: 'key',
    },
  ]

  const useCases = [
    {
      title: 'Zero-Touch Deployment',
      copy: 'Ship devices directly to employees. Jamf configures them automatically on first power-on with your apps, settings, and security policies.',
      icon: 'gear',
    },
    {
      title: 'MDM Migration',
      copy: 'Transitioning from Intune, Workspace ONE, or manual management? We migrate your fleet to Jamf with minimal disruption.',
      icon: 'migration',
    },
    {
      title: 'Mac Security Hardening',
      copy: 'Deploy Jamf Protect alongside Jamf Pro to enforce compliance, detect threats, and meet security benchmarks like CIS and NIST.',
      icon: 'shield',
    },
  ]

  const faqs = [
    'What is Jamf and why is it important for Apple devices?',
    'Can you migrate us from another MDM solution to Jamf?',
    'What is the difference between Jamf Pro and Jamf Now?',
    'Does Jamf work with employee-owned devices (BYOD)?',
    'How does Jamf Protect differ from traditional antivirus?',
    'Do you offer ongoing managed services for Jamf?',
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="partner-page relative overflow-hidden pt-24">
      {/* Hero Section */}
      <section className="partner-hero relative">
        <div className="partner-hero-content mx-auto max-w-7xl px-6 py-24">
          <div className="partner-logo flex items-center justify-center rounded-lg bg-white/10 px-4 py-2 text-white font-bold tracking-wider">
            jamf
          </div>
          <span className="pill pill--tight mt-3 inline-block rounded border border-emerald-500/60 bg-emerald-700/60 px-4 py-1.5 text-sm font-medium text-white">
            Registered Partner
          </span>
          <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
            Jamf <span className="ai-accent">Partner</span>
          </h1>
          <p className="mt-3 text-emerald-300">Apple Device Management & Security</p>
          <p className="mt-4 max-w-2xl text-sm text-emerald-100/60 md:text-base">
            As a Jamf Registered Partner, we help organizations deploy, manage, and secure their Apple ecosystem—from zero-touch deployment to endpoint protection and identity management.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[1px]">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px] fill-white">
            <path d="M0,0 Q600,120 1200,0 L1200,120 L0,120 Z" className="fill-white" />
          </svg>
        </div>
      </section>

      {/* Why Pirlanta for Jamf */}
      <section className="section-light">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">Why Pirlanta for Jamf?</h2>
            <p className="mt-2 text-sm text-slate-500">
              Apple devices work best when managed with Apple-native tools. Our Jamf expertise ensures your Mac, iPad, and iPhone fleet is deployed efficiently, secured comprehensively, and maintained seamlessly—without compromising the user experience.
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
              jamf
            </div>
            <h3 className="mt-4 text-xl font-semibold text-slate-900">Jamf Registered Partner</h3>
            <p className="mt-2 text-sm text-slate-600">
              Trained and certified to deploy Jamf solutions across enterprise environments, from initial planning through ongoing operations.
            </p>
            <div className="mt-6 flex gap-4">
              <div className="flex-1 rounded-lg border-2 border-emerald-600 bg-white p-4 text-center">
                <strong className="block text-emerald-700">MDM</strong>
                <span className="text-sm text-slate-600">Specialists</span>
              </div>
              <div className="flex-1 rounded-lg border-2 border-emerald-600 bg-white p-4 text-center">
                <strong className="block text-emerald-700">Apple</strong>
                <span className="text-sm text-slate-600">Focused</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jamf Solutions We Deploy */}
      <section className="section-light">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Jamf Solutions We Deploy</h2>
          <p className="mt-2 text-sm text-slate-500">
            Comprehensive Apple device management and security for organizations of every size.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((item) => (
              <div key={item.title} className="cyber-cap-card cisco-solution-card rounded-xl border border-slate-200 bg-white p-6 text-left">
                <div className="cyber-cap-icon mb-4 text-emerald-600">
                  {item.icon === 'monitor' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <path d="M8 21h8M12 17v4" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'briefcase' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="7" width="20" height="14" rx="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {item.icon === 'shield' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {item.icon === 'key' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10" stroke="currentColor" strokeWidth="2">
                      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" strokeLinecap="round" strokeLinejoin="round" />
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
            How organizations leverage our Jamf expertise.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {useCases.map((item) => (
              <div key={item.title} className="cyber-cap-card rounded-xl border border-slate-200 bg-white p-6 text-left">
                <div className="cyber-cap-icon mb-4 text-emerald-600">
                  {item.icon === 'gear' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {item.icon === 'migration' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16 17h6m-3-3v6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {item.icon === 'shield' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
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

      {/* Jamf FAQs */}
      <section className="section-light">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">Jamf FAQs</h2>
            <p className="mt-3 text-sm text-slate-500">
              Common questions about Jamf and our implementation services.
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
                      Contact us to learn more about our Jamf implementation and support services.
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
            Ready to Manage Your Apple Fleet?
          </h2>
          <p className="mt-3 text-sm text-emerald-100/70">
            Let&apos;s discuss how Jamf can simplify Apple device management and strengthen security across your organization.
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
