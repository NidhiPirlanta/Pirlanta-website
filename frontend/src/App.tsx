import { Suspense, lazy, type CSSProperties, useEffect, useMemo, useRef, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import { motion } from "framer-motion";

import { makeRandomAttack, seedAttacks, type Attack, type AttackType } from './data/threatData'
import { getApiBaseUrl, getBaseUrl } from './utils/baseUrl'
import { preloadRoute } from './utils/routePreload'
import AntigravityBackground from './components/AntigravityBackground'
import HeroLiveBackground from './components/HeroLiveBackground'
import Header from './components/Header'
import offerShield from './assets/icons/offer-shield.svg'
import offerWifi from './assets/icons/offer-wifi.svg'
import offerPuzzle from './assets/icons/offer-puzzle.svg'





const ThreatGlobe = lazy(() => import('./components/ThreatGlobe'))
const CybersecurityPage = lazy(() => import('./pages/CybersecurityPage'))
const DataCentrePage = lazy(() => import('./pages/DataCentrePage'))
const AssessmentPage = lazy(() => import('./components/AssessmentPage'))
const BarracudaSecurityPage = lazy(() => import('./components/BarracudaSecurityPage'))
const FortinetSecurityPage = lazy(() => import('./components/FortinetSecurityPage'))
const RSASecurityPage = lazy(() => import('./components/RSASecurityPage'))
const CrowdStrikeSecurityPage = lazy(() => import('./components/CrowdStrikeSecurityPage'))
const ForcepointSecurityPage = lazy(() => import('./components/ForcepointSecurityPage'))
const CheckPointSecurityPage = lazy(() => import('./components/CheckPointSecurityPage'))
const AppleForEnterprisePage = lazy(() => import('./components/AppleForEnterprisePage'))
const AppleForSMBPage = lazy(() => import('./components/AppleForSMBPage'))
const JamfPage = lazy(() => import('./components/JamfPage'))
const TermsPage = lazy(() => import('./components/Terms'))
const RefundCancellationPage = lazy(() => import('./components/Refund&Cancellation'))

type HoverInfo = {
  country: string
  region: string
  attackCount: number
  attackType: string
  timestamp: string
  x: number
  y: number
}


function SecureNetworkPage() {
  const capabilitiesSectionRef = useRef<HTMLElement | null>(null)
  const [capabilitiesVisible, setCapabilitiesVisible] = useState(false)
  const benefitsSectionRef = useRef<HTMLElement | null>(null)
  const [benefitsVisible, setBenefitsVisible] = useState(false)
  const capabilityCards = [
    {
      title: 'AI-Powered Traffic Analysis',
      copy: 'Machine learning analyzes traffic patterns to optimize routing and detect anomalies in real-time.',
      icon: 'pulse',
    },
    {
      title: 'Self-Healing Networks',
      copy: 'AI-driven automation predicts failures and reroutes traffic before service issues.',
      icon: 'server',
    },
    {
      title: 'Intelligent SD-WAN',
      copy: 'AI-optimized path selection and application-aware routing for consistent performance.',
      icon: 'network',
    },
    {
      title: 'Cloud Networking & Integration',
      copy: 'Secure, seamless connectivity between on-premises and multi-cloud environments.',
      icon: 'cloud',
    },
    {
      title: '5G & Edge Connectivity',
      copy: 'Ultra-low-latency networks for IoT devices and real-time analytics.',
      icon: 'wifi',
    },
    {
      title: 'Secure Digital Workspace',
      copy: 'Zero-trust remote access with guaranteed Quality of Service.',
      icon: 'monitor',
    },
    {
      title: 'Zero-Trust Security',
      copy: 'Micro-segmentation, MFA, and end-to-end encrypted pathways.',
      icon: 'lock',
    },
    {
      title: 'Network Assessment',
      copy: 'Comprehensive health and security assessment with AI-driven insights.',
      icon: 'clipboard',
    },
  ]

  const benefitItems = [
    'AI-driven traffic analysis optimizes routing and detects threats before impact.',
    'Self-healing networks reduce downtime with predictive failure prevention.',
    'Intelligent SD-WAN adapts in real-time to deliver consistent application performance.',
    'Zero-trust security built into every layer with AI-verified access.',
    'AI-powered capacity planning ensures networks scale with your business.',
  ]

  const networkFaqs = [
    {
      question: 'What network security services do you provide in India?',
      answer:
        'We design and operate SD-WAN, ZTNA, and SASE solutions with identity-aware policy, observability, and automation across India.',
    },
    {
      question: 'Can you replace VPN with Zero Trust Network Access (ZTNA)?',
      answer:
        'Yes, we implement identity and context-aware access that reduces lateral movement risk and improves user experience compared to traditional VPNs.',
    },
    {
      question: 'How do you deploy SD-WAN with minimal disruption?',
      answer:
        'We use phased rollouts with validation and rollback plans to improve latency, uptime, and operations without business disruption.',
    },
    {
      question: 'Do you integrate Secure Access Service Edge (SASE)?',
      answer:
        'Yes, we provide unified access and security for distributed teams and cloud apps, aligned to Zero Trust principles.',
    },
    {
      question: 'Do you support multi-cloud interconnects and SaaS acceleration?',
      answer:
        'Yes, we design secure interconnects and optimize routing for cloud services and SaaS applications.',
    },
    {
      question: 'How do you monitor and troubleshoot networks post go-live?',
      answer:
        'We provide deep observability, alerting, and automation to reduce mean time to resolution and change risk.',
    },
    {
      question: 'Can you enforce identity-aware access with Cisco ISE/Duo?',
      answer:
        'Yes, we implement network access control (ISE) and MFA (Duo) for device/user trust, aligned to Zero Trust principles.',
    },
    {
      question: 'Do you offer SLAs and day-2 operations support?',
      answer:
        'Yes, our operations include incident handling, policy changes, and capacity planning under agreed SLAs.',
    },
    {
      question: 'How do you handle branch rollouts at scale?',
      answer:
        'We use factory-style provisioning, standardized templates, and remote validation to speed deployments.',
    },
    {
      question: 'Can you audit existing networks for ZTNA/SASE readiness?',
      answer:
        'Yes, we perform readiness assessments and provide a roadmap with phases, risks, and expected outcomes.',
    },
  ]

  const [openNetworkFaq, setOpenNetworkFaq] = useState<number | null>(null)

  useEffect(() => {
    const section = capabilitiesSectionRef.current
    if (!section) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setCapabilitiesVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCapabilitiesVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const section = benefitsSectionRef.current
    if (!section) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setBenefitsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBenefitsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <main className="cyber-page relative overflow-hidden pt-24">
      <section className="hero-section live-hero network-hero-section relative flex items-center" >
        <HeroLiveBackground />
        <div className="network-hero-content mx-auto max-w-7xl px-6 py-24 relative z-10">
          <div className="network-hero-copy-wrap">
            <div className="network-hero-icon network-hero-fade network-hero-fade-1">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="6" r="2" stroke="currentColor" strokeWidth="2" />
                <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
                <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
                <path d="M12 8v4M10 14h4M8 16l4-4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h1 className="network-hero-title network-hero-fade network-hero-fade-2">Secure Network</h1>
            <p className="network-hero-kicker network-hero-fade network-hero-fade-3">
              AI-Powered Traffic Analysis. Self-Healing Networks. Intelligent Routing.
            </p>
            <p className="network-hero-description network-hero-fade network-hero-fade-4">
              High-performance networks with AI-driven optimization, predictive failure prevention,
              and Zero Trust security built-in.
            </p>
            <div className="network-hero-actions network-hero-fade network-hero-fade-5">
              <a href = "/contact">
              <button className="network-hero-button network-hero-button--primary">
                Get Started →
              </button>
              </a>

              <a href = "#capabilities">
              <button className="network-hero-button network-hero-button--ghost">
                View Capabilities
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="hero-wave" aria-hidden="true" />

      <section
        className={`section-light network-capabilities-section${capabilitiesVisible ? ' is-visible' : ''}`}
        ref={capabilitiesSectionRef}
        id = "capabilities"
      >
        <div className="network-capabilities-wrapper mx-auto max-w-7xl px-6 py-20 text-center">
          <span
            className="pill pill--tight network-capabilities-pill network-cap-reveal"
            style={{ '--delay': '0s' } as CSSProperties}
          >
            <span className="network-cap-pill-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
                <path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            AI-Powered Networking
          </span>
          <h2
            className="network-capabilities-title network-cap-reveal"
            style={{ '--delay': '0.08s' } as CSSProperties}
          >
            Network Capabilities
          </h2>
          <p
            className="network-capabilities-subtitle network-cap-reveal"
            style={{ '--delay': '0.16s' } as CSSProperties}
          >
            AI-driven networking solutions for intelligent routing, predictive maintenance, and
            adaptive security.
          </p>
          <div className="network-cap-grid">
            {capabilityCards.map((item, index) => (
              <div
                key={item.title}
                className={`network-cap-reveal ${
                  index < 3 ? 'network-cap-card--primary' : 'network-cap-card--secondary'
                }`}
                style={{ '--delay': `${0.24 + index * 0.08}s` } as CSSProperties}
              >
                <div className="network-cap-card">
                  <div className="network-cap-icon" aria-hidden="true">
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
                    {item.icon === 'network' && (
                      <svg viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="6" r="2" stroke="currentColor" strokeWidth="2" />
                        <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
                        <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
                        <path d="M12 8v4M10 14h4M8 16l4-4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    )}
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
                    {item.icon === 'wifi' && (
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M4 10c4-4 12-4 16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M7 13c3-3 7-3 10 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M10 16c2-2 4-2 6 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <circle cx="12" cy="19" r="1" fill="currentColor" />
                      </svg>
                    )}
                    {item.icon === 'monitor' && (
                      <svg viewBox="0 0 24 24" fill="none">
                        <rect x="4" y="5" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
                        <path d="M9 19h6M12 15v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    )}
                    {item.icon === 'lock' && (
                      <svg viewBox="0 0 24 24" fill="none">
                        <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="2" />
                        <path d="M8 11V8a4 4 0 1 1 8 0v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    )}
                    {item.icon === 'clipboard' && (
                      <svg viewBox="0 0 24 24" fill="none">
                        <rect x="6" y="5" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                        <rect x="9" y="3" width="6" height="4" rx="1.5" stroke="currentColor" strokeWidth="2" />
                        <path d="M9 12h6M9 16h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    )}
                    {item.icon === 'shield' && (
                      <svg viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  {index < 3 && <span className="cap-tag">AI-Powered</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={benefitsSectionRef}
        className={`section-light network-benefits-section${benefitsVisible ? ' is-visible' : ''}`}
      >
        <div className="network-benefits-wrapper mx-auto max-w-7xl px-6">
          <div className="network-benefits-grid">
            <div className="network-benefits-copy">
              <h2 className="network-benefits-title network-benefits-fade network-benefits-left network-benefits-delay-1">
                Key Benefits
              </h2>
              <p className="network-benefits-subtitle network-benefits-fade network-benefits-left network-benefits-delay-2">
                Transform your network infrastructure with solutions that deliver performance,
                security, and cost efficiency.
              </p>
              <a href = "/contact">
              <button className="network-benefits-button network-benefits-fade network-benefits-left network-benefits-delay-3">
                Get Network Assessment →
              </button>
              </a>
            </div>
            <div className="cyber-benefits">
              {benefitItems.map((item, index) => (
                <div
                  key={item}
                  className={`cyber-benefit-card network-benefits-fade network-benefits-right network-benefits-delay-${index + 4}`}
                >
                  <span className="benefit-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
                      <path
                        d="M9 12l2 2 4-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-light network-faq-section">
        <div className="network-faq-grid mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="network-faq-title">Network FAQs</h2>
            <p className="network-faq-subtitle">
              Common questions about SD-WAN, ZTNA, SASE, and network security services.
            </p>
            <a href = "/contact">
            <button className="network-faq-button">
              Ask a Question
            </button>
            </a>
          </div>
          <div className="network-faq-list">
            {networkFaqs.map((item, index) => {
              const isOpen = openNetworkFaq === index
              return (
                <button
                  key={item.question}
                  className={`network-faq-item ${isOpen ? 'network-faq-item--open' : ''}`}
                  onClick={() => setOpenNetworkFaq(isOpen ? null : index)}
                  type="button"
                >
                  <span className="network-faq-question">{item.question}</span>
                  <span className="network-faq-toggle">▾</span>
                  <span className="network-faq-answer">{item.answer}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-dark section-dark--cta">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-white">Ready for Zero Trust Networking?</h2>
          <p className="mt-3 text-sm text-emerald-100/70">
            Start with a network assessment to evaluate your ZTNA/SASE readiness and build a
            transformation roadmap.
          </p>
          <a
            className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-600"
            href="/contact"
          >
            Get Network Assessment →
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
              <a href="/partners/networking/cisco">Cisco</a>
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

function AiCodeAuditsPage() {
  const auditStats = [
    { value: 48, suffix: '%', label: 'AI code has vulnerabilities', sub: 'Stanford Research' },
    { value: 3, suffix: 'x', label: 'More dependency risks', sub: 'OWASP AI Top 10' },
    { value: 72, suffix: '%', label: 'Developers trust AI code without review', sub: 'GitHub Survey' },
    { value: 40, suffix: '%', label: 'Code volume increases, same security teams', sub: 'Industry Average' },
  ]

  const auditCaps = [
    {
      title: 'Static Application Security Testing (SAST)',
      copy: 'Deep source code analysis to identify vulnerabilities, insecure patterns, and logic flaws in AI-generated code before deployment.',
      icon: 'search',
    },
    {
      title: 'Dynamic Application Security Testing (DAST)',
      copy: 'Runtime testing of deployed applications to uncover vulnerabilities that only appear during execution.',
      icon: 'bug',
    },
    {
      title: 'AI Prompt Injection Testing',
      copy: 'Specialized testing for AI-specific attack vectors including prompt injection and model manipulation.',
      icon: 'alert',
    },
    {
      title: 'Dependency & SCA Scanning',
      copy: 'Identify vulnerable, outdated, or malicious packages in your dependency tree with software composition analysis.',
      icon: 'layers',
    },
    {
      title: 'Secrets Detection',
      copy: 'Scan for hardcoded API keys, tokens, passwords, and credentials that AI tools frequently embed in code.',
      icon: 'lock',
    },
    {
      title: 'Infrastructure as Code Review',
      copy: 'Security analysis of Terraform, CloudFormation, and Kubernetes configs generated by AI coding assistants.',
      icon: 'cube',
    },
    {
      title: 'API Security Assessment',
      copy: 'Test API endpoints for broken authentication, excessive data exposure, and injection flaws.',
      icon: 'api',
    },
    {
      title: 'Compliance Mapping',
      copy: 'Map findings to PCI DSS, HIPAA, ISO 27001, and OWASP frameworks with audit-ready reporting.',
      icon: 'check',
    },
    {
      title: 'Remediation Guidance',
      copy: 'Detailed fix recommendations with code examples, priority scoring, and re-test verification.',
      icon: 'wrench',
    },
  ]

  const howSteps = [
    { step: '01', title: 'Scope', copy: 'We map your AI-generated codebase, identify critical paths, and define audit boundaries and compliance requirements.' },
    { step: '02', title: 'Scan', copy: 'Automated SAST, DAST, SCA, and secrets detection runs across your entire codebase with AI-specific rule sets.' },
    { step: '03', title: 'Review', copy: 'Senior security engineers manually verify findings, eliminate false positives, and assess business impact.' },
    { step: '04', title: 'Remediate', copy: 'Prioritized fix recommendations with code-level guidance, re-testing verification, and executive summary report.' },
  ]

  const benefits = [
    'Catch the 48% of vulnerabilities that AI coding tools introduce before they reach production.',
    'Reduce dependency risks with SCA scanning that identifies malicious or vulnerable packages in AI-generated code.',
    'Meet compliance requirements (PCI DSS, HIPAA, ISO 27001) with audit-ready vulnerability reports.',
    'Protect against AI-specific attack vectors like prompt injection that traditional scanners miss.',
    'Get actionable remediation guidance with code examples, not just vulnerability lists.',
  ]

  const whoFor = [
    { title: 'Startups', copy: 'Teams shipping fast with Cursor, Copilot, or ChatGPT who need security without slowing velocity.', icon: 'rocket' },
    { title: 'Enterprises', copy: 'Organizations adopting AI coding tools at scale who need consistent security governance.', icon: 'building' },
    { title: 'Regulated Industries', copy: 'BFSI, healthcare, and government teams where AI-generated code must meet compliance standards.', icon: 'badge' },
    { title: 'CTOs & Engineering Leaders', copy: 'Technical leaders who want visibility into the security posture of their AI-assisted development.', icon: 'user' },
  ]

  const auditFaqs = [
    {
      question: 'What AI coding tools do you audit code from?',
      answer:
        'We audit code generated by all major AI coding assistants including GitHub Copilot, Cursor, ChatGPT, Claude, Amazon CodeWhisperer, and Tabnine. Our testing methodology covers AI-specific patterns regardless of the tool used.',
    },
    {
      question: 'How is this different from a regular code audit?',
      answer:
        'AI-generated code has distinct vulnerability patterns: hallucinated APIs, outdated library references, hardcoded credentials, and susceptibility to prompt injection. Our audit includes AI-specific test cases and rule sets that traditional audits miss.',
    },
    {
      question: 'What do we receive as a deliverable?',
      answer:
        'You receive a comprehensive report including: executive summary, detailed vulnerability findings with severity ratings, code-level remediation guidance, compliance mapping, and a re-test verification after fixes are applied.',
    },
    {
      question: 'How long does an audit take?',
      answer:
        'Typical audits complete within 1-3 weeks depending on codebase size and scope. We provide preliminary findings within the first week for critical vulnerabilities that need immediate attention.',
    },
    {
      question: 'Do you need access to our source code repository?',
      answer:
        'Yes, we require read access to the repositories being audited. We support GitHub, GitLab, Bitbucket, and Azure DevOps. All access is governed by NDA and our security protocols.',
    },
    {
      question: 'Can you audit infrastructure as code generated by AI?',
      answer:
        'Yes, we audit Terraform, CloudFormation, Kubernetes manifests, Docker configurations, and CI/CD pipelines. AI tools frequently generate insecure defaults in infrastructure code.',
    },
    {
      question: 'Is our code kept confidential?',
      answer:
        'Absolutely. All engagements are governed by NDA. Code is accessed via secure channels, never stored on external systems, and all findings are encrypted. We follow ISO 27001 data handling practices.',
    },
    {
      question: 'Do you offer ongoing monitoring after the initial audit?',
      answer:
        'Yes, we offer continuous security scanning as a managed service. This includes automated scanning on every commit, weekly reports, and quarterly manual reviews as your AI-generated codebase evolves.',
    },
  ]

  const [openAuditFaq, setOpenAuditFaq] = useState<number | null>(null)
  const gapSectionRef = useRef<HTMLElement | null>(null)
  const [gapVisible, setGapVisible] = useState(false)
  const [gapCounts, setGapCounts] = useState<number[]>(() => auditStats.map(() => 0))
  const gapCountStarted = useRef(false)
  const benefitsSectionRef = useRef<HTMLElement | null>(null)
  const [benefitsVisible, setBenefitsVisible] = useState(false)
  const stepsSectionRef = useRef<HTMLElement | null>(null)
  const [stepsVisible, setStepsVisible] = useState(false)
  const auditCapsSectionRef = useRef<HTMLElement | null>(null)
  const [auditCapsVisible, setAuditCapsVisible] = useState(false)
  const whoSectionRef = useRef<HTMLElement | null>(null)
  const [whoVisible, setWhoVisible] = useState(false)

  useEffect(() => {
    const section = gapSectionRef.current
    if (!section) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setGapVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGapVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!gapVisible || gapCountStarted.current) return
    gapCountStarted.current = true

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setGapCounts(auditStats.map((stat) => stat.value))
      return
    }

    const duration = 3800
    const start = performance.now()

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = easeOutCubic(progress)
      setGapCounts(auditStats.map((stat) => Math.round(stat.value * eased)))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [gapVisible])

  useEffect(() => {
    const section = benefitsSectionRef.current
    if (!section) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setBenefitsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBenefitsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const section = stepsSectionRef.current
    if (!section) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setStepsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStepsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
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
      setWhoVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWhoVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const section = auditCapsSectionRef.current
    if (!section) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setAuditCapsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAuditCapsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <main className="cyber-page relative overflow-hidden pt-24">
      <section className="hero-section live-hero ai-hero-section relative flex items-center">
        <HeroLiveBackground />
        <div className="ai-hero-content mx-auto max-w-7xl px-6 py-24 relative z-10">
          <div className="ai-hero-copy-wrap">
            <div className="ai-hero-icon ai-hero-fade ai-hero-fade-1">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h1 className="ai-hero-title ai-hero-fade ai-hero-fade-2">AI Code Audits</h1>
            <p className="ai-hero-kicker ai-hero-fade ai-hero-fade-3">
              Secure Your Vibe-Coded Applications. Human-Verified. AI-Powered.
            </p>
            <p className="ai-hero-description ai-hero-fade ai-hero-fade-4">
              Purpose-built security audits for AI-generated code from Cursor, Copilot, and ChatGPT.
              We find the vulnerabilities that automated scanners miss.
            </p>
            <div className="ai-hero-actions ai-hero-fade ai-hero-fade-5">
              <a href = "/contact">
              <button className="ai-hero-button ai-hero-button--primary">
                Get Started →
              </button>
              </a>
              <a href = "#capabilities">
              <button className="ai-hero-button ai-hero-button--ghost">
                View Capabilities
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="hero-wave" aria-hidden="true" />

      <section
        ref={gapSectionRef}
        className={`ai-gap-section cyber-results-section${gapVisible ? ' is-visible' : ''}`}
      >
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <span className="pill pill--tight cyber-results-pill ai-gap-pill">
            <span className="ai-gap-pill-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 9v4M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="currentColor" strokeWidth="2" />
              </svg>
            </span>
            The AI Code Security Gap
          </span>
          <h2 className="cyber-results-title ai-gap-title">
            AI Code Is Shipping Faster Than Security Can Keep Up
          </h2>
          <p className="cyber-results-subtitle ai-gap-subtitle">
            Development teams are generating more code than ever, but security practices haven’t adapted.
          </p>
          <div className="cyber-stat-grid mt-12">
            {auditStats.map((stat, index) => (
              <div key={stat.label} className="cyber-stat-card">
                <strong>{gapCounts[index]}{stat.suffix}</strong>
                <span>{stat.label}</span>
                <small>{stat.sub}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={auditCapsSectionRef}
        className={`section-light audit-capabilities-section${auditCapsVisible ? ' is-visible' : ''}`}
        id = "capabilities"
      >
        <div className="audit-capabilities-wrapper mx-auto w-full max-w-6xl px-4 py-24 text-center">
          <span className="pill pill--tight audit-cap-pill audit-cap-fade audit-cap-fade-1">
            <span className="audit-cap-pill-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 4l2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5L4.8 9.2l5-.7L12 4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              </svg>
            </span>
            Comprehensive Coverage
          </span>
          <h2 className="audit-cap-title audit-cap-fade audit-cap-fade-2">Audit Capabilities</h2>
          <p className="audit-cap-subtitle audit-cap-fade audit-cap-fade-3">
            End-to-end security testing designed specifically for AI-generated codebases.
          </p>
          <div className="cyber-cap-grid audit-cap-grid mt-12">
            {auditCaps.map((item, index) => (
              <div
                key={item.title}
                className="cyber-cap-card audit-cap-card cyber-cap-reveal"
                style={{ '--delay': `${index * 0.08}s` } as CSSProperties}
              >
                <div className="cyber-cap-icon" aria-hidden="true">
                  {item.icon === 'search' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2" />
                      <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'bug' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="10" r="4" stroke="currentColor" strokeWidth="2" />
                      <path d="M8 14v4M16 14v4M4 12h4M16 12h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'alert' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M12 5l7 13H5l7-13z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                      <path d="M12 10v4M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'layers' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M12 3l9 5-9 5-9-5 9-5z" stroke="currentColor" strokeWidth="2" />
                      <path d="M3 12l9 5 9-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'lock' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M8 11V8a4 4 0 1 1 8 0v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'cube' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M12 3l7 4-7 4-7-4 7-4z" stroke="currentColor" strokeWidth="2" />
                      <path d="M5 11v6l7 4 7-4v-6" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {item.icon === 'api' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M4 6h16M4 12h10M4 18h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="18" cy="12" r="2" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {item.icon === 'check' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'wrench' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M14 7l3 3-7 7H7v-3l7-7z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                      <path d="M17 4a3 3 0 0 0-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                </div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <span className="cap-tag">AI-Specific Testing</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={stepsSectionRef}
        className={`section-light ai-steps-section${stepsVisible ? ' is-visible' : ''}`}
      >
        <div className="ai-steps-wrapper mx-auto max-w-7xl px-6">
          <div className="ai-steps-header ai-steps-fade ai-steps-delay-1">
            <h2 className="ai-steps-title">How It Works</h2>
            <p className="ai-steps-subtitle">
              A proven four-step process from scoping to remediation.
            </p>
          </div>
          <div className="ai-steps-grid">
            {howSteps.map((step) => (
              <div
                key={step.step}
                className={`ai-step-card ai-steps-fade ai-steps-delay-${Number(step.step) + 1}`}
              >
                <span className="ai-step-number">{step.step}</span>
                <div className="ai-step-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
                    <path
                      d="M9 12l2 2 4-4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={benefitsSectionRef}
        className={`section-light ai-benefits-section${benefitsVisible ? ' is-visible' : ''}`}
      >
        <div className="ai-benefits-wrapper mx-auto max-w-7xl px-6">
          <div className="ai-benefits-grid">
            <div className="ai-benefits-copy">
              <h2 className="ai-benefits-title ai-benefits-fade ai-benefits-left ai-benefits-delay-1">
                Key Benefits
              </h2>
              <p className="ai-benefits-subtitle ai-benefits-fade ai-benefits-left ai-benefits-delay-2">
                Purpose-built security testing that addresses the unique risks of AI-generated code.
              </p>
              <a href = "/contact">
              <button className="ai-benefits-button ai-benefits-fade ai-benefits-left ai-benefits-delay-3">
                Schedule an Audit →
              </button>
              </a>
            </div>
            <div className="cyber-benefits">
              {benefits.map((item, index) => (
                <div
                  key={item}
                  className={`cyber-benefit-card ai-benefits-fade ai-benefits-right ai-benefits-delay-${index + 4}`}
                >
                  <span className="benefit-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
                      <path
                        d="M9 12l2 2 4-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        ref={whoSectionRef}
        className={`section-dark section-dark--muted ai-who-section${whoVisible ? ' is-visible' : ''}`}
      >
        <div className="ai-who-wrapper mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="ai-who-title ai-who-reveal" style={{ '--delay': '0s' } as CSSProperties}>
            Who This Is For
          </h2>
          <p className="ai-who-subtitle ai-who-reveal" style={{ '--delay': '0.12s' } as CSSProperties}>
            Any team using AI to write code needs security assurance.
          </p>
          <div className="ai-who-grid">
            {whoFor.map((item, index) => (
              <div
                key={item.title}
                className="ai-who-card ai-who-reveal"
                style={{ '--delay': `${0.2 + index * 0.08}s` } as CSSProperties}
              >
                <div className="ai-who-icon" aria-hidden="true">
                  {item.icon === 'rocket' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M14 3l7 7-6 6-7-7 6-6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                      <path d="M9 15l-4 4m0-4h4v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M12 7l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'building' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect x="4" y="3" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                      <rect x="14" y="8" width="6" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M8 7h2M8 11h2M8 15h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'badge' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="9" r="4" stroke="currentColor" strokeWidth="2" />
                      <path d="M8 14v6l4-2 4 2v-6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    </svg>
                  )}
                  {item.icon === 'user' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="9" cy="8" r="3.5" stroke="currentColor" strokeWidth="2" />
                      <path d="M3 20v-1.2A5.8 5.8 0 0 1 8.8 13h0.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M14 9h7M17.5 5.5v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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

      <section className="section-light audit-faq-section">
        <div className="audit-faq-grid mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="audit-faq-title">AI Code Audit FAQs</h2>
            <p className="audit-faq-subtitle">
              Common questions about our AI code security audit process and deliverables.
            </p>
            <a href = "/contact">
            <button className="audit-faq-button">
              Ask a Question
            </button>
            </a>
          </div>
          <div className="audit-faq-list">
            {auditFaqs.map((item, index) => {
              const isOpen = openAuditFaq === index
              return (
                <button
                  key={item.question}
                  className={`audit-faq-item ${isOpen ? 'audit-faq-item--open' : ''}`}
                  onClick={() => setOpenAuditFaq(isOpen ? null : index)}
                  type="button"
                >
                  <span className="audit-faq-question">{item.question}</span>
                  <span className="audit-faq-toggle">▾</span>
                  <span className="audit-faq-answer">{item.answer}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-dark section-dark--cta">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-white">Is Your AI-Generated Code Secure?</h2>
          <p className="mt-3 text-sm text-emerald-100/70">
            Find out before your customers do. Get a comprehensive security audit of your AI-generated codebase.
          </p>
          <a
            className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-600"
            href="/contact"
          >
            Get Your Code Audited →
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
              <a href="/partners/networking/cisco">Cisco</a>
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

function PartnerEcosystemPage() {
  const partnerLogos = [
    { name: 'Cisco', src: '/PartnerLogo/Cisco.png', label: 'Select Integrator' },
    { name: 'Palo Alto Networks', src: '/PartnerLogo/Paloalto.png', label: 'Solution Provider' },
    { name: 'Juniper Networks', src: '/PartnerLogo/Juniper.png', label: 'Value Added Reseller' },
    { name: 'RSA', src: '/PartnerLogo/RSA.png', label: 'Gold Partner' },
    { name: 'CrowdStrike', src: '/PartnerLogo/Crowdstrike.png' },
    { name: 'Fortinet', src: '/PartnerLogo/Fortinet.png' },
    { name: 'Check Point', src: '/PartnerLogo/CheckPoint.png' },
    { name: 'Sophos', src: '/PartnerLogo/Sophos.png' },
    { name: 'SonicWall', src: '/PartnerLogo/sonicwall.png' },
    { name: 'Forcepoint', src: '/PartnerLogo/Forcepoint.png' },
    { name: 'Barracuda', src: '/PartnerLogo/Barracuda.png' },
    { name: 'Veeam', src: '/PartnerLogo/Veeam.png', label: 'Cloud and Service Provider' },
    { name: 'Apple', src: '/PartnerLogo/Apple.png', label: 'Distribution Partner Program' },
    { name: 'Jamf', src: '/PartnerLogo/jamf.png', label: 'Registered Partner' },
    { name: 'AWS', src: '/PartnerLogo/AWS.png' },
    { name: 'Google Workspace', src: '/PartnerLogo/GoogleWorkspace.png' },
    { name: 'Hewlett Packard Enterprise', src: '/PartnerLogo/Hewlett.png', label: 'Business Solution Provider' },
    { name: 'Microsoft', src: '/PartnerLogo/Microsoft.png' },
    { name: 'Samsung', src: '/PartnerLogo/Samsung.png' },
    { name: 'Lenovo', src: '/PartnerLogo/Lenovo.png' },
    { name: 'EPOS', src: '/PartnerLogo/Epos.png' },
    { name: 'Logitech', src: '/PartnerLogo/Logitech.png' },
    { name: 'NxtGen', src: '/PartnerLogo/Nxtgen.png' },
    { name: 'Tata Tele', src: '/PartnerLogo/TataTele.png' },
    { name: 'ViewSonic', src: '/PartnerLogo/Viewsonic.png' },
    { name: 'Sitewall', src: '/PartnerLogo/Sitewall.png' },
  ]

  const ecosystemSectionRef = useRef<HTMLElement | null>(null)
  const [ecosystemVisible, setEcosystemVisible] = useState(false)

  useEffect(() => {
    const section = ecosystemSectionRef.current
    if (!section) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setEcosystemVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEcosystemVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <main className="partner-page relative overflow-hidden pt-24">
      <section className="partner-hero live-hero partner-ecosystem-hero relative min-h-[85vh] flex items-center">
        <HeroLiveBackground />
        <div className="partner-hero-content partner-ecosystem-content w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 text-center">
          <span className="pill pill--tight partner-ecosystem-pill partner-hero-fade partner-hero-fade-1">
            Technology Partners
          </span>
          <h1 className="partner-ecosystem-title partner-hero-fade partner-hero-fade-2">
            Our Growing <span className="partner-ecosystem-accent">Partner</span>
            <br />
            <span className="partner-ecosystem-accent">Ecosystem</span>
          </h1>
          <p className="partner-ecosystem-subtitle partner-hero-fade partner-hero-fade-3">
            We collaborate with industry-leading technology vendors to deliver comprehensive,
            best-in-class solutions for your business.
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

      <section
        ref={ecosystemSectionRef}
        className={`section-light ecosystem-partners-section${ecosystemVisible ? ' is-visible' : ''}`}
      >
        <div className="ecosystem-partners-wrapper mx-auto max-w-7xl px-6">
          <div
            className="ecosystem-partners-header ecosystem-partners-fade"
            style={{ ['--delay' as const]: '0.1s' }}
          >
            <h2 className="ecosystem-partners-title">Our Technology Partners</h2>
            <p className="ecosystem-partners-subtitle">
              A comprehensive ecosystem of leading technology vendors.
            </p>
          </div>
          <div className="ecosystem-partners-grid">
            {partnerLogos.map((logo, index) => (
              <div
                key={logo.name}
                className="ecosystem-partners-card ecosystem-partners-fade"
                style={{ ['--delay' as const]: `${0.2 + index * 0.06}s` }}
              >
                <img src={logo.src} alt={logo.name} className="ecosystem-partners-logo" />
                {logo.label && <span className="ecosystem-partners-label">{logo.label}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

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

function PartnerCiscoPage() {
  const whySectionRef = useRef<HTMLElement | null>(null)
  const [whyVisible, setWhyVisible] = useState(false)
  const solutionsSectionRef = useRef<HTMLElement | null>(null)
  const [solutionsVisible, setSolutionsVisible] = useState(false)
  const useCasesSectionRef = useRef<HTMLElement | null>(null)
  const [useCasesVisible, setUseCasesVisible] = useState(false)
  const whyPoints = [
    'Certified Cisco Select Integrator Partner with proven deployment expertise',
    'End-to-end implementation from design to day-2 operations',
    'Integration across Cisco security, networking, and collaboration portfolio',
    'Local support with access to Cisco TAC and advanced services',
    'Training and knowledge transfer for your IT teams',
  ]

  const solutions = [
    {
      title: 'SD-WAN & SASE',
      copy: 'Software-defined WAN with integrated security for distributed enterprises.',
      bullets: ['Centralized policy management', 'Application-aware routing', 'Secure cloud on-ramp', 'Branch office connectivity'],
      icon: 'network',
    },
    {
      title: 'Cisco ISE (Identity Services Engine)',
      copy: 'Network access control with identity-aware policy enforcement.',
      bullets: ['Device profiling & posture', 'Guest access management', 'BYOD security policies', 'Micro-segmentation'],
      icon: 'shield',
    },
    {
      title: 'Cisco Duo Security',
      copy: 'Zero-trust multi-factor authentication for workforce security.',
      bullets: ['Adaptive MFA', 'Device trust verification', 'Single sign-on (SSO)', 'Passwordless authentication'],
      icon: 'lock',
    },
    {
      title: 'ThousandEyes',
      copy: 'End-to-end visibility across internet, cloud, and enterprise networks.',
      bullets: ['Internet insights', 'Cloud performance monitoring', 'SaaS app visibility', 'Network path analysis'],
      icon: 'eye',
    },
    {
      title: 'Cisco Umbrella',
      copy: 'Cloud-delivered security for DNS, web, and cloud applications.',
      bullets: ['DNS-layer security', 'Secure web gateway', 'Cloud access security broker', 'Firewall-as-a-service'],
      icon: 'cloud',
    },
    {
      title: 'Wireless & Meraki',
      copy: 'Cloud-managed wireless and network infrastructure.',
      bullets: ['Enterprise Wi‑Fi 6/6E', 'Cloud management', 'Location analytics', 'Integrated security'],
      icon: 'wifi',
    },
  ]

  const useCases = [
    {
      title: 'Branch Transformation',
      copy: 'Replace MPLS with SD‑WAN for cost savings and cloud-first connectivity with integrated security at every branch.',
      icon: 'monitor',
    },
    {
      title: 'Zero Trust Access',
      copy: 'Implement identity-aware access with Duo MFA and ISE for secure workforce access to applications and network resources.',
      icon: 'users',
    },
    {
      title: 'Network Visibility',
      copy: 'Gain end‑to‑end visibility across internet, cloud, and enterprise networks with ThousandEyes for faster issue resolution.',
      icon: 'eye',
    },
  ]

  const ciscoFaqs = [
    {
      question: 'What Cisco solutions does Pirlanta implement?',
      answer:
        'We implement the full Cisco security and networking portfolio including SD-WAN, ISE, Duo, Umbrella, ThousandEyes, Meraki, and collaboration solutions. Our focus is on integrated deployments that maximize your Cisco investment.',
    },
    {
      question: 'Can you help migrate from legacy VPN to Cisco ZTNA?',
      answer:
        'Yes, we design and implement Zero Trust Network Access using Cisco Duo and Secure Access, replacing traditional VPN with identity-aware, context-based access controls.',
    },
    {
      question: 'Do you provide Cisco ISE implementation services?',
      answer:
        'Yes, we offer complete ISE deployments including network access control, device profiling, guest access, and integration with your existing identity infrastructure.',
    },
    {
      question: 'How do you handle SD-WAN migrations?',
      answer:
        'We use phased rollouts with validation and rollback plans. Our approach includes site surveys, pilot deployments, and progressive branch rollouts to minimize business disruption.',
    },
    {
      question: 'Can you integrate Cisco with non-Cisco security tools?',
      answer:
        'Yes, we design hybrid environments integrating Cisco solutions with existing security stacks, SIEM platforms, and third-party tools for unified operations.',
    },
    {
      question: 'Do you offer managed services for Cisco deployments?',
      answer:
        'Yes, we provide day-2 operations including monitoring, policy updates, incident handling, and capacity planning under defined SLAs.',
    },
  ]

  const [openCiscoFaq, setOpenCiscoFaq] = useState<number | null>(null)

  useEffect(() => {
    const section = whySectionRef.current
    if (!section) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setWhyVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWhyVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const section = solutionsSectionRef.current
    if (!section) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setSolutionsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSolutionsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const section = useCasesSectionRef.current
    if (!section) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setUseCasesVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setUseCasesVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <main className="partner-page relative overflow-hidden pt-24">
      <section className="partner-hero live-hero cisco-hero relative">
        <HeroLiveBackground />
        <div className="partner-hero-content cisco-hero-content w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="cisco-hero-logo cisco-hero-fade cisco-hero-fade-1">
            <img
              src="/partners/world-cisco-png-logo-12.png"
              alt="Cisco"
              className="cisco-hero-logo-img"
            />
          </div>
          <span className="pill pill--tight cisco-hero-pill cisco-hero-fade cisco-hero-fade-2">
            Cisco Select Integrator Partner
          </span>
          <h1 className="cisco-hero-title cisco-hero-fade cisco-hero-fade-3">
            Cisco <span className="cisco-hero-accent">Partner</span>
          </h1>
          <p className="cisco-hero-kicker cisco-hero-fade cisco-hero-fade-4">
            Enterprise Networking & Zero Trust Security
          </p>
          <p className="cisco-hero-copy cisco-hero-fade cisco-hero-fade-5">
            As a Cisco Select Integrator Partner, we deliver integrated networking and security
            solutions—from SD‑WAN and SASE to identity‑based access control and network visibility.
          </p>
        </div>
        <div
          className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[1px]"
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

      <section
        ref={whySectionRef}
        className={`section-light cisco-why-section${whyVisible ? ' is-visible' : ''}`}
      >
        <div className="cisco-why-wrapper mx-auto max-w-7xl px-6">
          <div className="cisco-why-grid">
            <div className="cisco-why-copy">
              <h2 className="cisco-why-title cisco-why-fade cisco-why-delay-1">
                Why Pirlanta for Cisco?
              </h2>
              <p className="cisco-why-subtitle cisco-why-fade cisco-why-delay-2">
                Our Cisco partnership combines certified expertise with practical experience across
                enterprise networking, security, and collaboration. We focus on integrated solutions
                that deliver Zero Trust security and operational efficiency.
              </p>
              <div className="cisco-why-points">
                {whyPoints.map((point, index) => (
                  <div
                    key={point}
                    className={`cisco-point cisco-why-fade cisco-why-delay-${index + 3}`}
                  >
                    <span className="benefit-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="cisco-card cisco-why-card cisco-why-fade cisco-why-delay-8">
              <div className="partner-logo partner-logo--small cisco-logo">
                <img src="/partners/world-cisco-png-logo-12.png" alt="Cisco" />
              </div>
              <h3>Cisco Select Integrator</h3>
              <p>
                Recognized for expertise in designing and deploying Cisco solutions across security,
                networking, and collaboration domains.
              </p>
              <div className="cisco-badges">
                <div>
                  <strong>SD‑WAN</strong>
                  <span>Certified</span>
                </div>
                <div>
                  <strong>Security</strong>
                  <span>Specialized</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={solutionsSectionRef}
        className={`section-light cisco-solution-section${solutionsVisible ? ' is-visible' : ''}`}
      >
        <div className="cisco-solution-wrapper mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="cisco-solution-title cisco-solution-reveal" style={{ '--delay': '0s' } as CSSProperties}>
            Cisco Solutions We Deliver
          </h2>
          <p className="cisco-solution-subtitle cisco-solution-reveal" style={{ '--delay': '0.08s' } as CSSProperties}>
            Comprehensive Cisco implementations spanning networking, security, and visibility.
          </p>
          <div className="cisco-solution-grid">
            {solutions.map((item, index) => (
              <div
                key={item.title}
                className="cisco-solution-reveal"
                style={{ '--delay': `${0.16 + index * 0.08}s` } as CSSProperties}
              >
                <div className="cyber-cap-card cisco-solution-card">
                <div className="cyber-cap-icon" aria-hidden="true">
                  {item.icon === 'network' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="6" r="2" stroke="currentColor" strokeWidth="2" />
                      <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
                      <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 8v4M10 14h4M8 16l4-4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'shield' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {item.icon === 'lock' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M8 11V8a4 4 0 1 1 8 0v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'eye' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6z" stroke="currentColor" strokeWidth="2" />
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {item.icon === 'cloud' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M6 18a4 4 0 0 1 1-7 5 5 0 0 1 9 2h1a3 3 0 0 1 0 6H6z" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {item.icon === 'wifi' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M4 10c4-4 12-4 16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M7 13c3-3 7-3 10 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M10 16c2-2 4-2 6 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="12" cy="19" r="1" fill="currentColor" />
                    </svg>
                  )}
                </div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={useCasesSectionRef}
        className={`section-light cisco-use-section${useCasesVisible ? ' is-visible' : ''}`}
      >
        <div className="cisco-use-wrapper mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="cisco-use-title cisco-use-reveal" style={{ '--delay': '0s' } as CSSProperties}>
            Common Use Cases
          </h2>
          <p className="cisco-use-subtitle cisco-use-reveal" style={{ '--delay': '0.08s' } as CSSProperties}>
            How enterprises leverage our Cisco expertise.
          </p>
          <div className="cisco-use-grid">
            {useCases.map((item, index) => (
              <div
                key={item.title}
                className="cisco-use-reveal"
                style={{ '--delay': `${0.16 + index * 0.08}s` } as CSSProperties}
              >
                <div className="cyber-cap-card cisco-use-card">
                  <div className="cyber-cap-icon" aria-hidden="true">
                  {item.icon === 'monitor' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect x="4" y="5" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M9 19h6M12 15v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'users' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'eye' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6z" stroke="currentColor" strokeWidth="2" />
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light cisco-faq-section">
        <div className="cisco-faq-grid mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="cisco-faq-title">Cisco FAQs</h2>
            <p className="cisco-faq-subtitle">
              Common questions about our Cisco partnership and implementation services.
            </p>
            <a href = "/contact">
            <button className="cisco-faq-button">
              Ask a Question
            </button>
            </a>
          </div>
          <div className="cisco-faq-list">
            {ciscoFaqs.map((item, index) => {
              const isOpen = openCiscoFaq === index
              return (
                <button
                  key={item.question}
                  className={`cisco-faq-item ${isOpen ? 'cisco-faq-item--open' : ''}`}
                  onClick={() => setOpenCiscoFaq(isOpen ? null : index)}
                  type="button"
                >
                  <span className="cisco-faq-question">{item.question}</span>
                  <span className="cisco-faq-toggle">▾</span>
                  <span className="cisco-faq-answer">{item.answer}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-dark section-dark--cta">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-white">
            Ready for Cisco-Powered Transformation?
          </h2>
          <p className="mt-3 text-sm text-emerald-100/70">
            Let&apos;s discuss how Cisco solutions can modernize your network and strengthen your
            security posture.
          </p>
          <a
            className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-600"
            href="/contact"
          >
            Schedule Consultation →
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

function PartnerJuniperPage() {
  const solutionsSectionRef = useRef<HTMLElement | null>(null)
  const [solutionsVisible, setSolutionsVisible] = useState(false)
  const useCasesSectionRef = useRef<HTMLElement | null>(null)
  const [useCasesVisible, setUseCasesVisible] = useState(false)
  const whySectionRef = useRef<HTMLElement | null>(null)
  const [whyVisible, setWhyVisible] = useState(false)
  const whyPoints = [
    'Juniper Networks Partner with AI-native networking expertise',
    'AI-driven operations reducing complexity and troubleshooting time',
    'Intent-based automation for consistent, validated configurations',
    'Unified cloud and on-premises networking architecture',
    'Marvis AI for proactive issue identification and resolution',
  ]

  const solutions = [
    {
      title: 'Mist AI Wireless',
      copy: 'AI-driven wireless with predictive insights and self-healing capabilities.',
      bullets: ['Predictive wireless analytics', 'Virtual Bluetooth LE', 'Location services', 'Marvis AI assistant'],
      icon: 'wifi',
    },
    {
      title: 'AI-Native SD-WAN',
      copy: 'Intent-based SD-WAN with AI-driven optimization and SLA assurance.',
      bullets: ['Session Smart Routing', 'Application-aware optimization', 'Zero-touch deployment', 'AI-driven insights'],
      icon: 'network',
    },
    {
      title: 'Apstra Data Centre',
      copy: 'Intent-based networking for automated, validated data centre operations.',
      bullets: ['Intent-based automation', 'Continuous validation', 'Multi-vendor support', 'Closed-loop operations'],
      icon: 'server',
    },
    {
      title: 'Enterprise Routing',
      copy: 'High-performance routing for WAN, data centre, and service provider networks.',
      bullets: ['MX Series routers', 'Advanced security', 'Segment routing', 'Carrier-grade reliability'],
      icon: 'router',
    },
    {
      title: 'Cloud Networking',
      copy: 'Extend consistent networking across on-premises and multi-cloud.',
      bullets: ['Cloud workload connectivity', 'Consistent policy', 'Hybrid cloud support', 'SD-WAN cloud integration'],
      icon: 'cloud',
    },
    {
      title: 'Security Services',
      copy: 'Integrated security with SRX firewalls and threat intelligence.',
      bullets: ['SRX Series firewalls', 'Advanced threat prevention', 'Encrypted traffic insights', 'Security automation'],
      icon: 'shield',
    },
  ]

  const useCases = [
    {
      title: 'AI-Driven Wireless',
      copy: 'Deploy self-healing wireless with Marvis AI that identifies and resolves issues before they impact users.',
      icon: 'wireless',
    },
    {
      title: 'Intent-Based Data Centre',
      copy: 'Automate data centre operations with Apstra for consistent, validated configurations across any vendor.',
      icon: 'bolt',
    },
    {
      title: 'Tunnel-Free SD-WAN',
      copy: 'Simplify WAN with Session Smart routing that eliminates tunnels while providing AI-driven optimization.',
      icon: 'network',
    },
  ]

  const juniperFaqs = [
    {
      question: 'What is Juniper Mist AI and how does it work?',
      answer:
        'Mist AI uses machine learning to provide predictive insights, automate troubleshooting, and optimize wireless, wired, and WAN experiences. The Marvis virtual assistant identifies issues before they impact users.',
    },
    {
      question: 'Can Juniper replace our existing wireless infrastructure?',
      answer:
        'Yes, Juniper Mist Access Points with AI-driven cloud management provide superior user experience, location services, and self-healing capabilities compared to traditional wireless solutions.',
    },
    {
      question: 'What is Apstra and how does it help data centres?',
      answer:
        'Apstra provides intent-based networking for data centres with automated provisioning, continuous validation, and multi-vendor support for reliable, efficient operations.',
    },
    {
      question: 'Does Juniper offer SD-WAN solutions?',
      answer:
        'Yes, Juniper Session Smart SD-WAN uses AI-native intelligence for application-aware routing, zero-trust security, and simplified operations without overlay tunnels.',
    },
    {
      question: 'Can Juniper solutions integrate with our existing network?',
      answer:
        'Yes, Juniper solutions including Apstra support multi-vendor environments. We design integrations that leverage existing investments while adding AI-native capabilities.',
    },
    {
      question: 'Do you provide managed services for Juniper networks?',
      answer:
        'Yes, we offer day-2 operations including AI-assisted monitoring, configuration management, and optimization for Juniper deployments.',
    },
  ]

  const [openJuniperFaq, setOpenJuniperFaq] = useState<number | null>(null)

  useEffect(() => {
    const section = solutionsSectionRef.current
    if (!section) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setSolutionsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSolutionsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const section = useCasesSectionRef.current
    if (!section) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setUseCasesVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setUseCasesVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const section = whySectionRef.current
    if (!section) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setWhyVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWhyVisible(true)
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
      <section className="partner-hero live-hero juniper-hero relative">
        <HeroLiveBackground />
        <div className="partner-hero-content juniper-hero-content w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="juniper-hero-logo juniper-hero-fade juniper-hero-fade-1">
            <img
              src="/partners/Juniper_Networks_logo.svg.png"
              alt="Juniper Networks"
              className="juniper-hero-logo-img"
            />
          </div>
          <span className="pill pill--tight juniper-hero-pill juniper-hero-fade juniper-hero-fade-2">
            Juniper Networks Partner
          </span>
          <h1 className="juniper-hero-title juniper-hero-fade juniper-hero-fade-3">
            Juniper Networks <span className="juniper-hero-accent">Partner</span>
          </h1>
          <p className="juniper-hero-kicker juniper-hero-fade juniper-hero-fade-4">
            AI-Native Networking for the Modern Enterprise
          </p>
          <p className="juniper-hero-copy juniper-hero-fade juniper-hero-fade-5">
            As a Juniper Networks Partner, we deliver AI-driven networking solutions—from Mist wireless
            and SD-WAN to Apstra data centre automation for simplified, intelligent operations.
          </p>
        </div>
        <div
          className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[1px]"
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

      <section
        ref={whySectionRef}
        className={`section-light juniper-why-section${whyVisible ? ' is-visible' : ''}`}
      >
        <div className="juniper-why-wrapper mx-auto max-w-7xl px-6">
          <div className="juniper-why-grid">
            <div className="juniper-why-copy">
              <h2 className="juniper-why-title juniper-why-fade juniper-why-delay-1">
                Why Pirlanta for Juniper?
              </h2>
              <p className="juniper-why-subtitle juniper-why-fade juniper-why-delay-2">
                Our Juniper partnership brings AI-native networking to your enterprise, with predictive
                insights, self-healing infrastructure, and intent-based automation that simplifies operations.
              </p>
              <div className="juniper-why-points">
                {whyPoints.map((point, index) => (
                  <div
                    key={point}
                    className={`cisco-point juniper-why-fade juniper-why-delay-${index + 3}`}
                  >
                    <span className="benefit-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="cisco-card juniper-why-card juniper-why-fade juniper-why-delay-8">
              <div className="partner-logo partner-logo--small juniper-logo">
                <img src="/partners/Juniper_Networks_logo.svg.png" alt="Juniper Networks" />
              </div>
              <h3>Juniper Networks Partner</h3>
              <p>
                Certified to implement AI-native networking solutions including Mist, Apstra, and
                enterprise routing.
              </p>
              <div className="cisco-badges">
                <div>
                  <strong>Mist AI</strong>
                  <span>Certified</span>
                </div>
                <div>
                  <strong>Apstra</strong>
                  <span>Specialized</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={solutionsSectionRef}
        className={`section-light juniper-solution-section${solutionsVisible ? ' is-visible' : ''}`}
      >
        <div className="juniper-solution-wrapper mx-auto max-w-6xl px-6 py-24 text-center">
          <h2 className="juniper-solution-title juniper-solution-fade" style={{ '--delay': '0s' } as CSSProperties}>
            Juniper Solutions We Deliver
          </h2>
          <p className="juniper-solution-subtitle juniper-solution-fade" style={{ '--delay': '0.08s' } as CSSProperties}>
            AI-native networking for wireless, WAN, data centre, and security.
          </p>
          <div className="juniper-solution-grid">
            {solutions.map((item, index) => (
              <div
                key={item.title}
                className="cyber-cap-card juniper-solution-card juniper-solution-reveal"
                style={{ '--delay': `${0.16 + index * 0.08}s` } as CSSProperties}
              >
                <div className="cyber-cap-icon" aria-hidden="true">
                  {item.icon === 'wifi' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M4 10c4-4 12-4 16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M7 13c3-3 7-3 10 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M10 16c2-2 4-2 6 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="12" cy="19" r="1" fill="currentColor" />
                    </svg>
                  )}
                  {item.icon === 'network' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="6" r="2" stroke="currentColor" strokeWidth="2" />
                      <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
                      <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 8v4M10 14h4M8 16l4-4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'server' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect x="4" y="4" width="16" height="4" rx="1" stroke="currentColor" strokeWidth="2" />
                      <rect x="4" y="10" width="16" height="4" rx="1" stroke="currentColor" strokeWidth="2" />
                      <rect x="4" y="16" width="16" height="4" rx="1" stroke="currentColor" strokeWidth="2" />
                      <circle cx="8" cy="6" r="0.5" fill="currentColor" />
                      <circle cx="8" cy="12" r="0.5" fill="currentColor" />
                      <circle cx="8" cy="18" r="0.5" fill="currentColor" />
                    </svg>
                  )}
                  {item.icon === 'router' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="8" width="18" height="8" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M8 12h.01M12 12h.01M16 12h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M7 16h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'cloud' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M6 18a4 4 0 0 1 1-7 5 5 0 0 1 9 2h1a3 3 0 0 1 0 6H6z" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {item.icon === 'shield' && (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z" fill="currentColor" opacity="0.9" />
                    </svg>
                  )}
                </div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={useCasesSectionRef}
        className={`section-light juniper-use-section${useCasesVisible ? ' is-visible' : ''}`}
      >
        <div className="juniper-use-wrapper mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="juniper-use-title juniper-use-reveal" style={{ '--delay': '0s' } as CSSProperties}>
            Common Use Cases
          </h2>
          <p className="juniper-use-subtitle juniper-use-reveal" style={{ '--delay': '0.08s' } as CSSProperties}>
            How enterprises leverage Juniper AI-native networking.
          </p>
          <div className="juniper-use-grid">
            {useCases.map((item, index) => (
              <div
                key={item.title}
                className="juniper-use-reveal"
                style={{ '--delay': `${0.16 + index * 0.08}s` } as CSSProperties}
              >
                <div className="cyber-cap-card juniper-use-card">
                  <div className="cyber-cap-icon" aria-hidden="true">
                  {item.icon === 'wireless' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect x="4" y="5" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M9 19h6M12 15v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M12 3v2M8 3h2M14 3h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'bolt' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {item.icon === 'network' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect x="4" y="6" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
                      <rect x="14" y="6" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
                      <path d="M10 12h4M7 9v6M17 9v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light juniper-faq-section">
        <div className="juniper-faq-grid mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="juniper-faq-title">Juniper FAQs</h2>
            <p className="juniper-faq-subtitle">
              Common questions about Mist AI, Apstra, and Juniper networking solutions.
            </p>
            <a
              href="/contact"
              className="juniper-faq-button"
            >
              Ask a Question
            </a>
          </div>
          <div className="juniper-faq-list">
            {juniperFaqs.map((item, index) => {
              const isOpen = openJuniperFaq === index
              return (
                <button
                  key={item.question}
                  className={`juniper-faq-item ${isOpen ? 'juniper-faq-item--open' : ''}`}
                  onClick={() => setOpenJuniperFaq(isOpen ? null : index)}
                  type="button"
                >
                  <span className="juniper-faq-question">{item.question}</span>
                  <span className="juniper-faq-toggle">▾</span>
                  <span className="juniper-faq-answer">{item.answer}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-dark section-dark--cta">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-white">
            Ready for AI-Native Networking?
          </h2>
          <p className="mt-3 text-sm text-emerald-100/70">
            Let&apos;s discuss how Juniper AI-native solutions can simplify your network operations
            and enhance user experience.
          </p>
          <a
            className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-600"
            href="/contact"
          >
            Schedule Consultation →
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
                  C/O Flex Coworks, 2nd Floor, 71, 15th Cross Road, Dollar Layout, J. P. Nagar, Bengaluru - 560078
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
              <a href="/partners/networking/cisco">Cisco</a>
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

function ContactPage({
  contactForm,
  contactStatus,
  contactError,
  onChange,
  onSubmit,
}: {
  contactForm: {
    name: string
    email: string
    phone: string
    company: string
    service: string
    message: string
  }
  contactStatus: 'idle' | 'sending' | 'success' | 'error'
  contactError: string
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}) {
  return (
    <main className="relative overflow-hidden pt-24">
      <section className="section-light contact-section" id="contact">
        <div className="partner-hero live-hero cisco-hero relative">
          <HeroLiveBackground />
          <div className="partner-hero-content cisco-hero-content w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <span className="pill pill--tight cisco-hero-pill cisco-hero-fade cisco-hero-fade-1">
              Contact Us
            </span>
            <h1 className="cisco-hero-title cisco-hero-fade cisco-hero-fade-2">
              Let&apos;s Start the <span className="cisco-hero-accent">Conversation</span>
            </h1>
            <p className="cisco-hero-kicker cisco-hero-fade cisco-hero-fade-3">
              Ready to secure your infrastructure?
            </p>
            <p className="cisco-hero-copy cisco-hero-fade cisco-hero-fade-4">
              Get in touch for a free consultation and discover how we can help protect and
              optimize your IT environment.
            </p>
          </div>
          <div
            className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[1px]"
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
        </div>
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:gap-12 sm:px-6 sm:py-16 lg:grid-cols-[1.2fr_0.8fr]">
          <form className="contact-card" onSubmit={onSubmit}>
            <h3 className="contact-title">Send Us a Message</h3>
            <div className="contact-grid">
              <div className="contact-field">
                <label htmlFor="name">Full Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={contactForm.name}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="contact-field">
                <label htmlFor="email">Email Address *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  value={contactForm.email}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="contact-field">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={contactForm.phone}
                  onChange={onChange}
                />
              </div>
              <div className="contact-field">
                <label htmlFor="company">Company Name</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your company"
                  value={contactForm.company}
                  onChange={onChange}
                />
              </div>
              <div className="contact-field contact-field--full">
                <label htmlFor="service">Service of Interest *</label>
                <select
                  id="service"
                  name="service"
                  value={contactForm.service}
                  onChange={onChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Data Centre & Cloud">Data Centre & Cloud</option>
                  <option value="Network & SD-WAN">Network & SD-WAN</option>
                  <option value="AI Code Audits">AI Code Audits</option>
                </select>
              </div>
              <div className="contact-field contact-field--full">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project or requirements..."
                  rows={4}
                  value={contactForm.message}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
            {contactStatus === 'error' && (
              <p className="contact-status contact-status--error">{contactError}</p>
            )}
            {contactStatus === 'success' && (
              <p className="contact-status contact-status--success">
                Thanks! Your message has been sent.
              </p>
            )}
            <button type="submit" className="contact-submit" disabled={contactStatus === 'sending'}>
              {contactStatus === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>
              Have questions? Our team is ready to help you with your cybersecurity, data centre,
              and network needs.
            </p>
            <div className="contact-info-list">
              <div className="contact-info-item">
                <span className="contact-info-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 16.9v3a2 2 0 0 1-2.2 2 19.5 19.5 0 0 1-8.5-3.1 19.3 19.3 0 0 1-6-6A19.5 19.5 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7 12.8 12.8 0 0 0 .7 2.7 2 2 0 0 1-.4 2.1L8.2 10.8a16 16 0 0 0 5 5l2.3-1.2a2 2 0 0 1 2.1-.4 12.8 12.8 0 0 0 2.7.7 2 2 0 0 1 1.7 2z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div className="contact-info-text">
                  <span className="contact-info-label">Phone</span>
                  <span>+91 94296 93558</span>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>
                <div className="contact-info-text">
                  <span className="contact-info-label">Email</span>
                  <span>secure@pirlanta.in</span>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 21s7-5.3 7-11a7 7 0 1 0-14 0c0 5.7 7 11 7 11z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>
                <div className="contact-info-text">
                  <span className="contact-info-label">Office</span>
                  <span>
                    C/O Flex Coworks, 2nd Floor, 71, 15th Cross Road, J. P. Nagar, Bengaluru -
                    560078
                  </span>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 7v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
                <div className="contact-info-text">
                  <span className="contact-info-label">Business Hours</span>
                  <span>Monday - Friday: 9:00 AM - 6:00 PM</span>
                  <span>Saturday: 10:00 AM - 2:00 PM</span>
                </div>
              </div>
            </div>
            <div className="contact-quick-links">
              <span className="contact-info-label">Quick Links</span>
              <ul>
                <li>
                  <a className="contact-quick-link" href="/services/cybersecurity">
                    <span className="contact-quick-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 3l7 3v6c0 4.4-3 7.8-7 9-4-1.2-7-4.6-7-9V6l7-3z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                    </svg>
                    </span>
                    Cybersecurity
                  </a>
                </li>
                <li>
                  <a className="contact-quick-link" href="/services/data-centre-cloud">
                    <span className="contact-quick-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="4" width="18" height="6" rx="2" stroke="currentColor" strokeWidth="2" />
                      <rect x="3" y="10" width="18" height="6" rx="2" stroke="currentColor" strokeWidth="2" />
                      <rect x="3" y="16" width="18" height="4" rx="2" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    </span>
                    Data Centre & Cloud
                  </a>
                </li>
                <li>
                  <a className="contact-quick-link" href="/services/network-sd-wan">
                    <span className="contact-quick-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 16a3 3 0 1 1 6 0v2H6v-2z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M12 6a3 3 0 1 1 6 0v2h-6V6z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path d="M9 9h6M9 12h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    </span>
                    Network & SD-WAN
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-6 pb-16">
          <div className="map-card">
            <h3>Visit Our Office</h3>
            <p>
              Flex Coworks | Coworking Space in JP Nagar Bangalore | Office Space in JP Nagar
              Bangalore | virtual office space in Bangalore
            </p>
            <iframe
              title="Pirlanta Office"
              src="https://www.google.com/maps?q=J.%20P.%20Nagar%20Bengaluru&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

function AboutPage() {
  const deliverItems = [
    {
      title: 'AI-Accelerated Recovery',
      copy: 'AI-driven restoration of mission-critical systems with predictive incident response.',
      icon: 'clock',
    },
    {
      title: 'AI-Optimized Efficiency',
      copy: 'Intelligent automation reduces costs and eliminates manual bottlenecks.',
      icon: 'trend',
    },
    {
      title: 'AI-Assisted Compliance',
      copy: 'Automated compliance monitoring and audit-ready documentation.',
      icon: 'check',
    },
    {
      title: 'Intelligent Scalability',
      copy: 'AI-powered capacity planning that grows with your business.',
      icon: 'bolt',
    },
    {
      title: 'AI-Enhanced Security',
      copy: 'Machine learning threat detection aligned with global resilience standards.',
      icon: 'shield',
    },
  ]

  const approachItems = [
    {
      title: 'Integration-First',
      copy: 'Seamless platform integration across your entire IT estate for unified operations.',
      icon: 'bolt',
    },
    {
      title: 'Senior-Led',
      copy: 'Senior experts directing every engagement, not junior staff learning on your time.',
      icon: 'users',
    },
    {
      title: 'AI-Augmented',
      copy: 'AI tools amplify our experts—faster detection, smarter automation, measurable outcomes.',
      icon: 'robot',
    },
    {
      title: 'Lifecycle Delivery',
      copy: 'Comprehensive strategy through implementation and continuous optimization.',
      icon: 'refresh',
    },
  ]

  const pillarItems = [
    {
      title: 'Cybersecurity',
      copy: 'AI-driven threat detection, MDR, and compliance—with 95% faster response times.',
      icon: 'shield',
      href: '/services/cybersecurity',
    },
    {
      title: 'Data Centre',
      copy: 'AI-optimized infrastructure with predictive scaling and intelligent disaster recovery.',
      icon: 'database',
      href: '/services/data-centre-cloud',
    },
    {
      title: 'Network',
      copy: 'AI-powered traffic analysis, self-healing networks, and intelligent SD-WAN.',
      icon: 'network',
      href: '/services/network-sd-wan',
    },
  ]

  const industries = [
    {
      title: 'BFSI',
      subtitle: 'Banking & Financial Services',
      icon: 'bank',
    },
    {
      title: 'Healthcare',
      subtitle: 'HIPAA & DPDP Compliance',
      icon: 'heart',
    },
    {
      title: 'Retail',
      subtitle: 'E-commerce Security',
      icon: 'cart',
    },
    {
      title: 'Education',
      subtitle: 'Campus Networks',
      icon: 'cap',
    },
    {
      title: 'Payments',
      subtitle: 'PCI DSS Compliance',
      icon: 'card',
    },
    {
      title: 'Smart Grid',
      subtitle: 'Critical Infrastructure',
      icon: 'bulb',
    },
  ]

  const deliverSectionRef = useRef<HTMLElement | null>(null)
  const [deliverVisible, setDeliverVisible] = useState(false)
  const industriesSectionRef = useRef<HTMLElement | null>(null)
  const [industriesVisible, setIndustriesVisible] = useState(false)
  const approachSectionRef = useRef<HTMLElement | null>(null)
  const approachCountAnimatedRef = useRef(false)
  const pillarsSectionRef = useRef<HTMLElement | null>(null)
  const aiWorksRef = useRef<HTMLElement | null>(null)
  const aiWorksAnimatedRef = useRef(false)
  const bengaluruRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const section = deliverSectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setDeliverVisible(entry.isIntersecting)
      },
      { threshold: 0.25 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const section = bengaluruRef.current
    if (!section) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      section.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const section = industriesSectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIndustriesVisible(entry.isIntersecting)
      },
      { threshold: 0.25 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const section = approachSectionRef.current
    if (!section) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const setFinalCount = () => {
      const counter = section.querySelector<HTMLElement>('[data-approach-count]')
      if (!counter) return
      const value = counter.dataset.value ?? counter.textContent ?? ''
      const suffix = counter.dataset.suffix ?? ''
      counter.textContent = `${value}${suffix}`
    }

    const animateCount = () => {
      if (approachCountAnimatedRef.current) return
      approachCountAnimatedRef.current = true
      const counter = section.querySelector<HTMLElement>('[data-approach-count]')
      if (!counter) return
      const end = Number.parseFloat(counter.dataset.value ?? '0')
      const suffix = counter.dataset.suffix ?? ''
      const duration = Number.parseInt(counter.dataset.duration ?? '3600', 10)
      const startTime = performance.now()

      const step = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        const current = Math.round(end * eased)
        counter.textContent = `${current}${suffix}`
        if (progress < 1) {
          requestAnimationFrame(step)
        } else {
          counter.textContent = `${end}${suffix}`
        }
      }

      requestAnimationFrame(step)
    }

    if (prefersReducedMotion) {
      section.classList.add('is-visible')
      setFinalCount()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('is-visible')
          animateCount()
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const section = pillarsSectionRef.current
    if (!section) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      section.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const section = aiWorksRef.current
    if (!section) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const setFinalCounts = () => {
      const counters = section.querySelectorAll<HTMLElement>('[data-count]')
      counters.forEach((counter) => {
        const value = counter.dataset.value ?? counter.textContent ?? ''
        const prefix = counter.dataset.prefix ?? ''
        const suffix = counter.dataset.suffix ?? ''
        counter.textContent = `${prefix}${value}${suffix}`
      })
    }

    const animateCount = (counter: HTMLElement) => {
      const end = Number.parseFloat(counter.dataset.value ?? '0')
      const prefix = counter.dataset.prefix ?? ''
      const suffix = counter.dataset.suffix ?? ''
      const decimals = Number.parseInt(counter.dataset.decimals ?? '0', 10)
      const duration = Number.parseInt(counter.dataset.duration ?? '1200', 10)
      const startTime = performance.now()

      const step = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        const current = end * eased
        counter.textContent = `${prefix}${current.toFixed(decimals)}${suffix}`
        if (progress < 1) {
          requestAnimationFrame(step)
        } else {
          counter.textContent = `${prefix}${end.toFixed(decimals)}${suffix}`
        }
      }

      requestAnimationFrame(step)
    }

    const animateCounts = () => {
      if (aiWorksAnimatedRef.current) return
      aiWorksAnimatedRef.current = true
      const counters = section.querySelectorAll<HTMLElement>('[data-count]')
      counters.forEach((counter) => animateCount(counter))
    }

    if (prefersReducedMotion) {
      section.classList.add('is-visible')
      setFinalCounts()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('is-visible')
          animateCounts()
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <main className="relative overflow-hidden pt-16">
      <section className="about-hero live-hero relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
        <HeroLiveBackground />
        <div className="about-hero-overlay" />
        <div className="about-hero-content w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="about-hero-text">
            <div className="about-kicker-row about-hero-fade about-hero-fade-1">
              <p className="about-kicker-primary">About Pirlanta</p>
              <span className="about-kicker-divider">|</span>
              <div className="about-kicker-secondary">
                <span className="about-kicker-icon" aria-hidden="true">✦</span>
                <span className="about-kicker-label">AI-Enhanced Services</span>
              </div>
            </div>
            <h1 className="about-hero-title about-hero-fade about-hero-fade-2">
              Expert-Led. <span className="text-gradient">AI-Powered.</span>
            </h1>
            <p className="about-hero-lead about-hero-fade about-hero-fade-3">
              Founded to bridge enterprise IT complexity. Now leveraging AI to deliver faster
              detection, smarter automation, and measurable outcomes.
            </p>
            <p className="about-hero-copy about-hero-fade about-hero-fade-4">
              We combine OEM AI tools from Cisco, Fortinet, and industry leaders with our
              deep implementation expertise to transform how enterprises approach security.
            </p>
          </div>
        </div>
        <div
          className="about-hero-wave-wrapper w-full overflow-hidden leading-[0]"
          aria-hidden="true"
        >
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 140"
            preserveAspectRatio="none"
            className="block w-[calc(100%+1.3px)] h-[150px] md:h-[200px] fill-white"
          >
            <path d="M0,0 Q600,130 1200,0 L1200,140 L0,140 Z" fill="white" />
          </svg>
        </div>
      </section>

      <section
        className={`section-light deliver-section${deliverVisible ? ' is-visible' : ''}`}
        ref={deliverSectionRef}
      >
        <div className="deliver-wrapper mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="deliver-heading">What We Deliver</h2>
          <p className="deliver-subtitle">
            Measurable outcomes that protect your business and drive growth.
          </p>
          <div className="deliver-grid mt-12">
            {deliverItems.map((item) => (
              <div key={item.title} className="deliver-card">
                <div className="deliver-icon" aria-hidden="true">
                  {item.icon === 'clock' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 8v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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
                  {item.icon === 'check' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
                      <path
                        d="M8.5 12.5l2.3 2.3 4.7-4.7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  {item.icon === 'bolt' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  {item.icon === 'shield' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
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

      <section className="section-dark section-dark--muted ai-works-section" ref={aiWorksRef}>
        <div className="ai-works-inner mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div className="ai-works-copy">
            <div className="ai-works-pill ai-works-reveal" style={{ '--delay': '0s' } as CSSProperties}>
              <span className="ai-works-pill-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M4 8h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M8 8V6a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M10 12h4M10 15h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              Our AI Advantage
            </div>
            <h2 className="ai-works-title ai-works-reveal" style={{ '--delay': '0.08s' } as CSSProperties}>
              Why Pirlanta + AI Works
            </h2>
            <p className="ai-works-lead ai-works-reveal" style={{ '--delay': '0.16s' } as CSSProperties}>
              AI alone isn’t enough. Our competitive advantage comes from combining OEM AI tools
              with deep implementation expertise and senior leadership.
            </p>
            <div className="ai-works-list">
              {/* <div className="ai-works-item ai-works-reveal" style={{ '--delay': '0.24s' } as CSSProperties}> */}
              <div
                className="ai-works-item ai-works-reveal flex items-center gap-4"
                style={{ '--delay': '0.24s' } as CSSProperties}
              >

                {/* <span className="ai-works-icon" aria-hidden="true"> */}
                <span className="ai-works-icon flex items-center justify-center" aria-hidden="true">


                  {/* <svg viewBox="0 0 24 24" fill="none"> */}
                  <svg viewBox="0 0 24 24" fill="none" className="block translate-y-[14px]">

                    <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                    <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
                    <path d="M9 1v3M15 1v3M9 20v3M15 20v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M20 9h3M20 15h3M1 9h3M1 15h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
                <div>
                  <strong>OEM AI Tools</strong>
                  <span>Cisco XDR, Fortinet FortiAI, and leading AI platforms integrated into every solution.</span>
                </div>
              </div>
              <div className="ai-works-item ai-works-reveal" style={{ '--delay': '0.32s' } as CSSProperties}>
                <span className="ai-works-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" className="block translate-y-[14px]">
                    <rect x="3" y="8" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 8V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8.5 13h0.01M15.5 13h0.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M9 17h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
                <div>
                  <strong>AI-Augmented SOC</strong>
                  <span>Machine learning triage reduces alert fatigue and accelerates response times.</span>
                </div>
              </div>
              <div className="ai-works-item ai-works-reveal" style={{ '--delay': '0.4s' } as CSSProperties}>
                <span className="ai-works-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" className="block translate-y-[14px]">
                    <circle cx="9" cy="8" r="3.5" stroke="currentColor" strokeWidth="2" />
                    <path d="M2.5 20v-1.2A5.8 5.8 0 0 1 8.3 13h1.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="17" cy="9.5" r="3" stroke="currentColor" strokeWidth="2" />
                    <path d="M14.5 20v-1.1a4.5 4.5 0 0 1 4.5-4.5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
                <div>
                  <strong>Human + AI</strong>
                  <span>AI handles volume and speed; our experts provide context and strategic decisions.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="ai-works-cards">
            <div className="ai-works-card ai-works-reveal" style={{ '--delay': '0.18s' } as CSSProperties}>
              <div className="ai-works-card-content">
                <strong data-count data-value="85" data-suffix="%" data-duration="1200">
                  85%
                </strong>
                <span>Reduction in MTTD</span>
                <small>Cisco XDR</small>
              </div>
            </div>
            <div className="ai-works-card ai-works-reveal" style={{ '--delay': '0.26s' } as CSSProperties}>
              <div className="ai-works-card-content">
                <strong data-count data-value="1" data-prefix="&lt;" data-suffix="s" data-duration="900">
                  &lt;1s
                </strong>
                <span>Threat Detection</span>
                <small>Fortinet FortiAI</small>
              </div>
            </div>
            <div className="ai-works-card ai-works-reveal" style={{ '--delay': '0.34s' } as CSSProperties}>
              <div className="ai-works-card-content">
                <strong data-count data-value="24" data-suffix="×7" data-duration="1100">
                  24×7
                </strong>
                <span>AI-Augmented SOC</span>
                <small>Always On</small>
              </div>
            </div>
            <div className="ai-works-card ai-works-reveal" style={{ '--delay': '0.42s' } as CSSProperties}>
              <div className="ai-works-card-content">
                <strong data-count data-value="48" data-suffix="+" data-duration="1200">
                  48+
                </strong>
                <span>Years Experience</span>
                <small>Combined Team</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light about-approach-section" ref={approachSectionRef}>
        <div className="about-approach-grid mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="approach-reveal text-3xl font-semibold text-slate-900">Our Approach</h2>
            <p className="approach-reveal approach-lead mt-2 text-sm text-slate-500">
              We operate on four foundational pillars that ensure every engagement delivers
              lasting value and measurable results.
            </p>
            <div className="approach-list mt-6 grid gap-4">
              {approachItems.map((item) => (
                <div key={item.title} className="approach-row approach-reveal">
                  <span className="approach-icon" aria-hidden="true">
                    {item.icon === 'bolt' && (
                      <svg viewBox="0 0 24 24" fill="none">
                        <path
                          d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    {item.icon === 'users' && (
                      <svg viewBox="0 0 24 24" fill="none">
                        <circle cx="8" cy="9" r="3" stroke="currentColor" strokeWidth="2" />
                        <circle cx="16" cy="9" r="3" stroke="currentColor" strokeWidth="2" />
                        <path d="M3 19c1.5-3 4-4 7-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M14 15c3 0 5.5 1 7 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    )}
                    {item.icon === 'robot' && (
                      <svg viewBox="0 0 24 24" fill="none">
                        <rect x="5" y="8" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
                        <path d="M9 8V6h6v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <circle cx="9" cy="13" r="1" fill="currentColor" />
                        <circle cx="15" cy="13" r="1" fill="currentColor" />
                        <path d="M8 18v2M16 18v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    )}
                    {item.icon === 'refresh' && (
                      <svg viewBox="0 0 24 24" fill="none">
                        <path
                          d="M20 6v6h-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4 18v-6h6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.5 8a7 7 0 0 1 11 2M17.5 16a7 7 0 0 1-11-2"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="approach-card approach-reveal">
            <h3>The Converged Advantage</h3>
            <p>
              Cybersecurity, data infrastructure, and network services are interconnected.
              AI-powered orchestration delivers compounded resilience, performance, and
              cost-efficiency.
            </p>
            <div className="approach-stats">
              <div>
                <strong data-approach-count data-value="48" data-suffix="+" data-duration="3600">48+</strong>
                <span>Years Experience</span>
              </div>
              <div>
                <strong>AI</strong>
                <span>Enhanced</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light about-pillars-section" ref={pillarsSectionRef}>
        <div className="about-pillars-content mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="pillar-reveal text-3xl font-semibold text-slate-900">Three Integrated Pillars</h2>
          <p className="pillar-reveal mt-2 text-sm text-slate-500">
            Our services work together to provide comprehensive IT excellence.
          </p>
          <div className="pillar-grid mt-10">
            {pillarItems.map((item) => (
              <div key={item.title} className="pillar-card pillar-reveal">
                <div
                  className={`pillar-icon ${
                    item.icon === 'shield'
                      ? 'pillar-icon--red'
                      : item.icon === 'database'
                      ? 'pillar-icon--blue'
                      : 'pillar-icon--green'
                  }`}
                  aria-hidden="true"
                >
                  {item.icon === 'shield' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  {item.icon === 'database' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <ellipse cx="12" cy="5" rx="7" ry="3" stroke="currentColor" strokeWidth="2" />
                      <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" stroke="currentColor" strokeWidth="2" />
                      <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {item.icon === 'network' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="6" r="2" stroke="currentColor" strokeWidth="2" />
                      <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
                      <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 8v4M10 14h4M8 16l4-4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                </div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <a className="pillar-link" href={item.href}>
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`section-light industries-section${industriesVisible ? ' is-visible' : ''}`}
        ref={industriesSectionRef}
      >
        <div className="industries-wrapper mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="industries-heading">Industries We Serve</h2>
          <p className="industries-subtitle">
            Delivering secure solutions across diverse sectors with industry-specific expertise.
          </p>
          <div className="industry-grid mt-12">
            {industries.map((industry) => (
              <div key={industry.title} className="industry-card">
                <div className="industry-icon" aria-hidden="true">
                  {industry.icon === 'bank' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M5 10v7M9 10v7M15 10v7M19 10v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M12 4l8 4H4l8-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    </svg>
                  )}
                  {industry.icon === 'heart' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 8.5c0 4.5-8 9.5-8 9.5S4 13 4 8.5C4 6 6 4 8.5 4c1.4 0 2.7.6 3.5 1.6C12.8 4.6 14.1 4 15.5 4 18 4 20 6 20 8.5z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  {industry.icon === 'cart' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="9" cy="19" r="2" stroke="currentColor" strokeWidth="2" />
                      <circle cx="17" cy="19" r="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M3 5h2l2 10h10l2-7H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {industry.icon === 'cap' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M3 8l9-4 9 4-9 4-9-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                      <path d="M7 10v4c0 2 10 2 10 0v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {industry.icon === 'card' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M3 9h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {industry.icon === 'bulb' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M9 18h6M10 22h4M8 10a4 4 0 1 1 8 0c0 2-1 2.8-2 4H10c-1-1.2-2-2-2-4z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
                <span className="industry-title">{industry.title}</span>
                <small className="industry-subtitle">{industry.subtitle}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light bengaluru-section" ref={bengaluruRef}>
        <div className="bengaluru-inner mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="bengaluru-copy">
            <h2 className="bengaluru-title bengaluru-reveal" style={{ '--delay': '0s' } as CSSProperties}>
              Based in Bengaluru,
              <br />
              Serving India
            </h2>
            <p className="bengaluru-lead bengaluru-reveal" style={{ '--delay': '0.1s' } as CSSProperties}>
              Our headquarters in Bengaluru positions us at the heart of India’s technology hub,
              enabling us to serve enterprises across the nation with local expertise and global
              standards.
            </p>
            <div className="bengaluru-meta bengaluru-reveal" style={{ '--delay': '0.2s' } as CSSProperties}>
              <p className="bengaluru-meta-title">Headquarters</p>
              <p className="bengaluru-meta-copy">
                C/O Flex Coworks, 2nd Floor, 71, 15th Cross Road,
                <br />
                Dollar Layout, J. P. Nagar, Bengaluru – 560078
              </p>
              <p className="bengaluru-meta-title bengaluru-meta-title--spaced">Contact</p>
              <p className="bengaluru-meta-copy">+91 94296 93558</p>
              <p className="bengaluru-meta-copy">secure@pirlanta.in</p>
            </div>
          </div>
          <div className="bengaluru-photo bengaluru-reveal" style={{ '--delay': '0.15s' } as CSSProperties}>
            <img
              src="GroupPic.jpeg"
              alt="Pirlanta team"
            />
          </div>
        </div>
      </section>

      <section className="section-dark section-dark--cta">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-white">Ready to Work Together?</h2>
          <p className="mt-3 text-sm text-emerald-100/70">
            Let&apos;s discuss how Pirlanta can help secure and optimize your IT infrastructure.
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
              <a href="/partners/networking/cisco">Cisco</a>
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

export default function App() {
  const location = useLocation()
  const [attacks, setAttacks] = useState<Attack[]>(seedAttacks)
  const [activeTypes] = useState<Record<AttackType, boolean>>({
    Malware: true,
    Phishing: true,
    Exploit: true,
    DDoS: true,
    Ransomware: true,
    Botnet: true,
  })
  const [hoverInfo, setHoverInfo] = useState<HoverInfo | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [threatsBlocked, setThreatsBlocked] = useState(15997)
  const [systemsCount, setSystemsCount] = useState('156+')
  const [monitorsCount, setMonitorsCount] = useState('24/7')
  const [useSimulation, setUseSimulation] = useState(true)
  const [threatDetectPercent, setThreatDetectPercent] = useState(0)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })
  const [contactStatus, setContactStatus] = useState<'idle' | 'sending' | 'success' | 'error'>(
    'idle'
  )
  const [contactError, setContactError] = useState('')
  const [typedFirst, setTypedFirst] = useState('')
  const [typedSecond, setTypedSecond] = useState('')
  const [typePhase, setTypePhase] = useState<1 | 2 | 3>(1)
  const [aiOpsMonitorCount, setAiOpsMonitorCount] = useState(0)
  const auditHeroRef = useRef<HTMLElement | null>(null)
  const aiOpsSectionRef = useRef<HTMLElement | null>(null)
  const aiOpsAnimatedRef = useRef(false)
  const auditLogRef = useRef<HTMLDivElement | null>(null)
  const auditLogs = useMemo(
    () => [
      { level: 'critical', text: 'SQL injection in user input handler' },
      { level: 'warning', text: 'Hardcoded API key detected' },
      { level: 'warning', text: 'Vulnerable dependency: lodash@4.17.15' },
      { level: 'fixed', text: 'XSS vulnerability patched' },
      { level: 'fixed', text: 'Authentication bypass resolved' },
    ],
    []
  )
  const [visibleLogCount, setVisibleLogCount] = useState(0)
  const [auditComplete, setAuditComplete] = useState(false)
  const enableAuditParallax = false
  const partnerViewportRef = useRef<HTMLDivElement | null>(null)
  const partnerTrackRef = useRef<HTMLDivElement | null>(null)
  const partnerPauseRef = useRef(0)
  const [partnersPaused, setPartnersPaused] = useState(false)
  const partnersSectionRef = useRef<HTMLElement | null>(null)
  const [partnersVisible, setPartnersVisible] = useState(false)
  const reasonOptions = [
    {
      key: 'integration',
      title: 'Integration-First',
      copy: 'Seamless cross-platform integration.',
      detail:
        "We don't just deploy tools; we weave them into your existing ecosystem to ensure unified visibility and control.",
      accent: '#b7f24a',
      gradient: 'linear-gradient(135deg, rgba(20, 28, 26, 0.96), rgba(12, 18, 18, 0.98))',
    },
    {
      key: 'senior',
      title: 'Senior-Led',
      copy: 'Expert-led engagements, always.',
      detail:
        'Every project is led by a principal architect with 10+ years of experience. You get the experts you meet during the sales process.',
      accent: '#b7f24a',
      gradient: 'linear-gradient(135deg, rgba(18, 28, 24, 0.96), rgba(12, 18, 18, 0.98))',
    },
    {
      key: 'ai',
      title: 'AI-Augmented',
      copy: 'AI tools amplify our experts.',
      detail:
        'We leverage Cisco XDR, Fortinet FortiAI, and leading AI platforms to accelerate detection, automate response, and deliver measurable outcomes.',
      accent: '#b7f24a',
      gradient: 'linear-gradient(135deg, rgba(18, 28, 24, 0.96), rgba(12, 18, 18, 0.98))',
    },
    {
      key: 'compliance',
      title: 'Compliance-Ready',
      copy: 'Audit-ready frameworks.',
      detail:
        'Architectures aligned with NIST, ISO, and PCI-DSS to keep your infrastructure secure, compliant, and audit-ready.',
      accent: '#b7f24a',
      gradient: 'linear-gradient(135deg, rgba(18, 28, 24, 0.96), rgba(12, 18, 18, 0.98))',
    },
  ]
  const [activeReasonKey, setActiveReasonKey] = useState(reasonOptions[0].key)

  useEffect(() => {
    const firstText = 'Expert-Led.'
    const secondText = 'AI-Powered.'
    let firstIndex = 0
    let secondIndex = 0
    let timeoutId: number
    let active = true

    setTypedFirst('')
    setTypedSecond('')
    setTypePhase(1)

    const typeSecond = () => {
      if (!active) return
      if (secondIndex <= secondText.length) {
        setTypedSecond(secondText.slice(0, secondIndex))
        secondIndex += 1
        timeoutId = window.setTimeout(typeSecond, 60)
        return
      }
      setTypePhase(3)
    }

    const typeFirst = () => {
      if (!active) return
      if (firstIndex <= firstText.length) {
        setTypedFirst(firstText.slice(0, firstIndex))
        firstIndex += 1
        timeoutId = window.setTimeout(typeFirst, 60)
        return
      }
      setTypePhase(2)
      timeoutId = window.setTimeout(typeSecond, 240)
    }

    typeFirst()

    return () => {
      active = false
      window.clearTimeout(timeoutId)
    }
  }, [])

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll('.services-fade, .aiops-fade, .package-fade')
    )
    if (elements.length === 0) return

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [location.pathname])

  useEffect(() => {
    if (location.pathname !== '/') {
      aiOpsAnimatedRef.current = false
      setThreatDetectPercent(0)
      setAiOpsMonitorCount(0)
      return
    }

    const section = aiOpsSectionRef.current
    if (!section) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const animateValue = (
      from: number,
      to: number,
      duration: number,
      setter: (value: number) => void
    ) => {
      const start = performance.now()
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        const value = Math.round(from + (to - from) * eased)
        setter(value)
        if (progress < 1) {
          requestAnimationFrame(step)
        } else {
          setter(to)
        }
      }
      requestAnimationFrame(step)
    }

    const revealSection = () => {
      section
        .querySelectorAll('.aiops-fade')
        .forEach((el) => el.classList.add('is-visible'))
    }

    const startCounts = () => {
      if (aiOpsAnimatedRef.current) return
      aiOpsAnimatedRef.current = true
      animateValue(0, 85, 1200, setThreatDetectPercent)
      animateValue(0, 24, 1100, setAiOpsMonitorCount)
    }

    if (prefersReducedMotion) {
      revealSection()
      setThreatDetectPercent(85)
      setAiOpsMonitorCount(24)
      return
    }

    if (!('IntersectionObserver' in window)) {
      revealSection()
      startCounts()
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealSection()
            startCounts()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.25, rootMargin: '0px 0px -10% 0px' }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [location.pathname])
  const renderReasonIcon = (key: string) => {
    switch (key) {
      case 'integration':
        return (
          <svg viewBox="0 0 24 24" fill="none">
            <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="18" cy="6" r="3" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="1.8" />
            <path d="M8.5 11L15 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M8.5 13L15 16.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        )
      case 'senior':
        return (
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M12 3l2.8 5.4 6 0.8-4.4 4.2 1.1 5.9L12 16.8 6.5 19.3l1.1-5.9L3.2 9.2l6-0.8L12 3z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
        )
      case 'ai':
        return (
          <svg viewBox="0 0 24 24" fill="none">
            <rect x="4" y="7" width="16" height="10" rx="4" stroke="currentColor" strokeWidth="1.8" />
            <path d="M8 7V5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M12 7V4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M16 7V5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        )
      case 'compliance':
        return (
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path d="M8.5 12.5l2.2 2.2 4.8-4.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        )
      default:
        return null
    }
  }
  const faqItems = [
    {
      question:
        'What cybersecurity, network security and cloud services does Pirlanta provide in India?',
      answer:
        'We provide 24x7 cybersecurity operations, secure network services (SD-WAN, ZTNA, SASE) and data-centre/cloud modernisation for enterprises across India.',
    },
    {
      question:
        'Are your managed security services suitable for Bengaluru and pan-India enterprises?',
      answer:
        'Yes, we are Bengaluru-based with India-wide delivery capabilities, supporting hybrid estates across on-premises, Microsoft 365, Azure, and multi-cloud environments.',
    },
    {
      question: 'Do you offer managed detection and response (MDR) and incident response (IR)?',
      answer:
        'Yes, our MDR services include detection engineering, threat hunting and automation. Our IR capabilities cover triage, containment and recovery with documented playbooks.',
    },
    {
      question: 'Can you help with Zero Trust consulting and secure remote access (ZTNA)?',
      answer:
        'Yes, we design Zero Trust architectures and implement ZTNA to replace legacy VPN solutions with identity-aware, policy-driven access controls.',
    },
    {
      question: 'Do you provide SIEM as a Service or SOC as a Service (SOCaaS)?',
      answer:
        'Yes, we offer high-signal analytics, response workflows and 24x7 monitoring with customized playbooks and defined SLAs.',
    },
    {
      question: 'Do you support Microsoft 365 and Azure security hardening?',
      answer:
        'Yes, we secure Microsoft 365 environments and harden Azure deployments with continuous monitoring and incident response readiness.',
    },
    {
      question: 'Can you design SD-WAN and SASE for distributed teams?',
      answer:
        'Yes, we deliver SD-WAN rollouts with full observability plus SASE implementations for unified cloud application access and security.',
    },
    {
      question: 'Do you deliver Disaster Recovery as a Service (DRaaS)?',
      answer:
        'Yes, our DRaaS includes backup solutions, DR testing and runbooks aligned to your specific RPO/RTO targets.',
    },
    {
      question: 'How do you measure outcomes and reduce MTTD/MTTR?',
      answer:
        'We track detection coverage and response times with executive reporting dashboards and continuous tuning based on metrics.',
    },
    {
      question: 'How do we get started with Pirlanta?',
      answer:
        'Begin with a short assessment call. We align scope, timelines and outcomes, then execute a phased implementation plan tailored to your needs.',
    },
  ]

  const partnerLogos = [
    { src: '/partners/world-cisco-png-logo-12.png', alt: 'Cisco' },
    { src: '/partners/Juniper_Networks_logo.svg.png', alt: 'Juniper Networks' },
    { src: '/partners/RSA_Security-Logo.wine.png', alt: 'RSA' },
    { src: '/partners/fortinet.png', alt: 'Fortinet' },
    { src: '/partners/Check_Point_logo_2022.svg', alt: 'Check Point' },
    { src: '/partners/Veeam_logo.png', alt: 'Veeam' },
    { src: '/partners/Amazon_Web_Services_Logo.svg.png', alt: 'AWS' },
    { src: '/partners/Logitech_logo.svg.png', alt: 'Logitech' },
  ]

  const handlePartnerScroll = (direction: 1 | -1) => {
    const viewport = partnerViewportRef.current
    const track = partnerTrackRef.current
    if (!viewport || !track) return
    const items = track.querySelectorAll<HTMLElement>('.partner-item')
    const firstItem = items[0]
    const gapValue = parseFloat(
      getComputedStyle(track).columnGap || getComputedStyle(track).gap || '0'
    )
    const step = (firstItem?.getBoundingClientRect().width || 180) + gapValue

    if (direction < 0 && viewport.scrollLeft <= 0) {
      viewport.scrollLeft += track.scrollWidth / 2
    }

    partnerPauseRef.current = performance.now() + 800
    viewport.scrollBy({ left: direction * step, behavior: 'smooth' })
  }
  const [openFaqIndex, setOpenFaqIndex] = useState(-1)

  useEffect(() => {
    const createId = () =>
      typeof crypto !== 'undefined' && 'randomUUID' in crypto
        ? crypto.randomUUID()
        : `atk-${Math.random().toString(16).slice(2)}`

    const mapCountry = (name: string) => {
      const mapping: Record<string, string> = {
        USA: 'United States',
        UK: 'United Kingdom',
        UAE: 'UAE',
      }
      return mapping[name] ?? name
    }

    const wsHost =
      typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
        ? 'localhost:9000'
        : `${window.location.hostname}:9000`
    const ws = new WebSocket(`ws://${wsHost}/ws/threats`)
    ws.onopen = () => setUseSimulation(false)
    ws.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data)
        if (message.event === 'stats:update') {
          const stats = message.data as Record<string, number | string>
          const total = Object.entries(stats)
            .filter(([key]) => ['malware', 'phishing', 'exploit', 'ransomware', 'botnet', 'ddos'].includes(key))
            .reduce((sum, [, value]) => sum + Number(value), 0)
          setThreatsBlocked(total)
          if (stats.systems) {
            setSystemsCount(`${stats.systems}+`)
          }
          if (stats.monitors) {
            setMonitorsCount(String(stats.monitors))
          }
          return
        }
        if (message.event !== 'threat:new') return
        const data = message.data as {
          origin: string
          target: string
          type: AttackType
          severity: string
          timestamp: string
        }
        const nextAttack: Attack = {
          id: createId(),
          source_country: mapCountry(data.origin),
          target_country: mapCountry(data.target),
          source_ip: '0.0.0.0',
          target_ip: '0.0.0.0',
          attack_type: data.type,
          severity: data.severity as Attack['severity'],
          timestamp: data.timestamp,
        }
        setAttacks((prev) => [nextAttack, ...prev].slice(0, 14))
        setThreatsBlocked((prev) => prev + 1)
      } catch {
        // Ignore malformed websocket payloads.
      }
    }
    ws.onerror = () => setUseSimulation(true)
    ws.onclose = () => setUseSimulation(true)
    return () => ws.close()
  }, [])

  // Eager preload common lazy routes after idle so navigation feels instant
  useEffect(() => {
    const t = setTimeout(() => {
      preloadRoute('/services/cybersecurity')
      preloadRoute('/services/data-centre-cloud')
      preloadRoute('/assessment')
    }, 1500)
    return () => clearTimeout(t)
  }, [])

  const apiBase = getApiBaseUrl() || 'http://localhost:8000'

  const handleContactChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    setContactForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleContactSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setContactStatus('sending')
    setContactError('')
    try {
      const response = await fetch(`${apiBase}/api/contact/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm),
      })
      if (!response.ok) {
        const payload = await response.json().catch(() => null)
        setContactError(payload?.error ?? 'Unable to send message.')
        setContactStatus('error')
        return
      }
      setContactStatus('success')
      setContactForm({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      })
    } catch {
      setContactError('Unable to send message.')
      setContactStatus('error')
    }
  }

  useEffect(() => {
    if (!useSimulation) return
    const interval = setInterval(() => {
      const nextAttack = makeRandomAttack()
      setAttacks((prev) => [nextAttack, ...prev].slice(0, 14))
      setThreatsBlocked((prev) => prev + 1)
    }, 2500)
    return () => clearInterval(interval)
  }, [useSimulation])

  useEffect(() => {
    let raf: number
    let last = false
    const handleScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        const next = window.scrollY > 12
        if (next !== last) {
          last = next
          setScrolled(next)
        }
        raf = 0
      })
    }
    last = window.scrollY > 12
    setScrolled(last)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [location.pathname])

  useEffect(() => {
    let raf: number
    const handleMove = (event: MouseEvent) => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`)
        document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`)
        raf = 0
      })
    }
    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', handleMove)
    }
  }, [])


  useEffect(() => {
    setVisibleLogCount(0)
    setAuditComplete(false)
    let idx = 0
    const interval = setInterval(() => {
      idx += 1
      setVisibleLogCount(idx)
      if (idx >= auditLogs.length) {
        setAuditComplete(true)
        clearInterval(interval)
      }
    }, 700)
    return () => clearInterval(interval)
  }, [auditLogs.length])

  useEffect(() => {
    if (!auditLogRef.current) return
    auditLogRef.current.scrollTop = auditLogRef.current.scrollHeight
  }, [visibleLogCount])

  useEffect(() => {
    if (!enableAuditParallax) return
    const section = auditHeroRef.current
    if (!section) return
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isFinePointer =
      typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches
    if (prefersReducedMotion || !isFinePointer) return

    let rafId = 0
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0

    const clamp = (value: number, min: number, max: number) =>
      Math.min(Math.max(value, min), max)

    const animate = () => {
      currentX += (targetX - currentX) * 0.08
      currentY += (targetY - currentY) * 0.08
      section.style.setProperty('--hero-x', `${currentX.toFixed(2)}px`)
      section.style.setProperty('--hero-y', `${currentY.toFixed(2)}px`)
      rafId = requestAnimationFrame(animate)
    }

    const handleMove = (event: MouseEvent) => {
      const rect = section.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const offsetX = (event.clientX - centerX) * 0.015
      const offsetY = (event.clientY - centerY) * 0.01
      targetX = clamp(offsetX, -16, 16)
      targetY = clamp(offsetY, -12, 12)
    }

    const handleLeave = () => {
      targetX = 0
      targetY = 0
    }

    section.addEventListener('mousemove', handleMove)
    section.addEventListener('mouseleave', handleLeave)
    rafId = requestAnimationFrame(animate)

    return () => {
      section.removeEventListener('mousemove', handleMove)
      section.removeEventListener('mouseleave', handleLeave)
      cancelAnimationFrame(rafId)
    }
  }, [])

  useEffect(() => {
    const viewport = partnerViewportRef.current
    const track = partnerTrackRef.current
    if (!viewport || !track) return
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    let rafId = 0
    let last = performance.now()
    const speed = 75

    const step = (now: number) => {
      const delta = now - last
      last = now
      if (!partnersPaused && now > partnerPauseRef.current) {
        viewport.scrollLeft += (speed * delta) / 1000
        const halfWidth = track.scrollWidth / 2
        if (viewport.scrollLeft >= halfWidth) {
          viewport.scrollLeft -= halfWidth
        }
      }
      rafId = requestAnimationFrame(step)
    }

    rafId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafId)
  }, [partnersPaused])

  useEffect(() => {
    if (location.pathname !== '/') {
      setPartnersVisible(false)
      return
    }

    const section = partnersSectionRef.current
    if (!section) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setPartnersVisible(true)
      return
    }

    if (!('IntersectionObserver' in window)) {
      setPartnersVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPartnersVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [location.pathname])

  const filteredAttacks = useMemo(
    () => attacks.filter((attack) => activeTypes[attack.attack_type]),
    [attacks, activeTypes]
  )

  const countryStats = useMemo(() => {
    const stats: Record<string, { count: number; latestType: string; latestTimestamp: string }> =
      {}
    attacks.forEach((attack) => {
      const key = attack.source_country
      if (!stats[key]) {
        stats[key] = {
          count: 0,
          latestType: attack.attack_type,
          latestTimestamp: attack.timestamp,
        }
      }
      stats[key].count += 1
      stats[key].latestType = attack.attack_type
      stats[key].latestTimestamp = attack.timestamp
    })
    return stats
  }, [attacks])

  const PageFallback = () => (
    <div className="page-loading-fallback">
      <div className="page-loading-spinner" aria-hidden="true" />
      <p className="page-loading-text">Loading...</p>
    </div>
  )

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div
        className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden text-transparent"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(400px circle at var(--cursor-x, -1000px) var(--cursor-y, -1000px), rgba(39, 102, 0, 0.15), transparent 40%)',
          opacity: 1,
          transition: 'opacity 0.3s',
          contain: 'layout style paint',
        }}
      />
      <Header scrolled={scrolled} />
      <Routes>
        <Route path="/services/cybersecurity" element={<Suspense fallback={<PageFallback />}><CybersecurityPage /></Suspense>} />
        <Route path="/services/data-centre-cloud" element={<Suspense fallback={<PageFallback />}><DataCentrePage /></Suspense>} />
        <Route path="/services/network-sd-wan" element={<SecureNetworkPage />} />
        <Route path="/services/ai-code-audits" element={<AiCodeAuditsPage />} />
        <Route path="/partners/ecosystem" element={<PartnerEcosystemPage />} />
        <Route path="/partners/networking/cisco" element={<PartnerCiscoPage />} />
        <Route path="/partners/networking/juniper" element={<PartnerJuniperPage />} />
        <Route path="/partners/security/barracuda" element={<Suspense fallback={<PageFallback />}><BarracudaSecurityPage /></Suspense>} />
        <Route path="/partners/security/fortinet" element={<Suspense fallback={<PageFallback />}><FortinetSecurityPage /></Suspense>} />
        <Route path="/partners/security/rsa" element={<Suspense fallback={<PageFallback />}><RSASecurityPage /></Suspense>} />
        <Route path="/partners/security/crowdstrike" element={<Suspense fallback={<PageFallback />}><CrowdStrikeSecurityPage /></Suspense>} />
        <Route path="/partners/security/forcepoint" element={<Suspense fallback={<PageFallback />}><ForcepointSecurityPage /></Suspense>} />
        <Route path="/partners/security/checkpoint" element={<Suspense fallback={<PageFallback />}><CheckPointSecurityPage /></Suspense>} />
        <Route path="/partners/endpoint/apple-enterprise" element={<Suspense fallback={<PageFallback />}><AppleForEnterprisePage /></Suspense>} />
        <Route path="/partners/endpoint/apple-smb" element={<Suspense fallback={<PageFallback />}><AppleForSMBPage /></Suspense>} />
        <Route path="/partners/endpoint/jamf" element={<Suspense fallback={<PageFallback />}><JamfPage /></Suspense>} />
        <Route path="/terms" element={<Suspense fallback={<PageFallback />}><TermsPage /></Suspense>} />
        <Route path="/refund-cancellation" element={<Suspense fallback={<PageFallback />}><RefundCancellationPage /></Suspense>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage contactForm={contactForm} contactStatus={contactStatus} contactError={contactError} onChange={handleContactChange} onSubmit={handleContactSubmit} />} />
        <Route path="/assessment" element={<Suspense fallback={<PageFallback />}><AssessmentPage /></Suspense>} />
        <Route path="/assessment/" element={<Suspense fallback={<PageFallback />}><AssessmentPage /></Suspense>} />
        <Route path="/" element={
        <main className="relative overflow-x-hidden">


          


        <section className="hero-section home-hero relative flex items-center" id="home">
          <HeroLiveBackground />
            <div className="hero-content mx-auto grid w-full max-w-7xl gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
            <div>
            <div className="flex flex-wrap gap-3 hero-fade hero-fade-1">
              <span className="badge-pill">
                <span className="badge-dot" aria-hidden="true" />
                48+ Years Experience
              </span>
              <span className="badge-pill">
                <span className="badge-sparkle" aria-hidden="true">✦</span>
                AI-Enhanced Operations
              </span>
            </div>
                <h1 className="home-hero-title mt-6 inline-flex flex-wrap items-baseline gap-3 text-white hero-fade hero-fade-2">
                  <span className="typewriter">
                    {typedFirst}
                    {typePhase === 1 && <span className="caret" />}
                  </span>
                  <span className="ai-accent typewriter">
                    {typedSecond}
                    {typePhase === 2 && <span className="caret accent" />}
                  </span>
                </h1>

            <p className="mt-6 text-lg text-slate-300/90 sm:text-xl hero-fade hero-fade-3">
              Cybersecurity Services for the AI Era
            </p>
            <p className="mt-3 max-w-xl text-base text-slate-400/85 md:text-lg hero-fade hero-fade-4">
              AI-driven threat detection, expert implementation, and measurable outcomes.
              Powered by Cisco, Fortinet, and industry-leading AI platforms.
            </p>
            <div className="mt-9 flex flex-wrap gap-4 hero-fade hero-fade-5">
              <a href="/contact">
                <button className="hero-cta">
                  Get Started →
                </button>
              </a>
              <a href="/about">
                <button className="hero-cta-secondary">
                  Learn More
                </button>
              </a>
            </div>
          </div>

            <div className="relative w-full mt-6 sm:mt-8 md:mt-0 hero-fade hero-fade-6 hero-globe-delay" id="threat-map">
            <div className="block">
              <div className="globe-shell">
                <div className="globe-rings" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
              <div className="absolute inset-0 pointer-events-none z-[15]">
                  <div
                    className="absolute flex items-center gap-1 animate-alert-pop"
                    style={{ left: '88%', top: '34%', transform: 'translate(-50%, -50%)' }}
                  >
                    <div className="alert-dot" />
                    <span className="alert-label">BLOCKED</span>
                  </div>
                  <div
                    className="absolute flex items-center gap-1 animate-alert-pop"
                    style={{ left: '10%', top: '62%', transform: 'translate(-50%, -50%)' }}
                  >
                    <div className="alert-dot" />
                    <span className="alert-label">MITIGATED</span>
                  </div>
                </div>
                <Suspense fallback={<div className="globe-fallback" />}>
                  <ThreatGlobe
                    attacks={attacks}
                    activeTypes={activeTypes}
                    countryStats={countryStats}
                    onSelectAttack={() => undefined}
                    onHover={setHoverInfo}
                  />
                </Suspense>
                {hoverInfo && (
                  <div
                    className="absolute z-10 rounded-xl border border-emerald-500/40 bg-slate-950/90 px-3 py-2 text-xs text-slate-200 shadow-lg"
                    style={{ left: hoverInfo.x, top: hoverInfo.y }}
                  >
                    <p className="text-sm font-semibold text-white">{hoverInfo.country}</p>
                    <p className="text-[11px] text-emerald-200/70">{hoverInfo.region}</p>
                    <div className="mt-2 flex flex-col gap-1 text-[11px]">
                      <span>Attacks: {hoverInfo.attackCount}</span>
                      <span>Type: {hoverInfo.attackType}</span>
                      <span>{hoverInfo.timestamp}</span>
                    </div>
                  </div>
                )}
                <div className="-mt-2 flex flex-wrap justify-center gap-3 lg:justify-end">
                  {[
                    { label: 'Threats Blocked', value: threatsBlocked.toLocaleString(), icon: 'shield' },
                    { label: 'Systems', value: systemsCount, icon: 'activity' },
                    { label: 'Monitors', value: monitorsCount, icon: 'eye' },
                  ].map((stat, index) => (
                    <div
                      key={stat.label}
                      className="stat-card hero-fade"
                      style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                    >
                      <div className="stat-header">
                        <span className="stat-icon" aria-hidden="true">
                          {stat.icon === 'shield' && (
                            <svg viewBox="0 0 24 24" fill="none">
                              <path
                                d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                          {stat.icon === 'activity' && (
                            <svg viewBox="0 0 24 24" fill="none">
                              <path
                                d="M22 12h-2.5a2 2 0 0 0-1.9 1.4l-2.4 8.6-6-20-2.4 8.6A2 2 0 0 1 4.5 12H2"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                          {stat.icon === 'eye' && (
                            <svg viewBox="0 0 24 24" fill="none">
                              <path
                                d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                            </svg>
                          )}
                        </span>
                        <p className="stat-label">{stat.label}</p>
                      </div>
                      <p className="stat-value">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-emerald-500/20 bg-slate-950/70 p-6 hidden">
              <div className="globe-static" />
              <h3 className="mt-6 text-sm font-semibold text-white">Live Attack Feed</h3>
              <ul className="mt-3 space-y-2 text-xs text-emerald-100/70">
                {filteredAttacks.slice(0, 6).map((attack) => (
                  <li key={attack.id} className="flex items-center justify-between">
                    <span>{attack.attack_type}</span>
                    <span>{attack.timestamp.slice(11, 19)} UTC</span>
                  </li>
                ))}
              </ul>
            </div>
            </div>
          </div>
          <div className="hero-wave" aria-hidden="true">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="hero-wave-svg"
            >
              <path d="M0,0 Q600,120 1200,0 L1200,120 L0,120 Z" className="fill-white" />
            </svg>
          </div>
        </section>
        <section className="section-light pricing-section" id="services">
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20">
            <span className="pill services-fade services-fade-1">
              <span className="pill-icon" aria-hidden="true">
                ✦
              </span>
              AI-ENHANCED SERVICES
            </span>
            <h2 className="mt-4 text-2xl font-semibold text-slate-900 sm:text-3xl md:text-4xl services-fade services-fade-2">
              Our Services
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-500 md:text-base services-fade services-fade-3">
              Three integrated pillars of IT excellence, amplified by AI and delivered with
              senior expertise.
            </p>
            <div className="mx-auto mt-12 grid gap-8 md:grid-cols-3">
              {[
                {
                  title: 'Cybersecurity',
                  description:
                    'AI-driven threat detection, MDR, and compliance for regulated enterprises.',
                  bullets: ['AI-Powered SOC', '95% Faster Response', 'Zero Trust Architecture'],
                  icon: 'shield',
                  href: '/services/cybersecurity',
                },
                {
                  title: 'Data Centre',
                  description:
                    'AI-optimized infrastructure, predictive scaling & intelligent DR.',
                  bullets: ['Smart Migration', 'Predictive Analytics', 'Automated Recovery'],
                  icon: 'database',
                  href: '/services/data-centre',
                },
                {
                  title: 'Secure Network',
                  description:
                    'AI-powered traffic analysis, self-healing networks & intelligent routing.',
                  bullets: ['Intelligent SD-WAN', 'AI Traffic Analysis', 'Adaptive Security'],
                  icon: 'network',
                  href: '/services/secure-network',
                },
              ].map((card, index) => (
                <div
                  key={card.title}
                  className="group relative h-full services-fade"
                  style={{ animationDelay: `${0.25 + index * 0.15}s` }}
                >
                  <div className="service-card-v2 text-left">
                    <div className="service-card-glow" aria-hidden="true" />
                    <div className="service-icon-box">
                      {card.icon === 'shield' && (
                        <svg viewBox="0 0 24 24" fill="none">
                          <path
                            d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                      {card.icon === 'database' && (
                        <svg viewBox="0 0 24 24" fill="none">
                          <ellipse cx="12" cy="5" rx="8" ry="3" stroke="currentColor" strokeWidth="2" />
                          <path
                            d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      )}
                      {card.icon === 'network' && (
                        <svg viewBox="0 0 24 24" fill="none">
                          <rect x="3" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
                          <rect x="15" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
                          <rect x="9" y="15" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
                          <path d="M6 9v3h12V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M12 12v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      )}
                    </div>
                    <h3 className="service-title">
                      <a className="service-title-link" href={card.href}>
                        {card.title}
                      </a>
                    </h3>
                    <p className="service-copy">{card.description}</p>
                    <ul className="service-list">
                      {card.bullets.map((bullet) => (
                        <li key={bullet} className="service-list-item">
                          <svg viewBox="0 0 24 24" fill="none">
                            <path
                              d="M9 18l6-6-6-6"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <a className="service-link" href={card.href}>
                      Explore Solution
                      <svg viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5 12h14m-7-7 7 7-7 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section-light ai-ops-section" id="ai-ops" ref={aiOpsSectionRef}>
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <span className="pill pill--tight aiops-fade aiops-fade-1">
                <span className="pill-icon" aria-hidden="true">
                  ✦
                </span>
                AI NATIVE TECHNOLOGY
              </span>
              <h2 className="mt-4 text-4xl font-semibold text-slate-900 aiops-fade aiops-fade-2">
                AI-Powered Security
                <br />
                Operations
              </h2>
              <p className="mt-4 max-w-xl text-sm text-slate-500 md:text-base aiops-fade aiops-fade-3">
                We leverage AI tools from our CEM partners—Cisco XDR, Fortinet FortiAI, and
                more—combined with our implementation expertise to deliver faster detection,
                smarter automation, and measurable outcomes.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="stat-pill aiops-fade aiops-fade-4">
                  <span className="stat-pill-value">{threatDetectPercent}%</span>
                  <span className="stat-pill-label">Faster Threat Detection</span>
                </div>
                <div className="stat-pill aiops-fade aiops-fade-5">
                  <span className="stat-pill-value">{aiOpsMonitorCount}x7</span>
                  <span className="stat-pill-label">AI-Augmented Monitoring</span>
                </div>
              </div>
              <a href="/services/cybersecurity">
                <button className="mt-6 rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-600 aiops-fade aiops-fade-6">
                  Explore AI Capabilities →
                </button>
              </a>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: 'Cisco XDR & SecureX',
                  copy: 'Extended detection and response with automated threat correlation across endpoints, network, and cloud.',
                  icon: 'shield',
                },
                {
                  title: 'Fortinet FortiAI',
                  copy: 'Sub-second threat detection using deep neural networks trained on millions of malware samples.',
                  icon: 'bolt',
                },
                {
                  title: 'AI-Augmented SOC',
                  copy: '24x7 monitoring with AI-assisted alert triage, reducing analyst fatigue and improving accuracy.',
                  icon: 'eye',
                },
                {
                  title: 'Automated Threat Hunting',
                  copy: 'Proactive threat discovery using machine learning to detect anomalies and insider attacks.',
                  icon: 'radar',
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="ai-card aiops-fade"
                  style={{ animationDelay: `${0.35 + index * 0.12}s` }}
                >
                  <div className="ai-card-icon" aria-hidden="true">
                    {item.icon === 'shield' && (
                      <svg viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    {item.icon === 'bolt' && (
                      <svg viewBox="0 0 24 24" fill="none">
                        <path
                          d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    {item.icon === 'eye' && (
                      <svg viewBox="0 0 24 24" fill="none">
                        <path
                          d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    )}
                    {item.icon === 'radar' && (
                      <svg viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
                        <path
                          d="M12 4v8l5 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                      </svg>
                    )}
                  </div>
                  <h3 className="ai-card-title">{item.title}</h3>
                  <p className="ai-card-copy">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* <section className="audit-hero" ref={auditHeroRef} id="ai-audits"> */}
        <section
          className="audit-hero min-h-screen flex items-center"
          ref={auditHeroRef}
          id="ai-audits"
        >
          {/* <div className="audit-content mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.1fr_1fr] lg:items-center"> */}
          <motion.div
              className="audit-content mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.1fr_1fr] lg:items-center w-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >

            <div>
              <span className="audit-badge audit-reveal" style={{ animationDelay: '0s' }}>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 3l9 16H3L12 3z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path d="M12 9v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="16" r="1" fill="currentColor" />
                </svg>
                New Threat Vector
              </span>
              {/* <h2 className="audit-title audit-reveal" style={{ animationDelay: '0.1s' }}> */}
              <motion.h2
                  className="audit-title"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >

                Secure Your AI-Built
                <br />
                Applications
              </motion.h2>
              <p className="audit-stat audit-reveal" style={{ animationDelay: '0.2s' }}>
                <span>48%</span> of AI-generated code contains vulnerabilities.
              </p>
              <p className="audit-desc audit-reveal" style={{ animationDelay: '0.3s' }}>
                Cursor, Copilot, and vibe-coded applications introduce security blind spots.
                Purpose-built audits catch what automated scanners miss.
              </p>
              <div className="audit-features">
                {[
                  { label: 'SAST & DAST Analysis', icon: 'search' },
                  { label: 'Dependency Scanning', icon: 'layers' },
                  { label: 'AI Prompt Injection Testing', icon: 'shield' },
                  { label: 'Remediation Guidance', icon: 'spark' },
                ].map((item, idx) => (
                  // <div
                  //   key={item.label}
                  //   className="audit-feature audit-reveal"
                  //   style={{ animationDelay: `${0.35 + idx * 0.08}s` }}
                  // >

                  <motion.div
                      key={item.label}
                      className="audit-feature"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.08 }}
                      viewport={{ once: true }}
                    >

                    <span className="audit-feature-icon" aria-hidden="true">
                      {item.icon === 'search' && (
                        <svg viewBox="0 0 24 24" fill="none">
                          <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2" />
                          <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      )}
                      {item.icon === 'layers' && (
                        <svg viewBox="0 0 24 24" fill="none">
                          <path d="M12 3l9 5-9 5-9-5 9-5z" stroke="currentColor" strokeWidth="2" />
                          <path d="M3 12l9 5 9-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M3 17l9 5 9-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      )}
                      {item.icon === 'shield' && (
                        <svg viewBox="0 0 24 24" fill="none">
                          <path
                            d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                      {item.icon === 'spark' && (
                        <svg viewBox="0 0 24 24" fill="none">
                          <path d="M12 2l2.2 5.4L20 9l-5.8 1.6L12 16l-2.2-5.4L4 9l5.8-1.6L12 2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                    {item.label}
                  </motion.div>
                ))}
              </div>
              <a href="/services/ai-code-audits">
                <button className="audit-cta audit-reveal" style={{ animationDelay: '0.7s' }}>
                  Get Your Code Audited <span>→</span>
                </button>
              </a>
            </div>
            {/* <div className="hidden lg:block audit-reveal" style={{ animationDelay: '0.5s' }}> */}
            <motion.div
                className="hidden lg:block"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
              >

              <div className="relative">
                <div className="animated-border glass-card-dark rounded-2xl border border-white/10 p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-3 w-3 rounded-full bg-red-500" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500" />
                      <div className="h-3 w-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-xs font-mono text-white/40">security_audit.log</span>
                  </div>
                  <div className="space-y-3 font-mono text-sm" ref={auditLogRef}>
                    {auditLogs.slice(0, visibleLogCount).map((line, idx) => (
                      <div key={`${line.level}-${idx}`} className="flex items-start space-x-3">
                        <span
                          className={
                            line.level === 'critical'
                              ? 'text-red-400'
                              : line.level === 'warning'
                                ? 'text-yellow-400'
                                : 'text-green-400'
                          }
                        >
                          [{line.level.toUpperCase()}]
                        </span>
                        <span className="text-white/70">{line.text}</span>
                      </div>
                    ))}
                  </div>
                  {auditComplete && (
                    <div className="mt-6 border-t border-white/10 pt-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-white/40">Scan complete</span>
                        <span className="text-accent font-medium">
                          12 issues found, 8 fixed
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* <section className="bg-dark-950 text-white py-24 md:py-32 lg:py-36 relative overflow-hidden" id="why-choose"> */}
        <section
            className="bg-dark-950 text-white min-h-screen flex items-center relative overflow-hidden"
            id="why-choose"
          >

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(80% 50% at 50% 0%, rgba(39, 102, 0, 0.15), transparent)',
            }}
          />
          {/* <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> */}
          <motion.div
              className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-120px" }}
            >

            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
              <AntigravityBackground className="absolute inset-0 w-full h-full" />
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-stretch relative z-10">
              <div style={{ opacity: 1, transform: 'none' }}>
                <div className="flex flex-col h-full">
                  <div className="mb-10">
                    <h2 className="text-section-sm md:text-section font-medium text-white mb-6">
                      Why Choose Pirlanta?
                    </h2>
                    <p className="text-lg text-white/70">
                      We bridge strategy and execution in converged Cybersecurity, Data
                      Infrastructure, and Network environments to help you achieve measurable
                      business outcomes.
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {reasonOptions.map((item) => {
                      const isActive = item.key === activeReasonKey
                      return (
                        <div
                          key={item.key}
                          className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer group why-focus-card ${
                            isActive
                              ? 'bg-white/10 border-primary/50 shadow-[0_0_20px_-5px_rgba(39,102,0,0.3)]'
                              : 'bg-white/5 border-white/5 hover:bg-white/[0.07] hover:border-white/10'
                          }`}
                          onClick={() => setActiveReasonKey(item.key)}
                          onMouseEnter={() => setActiveReasonKey(item.key)}
                          onFocus={() => setActiveReasonKey(item.key)}
                          onKeyDown={(event) => {
                            if (event.key === 'Enter' || event.key === ' ') {
                              event.preventDefault()
                              setActiveReasonKey(item.key)
                            }
                          }}
                          role="button"
                          tabIndex={0}
                        >
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                              isActive ? 'bg-primary text-white' : 'bg-white/10 text-primary'
                            }`}
                          >
                            {renderReasonIcon(item.key)}
                          </div>
                          <h4 className={`font-medium mb-2 ${isActive ? 'text-white' : 'text-white/90'}`}>
                            {item.title}
                          </h4>
                          <p className="text-sm text-white/60 leading-relaxed">{item.copy}</p>
                        </div>
                      )
                    })}
                  </div>
                  <div className="mt-10">
                    <a
                      className="inline-flex items-center justify-center font-medium transition-all duration-300 ease-premium rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed bg-white/80 backdrop-blur-sm text-primary border border-primary/20 hover:bg-white hover:border-primary/40 hover:-translate-y-0.5 focus-visible:ring-primary px-6 py-3 text-base"
                      href="/about"
                    >
                      About Our Approach
                    </a>
                  </div>
                </div>
              </div>


              {/* <div className="hidden lg:block h-full" style={{ opacity: 1, transform: 'none' }}> */}
              <motion.div
                  className="hidden lg:block h-full"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  viewport={{ once: true }}
                >

                {(() => {
                  const active =
                    reasonOptions.find((item) => item.key === activeReasonKey) ?? reasonOptions[0]
                  const labels: string[] = []
                  return (
                    <div className="relative">
                      <div style={{ transform: 'translateY(-0.35489px)' }}>
                        <div className="relative h-full min-h-[590px] rounded-3xl overflow-hidden glass-card-dark border border-white/10 flex flex-col why-focus-card">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
                          <div className="relative z-10 flex-1 flex flex-col items-center p-8 text-center">
                            <div className="w-full flex-1 min-h-0 flex items-center justify-center overflow-hidden">
                              <div key={active.key} className="focus-graphic">
                               
                                {active.key === 'integration' && (
                                  <div className="focus-pipeline">
                                    <svg viewBox="0 0 220 200" className="focus-pipeline-svg" aria-hidden="true">

                                      {/* Left Systems */}
                                      <rect x="10" y="30" width="40" height="24" rx="6" className="pipe-system" />
                                      <rect x="10" y="88" width="40" height="24" rx="6" className="pipe-system" />
                                      <rect x="10" y="146" width="40" height="24" rx="6" className="pipe-system" />

                                      {/* Right Systems */}
                                      <rect x="170" y="30" width="40" height="24" rx="6" className="pipe-system" />
                                      <rect x="170" y="88" width="40" height="24" rx="6" className="pipe-system" />
                                      <rect x="170" y="146" width="40" height="24" rx="6" className="pipe-system" />

                                      {/* Central Hub */}
                                      <circle cx="110" cy="100" r="26" className="pipe-hub" />

                                      {/* Connection Paths */}
                                      <g className="pipe-lines">
                                        <path d="M50 42 H84 Q96 42 96 60 V100" />
                                        <path d="M50 100 H96" />
                                        <path d="M50 158 H84 Q96 158 96 140 V100" />

                                        <path d="M170 42 H136 Q124 42 124 60 V100" />
                                        <path d="M170 100 H124" />
                                        <path d="M170 158 H136 Q124 158 124 140 V100" />
                                      </g>
                                    </svg>

                                    
                                  </div>
                                )}



                                {active.key === 'senior' && (
                                  <div className="senior-anim">
                                    <div className="senior-anim__core">
                                      <svg viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
                                        <path
                                          d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6"
                                          stroke="currentColor"
                                          strokeWidth="2"
                                          strokeLinecap="round"
                                        />
                                      </svg>
                                    </div>

                                    <div className="senior-anim__orbit">
                                      {Array.from({ length: 6 }).map((_, i) => (
                                        <span key={i} style={{ ['--a' as string]: `${i * 60}deg` }} />
                                      ))}
                                    </div>
                                  </div>
                                )}


                                {active.key === 'ai' && (
                                    <div className="focus-graphic-icon focus-graphic-icon--ai-network">
                                      <div className="ai-network">
                                        {/* Nodes */}
                                        <span className="node n1" />
                                        <span className="node n2" />
                                        <span className="node n3" />
                                        <span className="node n4" />
                                        <span className="node n5" />
                                        <span className="node n6" />
                                        <span className="node n7" />

                                        {/* Center processor */}
                                        <span className="node core" />

                                        {/* SVG Lines */}
                                        <svg className="links" viewBox="0 0 200 200">
                                          <line x1="30" y1="40" x2="100" y2="100" />
                                          <line x1="30" y1="100" x2="100" y2="100" />
                                          <line x1="30" y1="160" x2="100" y2="100" />

                                          <line x1="100" y1="100" x2="170" y2="40" />
                                          <line x1="100" y1="100" x2="170" y2="100" />
                                          <line x1="100" y1="100" x2="170" y2="160" />
                                        </svg>
                                      </div>

                                      <div className="ai-labels">
                                        <span>INPUT</span>
                                        <span>PROCESS</span>
                                        <span>OUTPUT</span>
                                      </div>
                                    </div>
                                  )}


                                {active.key === 'compliance' && (
                                  <div className="focus-graphic-icon focus-graphic-icon--shield">
                                    <svg viewBox="0 0 24 24" fill="none">
                                      <path
                                        d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </div>
                                )}




                                {active.key !== 'integration' && labels.length > 0 && (
                                  <div className="orbit-group" aria-hidden="true">
                                    {labels.map((label, index) => (
                                      <div
                                        key={label}
                                        className="orbit-label"
                                        style={
                                          {
                                            '--orbit-angle': `${index * (360 / labels.length)}deg`,
                                          } as React.CSSProperties
                                        }
                                      >
                                        {label}
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="flex-shrink-0 mt-4">
                              <h3 className="text-2xl md:text-3xl font-medium text-white mb-3">
                                {active.title}
                              </h3>
                              <p className="text-base text-white/70 max-w-md mx-auto leading-relaxed">
                                {active.detail}
                              </p>
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                        </div>
                      </div>
                    </div>
                  )
                })()}
              </motion.div>
            </div>
          </motion.div>
        </section>


        <section className="section-light" id="package-offerings">
          <div className="mx-auto max-w-7xl px-6 py-20 text-center">
            <h2 className="text-4xl font-semibold text-slate-900 package-fade package-fade-1">
              Package Offerings
            </h2>
            <p className="mt-3 text-sm text-slate-500 md:text-base package-fade package-fade-2">
              Flexible engagement models designed to meet your security needs at every stage of
              growth.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  name: 'FLEX',
                  tag: 'Get Started',
                  icon: offerShield,
                  copy:
                    'Everything you need to get started with cybersecurity and data center protection.',
                  bullets: ['Security Assessment', 'Vulnerability Scanning', 'Basic Monitoring', 'Incident Response Planning'],
                },
                {
                  name: 'CONNECT',
                  tag: 'Most Popular',
                  featured: true,
                  icon: offerWifi,
                  copy: 'Enhance visibility, prepare for cloud migration, and strengthen your posture.',
                  bullets: ['Everything in FLEX', '24x7 SOC Monitoring', 'Cloud Security Posture', 'Compliance Reporting', 'Quarterly Reviews'],
                },
                {
                  name: 'INTEGRATE',
                  tag: 'Enterprise',
                  icon: offerPuzzle,
                  copy:
                    'Full-stack cyber transformation with AI-driven defense and compliance.',
                  bullets: ['Everything in CONNECT', 'AI-Driven Detection', 'Custom Playbooks', 'Dedicated Account Team', 'Executive Reporting', 'DR as a Service'],
                },
              ].map((plan, index) => (
                <div
                  key={plan.name}
                  className={`pricing-card package-fade ${
                    plan.featured ? 'pricing-card--featured' : ''
                  }`}
                  style={
                    {
                      '--package-delay': `${0.45 + index * 0.18}s`,
                    } as CSSProperties
                  }
                >
                  <div className="pricing-icon-wrap" aria-hidden="true">
                    <img className="pricing-icon" src={plan.icon} alt="" loading="lazy" />
                  </div>
                  <span className="pricing-tag">{plan.tag}</span>
                  <h3 className="pricing-name">{plan.name}</h3>
                  <p className="pricing-copy">{plan.copy}</p>
                  <ul className="pricing-list">
                    {plan.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <a href="/contact">
                    <button className="pricing-button">Get Started</button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section
          className={`section-light partners-section${partnersVisible ? ' is-visible' : ''}`}
          id="partners"
          ref={partnersSectionRef}
        >
          <div className="mx-auto max-w-7xl px-6 py-20 text-center">
            <h2 className="partners-title partners-reveal" style={{ '--delay': '0s' } as CSSProperties}>
              Our Technology Partners
            </h2>
            <p className="partners-subtitle partners-reveal" style={{ '--delay': '0.12s' } as CSSProperties}>
              We partner with industry leaders to deliver best-in-class solutions.
            </p>
            <div className="partners-marquee">
              <button
                className="partners-nav partners-nav--left"
                onClick={() => handlePartnerScroll(-1)}
                type="button"
                aria-label="Scroll left"
              >
                ‹
              </button>
              <div
                className="partners-viewport"
                ref={partnerViewportRef}
                onMouseEnter={() => setPartnersPaused(true)}
                onMouseLeave={() => setPartnersPaused(false)}
                onFocus={() => setPartnersPaused(true)}
                onBlur={() => setPartnersPaused(false)}
              >
                <div className="partners-track" ref={partnerTrackRef}>
                  {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                    <div
                      key={`${logo.alt}-${index}`}
                      className="partner-item"
                      aria-hidden={index >= partnerLogos.length}
                    >
                      <img src={logo.src} alt={logo.alt} loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
              <button
                className="partners-nav partners-nav--right"
                onClick={() => handlePartnerScroll(1)}
                type="button"
                aria-label="Scroll right"
              >
                ›
              </button>
            </div>
          </div>
        </section>
        <section className="section-light faq-section" id="faq">
          <div className="faq-grid mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <h2 className="faq-title">Frequently Asked Questions</h2>
              <p className="faq-subtitle">
                Get answers to common questions about our cybersecurity, network, and data centre
                services.
              </p>
              <a href="/contact">
                <button className="faq-cta">
                  Still have questions? Contact Us
                </button>
              </a>
            </div>
            <div className="faq-list">
              {faqItems.map((item, index) => {
                const isOpen = index === openFaqIndex
                return (
                  <button
                    key={item.question}
                    className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    type="button"
                  >
                    <span className="faq-question">{item.question}</span>
                    <span className="faq-chevron">{isOpen ? '▴' : '▾'}</span>
                    <span className="faq-answer">{item.answer}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </section>
        <section className="section-dark section-dark--cta" id="contact">
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20">
            <h2 className="text-3xl font-semibold text-white">Ready to Secure Your Business?</h2>
            <p className="mt-3 text-sm text-emerald-100/70">
              Let's discuss how Pirlanta can help you achieve secure, scalable, and compliant IT
              infrastructure.
            </p>
            <a
              className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-600"
              href="/contact"
            >
              Start the Conversation →
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
                  <li>90 Flex Coworks, 2nd Floor, 71, 15th Cross Road, J.P. Nagar, Bengaluru - 560078</li>
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
                <a href="/partners/networking/cisco">Cisco</a>
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
        } />
      </Routes>
    </div>
  )
}
