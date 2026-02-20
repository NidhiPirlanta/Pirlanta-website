import { useEffect, useRef, useState } from 'react'
import HeroLiveBackground from './HeroLiveBackground'

export default function AppleForEnterprisePage() {
  const devicesSectionRef = useRef<HTMLElement | null>(null)
  const [devicesVisible, setDevicesVisible] = useState(false)
  const devices = [
    {
      title: 'Mac for Enterprise',
      products: 'MacBook Air, MacBook Pro, iMac, Mac mini, Mac Studio',
      copy: 'Power your workforce with the reliability, performance, and security that macOS delivers across every role in the organization.',
      image: '/hero_static__c9sislzzicq6_large.png',
      alt: 'MacBook lineup',
      imageClass: 'apple-device-image--mac',
    },
    {
      title: 'iPad for Frontline & Operations',
      products: 'iPad, iPad Air, iPad Pro',
      copy: 'Equip field teams, warehouse staff, and operations with iPads built for mobility, durability, and enterprise app deployment.',
      image: '/ipad_pro_73be02a34.jpg',
      alt: 'iPad Pro',
      imageClass: 'apple-device-image--ipad',
    },
    {
      title: 'iPhone for Work',
      products: 'iPhone models for executives, sales & support teams',
      copy: 'Keep executives, sales teams, and customer-facing staff connected with secure, managed iPhones.',
      image: '/iphone_16__drr03yfz644m_large.jpg',
      alt: 'iPhone',
      imageClass: 'apple-device-image--iphone',
    },
    {
      title: 'Accessories',
      products: 'AirPods, adapters, keyboards, mice, displays',
      copy: 'Complete your Apple deployment with certified accessories — from AirPods for calls to displays for workstations.',
      iconSet: 'accessories',
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

  useEffect(() => {
    const section = devicesSectionRef.current
    if (!section) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setDevicesVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDevicesVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const deliverSectionRef = useRef<HTMLElement | null>(null)
  const [deliverVisible, setDeliverVisible] = useState(false)
  const bundlesSectionRef = useRef<HTMLElement | null>(null)
  const [bundlesVisible, setBundlesVisible] = useState(false)

  useEffect(() => {
    const section = deliverSectionRef.current
    if (!section) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setDeliverVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDeliverVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
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

  return (
    <main className="partner-page relative overflow-hidden pt-24">
      {/* Hero Section */}
      <section className="partner-hero live-hero apple-enterprise-hero relative">
        <HeroLiveBackground />
        <div className="partner-hero-content apple-enterprise-hero-content w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="apple-enterprise-hero-logo apple-enterprise-hero-fade apple-enterprise-hero-fade-1">
            <img
              src="/partners/apple.png"
              alt="Apple"
              className="apple-enterprise-hero-logo-img"
            />
          </div>
          <span className="pill pill--tight apple-enterprise-hero-pill apple-enterprise-hero-fade apple-enterprise-hero-fade-2">
            Distribution Partner Program
          </span>
          <h1 className="apple-enterprise-hero-title apple-enterprise-hero-fade apple-enterprise-hero-fade-3">
            Enterprise Apple Procurement,
            <span className="block apple-enterprise-hero-accent">Made Simple</span>
          </h1>
          <p className="apple-enterprise-hero-kicker apple-enterprise-hero-fade apple-enterprise-hero-fade-4">
            Enable your workforce with Apple devices at scale.
          </p>
          <p className="apple-enterprise-hero-copy apple-enterprise-hero-fade apple-enterprise-hero-fade-5">
            Pirlanta simplifies Apple procurement for enterprises — handling volume orders, enterprise pricing, role-based device recommendations, and phased rollouts so your teams get the right Apple hardware, on time, at the right price.
          </p>
          <div className="apple-enterprise-hero-actions apple-enterprise-hero-fade apple-enterprise-hero-fade-6">
            <a
              href="/contact"
              className="apple-enterprise-hero-button apple-enterprise-hero-button--primary"
            >
              Request Enterprise Pricing →
            </a>
            <a
              href="/contact"
              className="apple-enterprise-hero-button apple-enterprise-hero-button--ghost"
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
      <section
        ref={devicesSectionRef}
        className={`section-light apple-device-section${devicesVisible ? ' is-visible' : ''}`}
      >
        <div className="apple-device-wrapper mx-auto max-w-7xl px-6">
          <div className="apple-device-header apple-device-fade apple-device-delay-1">
            <h2 className="apple-device-title">Apple Devices for Every Enterprise Role</h2>
            <p className="apple-device-subtitle">
              From executive laptops to frontline tablets — procure the right Apple device for every team.
            </p>
          </div>
          <div className="apple-device-grid">
            {devices.map((item, index) => (
              <div
                key={item.title}
                className={`apple-device-card apple-device-fade apple-device-delay-${index + 2}${item.iconSet ? ' apple-device-card--accessories' : ''}`}
              >
                <div className="apple-device-media">
                  {item.iconSet === 'accessories' ? (
                    <div className="apple-device-accessories" aria-hidden="true">
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
                      className={`apple-device-image ${item.imageClass ?? ''}`}
                      loading="lazy"
                    />
                  )}
                </div>
                <h3 className="apple-device-name">{item.title}</h3>
                <p className="apple-device-products">{item.products}</p>
                <p className="apple-device-copy">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Pirlanta Delivers */}
      <section
        ref={deliverSectionRef}
        className={`section-light apple-deliver-section${deliverVisible ? ' is-visible' : ''}`}
      >
        <div className="apple-deliver-wrapper mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="apple-deliver-title">What Pirlanta Delivers</h2>
          <p className="apple-deliver-subtitle">
            End-to-end Apple procurement support built for enterprise scale.
          </p>
          <div className="apple-deliver-grid mt-12">
            {delivers.map((item) => (
              <div key={item.title} className="apple-deliver-card">
                <div className="apple-deliver-icon" aria-hidden="true">
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
            Pre-configured device packages for common enterprise roles.
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
