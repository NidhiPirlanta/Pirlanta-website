import { useEffect, useRef, useState, type CSSProperties } from 'react'
import HeroLiveBackground from './HeroLiveBackground'
import { getBaseUrl } from '../utils/baseUrl'
import '../styles/Terms.css'

export default function Terms() {
  const termsSectionRef = useRef<HTMLElement | null>(null)
  const [termsVisible, setTermsVisible] = useState(false)

  useEffect(() => {
    const section = termsSectionRef.current
    if (!section) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setTermsVisible(true)
      return
    }

    if (!('IntersectionObserver' in window)) {
      setTermsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTermsVisible(true)
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
            Terms of <span className="partner-ecosystem-accent">Service</span>
          </h1>
          <p className="partner-ecosystem-subtitle partner-hero-fade partner-hero-fade-3">
            Please read these terms carefully before using our services.
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
          className={`terms-content-section${termsVisible ? ' is-visible' : ''}`}
          ref={termsSectionRef}
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="terms-body">
                <div className="terms-block">
                  <h2 className="terms-title terms-reveal" style={{ '--delay': '0s' } as CSSProperties}>
                    1. Acceptance of Terms
                  </h2>
                  <p className="terms-paragraph terms-reveal" style={{ '--delay': '0.08s' } as CSSProperties}>
                  By accessing or using the services provided by Pirlanta IT Solutions Private
                  Limited (&quot;Pirlanta&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;),
                  you agree to be bound by these Terms of Service. If you do not agree to these
                  terms, please do not use our services.
                  </p>
                </div>

                <div className="terms-block">
                  <h2 className="terms-title terms-reveal" style={{ '--delay': '0.12s' } as CSSProperties}>
                    2. Services
                  </h2>
                  <p className="terms-paragraph terms-reveal" style={{ '--delay': '0.2s' } as CSSProperties}>
                    Pirlanta provides IT consulting and managed services including but not limited to:
                  </p>
                  <ul className="terms-list terms-reveal" style={{ '--delay': '0.28s' } as CSSProperties}>
                  <li>Cybersecurity consulting and managed detection and response</li>
                  <li>Data centre modernisation and cloud migration</li>
                  <li>Network design, SD-WAN, and SASE implementations</li>
                  <li>Compliance consulting and auditing</li>
                  <li>IT infrastructure management</li>
                  </ul>
                  <p className="terms-paragraph terms-reveal" style={{ '--delay': '0.36s' } as CSSProperties}>
                    Specific services, deliverables, and terms will be outlined in individual
                    Statements of Work (SOW) or service agreements.
                  </p>
                </div>

                <div className="terms-block">
                  <h2 className="terms-title terms-reveal" style={{ '--delay': '0.12s' } as CSSProperties}>
                    3. Client Responsibilities
                  </h2>
                  <p className="terms-paragraph terms-reveal" style={{ '--delay': '0.2s' } as CSSProperties}>
                    Clients agree to:
                  </p>
                  <ul className="terms-list terms-reveal" style={{ '--delay': '0.28s' } as CSSProperties}>
                  <li>Provide accurate and complete information necessary for service delivery</li>
                  <li>Grant reasonable access to systems and facilities as required</li>
                  <li>Designate authorised personnel for communication and decisions</li>
                  <li>Review and provide timely feedback on deliverables</li>
                  <li>Maintain appropriate backups of their data</li>
                  </ul>
                </div>

                <div className="terms-block">
                  <h2 className="terms-title terms-reveal" style={{ '--delay': '0.12s' } as CSSProperties}>
                    4. Payment Terms
                  </h2>
                  <p className="terms-paragraph terms-reveal" style={{ '--delay': '0.2s' } as CSSProperties}>
                    Payment terms are specified in individual service agreements. Unless otherwise stated:
                  </p>
                  <ul className="terms-list terms-reveal" style={{ '--delay': '0.28s' } as CSSProperties}>
                  <li>Invoices are payable within 15 days of receipt</li>
                  <li>Late payments may incur interest at 1.5% per month</li>
                  <li>All prices are exclusive of applicable taxes</li>
                  <li>Expenses incurred with prior approval are billed at cost</li>
                  </ul>
                </div>

                <div className="terms-block">
                  <h2 className="terms-title terms-reveal" style={{ '--delay': '0.12s' } as CSSProperties}>
                    5. Confidentiality
                  </h2>
                  <p className="terms-paragraph terms-reveal" style={{ '--delay': '0.2s' } as CSSProperties}>
                    Both parties agree to maintain the confidentiality of proprietary information
                    shared during the engagement. This obligation survives the termination of services.
                  </p>
                </div>

                <div className="terms-block">
                  <h2 className="terms-title terms-reveal" style={{ '--delay': '0.12s' } as CSSProperties}>
                    6. Intellectual Property
                  </h2>
                  <p className="terms-paragraph terms-reveal" style={{ '--delay': '0.2s' } as CSSProperties}>
                    Unless otherwise specified in the service agreement:
                  </p>
                  <ul className="terms-list terms-reveal" style={{ '--delay': '0.28s' } as CSSProperties}>
                  <li>Pirlanta retains ownership of methodologies, tools, and frameworks</li>
                  <li>Deliverables created specifically for the client become client property upon full payment</li>
                  <li>Third-party software remains subject to its respective licenses</li>
                  </ul>
                </div>

                <div className="terms-block">
                  <h2 className="terms-title terms-reveal" style={{ '--delay': '0.12s' } as CSSProperties}>
                    7. Limitation of Liability
                  </h2>
                  <p className="terms-paragraph terms-reveal" style={{ '--delay': '0.2s' } as CSSProperties}>
                    To the maximum extent permitted by law, Pirlanta&apos;s liability shall not
                    exceed the fees paid for the specific services giving rise to the claim. We are
                    not liable for indirect, incidental, or consequential damages.
                  </p>
                </div>

                <div className="terms-block">
                  <h2 className="terms-title terms-reveal" style={{ '--delay': '0.12s' } as CSSProperties}>
                    8. Termination
                  </h2>
                  <p className="terms-paragraph terms-reveal" style={{ '--delay': '0.2s' } as CSSProperties}>
                    Either party may terminate services as specified in the service agreement. Upon
                    termination, clients remain responsible for fees incurred up to the termination
                    date, and Pirlanta will provide reasonable transition assistance.
                  </p>
                </div>

                <div className="terms-block">
                  <h2 className="terms-title terms-reveal" style={{ '--delay': '0.12s' } as CSSProperties}>
                    9. Governing Law
                  </h2>
                  <p className="terms-paragraph terms-reveal" style={{ '--delay': '0.2s' } as CSSProperties}>
                    These terms are governed by the laws of India. Any disputes shall be subject to
                    the exclusive jurisdiction of courts in Bengaluru, Karnataka.
                  </p>
                </div>

                <div className="terms-block">
                  <h2 className="terms-title terms-reveal" style={{ '--delay': '0.12s' } as CSSProperties}>
                    10. Contact
                  </h2>
                  <p className="terms-paragraph terms-reveal" style={{ '--delay': '0.2s' } as CSSProperties}>
                    For questions about these Terms of Service, please contact us at:
                  </p>
                  <div className="terms-contact terms-reveal" style={{ '--delay': '0.28s' } as CSSProperties}>
                    <p className="terms-contact-title">Pirlanta IT Solutions Private Limited</p>
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
