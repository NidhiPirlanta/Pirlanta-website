import { Suspense, lazy, type CSSProperties, useEffect, useMemo, useRef, useState } from 'react'

import { makeRandomAttack, seedAttacks, type Attack, type AttackType } from './data/threatData'
import { getBaseUrl } from './utils/baseUrl'
import AntigravityBackground from './components/AntigravityBackground'
import offerShield from './assets/icons/offer-shield.svg'
import offerWifi from './assets/icons/offer-wifi.svg'
import offerPuzzle from './assets/icons/offer-puzzle.svg'



const ThreatGlobe = lazy(() => import('./components/ThreatGlobe'))
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

type HoverInfo = {
  country: string
  region: string
  attackCount: number
  attackType: string
  timestamp: string
  x: number
  y: number
}

type HeaderProps = {
  scrolled: boolean
}

function Header({ scrolled }: HeaderProps) {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/'
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }
  const [partnersMenu, setPartnersMenu] = useState<'root' | 'networking' | 'security' | 'endpoint'>('root')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobilePartnersOpen, setMobilePartnersOpen] = useState(false)

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setMobileServicesOpen(false)
    setMobilePartnersOpen(false)
  }

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-20 transition ${
        scrolled
          ? 'bg-white/95 backdrop-blur border-b border-emerald-100'
          : 'bg-white/90'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex items-center gap-3">
          <img src="/pir-logo.png" alt="Pirlanta" className="h-10 w-auto" />
        </div>
        <nav className="hidden items-center gap-3 text-sm text-slate-600 md:flex">
          <a className={`nav-item ${isActive('/') ? 'nav-item--active' : ''}`} href="/">
            Home
          </a>
          <a className={`nav-item ${isActive('/about') ? 'nav-item--active' : ''}`} href="/about">
            About Us
          </a>
          <a
            className={`nav-item ${isActive('/threatmap') ? 'nav-item--active' : ''}`}
            href={`${getBaseUrl()}/threatmap/`}
          >
            Threat Map
          </a>
          <div className="group relative">
            <button className="nav-item inline-flex items-center gap-1" type="button">
              Services <span className="text-xs">▾</span>
            </button>
            <div className="nav-dropdown">
              <a className="dropdown-item block" href="/services/cybersecurity">
                <p className="font-semibold text-slate-900">Cybersecurity</p>
                <p className="text-[11px] text-slate-500">
                  MDR, compliance, cloud security & threat protection
                </p>
              </a>
              <a className="dropdown-item block dropdown-divider" href="/services/data-centre-cloud">
                <p className="font-semibold text-slate-900">Data Centre</p>
                <p className="text-[11px] text-slate-500">
                  Cloud migration, modernization & backup solutions
                </p>
              </a>
              <a className="dropdown-item block dropdown-divider" href="/services/network-sd-wan">
                <p className="font-semibold text-slate-900">Secure Network</p>
                <p className="text-[11px] text-slate-500">
                  NAC, SD-WAN, Zero Trust & connectivity
                </p>
              </a>
              <a className="dropdown-item block dropdown-divider" href="/services/ai-code-audits">
                <p className="font-semibold text-slate-900">AI Code Audits</p>
                <p className="text-[11px] text-slate-500">
                  Security for AI-generated & vibe-coded apps
                </p>
              </a>
            </div>
          </div>
          <div className="relative group">
            <button className="flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors text-primary bg-primary-50" type="button">
              Partners
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down ml-1 h-4 w-4 transition-transform group-hover:rotate-180">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="partners-dropdown absolute top-full left-0 pt-2 transition-all duration-200 opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
              <div className="flex items-start gap-4">
                <div className="bg-white/95 backdrop-blur-xl rounded-xl shadow-glass border border-black/5 py-2 min-w-[220px]">
                  <a className="block px-4 py-2.5 hover:bg-primary-50 transition-colors bg-primary-50" href="/partners/ecosystem">
                    <span className="block text-sm font-medium text-gray-900">Partner Ecosystem</span>
                    <span className="block text-xs text-gray-500 mt-0.5">Our growing partner network</span>
                  </a>
                  <div>
                    <div className={`flex items-center justify-between px-4 py-2.5 cursor-pointer transition-colors ${partnersMenu === 'networking' ? 'bg-primary-50' : 'hover:bg-gray-50'}`} onClick={() => setPartnersMenu('networking')}>
                      <span className="text-sm font-medium text-gray-900">Networking</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 text-gray-400">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <div className={`flex items-center justify-between px-4 py-2.5 cursor-pointer transition-colors ${partnersMenu === 'security' ? 'bg-primary-50' : 'hover:bg-gray-50'}`} onClick={() => setPartnersMenu('security')}>
                      <span className="text-sm font-medium text-gray-900">Security</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 text-gray-400">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <div className={`flex items-center justify-between px-4 py-2.5 cursor-pointer transition-colors ${partnersMenu === 'endpoint' ? 'bg-primary-50' : 'hover:bg-gray-50'}`} onClick={() => setPartnersMenu('endpoint')}>
                      <span className="text-sm font-medium text-gray-900">Endpoint Computing</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 text-gray-400">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </div>
                  </div>
                </div>
                {partnersMenu === 'networking' && (
                  <div className="bg-white/95 backdrop-blur-xl rounded-xl shadow-glass border border-black/5 py-2 min-w-[220px]">
                    <a className="block px-4 py-2.5 hover:bg-primary-50 transition-colors" href="/partners/networking/cisco">
                      <span className="block text-sm font-medium text-gray-900">Cisco</span>
                      <span className="block text-xs text-gray-500 mt-0.5">Select Integrator Partner</span>
                    </a>
                    <a className="block px-4 py-2.5 hover:bg-primary-50 transition-colors border-t border-gray-100" href="/partners/networking/juniper">
                      <span className="block text-sm font-medium text-gray-900">Juniper Networks</span>
                      <span className="block text-xs text-gray-500 mt-0.5">Partner</span>
                    </a>
                  </div>
                )}
                {partnersMenu === 'security' && (
                  <div className="bg-white/95 backdrop-blur-xl rounded-xl shadow-glass border border-black/5 py-2 min-w-[220px]">
                    <a className="block px-4 py-2.5 hover:bg-primary-50 transition-colors" href="/partners/security/barracuda">
                      <span className="block text-sm font-medium text-gray-900">Barracuda</span>
                      <span className="block text-xs text-gray-500 mt-0.5">Certified Partner</span>
                    </a>
                    <a className="block px-4 py-2.5 hover:bg-primary-50 transition-colors border-t border-gray-100" href="/partners/security/fortinet">
                      <span className="block text-sm font-medium text-gray-900">Fortinet</span>
                      <span className="block text-xs text-gray-500 mt-0.5">Authorized Partner</span>
                    </a>
                    <a className="block px-4 py-2.5 hover:bg-primary-50 transition-colors border-t border-gray-100" href="/partners/security/rsa">
                      <span className="block text-sm font-medium text-gray-900">RSA</span>
                      <span className="block text-xs text-gray-500 mt-0.5">Identity & Access Security Partner</span>
                    </a>
                    <a className="block px-4 py-2.5 hover:bg-primary-50 transition-colors border-t border-gray-100" href="/partners/security/crowdstrike">
                      <span className="block text-sm font-medium text-gray-900">CrowdStrike</span>
                      <span className="block text-xs text-gray-500 mt-0.5">AI-Native Endpoint & Cloud Security</span>
                    </a>
                    <a className="block px-4 py-2.5 hover:bg-primary-50 transition-colors border-t border-gray-100" href="/partners/security/forcepoint">
                      <span className="block text-sm font-medium text-gray-900">Forcepoint</span>
                      <span className="block text-xs text-gray-500 mt-0.5">Data-First Security & DLP</span>
                    </a>
                    <a className="block px-4 py-2.5 hover:bg-primary-50 transition-colors border-t border-gray-100" href="/partners/security/checkpoint">
                      <span className="block text-sm font-medium text-gray-900">Check Point</span>
                      <span className="block text-xs text-gray-500 mt-0.5">Prevention-First Cyber Security</span>
                    </a>
                  </div>
                )}
                {partnersMenu === 'endpoint' && (
                  <div className="bg-white/95 backdrop-blur-xl rounded-xl shadow-glass border border-black/5 py-2 min-w-[220px]">
                    <a className="block px-4 py-2.5 hover:bg-primary-50 transition-colors" href="/partners/endpoint/apple-enterprise">
                      <span className="block text-sm font-medium text-gray-900">Apple for Enterprise</span>
                      <span className="block text-xs text-gray-500 mt-0.5">Enterprise Apple device procurement</span>
                    </a>
                    <a className="block px-4 py-2.5 hover:bg-primary-50 transition-colors border-t border-gray-100" href="/partners/endpoint/apple-smb">
                      <span className="block text-sm font-medium text-gray-900">Apple for SMB</span>
                      <span className="block text-xs text-gray-500 mt-0.5">Apple devices for small &amp; mid-sized businesses</span>
                    </a>
                    <a className="block px-4 py-2.5 hover:bg-primary-50 transition-colors border-t border-gray-100" href="/partners/endpoint/jamf">
                      <span className="block text-sm font-medium text-gray-900">Jamf</span>
                      <span className="block text-xs text-gray-500 mt-0.5">Apple device management &amp; security</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
          <a className="nav-item" href="/contact">
            Contact Us
          </a>
          <a className={`nav-item ${isActive('/assessment') ? 'nav-item--active' : ''}`} href="/assessment">
            Assessment
          </a>
        </nav>
        <div className="hidden md:flex md:items-center md:gap-3">
          <button className="rounded-full bg-emerald-700 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-600/40 transition hover:bg-emerald-600">
            Get Started
          </button>
        </div>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 md:hidden"
          onClick={() => setMobileMenuOpen((o) => !o)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18" /><path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-x-0 top-14 bottom-0 z-10 bg-white shadow-xl md:hidden ${mobileMenuOpen ? 'visible' : 'invisible pointer-events-none'}`}
      >
        <nav className="flex flex-col overflow-y-auto px-4 py-6 pb-20">
          <a className="mobile-nav-link" href="/" onClick={closeMobileMenu}>
            Home
          </a>
          <a className="mobile-nav-link" href="/about" onClick={closeMobileMenu}>
            About Us
          </a>
          <a className="mobile-nav-link" href={`${getBaseUrl()}/threatmap/`} onClick={closeMobileMenu}>
            Threat Map
          </a>

          <button
            type="button"
            className="mobile-nav-accordion"
            onClick={() => setMobileServicesOpen((o) => !o)}
          >
            Services <span className="ml-1">{mobileServicesOpen ? '▾' : '▸'}</span>
          </button>
          {mobileServicesOpen && (
            <div className="ml-4 flex flex-col gap-1 pb-2">
              <a className="mobile-nav-sublink" href="/services/cybersecurity" onClick={closeMobileMenu}>Cybersecurity</a>
              <a className="mobile-nav-sublink" href="/services/data-centre-cloud" onClick={closeMobileMenu}>Data Centre</a>
              <a className="mobile-nav-sublink" href="/services/network-sd-wan" onClick={closeMobileMenu}>Secure Network</a>
              <a className="mobile-nav-sublink" href="/services/ai-code-audits" onClick={closeMobileMenu}>AI Code Audits</a>
            </div>
          )}

          <button
            type="button"
            className="mobile-nav-accordion"
            onClick={() => setMobilePartnersOpen((o) => !o)}
          >
            Partners <span className="ml-1">{mobilePartnersOpen ? '▾' : '▸'}</span>
          </button>
          {mobilePartnersOpen && (
            <div className="ml-4 flex flex-col gap-2 pb-2">
              <a className="mobile-nav-sublink" href="/partners/ecosystem" onClick={closeMobileMenu}>Partner Ecosystem</a>
              <span className="mobile-nav-section-label">Networking</span>
              <a className="mobile-nav-sublink" href="/partners/networking/cisco" onClick={closeMobileMenu}>Cisco</a>
              <a className="mobile-nav-sublink" href="/partners/networking/juniper" onClick={closeMobileMenu}>Juniper</a>
              <span className="mobile-nav-section-label">Security</span>
              <a className="mobile-nav-sublink" href="/partners/security/barracuda" onClick={closeMobileMenu}>Barracuda</a>
              <a className="mobile-nav-sublink" href="/partners/security/fortinet" onClick={closeMobileMenu}>Fortinet</a>
              <a className="mobile-nav-sublink" href="/partners/security/rsa" onClick={closeMobileMenu}>RSA</a>
              <a className="mobile-nav-sublink" href="/partners/security/crowdstrike" onClick={closeMobileMenu}>CrowdStrike</a>
              <a className="mobile-nav-sublink" href="/partners/security/forcepoint" onClick={closeMobileMenu}>Forcepoint</a>
              <a className="mobile-nav-sublink" href="/partners/security/checkpoint" onClick={closeMobileMenu}>Check Point</a>
              <span className="mobile-nav-section-label">Endpoint</span>
              <a className="mobile-nav-sublink" href="/partners/endpoint/apple-enterprise" onClick={closeMobileMenu}>Apple for Enterprise</a>
              <a className="mobile-nav-sublink" href="/partners/endpoint/apple-smb" onClick={closeMobileMenu}>Apple for SMB</a>
              <a className="mobile-nav-sublink" href="/partners/endpoint/jamf" onClick={closeMobileMenu}>Jamf</a>
            </div>
          )}

          <a className="mobile-nav-link" href="/contact" onClick={closeMobileMenu}>
            Contact Us
          </a>
          <a className="mobile-nav-link" href="/assessment" onClick={closeMobileMenu}>
            Assessment
          </a>

          <a
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-600/40 transition hover:bg-emerald-600"
            onClick={closeMobileMenu}
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  )
}

function CybersecurityPage() {
  const resultStats = [
    { value: '85%', label: 'Reduction in MTTD', sub: 'Cisco XDR' },
    { value: '95%', label: 'Faster Response', sub: 'AI-Augmented SOC' },
    { value: '24×7', label: 'Monitoring', sub: 'Always On' },
    { value: '48+', label: 'Years Experience', sub: 'Combined Team' },
  ]

  const capabilityCards = [
    {
      title: 'AI-Powered MDR',
      copy: 'Machine learning threat detection with 24×7 SOC operations. 85% faster mean time to detect.',
      icon: 'radar',
    },
    {
      title: 'AI-Generated Code Security',
      copy: 'Security audits for vibe-coded and AI-assisted applications: SAST, DAST, and prompt injection testing.',
      icon: 'code',
    },
    {
      title: 'AI-Assisted Incident Response',
      copy: 'Automated playbooks with ML-driven triage. Reduce response times and analyst fatigue.',
      icon: 'pulse',
    },
    {
      title: 'Secure Hosting & Infrastructure',
      copy: 'Hardened servers, next-gen firewalls, DDoS protection, and automated backups.',
      icon: 'shield',
    },
    {
      title: 'Zero Trust Architecture',
      copy: 'AI-verified identity, least privilege access, and continuous verification across all users.',
      icon: 'lock',
    },
    {
      title: 'Strong Authentication',
      copy: 'Multi-factor authentication, role-based permissions, and robust password policies.',
      icon: 'key',
    },
    {
      title: 'Web Application Firewall',
      copy: 'Block SQL injection, XSS, CSRF, and OWASP Top 10 attacks via intelligent filtering.',
      icon: 'globe',
    },
    {
      title: 'Cloud Security & Compliance',
      copy: 'Zero-trust controls aligned with GDPR, HIPAA, ISO 27001, and PCI-DSS frameworks.',
      icon: 'cloud',
    },
    {
      title: 'Data Protection & Backup',
      copy: 'Encryption at rest and in transit, with disaster recovery runbooks and immutable backups.',
      icon: 'database',
    },
  ]

  const benefitItems = [
    'AI-driven threat detection catches what traditional tools miss—85% faster mean time to detect.',
    'Achieve compliance efficiently (PCI DSS 4.0, SEBI CSCRF, ISO 27001) with AI-assisted evidence mapping.',
    'Secure your AI-built applications with purpose-built audits for vibe-coded software.',
    'Minimize attack surface with AI-verified Zero Trust across hybrid and multi-cloud environments.',
    'Reduce analyst fatigue with ML-powered alert triage and automated response playbooks.',
  ]

  const cyberFaqs = [
    'What is included in MDR (Managed Detection & Response)?',
    'Do you provide Incident Response services?',
    'Can you deploy XDR (Extended Detection & Response) in India?',
    'Do you offer SIEM/SOC as a Service?',
    'How do you secure Microsoft 365 environments?',
    'Do you provide Zero Trust consulting?',
    'How fast is MDR deployment?',
    'How do you prove security outcomes?',
    'Can you integrate with our existing security tools?',
    'Do you support regulatory compliance requirements?',
  ]

  const [openCyberFaq, setOpenCyberFaq] = useState<number | null>(null)

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
                <path
                  d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1 className="mt-6 text-4xl font-semibold text-white md:text-5xl">
              Cybersecurity
            </h1>
            <p className="mt-3 text-lg text-emerald-200">
              AI-Driven Threat Detection. Expert-Led Response. Measurable Outcomes.
            </p>
            <p className="mt-4 text-sm text-emerald-100/70 md:text-base">
              AI-powered security operations with 24x7 SOC, automated threat hunting, and
              compliance alignment for regulated organizations.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-emerald-700 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-600/40 transition hover:bg-emerald-600">
                Get Started →
              </button>
              <button className="rounded-full border border-emerald-200/40 px-7 py-3.5 text-base font-semibold text-emerald-100 transition hover:border-emerald-200">
                View Capabilities
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="hero-wave" aria-hidden="true" />

      <section className="section-dark section-dark--muted">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <span className="pill pill--tight">AI-Powered Outcomes</span>
          <h2 className="mt-4 text-3xl font-semibold text-white">Measurable Security Results</h2>
          <p className="mt-2 text-sm text-emerald-100/70">
            Powered by Cisco XDR, Fortinet FortiAI, and our expert implementation team.
          </p>
          <div className="cyber-stat-grid mt-10">
            {resultStats.map((stat) => (
              <div key={stat.value} className="cyber-stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
                <small>{stat.sub}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <span className="pill pill--tight">AI-Enhanced Security</span>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900">
            Cybersecurity Capabilities
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            AI-powered security coverage from threat detection to compliance auditing.
          </p>
          <div className="cyber-cap-grid mt-10">
            {capabilityCards.map((item) => (
              <div key={item.title} className="cyber-cap-card">
                <div className="cyber-cap-icon" aria-hidden="true">
                  {item.icon === 'radar' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 4v8l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                    </svg>
                  )}
                  {item.icon === 'code' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M8 6l-4 6 4 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M16 6l4 6-4 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M10 20l4-16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'pulse' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M3 12h4l3-6 4 12 3-6h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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
                  {item.icon === 'lock' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M8 11V8a4 4 0 1 1 8 0v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'key' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="8" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                      <path d="M11 12h10M18 12v3M21 12v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {item.icon === 'globe' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
                      <path d="M4 12h16M12 4a12 12 0 0 1 0 16M12 4a12 12 0 0 0 0 16" stroke="currentColor" strokeWidth="2" />
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
                  {item.icon === 'database' && (
                    <svg viewBox="0 0 24 24" fill="none">
                      <ellipse cx="12" cy="5" rx="7" ry="3" stroke="currentColor" strokeWidth="2" />
                      <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" stroke="currentColor" strokeWidth="2" />
                      <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" stroke="currentColor" strokeWidth="2" />
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
              Our cybersecurity services deliver measurable outcomes that protect your business
              and demonstrate compliance.
            </p>
            <button className="mt-6 rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-600">
              Schedule Assessment →
            </button>
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
            <h2 className="text-3xl font-semibold text-slate-900">Cybersecurity FAQs</h2>
            <p className="mt-3 text-sm text-slate-500">
              Common questions about our security services, MDR, compliance, and implementation.
            </p>
            <button className="mt-6 rounded-full border border-emerald-200 px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300">
              Ask a Question
            </button>
          </div>
          <div className="cyber-faq">
            {cyberFaqs.map((question, index) => {
              const isOpen = openCyberFaq === index
              return (
                <button
                  key={question}
                  className={`cyber-faq-item ${isOpen ? 'cyber-faq-item--open' : ''}`}
                  onClick={() => setOpenCyberFaq(isOpen ? null : index)}
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
            Ready to Strengthen Your Security Posture?
          </h2>
          <p className="mt-3 text-sm text-emerald-100/70">
            Start with a security assessment to identify gaps and build a roadmap for comprehensive
            protection.
          </p>
          <a
            className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-600"
            href="/contact"
          >
            Get Your Assessment →
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
              <a href="#">Cisco</a>
              <a href="#">Juniper Networks</a>
              <a href="#">RSA</a>
              <a href="#">CrowdStrike</a>
              <a href="#">Fortinet</a>
              <a href="#">Check Point</a>
              <a href="#">Forcepoint</a>
              <a href="#">Barracuda</a>
              <a href="#">Apple</a>
              <a href="#">Jamf</a>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <a href="#">Terms of Service</a>
              <a href="#">Refunds</a>
              <a href="#">Cancellation</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Pirlanta IT Solutions Pvt. Ltd. All rights reserved.</span>
            <div className="footer-socials">
              <span>✕</span>
              <span>in</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function DataCentrePage() {
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
              <button className="rounded-full bg-emerald-700 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-600/40 transition hover:bg-emerald-600">
                Get Started →
              </button>
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
            <button className="mt-6 rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-600">
              Start Assessment →
            </button>
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
            <button className="mt-6 rounded-full border border-emerald-200 px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300">
              Ask a Question
            </button>
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
              <a href="#">Cisco</a>
              <a href="#">Juniper Networks</a>
              <a href="#">RSA</a>
              <a href="#">CrowdStrike</a>
              <a href="#">Fortinet</a>
              <a href="#">Check Point</a>
              <a href="#">Forcepoint</a>
              <a href="#">Barracuda</a>
              <a href="#">Apple</a>
              <a href="#">Jamf</a>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <a href="#">Terms of Service</a>
              <a href="#">Refunds</a>
              <a href="#">Cancellation</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Pirlanta IT Solutions Pvt. Ltd. All rights reserved.</span>
            <div className="footer-socials">
              <span>✕</span>
              <span>in</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function SecureNetworkPage() {
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
      icon: 'shield',
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
    'What network security services do you provide in India?',
    'Can you replace VPN with Zero Trust Network Access (ZTNA)?',
    'How do you deploy SD-WAN with minimal disruption?',
    'Do you integrate Secure Access Service Edge (SASE)?',
    'Do you support multi-cloud interconnects and SaaS acceleration?',
    'How do you monitor and troubleshoot networks post go-live?',
    'Can you enforce identity-aware access with Cisco ISE/Duo?',
    'Do you offer SLAs and day-2 operations support?',
    'How do you handle branch rollouts at scale?',
    'Can you audit existing networks for ZTNA/SASE readiness?',
  ]

  const [openNetworkFaq, setOpenNetworkFaq] = useState<number | null>(null)

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
                <circle cx="12" cy="6" r="2" stroke="currentColor" strokeWidth="2" />
                <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
                <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
                <path d="M12 8v4M10 14h4M8 16l4-4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h1 className="mt-6 text-4xl font-semibold text-white md:text-5xl">Secure Network</h1>
            <p className="mt-3 text-lg text-emerald-200">
              AI-Powered Traffic Analysis. Self-Healing Networks. Intelligent Routing.
            </p>
            <p className="mt-4 text-sm text-emerald-100/70 md:text-base">
              High-performance networks with AI-driven optimization, predictive failure prevention,
              and Zero Trust security built-in.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-emerald-700 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-600/40 transition hover:bg-emerald-600">
                Get Started →
              </button>
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
          <span className="pill pill--tight">AI-Powered Networking</span>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900">Network Capabilities</h2>
          <p className="mt-2 text-sm text-slate-500">
            AI-driven networking solutions for intelligent routing, predictive maintenance, and
            adaptive security.
          </p>
          <div className="cyber-cap-grid mt-10">
            {capabilityCards.map((item) => (
              <div key={item.title} className="cyber-cap-card">
                <div className="cyber-cap-icon" aria-hidden="true">
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
              Transform your network infrastructure with solutions that deliver performance,
              security, and cost efficiency.
            </p>
            <button className="mt-6 rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-600">
              Get Network Assessment →
            </button>
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
            <h2 className="text-3xl font-semibold text-slate-900">Network FAQs</h2>
            <p className="mt-3 text-sm text-slate-500">
              Common questions about SD-WAN, ZTNA, SASE, and network security services.
            </p>
            <button className="mt-6 rounded-full border border-emerald-200 px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300">
              Ask a Question
            </button>
          </div>
          <div className="cyber-faq">
            {networkFaqs.map((question, index) => {
              const isOpen = openNetworkFaq === index
              return (
                <button
                  key={question}
                  className={`cyber-faq-item ${isOpen ? 'cyber-faq-item--open' : ''}`}
                  onClick={() => setOpenNetworkFaq(isOpen ? null : index)}
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
              <a href="#">Cisco</a>
              <a href="#">Juniper Networks</a>
              <a href="#">RSA</a>
              <a href="#">CrowdStrike</a>
              <a href="#">Fortinet</a>
              <a href="#">Check Point</a>
              <a href="#">Forcepoint</a>
              <a href="#">Barracuda</a>
              <a href="#">Apple</a>
              <a href="#">Jamf</a>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <a href="#">Terms of Service</a>
              <a href="#">Refunds</a>
              <a href="#">Cancellation</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Pirlanta IT Solutions Pvt. Ltd. All rights reserved.</span>
            <div className="footer-socials">
              <span>✕</span>
              <span>in</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function AiCodeAuditsPage() {
  const auditStats = [
    { value: '48%', label: 'AI code has vulnerabilities', sub: 'Stanford Research' },
    { value: '3x', label: 'More dependency risks', sub: 'OWASP AI Top 10' },
    { value: '72%', label: 'Developers trust AI code without review', sub: 'GitHub Survey' },
    { value: '40%', label: 'Code volume increases, same security teams', sub: 'Industry Average' },
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
    'What AI coding tools do you audit code from?',
    'How is this different from a regular code audit?',
    'What do we receive as a deliverable?',
    'How long does an audit take?',
    'Do you need access to our source code repository?',
    'Can you audit infrastructure as code generated by AI?',
    'Is our code kept confidential?',
    'Do you offer ongoing monitoring after the initial audit?',
  ]

  const [openAuditFaq, setOpenAuditFaq] = useState<number | null>(null)

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
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h1 className="mt-6 text-4xl font-semibold text-white md:text-5xl">AI Code Audits</h1>
            <p className="mt-3 text-lg text-emerald-200">
              Secure Your Vibe-Coded Applications. Human-Verified. AI-Powered.
            </p>
            <p className="mt-4 text-sm text-emerald-100/70 md:text-base">
              Purpose-built security audits for AI-generated code from Cursor, Copilot, and ChatGPT.
              We find the vulnerabilities that automated scanners miss.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-emerald-700 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-600/40 transition hover:bg-emerald-600">
                Get Started →
              </button>
              <button className="rounded-full border border-emerald-200/40 px-7 py-3.5 text-base font-semibold text-emerald-100 transition hover:border-emerald-200">
                View Capabilities
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="hero-wave" aria-hidden="true" />

      <section className="section-dark section-dark--muted">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <span className="pill pill--tight">The AI Code Security Gap</span>
          <h2 className="mt-4 text-3xl font-semibold text-white">
            AI Code Is Shipping Faster Than Security Can Keep Up
          </h2>
          <p className="mt-2 text-sm text-emerald-100/70">
            Development teams are generating more code than ever, but security practices haven’t adapted.
          </p>
          <div className="cyber-stat-grid mt-10">
            {auditStats.map((stat) => (
              <div key={stat.value} className="cyber-stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
                <small>{stat.sub}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <span className="pill pill--tight">Comprehensive Coverage</span>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900">Audit Capabilities</h2>
          <p className="mt-2 text-sm text-slate-500">
            End-to-end security testing designed specifically for AI-generated codebases.
          </p>
          <div className="cyber-cap-grid mt-10">
            {auditCaps.map((item) => (
              <div key={item.title} className="cyber-cap-card">
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

      <section className="section-light">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">How It Works</h2>
          <p className="mt-2 text-sm text-slate-500">
            A proven four-step process from scoping to remediation.
          </p>
          <div className="ai-steps-grid mt-10">
            {howSteps.map((step) => (
              <div key={step.step} className="ai-step-card">
                <span className="ai-step-number">{step.step}</span>
                <div className="ai-step-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
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
              Purpose-built security testing that addresses the unique risks of AI-generated code.
            </p>
            <button className="mt-6 rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-600">
              Schedule an Audit →
            </button>
          </div>
          <div className="cyber-benefits">
            {benefits.map((item) => (
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

      <section className="section-dark section-dark--muted">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-white">Who This Is For</h2>
          <p className="mt-2 text-sm text-emerald-100/70">
            Any team using AI to write code needs security assurance.
          </p>
          <div className="ai-who-grid mt-10">
            {whoFor.map((item) => (
              <div key={item.title} className="ai-who-card">
                <div className="ai-who-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">AI Code Audit FAQs</h2>
            <p className="mt-3 text-sm text-slate-500">
              Common questions about our AI code security audit process and deliverables.
            </p>
            <button className="mt-6 rounded-full border border-emerald-200 px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300">
              Ask a Question
            </button>
          </div>
          <div className="cyber-faq">
            {auditFaqs.map((question, index) => {
              const isOpen = openAuditFaq === index
              return (
                <button
                  key={question}
                  className={`cyber-faq-item ${isOpen ? 'cyber-faq-item--open' : ''}`}
                  onClick={() => setOpenAuditFaq(isOpen ? null : index)}
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
              <a href="#">Cisco</a>
              <a href="#">Juniper Networks</a>
              <a href="#">RSA</a>
              <a href="#">CrowdStrike</a>
              <a href="#">Fortinet</a>
              <a href="#">Check Point</a>
              <a href="#">Forcepoint</a>
              <a href="#">Barracuda</a>
              <a href="#">Apple</a>
              <a href="#">Jamf</a>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <a href="#">Terms of Service</a>
              <a href="#">Refunds</a>
              <a href="#">Cancellation</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Pirlanta IT Solutions Pvt. Ltd. All rights reserved.</span>
            <div className="footer-socials">
              <span>✕</span>
              <span>in</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function PartnerEcosystemPage() {
  const partnerLogos = [
    'Cisco',
    'Palo Alto Networks',
    'Juniper Networks',
    'RSA',
    'CrowdStrike',
    'Fortinet',
    'Check Point',
    'Sophos',
    'SonicWall',
    'Forcepoint',
    'Barracuda',
    'Veeam',
    'Apple',
    'Jamf',
    'AWS',
    'Google Workspace',
    'HPE',
    'Microsoft',
    'Samsung',
    'Lenovo',
    'EPOS',
    'Logitech',
    'NxtGen',
    'Tata Tele',
    'ViewSonic',
    'WatchGuard',
  ]

  return (
    <main className="partner-page relative overflow-hidden pt-24">
      <section className="partner-hero relative">
        <div className="partner-hero-content mx-auto max-w-7xl px-6 py-24 text-center">
          <span className="pill pill--tight">Technology Partners</span>
          <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
            Our Growing <span className="ai-accent">Partner Ecosystem</span>
          </h1>
          <p className="mt-3 text-sm text-emerald-100/70 md:text-base">
            We collaborate with industry-leading technology vendors to deliver comprehensive,
            best-in-class solutions for your business.
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

      <section className="section-light">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Our Technology Partners</h2>
          <p className="mt-2 text-sm text-slate-500">
            A comprehensive ecosystem of leading technology vendors.
          </p>
          <div className="partner-logo-grid mt-10">
            {partnerLogos.map((name) => (
              <div key={name} className="partner-logo-card">
                <span>{name}</span>
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
              <a href="#">Juniper Networks</a>
              <a href="#">RSA</a>
              <a href="#">CrowdStrike</a>
              <a href="#">Fortinet</a>
              <a href="#">Check Point</a>
              <a href="#">Forcepoint</a>
              <a href="#">Barracuda</a>
              <a href="#">Apple</a>
              <a href="#">Jamf</a>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <a href="#">Terms of Service</a>
              <a href="#">Refunds</a>
              <a href="#">Cancellation</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Pirlanta IT Solutions Pvt. Ltd. All rights reserved.</span>
            <div className="footer-socials">
              <span>✕</span>
              <span>in</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function PartnerCiscoPage() {
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
    'What Cisco solutions does Pirlanta implement?',
    'Can you help migrate from legacy VPN to Cisco ZTNA?',
    'Do you provide Cisco ISE implementation services?',
    'How do you handle SD‑WAN migrations?',
    'Can you integrate Cisco with non‑Cisco security tools?',
    'Do you offer managed services for Cisco deployments?',
  ]

  const [openCiscoFaq, setOpenCiscoFaq] = useState<number | null>(null)

  return (
    <main className="partner-page relative overflow-hidden pt-24">
      <section className="partner-hero relative">
        <div className="partner-hero-content mx-auto max-w-7xl px-6 py-24">
          <div className="partner-logo">
            <span>CISCO</span>
          </div>
          <span className="pill pill--tight">Cisco Select Integrator Partner</span>
          <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
            Cisco <span className="ai-accent">Partner</span>
          </h1>
          <p className="mt-3 text-sm text-emerald-100/70 md:text-base">
            Enterprise Networking & Zero Trust Security
          </p>
          <p className="mt-4 max-w-2xl text-sm text-emerald-100/60 md:text-base">
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

      <section className="section-light">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">Why Pirlanta for Cisco?</h2>
            <p className="mt-2 text-sm text-slate-500">
              Our Cisco partnership combines certified expertise with practical experience across
              enterprise networking, security, and collaboration.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-slate-600">
              {whyPoints.map((point) => (
                <div key={point} className="cisco-point">
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
          <div className="cisco-card">
            <div className="partner-logo partner-logo--small">
              <span>CISCO</span>
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
      </section>

      <section className="section-light">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Cisco Solutions We Deliver</h2>
          <p className="mt-2 text-sm text-slate-500">
            Comprehensive Cisco implementations spanning networking, security, and visibility.
          </p>
          <div className="cisco-solution-grid mt-10">
            {solutions.map((item) => (
              <div key={item.title} className="cyber-cap-card cisco-solution-card">
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
            ))}
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Common Use Cases</h2>
          <p className="mt-2 text-sm text-slate-500">
            How enterprises leverage our Cisco expertise.
          </p>
          <div className="cisco-use-grid mt-10">
            {useCases.map((item) => (
              <div key={item.title} className="cyber-cap-card">
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
            ))}
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">Cisco FAQs</h2>
            <p className="mt-3 text-sm text-slate-500">
              Common questions about our Cisco partnership and implementation services.
            </p>
            <button className="mt-6 rounded-full border border-emerald-200 px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300">
              Ask a Question
            </button>
          </div>
          <div className="cyber-faq">
            {ciscoFaqs.map((question, index) => {
              const isOpen = openCiscoFaq === index
              return (
                <button
                  key={question}
                  className={`cyber-faq-item ${isOpen ? 'cyber-faq-item--open' : ''}`}
                  onClick={() => setOpenCiscoFaq(isOpen ? null : index)}
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
              <a href="#">Juniper Networks</a>
              <a href="#">RSA</a>
              <a href="#">CrowdStrike</a>
              <a href="#">Fortinet</a>
              <a href="#">Check Point</a>
              <a href="#">Forcepoint</a>
              <a href="#">Barracuda</a>
              <a href="#">Apple</a>
              <a href="#">Jamf</a>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <a href="#">Terms of Service</a>
              <a href="#">Refunds</a>
              <a href="#">Cancellation</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Pirlanta IT Solutions Pvt. Ltd. All rights reserved.</span>
            <div className="footer-socials">
              <span>✕</span>
              <span>in</span>
            </div>
          </div>
        </div>
        </section>
    </main>
  )
}

function PartnerJuniperPage() {
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
    'What is Juniper Mist AI and how does it work?',
    'Can Juniper replace our existing wireless infrastructure?',
    'What is Apstra and how does it help data centres?',
    'Does Juniper offer SD-WAN solutions?',
    'Can Juniper solutions integrate with our existing network?',
    'Do you provide managed services for Juniper networks?',
  ]

  const [openJuniperFaq, setOpenJuniperFaq] = useState<number | null>(null)

  return (
    <main className="partner-page relative overflow-hidden pt-24">
      <section className="partner-hero relative">
        <div className="partner-hero-content mx-auto max-w-7xl px-6 py-24">
          <div className="partner-logo juniper-logo">
            <span className="juniper-brand">Juniper</span>
            <span className="juniper-networks">NETWORKS</span>
          </div>
          <span className="pill pill--tight">Juniper Networks Partner</span>
          <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
            Juniper Networks <span className="ai-accent">Partner</span>
          </h1>
          <p className="mt-3 text-sm text-emerald-100/70 md:text-base">
            AI-Native Networking for the Modern Enterprise
          </p>
          <p className="mt-4 max-w-2xl text-sm text-emerald-100/60 md:text-base">
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

      <section className="section-light">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">Why Pirlanta for Juniper?</h2>
            <p className="mt-2 text-sm text-slate-500">
              Our Juniper partnership brings AI-native networking to your enterprise, with predictive
              insights, self-healing infrastructure, and intent-based automation that simplifies operations.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-slate-600">
              {whyPoints.map((point) => (
                <div key={point} className="cisco-point">
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
          <div className="cisco-card">
            <div className="partner-logo partner-logo--small juniper-logo">
              <span className="juniper-brand">Juniper</span>
              <span className="juniper-networks">NETWORKS</span>
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
      </section>

      <section className="section-light">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Juniper Solutions We Deliver</h2>
          <p className="mt-2 text-sm text-slate-500">
            AI-native networking for wireless, WAN, data centre, and security.
          </p>
          <div className="cisco-solution-grid mt-10">
            {solutions.map((item) => (
              <div key={item.title} className="cyber-cap-card cisco-solution-card">
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

      <section className="section-light">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Common Use Cases</h2>
          <p className="mt-2 text-sm text-slate-500">
            How enterprises leverage Juniper AI-native networking.
          </p>
          <div className="cisco-use-grid mt-10">
            {useCases.map((item) => (
              <div key={item.title} className="cyber-cap-card">
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
            ))}
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">Juniper FAQs</h2>
            <p className="mt-3 text-sm text-slate-500">
              Common questions about Mist AI, Apstra, and Juniper networking solutions.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex rounded-full border border-emerald-200 px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300"
            >
              Ask a Question
            </a>
          </div>
          <div className="cyber-faq">
            {juniperFaqs.map((question, index) => {
              const isOpen = openJuniperFaq === index
              return (
                <button
                  key={question}
                  className={`cyber-faq-item ${isOpen ? 'cyber-faq-item--open' : ''}`}
                  onClick={() => setOpenJuniperFaq(isOpen ? null : index)}
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
              <a href="#">RSA</a>
              <a href="#">CrowdStrike</a>
              <a href="#">Fortinet</a>
              <a href="#">Check Point</a>
              <a href="#">Forcepoint</a>
              <a href="#">Barracuda</a>
              <a href="#">Apple</a>
              <a href="#">Jamf</a>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <a href="#">Terms of Service</a>
              <a href="#">Refunds</a>
              <a href="#">Cancellation</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Pirlanta IT Solutions Pvt. Ltd. All rights reserved.</span>
            <div className="footer-socials">
              <span>✕</span>
              <span>in</span>
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
        <div className="contact-hero">
          <div className="contact-hero-content mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
            <span className="pill pill--tight">
              <span className="pill-icon" aria-hidden="true">
                ✦
              </span>
              Contact Us
            </span>
            <h2 className="mt-4 text-2xl font-semibold text-slate-900 sm:text-3xl md:text-4xl">
              Let&apos;s Start the <br />
              <span className="contact-hero-accent"> Conversation</span>
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-500 md:text-base">
              Ready to secure your infrastructure? Get in touch for a free consultation and
              discover how we can help protect and optimize your IT environment.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[1px]" aria-hidden="true">
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
    },
    {
      title: 'Data Centre',
      copy: 'AI-optimized infrastructure with predictive scaling and intelligent disaster recovery.',
      icon: 'database',
    },
    {
      title: 'Network',
      copy: 'AI-powered traffic analysis, self-healing networks, and intelligent SD-WAN.',
      icon: 'network',
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

  return (
    <main className="relative overflow-hidden pt-24">
      <section className="about-hero relative">
        <div className="about-hero-content mx-auto max-w-7xl px-6 py-24">
          <div className="about-kicker">
            <span className="about-kicker-primary">About Pirlanta</span>
            <span className="about-kicker-divider">|</span>
            <span className="about-kicker-secondary">
              <span className="about-kicker-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3l2.5 5.6 6.1.6-4.6 4 1.4 6-5.4-3.1-5.4 3.1 1.4-6-4.6-4 6.1-.6L12 3z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              AI-Enhanced Services
            </span>
          </div>
          <h1 className="mt-5 text-4xl font-semibold text-white md:text-5xl">
            Expert-Led. <span className="ai-accent">AI-Powered.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-emerald-100/70 md:text-base">
            Founded to bridge enterprise IT complexity. Now leveraging AI to deliver faster
            detection, smarter automation, and measurable outcomes.
          </p>
          <p className="mt-3 max-w-2xl text-sm text-emerald-100/60 md:text-base">
            We combine OEM AI tools from Cisco, Fortinet, and industry leaders with deep
            implementation expertise to transform how enterprises approach security.
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

      <section className="section-light">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">What We Deliver</h2>
          <p className="mt-2 text-sm text-slate-500">
            Measurable outcomes that protect your business and drive growth.
          </p>
          <div className="deliver-grid mt-10">
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

      <section className="section-dark section-dark--muted">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <span className="pill pill--tight">Our AI Advantage</span>
            <h2 className="mt-4 text-3xl font-semibold text-white">Why Pirlanta + AI Works</h2>
            <p className="mt-3 text-sm text-emerald-100/70 md:text-base">
              AI alone isn’t enough. Our competitive advantage comes from combining OEM AI tools
              with deep implementation expertise and senior leadership.
            </p>
            <div className="mt-6 grid gap-4 text-sm text-emerald-100/70">
              <div className="ai-work-item">
                <span className="ai-work-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                    <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
                    <path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
                <div>
                  <strong>OEM AI Tools</strong>
                  <span>Cisco XDR, Fortinet FortiAI, and leading AI platforms integrated into every solution.</span>
                </div>
              </div>
              <div className="ai-work-item">
                <span className="ai-work-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                    <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
                    <path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
                <div>
                  <strong>AI-Augmented SOC</strong>
                  <span>Machine learning triage reduces alert fatigue and accelerates response times.</span>
                </div>
              </div>
              <div className="ai-work-item">
                <span className="ai-work-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <strong>Human + AI</strong>
                  <span>AI handles volume and speed; our experts provide context and strategic decisions.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="ai-stats-grid">
            <div className="ai-stat-card">
              <strong>85%</strong>
              <span>Reduction in MTTD</span>
            </div>
            <div className="ai-stat-card">
              <strong>&lt;1s</strong>
              <span>Threat Detection</span>
            </div>
            <div className="ai-stat-card">
              <strong>24×7</strong>
              <span>AI-Augmented SOC</span>
            </div>
            <div className="ai-stat-card">
              <strong>48+</strong>
              <span>Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">Our Approach</h2>
            <p className="mt-2 text-sm text-slate-500">
              We operate on four foundational pillars that ensure every engagement delivers
              lasting value and measurable results.
            </p>
            <div className="mt-6 grid gap-4">
              {approachItems.map((item) => (
                <div key={item.title} className="approach-row">
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
          <div className="approach-card">
            <h3>The Converged Advantage</h3>
            <p>
              Cybersecurity, data infrastructure, and network services are interconnected.
              AI-powered orchestration delivers compounded resilience, performance, and
              cost-efficiency.
            </p>
            <div className="approach-stats">
              <div>
                <strong>48+</strong>
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

      <section className="section-light">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Three Integrated Pillars</h2>
          <p className="mt-2 text-sm text-slate-500">
            Our services work together to provide comprehensive IT excellence.
          </p>
          <div className="pillar-grid mt-10">
            {pillarItems.map((item) => (
              <div key={item.title} className="pillar-card">
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
                <span className="pillar-link">Learn more →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Industries We Serve</h2>
          <p className="mt-2 text-sm text-slate-500">
            Delivering secure solutions across diverse sectors with industry-specific expertise.
          </p>
          <div className="industry-grid mt-8">
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
                <span>{industry.title}</span>
                <small>{industry.subtitle}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">
              Based in Bengaluru, Serving India
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Our headquarters in Bengaluru position us at the heart of India’s technology hub,
              enabling us to serve enterprises across the nation with local expertise and global
              standards.
            </p>
            <div className="mt-6 text-sm text-slate-600">
              <p className="font-semibold text-slate-800">Headquarters</p>
              <p>
                C/O Flex Coworks, 2nd Floor, 71, 15th Cross Road, Dollar Layout, J. P. Nagar,
                Bengaluru - 560078
              </p>
              <p className="mt-4 font-semibold text-slate-800">Contact</p>
              <p>+91 94296 93558</p>
              <p>secure@pirlanta.in</p>
            </div>
          </div>
          <div className="about-photo">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
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
              <a href="#">Cisco</a>
              <a href="#">Juniper Networks</a>
              <a href="#">RSA</a>
              <a href="#">CrowdStrike</a>
              <a href="#">Fortinet</a>
              <a href="#">Check Point</a>
              <a href="#">Forcepoint</a>
              <a href="#">Barracuda</a>
              <a href="#">Apple</a>
              <a href="#">Jamf</a>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <a href="#">Terms of Service</a>
              <a href="#">Refunds</a>
              <a href="#">Cancellation</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Pirlanta IT Solutions Pvt. Ltd. All rights reserved.</span>
            <div className="footer-socials">
              <span>✕</span>
              <span>in</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default function App() {
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
  const [threatDetectPercent, setThreatDetectPercent] = useState(1)
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
  const [phase, setPhase] = useState<1 | 2>(1)
  const auditHeroRef = useRef<HTMLElement | null>(null)
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

    const ws = new WebSocket('ws://localhost:9000/ws/threats')
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

  const apiBase = (import.meta.env.VITE_API_BASE_URL ?? getBaseUrl()) || 'http://localhost:8000'

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
    const handleScroll = () => setScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`)
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`)
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  useEffect(() => {
    let rafId = 0
    const duration = 1200
    const start = performance.now()
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const nextValue = Math.max(1, Math.round(1 + progress * (85 - 1)))
      setThreatDetectPercent(nextValue)
      if (progress < 1) {
        rafId = requestAnimationFrame(animate)
      }
    }
    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [])

  const firstText = 'Expert-Led.'
  const secondText = 'AI-Powered.'
  const typingSpeed = 55
  useEffect(() => {
    if (phase === 1) {
      if (typedFirst.length < firstText.length) {
        const t = setTimeout(() => {
          setTypedFirst(firstText.slice(0, typedFirst.length + 1))
        }, typingSpeed)
        return () => clearTimeout(t)
      } else {
        const pause = setTimeout(() => setPhase(2), 250)
        return () => clearTimeout(pause)
      }
    }
    if (phase === 2 && typedSecond.length < secondText.length) {
      const t = setTimeout(() => {
        setTypedSecond(secondText.slice(0, typedSecond.length + 1))
      }, typingSpeed)
      return () => clearTimeout(t)
    }
  }, [typedFirst, typedSecond, phase])

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

  const isCybersecurity =
    typeof window !== 'undefined' && window.location.pathname === '/services/cybersecurity'
  const isDataCentre =
    typeof window !== 'undefined' && window.location.pathname === '/services/data-centre-cloud'
  const isNetwork =
    typeof window !== 'undefined' && window.location.pathname === '/services/network-sd-wan'
  const isAiAudits =
    typeof window !== 'undefined' && window.location.pathname === '/services/ai-code-audits'
  const isPartners =
    typeof window !== 'undefined' && window.location.pathname === '/partners/ecosystem'
  const isCisco =
    typeof window !== 'undefined' && window.location.pathname === '/partners/networking/cisco'
  const isJuniper =
    typeof window !== 'undefined' && window.location.pathname === '/partners/networking/juniper'
  const isBarracuda =
    typeof window !== 'undefined' && window.location.pathname === '/partners/security/barracuda'
  const isFortinet =
    typeof window !== 'undefined' && window.location.pathname === '/partners/security/fortinet'
  const isRSA =
    typeof window !== 'undefined' && window.location.pathname === '/partners/security/rsa'
  const isCrowdStrike =
    typeof window !== 'undefined' && window.location.pathname === '/partners/security/crowdstrike'
  const isForcepoint =
    typeof window !== 'undefined' && window.location.pathname === '/partners/security/forcepoint'
  const isCheckPoint =
    typeof window !== 'undefined' && window.location.pathname === '/partners/security/checkpoint'
  const isAppleEnterprise =
    typeof window !== 'undefined' && window.location.pathname === '/partners/endpoint/apple-enterprise'
  const isAppleSMB =
    typeof window !== 'undefined' && window.location.pathname === '/partners/endpoint/apple-smb'
  const isJamf =
    typeof window !== 'undefined' && window.location.pathname === '/partners/endpoint/jamf'
  const isContact =
    typeof window !== 'undefined' && window.location.pathname === '/contact'
  const isAbout = typeof window !== 'undefined' && window.location.pathname === '/about'
  const isAssessment =
    typeof window !== 'undefined' && window.location.pathname === '/assessment'

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
          willChange: 'background',
        }}
      />
      <div
        className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden text-transparent"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(400px circle at var(--cursor-x, -1000px) var(--cursor-y, -1000px), rgba(39, 102, 0, 0.15), transparent 40%)',
          opacity: 1,
          transition: 'opacity 0.3s',
          willChange: 'background',
        }}
      />
      <Header scrolled={scrolled} />
      {isCybersecurity ? (
        <CybersecurityPage />
      ) : isDataCentre ? (
        <DataCentrePage />
      ) : isNetwork ? (
        <SecureNetworkPage />
      ) : isAiAudits ? (
        <AiCodeAuditsPage />
      ) : isPartners ? (
        <PartnerEcosystemPage />
      ) : isCisco ? (
        <PartnerCiscoPage />
      ) : isJuniper ? (
        <PartnerJuniperPage />
      ) : isBarracuda ? (
        <Suspense fallback={<div className="flex min-h-screen items-center justify-center pt-24">Loading...</div>}>
          <BarracudaSecurityPage />
        </Suspense>
      ) : isFortinet ? (
        <Suspense fallback={<div className="flex min-h-screen items-center justify-center pt-24">Loading...</div>}>
          <FortinetSecurityPage />
        </Suspense>
      ) : isRSA ? (
        <Suspense fallback={<div className="flex min-h-screen items-center justify-center pt-24">Loading...</div>}>
          <RSASecurityPage />
        </Suspense>
      ) : isCrowdStrike ? (
        <Suspense fallback={<div className="flex min-h-screen items-center justify-center pt-24">Loading...</div>}>
          <CrowdStrikeSecurityPage />
        </Suspense>
      ) : isForcepoint ? (
        <Suspense fallback={<div className="flex min-h-screen items-center justify-center pt-24">Loading...</div>}>
          <ForcepointSecurityPage />
        </Suspense>
      ) : isCheckPoint ? (
        <Suspense fallback={<div className="flex min-h-screen items-center justify-center pt-24">Loading...</div>}>
          <CheckPointSecurityPage />
        </Suspense>
      ) : isAppleEnterprise ? (
        <Suspense fallback={<div className="flex min-h-screen items-center justify-center pt-24">Loading...</div>}>
          <AppleForEnterprisePage />
        </Suspense>
      ) : isAppleSMB ? (
        <Suspense fallback={<div className="flex min-h-screen items-center justify-center pt-24">Loading...</div>}>
          <AppleForSMBPage />
        </Suspense>
      ) : isJamf ? (
        <Suspense fallback={<div className="flex min-h-screen items-center justify-center pt-24">Loading...</div>}>
          <JamfPage />
        </Suspense>
      ) : isAbout ? (
        <AboutPage />
      ) : isContact ? (
        <ContactPage
          contactForm={contactForm}
          contactStatus={contactStatus}
          contactError={contactError}
          onChange={handleContactChange}
          onSubmit={handleContactSubmit}
        />
      ) : isAssessment ? (
        <Suspense fallback={<div className="flex min-h-screen items-center justify-center pt-24">Loading...</div>}>
          <AssessmentPage />
        </Suspense>
      ) : (
        <main className="relative overflow-x-hidden pt-20 sm:pt-24">


          


        <section className="hero-section relative flex items-center" id="home">
          <AntigravityBackground className="hero-antigravity" />
          <div className="hero-network" aria-hidden="true" />
          <div className="hero-orb hero-orb--left" aria-hidden="true" />
          <div className="hero-orb hero-orb--right" aria-hidden="true" />
            <div className="hero-content mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:gap-8 sm:px-6 sm:py-20 md:gap-10 md:py-24 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
            <div className="flex flex-wrap gap-3">
              <span className="badge-pill">
                <span className="badge-dot" aria-hidden="true" />
                48+ Years Experience
              </span>
              <span className="badge-pill">
                <span className="badge-sparkle" aria-hidden="true">✦</span>
                AI-Enhanced Operations
              </span>
            </div>
            {/* <h1 className="mt-6 inline-flex flex-nowrap items-baseline gap-2 whitespace-nowrap text-5xl font-semibold leading-tight text-white md:text-6xl">
              <span className="text-white">Expert-Led.</span>
              <span className="ai-accent"> AI-Powered.</span>
            </h1> */}
                <h1 className="mt-6 inline-flex flex-wrap items-baseline gap-2 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  <span className="typewriter">
                    {typedFirst}
                    {phase === 1 && <span className="caret" />}
                  </span>

                  <span className="ai-accent typewriter">
                    {typedSecond}
                    {phase === 2 && <span className="caret accent" />}
                  </span>
                </h1>



            <p className="mt-4 text-lg text-emerald-100 sm:text-xl">
              Cybersecurity Services for the AI Era
            </p>
            <p className="mt-4 max-w-xl text-base text-emerald-100/70 md:text-lg">
              AI-driven threat detection, expert implementation, and measurable outcomes.
              Powered by Cisco, Fortinet, and industry-leading AI platforms.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="hero-cta">
                Get Started →
              </button>
              <button className="hero-cta-secondary">
                Learn More
              </button>
            </div>
          </div>

            <div className="relative w-full mt-6 sm:mt-8 md:mt-0" id="threat-map">
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
                <Suspense fallback={<div className="h-[360px] w-full rounded-2xl bg-slate-900/40" />}>
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
                <div className="mt-4 flex flex-wrap justify-center gap-3 sm:mt-6">
                  {[
                    { label: 'Threats Blocked', value: threatsBlocked.toLocaleString(), icon: 'shield' },
                    { label: 'Systems', value: systemsCount, icon: 'activity' },
                    { label: 'Monitors', value: monitorsCount, icon: 'eye' },
                  ].map((stat) => (
                    <div key={stat.label} className="stat-card">
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
        <section className="section-light pricing-section" id="services">
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20">
            <span className="pill">
              <span className="pill-icon" aria-hidden="true">
                ✦
              </span>
              AI-ENHANCED SERVICES
            </span>
            <h2 className="mt-4 text-2xl font-semibold text-slate-900 sm:text-3xl md:text-4xl">Our Services</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-500 md:text-base">
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
              ].map((card) => (
                <div key={card.title} className="group relative h-full">
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
        <section className="section-light ai-ops-section" id="ai-ops">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <span className="pill pill--tight">
                <span className="pill-icon" aria-hidden="true">
                  ✦
                </span>
                AI NATIVE TECHNOLOGY
              </span>
              <h2 className="mt-4 text-4xl font-semibold text-slate-900">
                AI-Powered Security
                <br />
                Operations
              </h2>
              <p className="mt-4 max-w-xl text-sm text-slate-500 md:text-base">
                We leverage AI tools from our CEM partners—Cisco XDR, Fortinet FortiAI, and
                more—combined with our implementation expertise to deliver faster detection,
                smarter automation, and measurable outcomes.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="stat-pill">
                  <span className="stat-pill-value">{threatDetectPercent}%</span>
                  <span className="stat-pill-label">Faster Threat Detection</span>
                </div>
                <div className="stat-pill">
                  <span className="stat-pill-value">24x7</span>
                  <span className="stat-pill-label">AI-Augmented Monitoring</span>
                </div>
              </div>
              <button className="mt-6 rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-600">
                Explore AI Capabilities →
              </button>
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
              ].map((item) => (
                <div key={item.title} className="ai-card">
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
        <section className="audit-hero" ref={auditHeroRef} id="ai-audits">
          <div className="audit-bg" aria-hidden="true" />
          <div className="audit-glow" aria-hidden="true" />
          <div className="audit-content mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.1fr_1fr] lg:items-center">
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
              <h2 className="audit-title audit-reveal" style={{ animationDelay: '0.1s' }}>
                Secure Your AI-Built
                <br />
                Applications
              </h2>
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
                  <div
                    key={item.label}
                    className="audit-feature audit-reveal"
                    style={{ animationDelay: `${0.35 + idx * 0.08}s` }}
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
                  </div>
                ))}
              </div>
              <button className="audit-cta audit-reveal" style={{ animationDelay: '0.7s' }}>
                Get Your Code Audited <span>→</span>
              </button>
            </div>
            <div className="hidden lg:block audit-reveal" style={{ animationDelay: '0.5s' }}>
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
            </div>
          </div>
        </section>
        <section className="bg-dark-950 text-white py-24 md:py-32 lg:py-36 relative overflow-hidden" id="why-choose">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(80% 50% at 50% 0%, rgba(39, 102, 0, 0.15), transparent)',
            }}
          />
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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


              <div className="hidden lg:block h-full" style={{ opacity: 1, transform: 'none' }}>
                {(() => {
                  const active =
                    reasonOptions.find((item) => item.key === activeReasonKey) ?? reasonOptions[0]
                  // const orbitLabels: Record<string, string[]> = {
                  //   compliance: ['NIST', 'ISO', 'PCI-DSS', 'SOC2'],
                  // }
                  // const labels = orbitLabels[active.key] ?? []
                  const labels: string[] = []
                  return (
                    <div className="relative">
                      <div style={{ transform: 'translateY(-0.35489px)' }}>
                        <div className="relative h-full min-h-[590px] rounded-3xl overflow-hidden glass-card-dark border border-white/10 flex flex-col why-focus-card">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
                          <div className="relative z-10 flex-1 flex flex-col items-center p-8 text-center">
                            <div className="w-full flex-1 min-h-0 flex items-center justify-center overflow-hidden">
                              <div key={active.key} className="focus-graphic">
                                {/* {active.key === 'integration' && (
                                  <div className="focus-graph">
                                    <svg className="focus-graph-lines" viewBox="0 0 200 200" aria-hidden="true">
                                      <line x1="100" y1="100" x2="100" y2="30" />
                                      <line x1="100" y1="100" x2="160" y2="70" />
                                      <line x1="100" y1="100" x2="160" y2="130" />
                                      <line x1="100" y1="100" x2="100" y2="170" />
                                      <line x1="100" y1="100" x2="40" y2="130" />
                                      <line x1="100" y1="100" x2="40" y2="70" />
                                      <line x1="40" y1="70" x2="100" y2="30" />
                                      <line x1="100" y1="30" x2="160" y2="70" />
                                      <line x1="160" y1="70" x2="160" y2="130" />
                                      <line x1="160" y1="130" x2="100" y2="170" />
                                      <line x1="100" y1="170" x2="40" y2="130" />
                                      <line x1="40" y1="130" x2="40" y2="70" />
                                    </svg>
                                    <span className="focus-node focus-node--center" />
                                    <span className="focus-node focus-node--top" />
                                    <span className="focus-node focus-node--top-right" />
                                    <span className="focus-node focus-node--bottom-right" />
                                    <span className="focus-node focus-node--bottom" />
                                    <span className="focus-node focus-node--bottom-left" />
                                    <span className="focus-node focus-node--top-left" />
                                    <span className="focus-node focus-node--mid-top" />
                                    <span className="focus-node focus-node--mid-bottom" />
                                  </div>
                                )} */}
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

                                    {/* Moving Data Packets */}
                                    {/* <span className="pipe-packet pipe-packet--1" />
                                    <span className="pipe-packet pipe-packet--2" />
                                    <span className="pipe-packet pipe-packet--3" /> */}
                                  </div>
                                )}





                                {/* {active.key === 'senior' && (
                                  <div className="focus-graphic-icon focus-graphic-icon--person">
                                    <svg viewBox="0 0 24 24" fill="none">
                                      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
                                      <path
                                        d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                      />
                                    </svg>
                                    <div className="senior-orbit" aria-hidden="true">
                                      {Array.from({ length: 6 }).map((_, idx) => (
                                        <span
                                          key={idx}
                                          className="senior-orbit-dot"
                                          style={{ ['--orbit-angle' as string]: `${idx * 60}deg` } as React.CSSProperties}
                                        />
                                      ))}
                                    </div>
                                  </div>
                                )} */}

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




                                {/* {active.key === 'ai' && (
                                  <div className="focus-ai-graph">
                                    <svg className="focus-ai-lines" viewBox="0 0 220 180" aria-hidden="true">
                                      <line x1="40" y1="70" x2="110" y2="40" />
                                      <line x1="110" y1="40" x2="180" y2="70" />
                                      <line x1="40" y1="70" x2="90" y2="120" />
                                      <line x1="180" y1="70" x2="130" y2="120" />
                                      <line x1="90" y1="120" x2="130" y2="120" />
                                      <line x1="110" y1="40" x2="110" y2="100" />
                                    </svg>
                                    {Array.from({ length: 12 }).map((_, idx) => (
                                      <span key={idx} className="ai-node" />
                                    ))}
                                    <div className="ai-flow-labels" aria-hidden="true">
                                      <span>Input</span>
                                      <span>Process</span>
                                      <span>Output</span>
                                    </div>
                                  </div>
                                )} */}

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







                                
                                {/* {active.key === 'compliance' && (
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
                                )} */}

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
              </div>
            </div>
          </div>
        </section>
        <section className="section-light" id="package-offerings">
          <div className="mx-auto max-w-7xl px-6 py-20 text-center">
            <h2 className="text-4xl font-semibold text-slate-900">Package Offerings</h2>
            <p className="mt-3 text-sm text-slate-500 md:text-base">
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
              ].map((plan) => (
                <div
                  key={plan.name}
                  className={`pricing-card ${plan.featured ? 'pricing-card--featured' : ''}`}
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
                  <button className="pricing-button">Get Started</button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section-light partners-section" id="partners">
          <div className="mx-auto max-w-7xl px-6 py-20 text-center">
            <h2 className="text-3xl font-semibold text-slate-900">Our Technology Partners</h2>
            <p className="mt-2 text-sm text-slate-500">
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
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900">Frequently Asked Questions</h2>
              <p className="mt-3 text-sm text-slate-500 md:text-base">
                Get answers to common questions about our cybersecurity, network, and data centre
                services.
              </p>
              <button className="mt-6 rounded-full border border-emerald-200/60 px-5 py-2 text-sm font-semibold text-emerald-700">
                Still have questions? Contact Us
              </button>
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
                <a href="#">Data Centre</a>
                <a href="#">Secure Network</a>
              </div>
              <div className="footer-column">
                <h4>Partners</h4>
                <a href="#">Cisco</a>
                <a href="#">Juniper Networks</a>
                <a href="#">RSA</a>
                <a href="#">CrowdStrike</a>
                <a href="#">Fortinet</a>
                <a href="#">Check Point</a>
                <a href="#">Forcepoint</a>
                <a href="#">Barracuda</a>
                <a href="#">Apple</a>
                <a href="#">Jamf</a>
              </div>
              <div className="footer-column">
                <h4>Legal</h4>
                <a href="#">Terms of Service</a>
                <a href="#">Refunds</a>
                <a href="#">Cancellation</a>
              </div>
            </div>
            <div className="footer-bottom">
              <span>© 2026 Pirlanta IT Solutions Pvt. Ltd. All rights reserved.</span>
              <div className="footer-socials">
                <span>✕</span>
                <span>in</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      )}
    </div>
  )
}
