export default function AppleForSMBPage() {
  const whoFor = [
    {
      title: 'Startups & Fast-Growing Teams',
      copy: 'Equip new hires quickly with reliable Apple devices that scale with your growth.',
      icon: 'rocket',
    },
    {
      title: 'Agencies',
      copy: 'Design, marketing, content, and dev teams that rely on macOS and creative workflows.',
      icon: 'brush',
    },
    {
      title: 'Retail & Service Businesses',
      copy: 'iPads for POS, billing, and customer-facing operations at physical locations.',
      icon: 'store',
    },
    {
      title: 'Clinics, Schools & Training Centers',
      copy: 'Deploy iPads and Macs for patient intake, student learning, and staff productivity.',
      icon: 'graduation',
    },
    {
      title: 'Founder-Led Businesses',
      copy: 'Upgrading from personal devices to a standardized, managed Apple fleet.',
      icon: 'refresh',
    },
    {
      title: 'SMBs Standardizing on Apple',
      copy: 'Consolidate your team on MacBooks and iPhones for consistency, security, and support.',
      icon: 'building',
    },
  ]

  const devices = [
    {
      title: 'Mac for SMB',
      products: 'MacBook Air, MacBook Pro, iMac, Mac mini',
      copy: 'Reliable, powerful Macs for every desk and role — from reception to the founder\'s office.',
      icon: 'mac',
    },
    {
      title: 'iPhone for Business',
      products: 'For founders, sales, service & customer-facing teams',
      copy: 'Managed iPhones for business calls, CRM access, and secure communication on the go.',
      icon: 'iphone',
    },
    {
      title: 'iPad for Mobility',
      products: 'Billing, training, demos, POS & operations',
      copy: 'iPads that work as POS terminals, training tools, demo devices, and mobile workstations.',
      icon: 'ipad',
    },
    {
      title: 'Accessories',
      products: 'AirPods, adapters, keyboards, mice, cases',
      copy: 'Complete your setup with Apple and third-party accessories — keyboards, mice, cases, and more.',
      icon: 'accessories',
    },
  ]

  const whyBuy = [
    {
      title: 'Right Device, Right Budget',
      copy: 'We match your team\'s needs to the right Apple hardware — no overspending on specs you don\'t need, no underpowered devices slowing you down.',
      icon: 'target',
    },
    {
      title: 'Fast Quotations',
      copy: 'Tell us what you need, and we\'ll get you a quote quickly. No long procurement cycles or back-and-forth with multiple vendors.',
      icon: 'lightning',
    },
    {
      title: 'Delivery Support',
      copy: 'We coordinate delivery to your office or multiple locations, handling logistics so you can focus on running your business.',
      icon: 'truck',
    },
    {
      title: 'Repeat Buying Made Easy',
      copy: 'As your team grows, reorder the same or updated configurations with a single call. We keep your purchase history on file for fast re-orders.',
      icon: 'loop',
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
          <div className="partner-logo flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="currentColor" className="mx-auto h-14 w-14 text-white">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
          </div>
          <span className="pill pill--tight mt-4 inline-block rounded bg-emerald-700/80 px-4 py-1.5 text-sm font-medium text-white">
            Distribution Partner Program
          </span>
          <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
            Apple Devices That Help SMBs <span className="ai-accent">Grow Faster</span>
          </h1>
          <p className="mt-3 text-emerald-100/90">The right Apple hardware for your team — without enterprise complexity.</p>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-emerald-100/60 md:text-base">
            Pirlanta helps small and mid-sized businesses buy Apple devices the smart way — with curated recommendations, fast quotations, and a partner who understands your budget and scale.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-600"
            >
              Get a Quote →
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/40 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Talk to an Apple Specialist
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[1px]">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px] fill-white">
            <path d="M0,0 Q600,120 1200,0 L1200,120 L0,120 Z" className="fill-white" />
          </svg>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="section-light">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Who This Is For</h2>
          <p className="mt-2 text-sm text-slate-500">
            Apple procurement tailored for SMBs across industries.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whoFor.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 text-left shadow-sm">
                <div className="mb-4 text-emerald-600">
                  {item.icon === 'rocket' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10" stroke="currentColor" strokeWidth="2">
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                    </svg>
                  )}
                  {item.icon === 'brush' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10" stroke="currentColor" strokeWidth="2">
                      <path d="M9.06 11.9l8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" strokeLinecap="round" />
                      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {item.icon === 'store' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9 22V12h6v10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {item.icon === 'graduation' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10" stroke="currentColor" strokeWidth="2">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {item.icon === 'refresh' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10" stroke="currentColor" strokeWidth="2">
                      <path d="M1 4v6h6M23 20v-6h-6" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {item.icon === 'building' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10" stroke="currentColor" strokeWidth="2">
                      <path d="M3 21h18M5 21V7l7-4 7 4v14" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9 9v2M9 13v2M9 17v2M15 9v2M15 13v2M15 17v2" strokeLinecap="round" strokeLinejoin="round" />
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

      {/* Apple Devices for Your Business */}
      <section className="section-light">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Apple Devices for Your Business</h2>
          <p className="mt-2 text-sm text-slate-500">
            MacBooks, iPhones, and iPads — matched to how your team works.
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
                  {item.icon === 'iphone' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-12 w-12" stroke="currentColor" strokeWidth="2">
                      <rect x="6" y="2" width="12" height="20" rx="2" />
                      <path d="M12 18h.01" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'ipad' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-12 w-12" stroke="currentColor" strokeWidth="2">
                      <rect x="5" y="2" width="14" height="20" rx="2" />
                      <circle cx="12" cy="20" r="1.5" />
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

      {/* Why SMBs Buy Apple Through Pirlanta */}
      <section className="section-light">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Why SMBs Buy Apple Through Pirlanta</h2>
          <p className="mt-2 text-sm text-slate-500">
            Procurement support designed for smaller teams and faster decisions.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {whyBuy.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 text-left shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border-2 border-emerald-500/50 bg-white text-emerald-600">
                  {item.icon === 'target' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  )}
                  {item.icon === 'lightning' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {item.icon === 'truck' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2">
                      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15 18h2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {item.icon === 'loop' && (
                    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2">
                      <path d="M17 1l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M3 11V9a4 4 0 0 1 4-4h14" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7 23l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M21 13v2a4 4 0 0 1-4 4H3" strokeLinecap="round" strokeLinejoin="round" />
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
            Pre-configured device packages to get your team up and running.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bundles.map((bundle) => (
              <div key={bundle.title} className="rounded-xl border border-slate-200 bg-white p-6 text-left shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{bundle.title}</h3>
                <p className="mt-1 text-sm text-emerald-600">{bundle.purpose}</p>
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
            Talk to Pirlanta — Apple for SMBs
          </h2>
          <p className="mt-3 text-sm text-emerald-100/70">
            Get a quote for Apple devices tailored to your team size, budget, and business needs.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-600"
            >
              Get a Quote →
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-emerald-500/60 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500/20"
            >
              Talk to an Apple Specialist
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
