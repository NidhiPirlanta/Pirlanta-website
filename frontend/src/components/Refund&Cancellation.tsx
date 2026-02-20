import { useEffect, useRef, useState, type CSSProperties } from 'react'
import HeroLiveBackground from './HeroLiveBackground'
import { getBaseUrl } from '../utils/baseUrl'
import '../styles/Refund&Cancellation.css'

export default function RefundCancellationPage() {
  const refundSectionRef = useRef<HTMLElement | null>(null)
  const [refundVisible, setRefundVisible] = useState(false)

  useEffect(() => {
    const section = refundSectionRef.current
    if (!section) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setRefundVisible(true)
      return
    }

    if (!('IntersectionObserver' in window)) {
      setRefundVisible(true)
      return
    }

    const observer = new IntersectionObserver(
          ([entry]) => {
        if (entry.isIntersecting) {
          setRefundVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <main className="partner-page relative overflow-hidden pt-24">
      <section
        className="partner-hero live-hero partner-ecosystem-hero relative min-h-[85vh] flex items-center"
        id="terms"
      >
        <HeroLiveBackground />
        <div className="partner-hero-content partner-ecosystem-content w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 text-center">
          <span className="pill pill--tight partner-ecosystem-pill partner-hero-fade partner-hero-fade-1">
            Last updated: January 2026
          </span>
          <h1 className="partner-ecosystem-title partner-hero-fade partner-hero-fade-2">
            Refund & <span className="partner-ecosystem-accent">Cancellation Policy</span>
          </h1>
          <p className="partner-ecosystem-subtitle partner-hero-fade partner-hero-fade-3">
            Our policies regarding refunds and cancellations.
          </p>
        </div>


        <div
          className="absolute bottom-0 left-0 z-10 w-full overflow-hidden leading-[0] transform translate-y-[1px]"
          aria-hidden="true"
        >
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px] fill-white"
          >
            <path d="M0,0 Q600,120 1200,0 L1200,120 L0,120 Z" className="fill-white" />
          </svg>
        </div>
      </section>

      <div className="flex-grow pt-20 relative z-10">

        <section
          className={`refund-content-section${refundVisible ? ' is-visible' : ''}`}
          ref={refundSectionRef}
        >
          <div className="refund-body">
            <div className="refund-block">
              <h2 className="refund-title refund-reveal" style={{ '--delay': '0s' } as CSSProperties}>
                1. Service Cancellation
              </h2>
              <p className="refund-paragraph refund-reveal" style={{ '--delay': '0.08s' } as CSSProperties}>
                Cancellation terms are specified in individual service agreements. Unless otherwise stated:
              </p>
              <ul className="refund-list refund-reveal" style={{ '--delay': '0.16s' } as CSSProperties}>
                <li>
                  <strong>Consulting Projects:</strong> Either party may cancel with 15 days written
                  notice. Fees for work completed up to the cancellation date remain payable.
                </li>
                <li>
                  <strong>Managed Services:</strong> Monthly services may be cancelled with 30 days
                  notice prior to the next billing cycle. Annual contracts may have specific early
                  termination terms.
                </li>
                <li>
                  <strong>Retainer Agreements:</strong> Unused retainer hours do not carry forward
                  and are non-refundable. Cancellation requires 30 days written notice.
                </li>
              </ul>
            </div>

            <div className="refund-block">
              <h2 className="refund-title refund-reveal" style={{ '--delay': '0.12s' } as CSSProperties}>
                2. Refund Policy
              </h2>
              <p className="refund-paragraph refund-reveal" style={{ '--delay': '0.2s' } as CSSProperties}>
                Pirlanta is committed to delivering quality services. Our refund policy is as follows:
              </p>
              <ul className="refund-list refund-reveal" style={{ '--delay': '0.28s' } as CSSProperties}>
                <li>
                  <strong>Prepaid Services:</strong> If services have not commenced, a full refund
                  may be provided minus any administrative fees (up to 10%).
                </li>
                <li>
                  <strong>In-Progress Projects:</strong> Fees for work completed are non-refundable.
                  Refunds for undelivered work will be calculated on a pro-rata basis.
                </li>
                <li>
                  <strong>Annual Subscriptions:</strong> Early termination refunds, if applicable,
                  will be calculated based on remaining months minus an early termination fee.
                </li>
              </ul>
            </div>

            <div className="refund-block">
              <h2 className="refund-title refund-reveal" style={{ '--delay': '0.12s' } as CSSProperties}>
                3. Refund Request Process
              </h2>
              <p className="refund-paragraph refund-reveal" style={{ '--delay': '0.2s' } as CSSProperties}>
                To request a refund:
              </p>
              <ol className="refund-steps refund-reveal" style={{ '--delay': '0.28s' } as CSSProperties}>
                <li>
                  Submit a written request to{' '}
                  <a href="mailto:secure@pirlanta.in">secure@pirlanta.in</a>
                </li>
                <li>Include your company name, project reference, and reason for the request</li>
                <li>Our team will review your request within 5 business days</li>
                <li>Approved refunds are processed within 15 business days</li>
              </ol>
            </div>

            <div className="refund-block">
              <h2 className="refund-title refund-reveal" style={{ '--delay': '0.12s' } as CSSProperties}>
                4. Exceptions
              </h2>
              <p className="refund-paragraph refund-reveal" style={{ '--delay': '0.2s' } as CSSProperties}>
                Refunds are generally not provided for:
              </p>
              <ul className="refund-list refund-reveal" style={{ '--delay': '0.28s' } as CSSProperties}>
                <li>Completed deliverables that meet agreed specifications</li>
                <li>Services delayed due to client-side dependencies</li>
                <li>Third-party license fees (subject to vendor policies)</li>
                <li>Travel and expenses already incurred</li>
                <li>Custom development work completed to specification</li>
              </ul>
            </div>

            <div className="refund-block">
              <h2 className="refund-title refund-reveal" style={{ '--delay': '0.12s' } as CSSProperties}>
                5. Service Modifications
              </h2>
              <p className="refund-paragraph refund-reveal" style={{ '--delay': '0.2s' } as CSSProperties}>
                If you wish to modify the scope of services rather than cancel:
              </p>
              <ul className="refund-list refund-reveal" style={{ '--delay': '0.28s' } as CSSProperties}>
                <li>Contact your account manager to discuss changes</li>
                <li>Scope changes may result in revised pricing</li>
                <li>Modified terms will be documented in a change order</li>
              </ul>
            </div>

            <div className="refund-block">
              <h2 className="refund-title refund-reveal" style={{ '--delay': '0.12s' } as CSSProperties}>
                6. Dispute Resolution
              </h2>
              <p className="refund-paragraph refund-reveal" style={{ '--delay': '0.2s' } as CSSProperties}>
                If you are unsatisfied with a service or refund decision:
              </p>
              <ol className="refund-steps refund-reveal" style={{ '--delay': '0.28s' } as CSSProperties}>
                <li>Contact your account manager to discuss your concerns</li>
                <li>If unresolved, escalate to our management team</li>
                <li>We are committed to finding a fair resolution</li>
              </ol>
            </div>

            <div className="refund-block">
              <h2 className="refund-title refund-reveal" style={{ '--delay': '0.12s' } as CSSProperties}>
                7. Contact Us
              </h2>
              <p className="refund-paragraph refund-reveal" style={{ '--delay': '0.2s' } as CSSProperties}>
                For questions about this policy or to initiate a cancellation/refund request:
              </p>
              <div className="refund-contact refund-reveal" style={{ '--delay': '0.28s' } as CSSProperties}>
                <p className="refund-contact-title">Pirlanta IT Solutions Private Limited</p>
                <p>C/O Flex Coworks, 2nd Floor, 71, 15th Cross Road,</p>
                <p>Dollar Layout, J. P. Nagar, Bengaluru – 560078</p>
                <p>
                  Email: <a href="mailto:secure@pirlanta.in">secure@pirlanta.in</a>
                </p>
                <p>
                  Phone: <a href="tel:+919429693558">+91 94296 93558</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="section-dark section-dark--cta">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-white">Become a Partner</h2>
          <p className="mt-3 text-sm text-emerald-100/70">
            Interested in partnering with Pirlanta? Let&apos;s explore how we can work together to
            deliver exceptional value to our clients.
          </p>
          <a
            className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-600"
            href="/contact"
          >
            Get in Touch →
          </a>
          <div className="footer-grid">
            <div className="footer-brand">
              <img
                src={`${getBaseUrl()}/static/pir-logo.png`}
                alt="Pirlanta"
                className="footer-logo"
              />
              <p>
                Secure. Data-Smart. Always Connected. Delivering integrated cybersecurity, data
                infrastructure, and network solutions for enterprises across India.
              </p>
              <ul>
                <li>+91 94296 93558</li>
                <li>secure@pirlanta.in</li>
                <li>
                  90 Flex Coworks, 2nd Floor, 71, 15th Cross Road, J.P. Nagar, Bengaluru - 560078
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <a href="/">Home</a>
              <a href="/about">About Us</a>
              <a href="/contact">Contact Us</a>
            </div>
            <div className="footer-column">
              <h4>Services</h4>
              <a href="/services/cybersecurity">Cybersecurity</a>
              <a href="/services/data-centre-cloud">Data Centre</a>
              <a href="/services/network-sd-wan">Secure Network</a>
            </div>
            <div className="footer-column">
              <h4>Partners</h4>
              <a href="/partners/ecosystem">Partner Ecosystem</a>
              <a href="/partners/networking/juniper">Juniper Networks</a>
              <a href="/partners/security/rsa">RSA</a>
              <a href="/partners/security/crowdstrike">CrowdStrike</a>
              <a href="/partners/security/fortinet">Fortinet</a>
              <a href="/partners/security/checkpoint">Check Point</a>
              <a href="/partners/security/forcepoint">Forcepoint</a>
              <a href="/partners/security/barracuda">Barracuda</a>
              <a href="/partners/endpoint/apple-enterprise">Apple</a>
              <a href="/partners/endpoint/jamf">Jamf</a>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <a href="/terms">Terms of Service</a>
              <a href="/refund-cancellation">Refund & Cancellation</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Pirlanta IT Solutions Pvt. Ltd. All rights reserved.</span>
            <div className="footer-socials">
              <a href="https://x.com/LtdPirlanta/" target="_blank" rel="noopener noreferrer" aria-label="Pirlanta on X">✕</a>
              <a href="http://linkedin.com/company/pirlantait/" target="_blank" rel="noopener noreferrer" aria-label="Pirlanta on LinkedIn">in</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
