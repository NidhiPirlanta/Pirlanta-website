import { type CSSProperties, useEffect, useRef, useState } from 'react'
import HeroLiveBackground from './HeroLiveBackground'

export default function AppleForSMBPage() {
  const deviceSectionRef = useRef<HTMLElement | null>(null)
  const [deviceSectionVisible, setDeviceSectionVisible] = useState(false)
  const whoSectionRef = useRef<HTMLElement | null>(null)
  const [whoSectionVisible, setWhoSectionVisible] = useState(false)
  const whyBuySectionRef = useRef<HTMLElement | null>(null)
  const [whyBuySectionVisible, setWhyBuySectionVisible] = useState(false)
  const bundlesSectionRef = useRef<HTMLElement | null>(null)
  const [bundlesVisible, setBundlesVisible] = useState(false)
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
      image: '/hero_static__c9sislzzicq6_large.png',
      alt: 'MacBook',
      imageClass: 'apple-smb-device-image--mac',
    },
    {
      title: 'iPhone for Business',
      products: 'For founders, sales, service & customer-facing teams',
      copy: 'Managed iPhones for business calls, CRM access, and secure communication on the go.',
      image: '/iphone_16__drr03yfz644m_large.jpg',
      alt: 'iPhone',
      imageClass: 'apple-smb-device-image--iphone',
    },
    {
      title: 'iPad for Mobility',
      products: 'Billing, training, demos, POS & operations',
      copy: 'iPads that work as POS terminals, training tools, demo devices, and mobile workstations.',
      image: '/ipad_pro_73be02a34.jpg',
      alt: 'iPad Pro',
      imageClass: 'apple-smb-device-image--ipad',
    },
    {
      title: 'Accessories',
      products: 'AirPods, adapters, keyboards, mice, cases',
      copy: 'Complete your setup with Apple and third-party accessories — keyboards, mice, cases, and more.',
      image: '',
      alt: '',
      imageClass: '',
      iconSet: 'accessories',
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

  useEffect(() => {
    const section = deviceSectionRef.current
    if (!section) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setDeviceSectionVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDeviceSectionVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const section = bundlesSectionRef.current
    if (!section) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setBundlesVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBundlesVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const section = whoSectionRef.current
    if (!section) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setWhoSectionVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWhoSectionVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const section = whyBuySectionRef.current
    if (!section) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setWhyBuySectionVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWhyBuySectionVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <main className="partner-page relative overflow-hidden pt-24">
      {/* Hero Section */}
      <section className="partner-hero live-hero apple-smb-hero relative">
        <HeroLiveBackground />
        <div className="partner-hero-content apple-smb-hero-content w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="apple-smb-hero-logo apple-smb-hero-fade apple-smb-hero-fade-1">
            <img
              src="/partners/apple.png"
              alt="Apple"
              className="apple-smb-hero-logo-img"
            />
          </div>
          <span className="pill pill--tight apple-smb-hero-pill apple-smb-hero-fade apple-smb-hero-fade-2">
            Distribution Partner Program
          </span>
          <h1 className="apple-smb-hero-title apple-smb-hero-fade apple-smb-hero-fade-3">
            Apple Devices That Help
            <span className="block">SMBs <span className="apple-smb-hero-accent">Grow Faster</span></span>
          </h1>
          <p className="apple-smb-hero-kicker apple-smb-hero-fade apple-smb-hero-fade-4">
            The right Apple hardware for your team — without enterprise complexity.
          </p>
          <p className="apple-smb-hero-copy apple-smb-hero-fade apple-smb-hero-fade-5">
            Pirlanta helps small and mid-sized businesses buy Apple devices the smart way — with curated recommendations, fast quotations, and a partner who understands your budget and scale.
          </p>
          <div className="apple-smb-hero-actions apple-smb-hero-fade apple-smb-hero-fade-6">
            <a
              href="/contact"
              className="apple-smb-hero-button apple-smb-hero-button--primary"
            >
              Get a Quote →
            </a>
            <a
              href="/contact"
              className="apple-smb-hero-button apple-smb-hero-button--ghost"
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
      <section
        ref={whoSectionRef}
        className={`section-light apple-smb-who-section${whoSectionVisible ? ' is-visible' : ''}`}
      >
        <div className="apple-smb-who-wrapper mx-auto max-w-7xl px-6 py-24 text-center">
          <h2 className="apple-smb-who-title apple-smb-who-fade" style={{ '--delay': '0s' } as CSSProperties}>
            Who This Is For
          </h2>
          <p className="apple-smb-who-subtitle apple-smb-who-fade" style={{ '--delay': '0.1s' } as CSSProperties}>
            Apple procurement tailored for SMBs across industries.
          </p>
          <div className="apple-smb-who-grid">
            {whoFor.map((item, index) => (
              <div
                key={item.title}
                className="apple-smb-who-card apple-smb-who-fade"
                style={{ '--delay': `${0.2 + index * 0.08}s` } as CSSProperties}
              >
                <div className="apple-smb-who-icon" aria-hidden="true">
                  {item.icon === 'rocket' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                    </svg>
                  )}
                  {item.icon === 'brush' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9.06 11.9l8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" strokeLinecap="round" />
                      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {item.icon === 'store' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9 22V12h6v10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {item.icon === 'graduation' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {item.icon === 'refresh' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 4v6h6M23 20v-6h-6" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {item.icon === 'building' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 21h18M5 21V7l7-4 7 4v14" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9 9v2M9 13v2M9 17v2M15 9v2M15 13v2M15 17v2" strokeLinecap="round" strokeLinejoin="round" />
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

      {/* Apple Devices for Your Business */}
      <section
        ref={deviceSectionRef}
        className={`section-light apple-smb-device-section${deviceSectionVisible ? ' is-visible' : ''}`}
      >
        <div className="apple-smb-device-wrapper mx-auto max-w-7xl px-6">
          <div className="apple-smb-device-header apple-smb-device-fade apple-smb-device-delay-1">
            <h2 className="apple-smb-device-title">Apple Devices for Your Business</h2>
            <p className="apple-smb-device-subtitle">
            MacBooks, iPhones, and iPads — matched to how your team works.
            </p>
          </div>
          <div className="apple-smb-device-grid">
            {devices.map((item, index) => (
              <div
                key={item.title}
                className={`apple-smb-device-card apple-smb-device-fade apple-smb-device-delay-${index + 2}${item.iconSet ? ' apple-smb-device-card--accessories' : ''}`}
              >
                <div className="apple-smb-device-media">
                  {item.iconSet === 'accessories' ? (
                    <div className="apple-smb-device-accessories" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M6 14a6 6 0 0 1 12 0v2a3 3 0 0 1-3 3h-1v-5h-4v5H9a3 3 0 0 1-3-3v-2z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                        <path d="M4 14v1M20 14v1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                      <svg viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="6" width="18" height="8" rx="2" stroke="currentColor" strokeWidth="1.6" />
                        <path d="M7 16v2M17 16v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                        <path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                      <svg viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
                        <path d="M8 20h8M12 16v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                      <svg viewBox="0 0 24 24" fill="none">
                        <rect x="9" y="3" width="6" height="12" rx="3" stroke="currentColor" strokeWidth="1.6" />
                        <path d="M12 15v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </div>
                  ) : (
                    <img
                      src={item.image}
                      alt={item.alt}
                      className={`apple-smb-device-image ${item.imageClass ?? ''}`}
                      loading="lazy"
                    />
                  )}
                </div>
                <h3 className="apple-smb-device-name">{item.title}</h3>
                <p className="apple-smb-device-products">{item.products}</p>
                <p className="apple-smb-device-copy">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SMBs Buy Apple Through Pirlanta */}
      <section
        ref={whyBuySectionRef}
        className={`section-light apple-smb-whybuy-section${whyBuySectionVisible ? ' is-visible' : ''}`}
      >
        <div className="apple-smb-whybuy-wrapper mx-auto max-w-7xl px-6 py-24 text-center">
          <h2 className="apple-smb-whybuy-title apple-smb-whybuy-fade" style={{ '--delay': '0s' } as CSSProperties}>
            Why SMBs Buy Apple Through Pirlanta
          </h2>
          <p className="apple-smb-whybuy-subtitle apple-smb-whybuy-fade" style={{ '--delay': '0.1s' } as CSSProperties}>
            Procurement support designed for smaller teams and faster decisions.
          </p>
          <div className="apple-smb-whybuy-grid">
            {whyBuy.map((item, index) => (
              <div
                key={item.title}
                className="apple-smb-whybuy-card apple-smb-whybuy-fade"
                style={{ '--delay': `${0.2 + index * 0.08}s` } as CSSProperties}
              >
                <div className="apple-smb-whybuy-icon" aria-hidden="true">
                  {item.icon === 'target' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  )}
                  {item.icon === 'lightning' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {item.icon === 'truck' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15 18h2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {item.icon === 'loop' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 1l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M3 11V9a4 4 0 0 1 4-4h14" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7 23l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M21 13v2a4 4 0 0 1-4 4H3" strokeLinecap="round" strokeLinejoin="round" />
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

      {/* Recommended Bundles */}
      <section
        ref={bundlesSectionRef}
        className={`section-light apple-bundles-section${bundlesVisible ? ' is-visible' : ''}`}
      >
        <div className="apple-bundles-wrapper mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="apple-bundles-title">Recommended Bundles</h2>
          <p className="apple-bundles-subtitle">
            Pre-configured device packages to get your team up and running.
          </p>
          <div className="apple-bundles-grid mt-12">
            {bundles.map((bundle) => (
              <div key={bundle.title} className="apple-bundles-card">
                <h3>{bundle.title}</h3>
                <p className="apple-bundles-purpose">{bundle.purpose}</p>
                <ul className="apple-bundles-list">
                  {bundle.items.map((item) => (
                    <li key={item} className="apple-bundles-item">
                      <span className="apple-bundles-check" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                          <path d="M8.5 12.5l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
