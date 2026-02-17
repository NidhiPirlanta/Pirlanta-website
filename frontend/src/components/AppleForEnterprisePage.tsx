import AntigravityBackground from './AntigravityBackground'

export default function AppleForEnterprisePage() {
  const devices = [
    {
      title: 'Mac for Enterprise',
      products: 'MacBook Air, MacBook Pro, iMac, Mac mini, Mac Studio',
      copy: 'Power your workforce with the reliability, performance, and security that macOS delivers across every role in the organization.',
      icon: 'mac',
    },
    {
      title: 'iPad for Frontline & Operations',
      products: 'iPad, iPad Air, iPad Pro',
      copy: 'Equip field teams, warehouse staff, and operations with iPads built for mobility, durability, and enterprise app deployment.',
      icon: 'ipad',
    },
    {
      title: 'iPhone for Work',
      products: 'iPhone models for executives, sales & support teams',
      copy: 'Keep executives, sales teams, and customer-facing staff connected with secure, managed iPhones.',
      icon: 'iphone',
    },
    {
      title: 'Accessories',
      products: 'AirPods, adapters, keyboards, mice, displays',
      copy: 'Complete your Apple deployment with certified accessories — from AirPods for calls to displays for workstations.',
      icon: 'accessories',
    },
  ]

  const delivers = [
    {
      title: 'Bulk Procurement & Enterprise Pricing',
      copy: 'Pirlanta handles volume procurement with Apple-authorized pricing. We negotiate, consolidate orders, and ensure timely delivery — whether it\'s 50 MacBooks or 500 iPhones.',
      icon: 'box',
    },
    {
      title: 'Role-Based Device Recommendations',
      copy: 'Not every team needs the same device. We map roles to the right Apple hardware — MacBook Air for general staff, Pro for developers, iPad for field teams.',
      icon: 'list',
    },
    {
      title: 'Phased Rollouts',
      copy: 'We plan and execute staged deployments across departments and locations, minimizing disruption and ensuring each batch is configured, tested, and delivered on schedule.',
      icon: 'users',
    },
    {
      title: 'Expansion & Refresh Cycles',
      copy: 'As your team grows or devices age, Pirlanta manages refresh cycles, trade-ins, and fleet expansion so your workforce always has current-generation Apple hardware.',
      icon: 'refresh',
    },
  ]

  const bundles = [
    {
      title: 'Standard Office User',
      purpose: 'For everyday productivity',
      items: [
        'MacBook Air (M-series)',
        'USB-C hub / adapter',
        'Apple Magic Keyboard & Mouse',
        'AppleCare+ for Mac',
      ],
    },
    {
      title: 'Power User / Developer',
      purpose: 'For engineering & creative teams',
      items: [
        'MacBook Pro (M-series Pro/Max)',
        'Apple Studio Display or LG UltraFine',
        'USB-C / Thunderbolt dock',
        'AppleCare+ for Mac',
      ],
    },
    {
      title: 'Sales & Mobility',
      purpose: 'For on-the-go professionals',
      items: [
        'iPhone (latest generation)',
        'AirPods Pro',
        'MagSafe charging accessories',
        'AppleCare+ for iPhone',
      ],
    },
    {
      title: 'Frontline iPad',
      purpose: 'For field & operations teams',
      items: [
        'iPad or iPad Air',
        'Rugged protective case',
        'Smart Keyboard Folio or Magic Keyboard',
        'AppleCare+ for iPad',
      ],
    },
  ]

  return (
    <main className="partner-page relative overflow-hidden pt-24">
      {/* Hero Section */}
      <section className="partner-hero relative">
        <div className="partner-hero-content mx-auto max-w-7xl px-6 py-24 text-center">
          <AntigravityBackground className="hero-antigravity" />
          <div className="partner-logo flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="currentColor" className="mx-auto h-14 w-14 text-white">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
          </div>
          <span className="pill pill--tight mt-4 inline-block rounded border border-emerald-500/60 bg-slate-800 px-4 py-1.5 text-sm font-medium text-white">
            Distribution Partner Program
          </span>
          <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
            Enterprise Apple Procurement, <span className="ai-accent">Made Simple</span>
          </h1>
          <p className="mt-3 text-lg text-emerald-100/90">Enable your workforce with Apple devices at scale.</p>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-emerald-100/60 md:text-base">
            Pirlanta simplifies Apple procurement for enterprises — handling volume orders, enterprise pricing, role-based device recommendations, and phased rollouts so your teams get the right Apple hardware, on time, at the right price.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-600"
            >
              Request Enterprise Pricing →
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/40 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[1px]">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px] fill-white">
            <path d="M0,0 Q600,120 1200,0 L1200,120 L0,120 Z" className="fill-white" />
          </svg>
        </div>
      </section>

      {/* Apple Devices for Every Enterprise Role */}
      <section className="section-light">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Apple Devices for Every Enterprise Role</h2>
          <p className="mt-2 text-sm text-slate-500">
            From executive laptops to frontline tablets — procure the right Apple device for every team.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {devices.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 text-left shadow-sm">
                <div className="mb-4 flex h-16 items-center justify-center text-emerald-600">
                  {item.icon === 'mac' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-12 w-12" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="14" rx="2" />
                      <path d="M6 8h12M6 12h8" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'ipad' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-12 w-12" stroke="currentColor" strokeWidth="2">
                      <rect x="5" y="2" width="14" height="20" rx="2" />
                      <circle cx="12" cy="20" r="1.5" />
                    </svg>
                  )}
                  {item.icon === 'iphone' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-12 w-12" stroke="currentColor" strokeWidth="2">
                      <rect x="6" y="2" width="12" height="20" rx="2" />
                      <path d="M12 18h.01" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'accessories' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-12 w-12" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-xs font-medium text-emerald-600">{item.products}</p>
                <p className="mt-2 text-sm text-slate-600">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Pirlanta Delivers */}
      <section className="section-light">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">What Pirlanta Delivers</h2>
          <p className="mt-2 text-sm text-slate-500">
            End-to-end Apple procurement support built for enterprise scale.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {delivers.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 text-left shadow-sm">
                <div className="mb-4 text-emerald-600">
                  {item.icon === 'box' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10" stroke="currentColor" strokeWidth="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'list' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10" stroke="currentColor" strokeWidth="2">
                      <path d="M9 5H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'users' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'refresh' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10" stroke="currentColor" strokeWidth="2">
                      <path d="M1 4v6h6M23 20v-6h-6" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" strokeLinecap="round" strokeLinejoin="round" />
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

      {/* Recommended Bundles */}
      <section className="section-light">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Recommended Bundles</h2>
          <p className="mt-2 text-sm text-slate-500">
            Pre-configured device packages for common enterprise roles.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bundles.map((bundle) => (
              <div key={bundle.title} className="rounded-xl border border-slate-200 bg-white p-6 text-left shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{bundle.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{bundle.purpose}</p>
                <ul className="mt-4 space-y-2">
                  {bundle.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="mt-1 shrink-0 text-emerald-600">
                        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
                          <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-dark section-dark--cta relative overflow-hidden bg-slate-900">
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-white">
            Talk to Pirlanta — Apple for Enterprises
          </h2>
          <p className="mt-3 text-sm text-emerald-100/70">
            Let us help you plan, procure, and deploy Apple devices across your enterprise — with volume pricing and lifecycle support.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-600"
            >
              Request Enterprise Pricing →
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/40 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact Us
            </a>
          </div>
          <p className="mt-8 text-[10px] text-slate-500">
            Apple, Mac, macOS, iPhone, iPadOS, iPad, and Apple Watch are trademarks of Apple Inc.
          </p>
        </div>
      </section>
    </main>
  )
}
