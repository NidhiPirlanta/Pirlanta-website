import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getBaseUrl } from '../utils/baseUrl'
import { preloadRoute } from '../utils/routePreload'

type HeaderProps = {
  scrolled: boolean
}

export default function Header({ scrolled }: HeaderProps) {
  const { pathname } = useLocation()
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }
  const [partnersMenu, setPartnersMenu] = useState<'root' | 'networking' | 'security' | 'endpoint'>('root')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobilePartnersOpen, setMobilePartnersOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [partnersDropdownOpen, setPartnersDropdownOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const partnersRef = useRef<HTMLDivElement>(null)

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setMobileServicesOpen(false)
    setMobilePartnersOpen(false)
  }

  const closeDesktopDropdowns = () => {
    setServicesDropdownOpen(false)
    setPartnersDropdownOpen(false)
    setPartnersMenu('root')
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node
      if (servicesRef.current?.contains(target) || partnersRef.current?.contains(target)) return
      closeDesktopDropdowns()
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

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
          <Link to="/">
            <img src="/pir-logo.png" alt="Pirlanta" className="h-10 w-auto" />
          </Link>
        </div>
        <nav className="hidden items-center gap-3 text-sm text-slate-600 md:flex">
          <Link className={`nav-item ${isActive('/') ? 'nav-item--active' : ''}`} to="/" onMouseEnter={() => preloadRoute('/')}>
            Home
          </Link>
          <Link className={`nav-item ${isActive('/about') ? 'nav-item--active' : ''}`} to="/about">
            About Us
          </Link>
          <a
            className={`nav-item ${isActive('/threatmap') ? 'nav-item--active' : ''}`}
            href={`${getBaseUrl()}/threatmap/`}
          >
            Threat Map
          </a>
          <div className="relative" ref={servicesRef}>
            <button
              className={`nav-item inline-flex items-center gap-1 ${servicesDropdownOpen ? 'nav-item--active' : ''}`}
              type="button"
              onClick={() => {
                setServicesDropdownOpen((o) => !o)
                if (!servicesDropdownOpen) setPartnersDropdownOpen(false)
              }}
              aria-expanded={servicesDropdownOpen}
            >
              Services <span className={`text-xs transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`}>▾</span>
            </button>
            <div className={`nav-dropdown ${servicesDropdownOpen ? 'nav-dropdown--open' : ''}`}>
              <Link className="dropdown-item block" to="/services/cybersecurity" onClick={closeDesktopDropdowns} onMouseEnter={() => preloadRoute('/services/cybersecurity')}>
                <p className="font-semibold text-slate-900">Cybersecurity</p>
                <p className="text-[11px] text-slate-500">
                  MDR, compliance, cloud security & threat protection
                </p>
              </Link>
              <Link className="dropdown-item block dropdown-divider" to="/services/data-centre-cloud" onClick={closeDesktopDropdowns} onMouseEnter={() => preloadRoute('/services/data-centre-cloud')}>
                <p className="font-semibold text-slate-900">Data Centre</p>
                <p className="text-[11px] text-slate-500">
                  Cloud migration, modernization & backup solutions
                </p>
              </Link>
              <Link className="dropdown-item block dropdown-divider" to="/services/network-sd-wan" onClick={closeDesktopDropdowns}>
                <p className="font-semibold text-slate-900">Secure Network</p>
                <p className="text-[11px] text-slate-500">
                  NAC, SD-WAN, Zero Trust & connectivity
                </p>
              </Link>
              <Link className="dropdown-item block dropdown-divider" to="/services/ai-code-audits" onClick={closeDesktopDropdowns}>
                <p className="font-semibold text-slate-900">AI Code Audits</p>
                <p className="text-[11px] text-slate-500">
                  Security for AI-generated & vibe-coded apps
                </p>
              </Link>
            </div>
          </div>
          <div className="relative" ref={partnersRef}>
            <button
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${partnersDropdownOpen ? 'text-primary bg-primary-100' : 'text-primary bg-primary-50'}`}
              type="button"
              onClick={() => {
                setPartnersDropdownOpen((o) => !o)
                if (!partnersDropdownOpen) setServicesDropdownOpen(false)
              }}
              aria-expanded={partnersDropdownOpen}
            >
              Partners
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-chevron-down ml-1 h-4 w-4 transition-transform ${partnersDropdownOpen ? 'rotate-180' : ''}`}>
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className={`partners-dropdown absolute top-full left-0 pt-2 transition-all duration-200 ${partnersDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              <div className="flex items-start gap-4">
                <div className="bg-white/95 backdrop-blur-xl rounded-xl shadow-glass border border-black/5 py-2 min-w-[220px]">
                  <Link className="block px-4 py-2.5 hover:bg-primary-50 transition-colors bg-primary-50" to="/partners/ecosystem" onClick={closeDesktopDropdowns}>
                    <span className="block text-sm font-medium text-gray-900">Partner Ecosystem</span>
                    <span className="block text-xs text-gray-500 mt-0.5">Our growing partner network</span>
                  </Link>
                  <div>
                    <div className={`flex items-center justify-between px-4 py-2.5 cursor-pointer transition-colors ${partnersMenu === 'networking' ? 'bg-primary-50' : 'hover:bg-gray-50'}`} onClick={() => setPartnersMenu('networking')}>
                      <span className="block text-sm font-medium text-gray-900">Networking</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 text-gray-400">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <div className={`flex items-center justify-between px-4 py-2.5 cursor-pointer transition-colors ${partnersMenu === 'security' ? 'bg-primary-50' : 'hover:bg-gray-50'}`} onClick={() => setPartnersMenu('security')}>
                      <span className="block text-sm font-medium text-gray-900">Security</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 text-gray-400">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <div className={`flex items-center justify-between px-4 py-2.5 cursor-pointer transition-colors ${partnersMenu === 'endpoint' ? 'bg-primary-50' : 'hover:bg-gray-50'}`} onClick={() => setPartnersMenu('endpoint')}>
                      <span className="block text-sm font-medium text-gray-900">Endpoint Computing</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 text-gray-400">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </div>
                  </div>
                </div>
                {partnersMenu === 'networking' && (
                  <div className="bg-white/95 backdrop-blur-xl rounded-xl shadow-glass border border-black/5 py-2 min-w-[220px]">
                    <Link className="block px-4 py-2.5 hover:bg-primary-50 transition-colors" to="/partners/networking/cisco" onClick={closeDesktopDropdowns} onMouseEnter={() => preloadRoute('/partners/networking/cisco')}>
                      <span className="block text-sm font-medium text-gray-900">Cisco</span>
                      <span className="block text-xs text-gray-500 mt-0.5">Select Integrator Partner</span>
                    </Link>
                    <Link className="block px-4 py-2.5 hover:bg-primary-50 transition-colors border-t border-gray-100" to="/partners/networking/juniper" onClick={closeDesktopDropdowns} onMouseEnter={() => preloadRoute('/partners/networking/juniper')}>
                      <span className="block text-sm font-medium text-gray-900">Juniper Networks</span>
                      <span className="block text-xs text-gray-500 mt-0.5">Partner</span>
                    </Link>
                  </div>
                )}
                {partnersMenu === 'security' && (
                  <div className="bg-white/95 backdrop-blur-xl rounded-xl shadow-glass border border-black/5 py-2 min-w-[220px]">
                    <Link className="block px-4 py-2.5 hover:bg-primary-50 transition-colors" to="/partners/security/barracuda" onClick={closeDesktopDropdowns} onMouseEnter={() => preloadRoute('/partners/security/barracuda')}>
                      <span className="block text-sm font-medium text-gray-900">Barracuda</span>
                      <span className="block text-xs text-gray-500 mt-0.5">Certified Partner</span>
                    </Link>
                    <Link className="block px-4 py-2.5 hover:bg-primary-50 transition-colors border-t border-gray-100" to="/partners/security/fortinet" onClick={closeDesktopDropdowns} onMouseEnter={() => preloadRoute('/partners/security/fortinet')}>
                      <span className="block text-sm font-medium text-gray-900">Fortinet</span>
                      <span className="block text-xs text-gray-500 mt-0.5">Authorized Partner</span>
                    </Link>
                    <Link className="block px-4 py-2.5 hover:bg-primary-50 transition-colors border-t border-gray-100" to="/partners/security/rsa" onClick={closeDesktopDropdowns} onMouseEnter={() => preloadRoute('/partners/security/rsa')}>
                      <span className="block text-sm font-medium text-gray-900">RSA</span>
                      <span className="block text-xs text-gray-500 mt-0.5">Identity & Access Security Partner</span>
                    </Link>
                    <Link className="block px-4 py-2.5 hover:bg-primary-50 transition-colors border-t border-gray-100" to="/partners/security/crowdstrike" onClick={closeDesktopDropdowns} onMouseEnter={() => preloadRoute('/partners/security/crowdstrike')}>
                      <span className="block text-sm font-medium text-gray-900">CrowdStrike</span>
                      <span className="block text-xs text-gray-500 mt-0.5">AI-Native Endpoint & Cloud Security</span>
                    </Link>
                    <Link className="block px-4 py-2.5 hover:bg-primary-50 transition-colors border-t border-gray-100" to="/partners/security/forcepoint" onClick={closeDesktopDropdowns} onMouseEnter={() => preloadRoute('/partners/security/forcepoint')}>
                      <span className="block text-sm font-medium text-gray-900">Forcepoint</span>
                      <span className="block text-xs text-gray-500 mt-0.5">Data-First Security & DLP</span>
                    </Link>
                    <Link className="block px-4 py-2.5 hover:bg-primary-50 transition-colors border-t border-gray-100" to="/partners/security/checkpoint" onClick={closeDesktopDropdowns} onMouseEnter={() => preloadRoute('/partners/security/checkpoint')}>
                      <span className="block text-sm font-medium text-gray-900">Check Point</span>
                      <span className="block text-xs text-gray-500 mt-0.5">Prevention-First Cyber Security</span>
                    </Link>
                  </div>
                )}
                {partnersMenu === 'endpoint' && (
                  <div className="bg-white/95 backdrop-blur-xl rounded-xl shadow-glass border border-black/5 py-2 min-w-[220px]">
                    <Link className="block px-4 py-2.5 hover:bg-primary-50 transition-colors" to="/partners/endpoint/apple-enterprise" onClick={closeDesktopDropdowns} onMouseEnter={() => preloadRoute('/partners/endpoint/apple-enterprise')}>
                      <span className="block text-sm font-medium text-gray-900">Apple for Enterprise</span>
                      <span className="block text-xs text-gray-500 mt-0.5">Enterprise Apple device procurement</span>
                    </Link>
                    <Link className="block px-4 py-2.5 hover:bg-primary-50 transition-colors border-t border-gray-100" to="/partners/endpoint/apple-smb" onClick={closeDesktopDropdowns} onMouseEnter={() => preloadRoute('/partners/endpoint/apple-smb')}>
                      <span className="block text-sm font-medium text-gray-900">Apple for SMB</span>
                      <span className="block text-xs text-gray-500 mt-0.5">Apple devices for small &amp; mid-sized businesses</span>
                    </Link>
                    <Link className="block px-4 py-2.5 hover:bg-primary-50 transition-colors border-t border-gray-100" to="/partners/endpoint/jamf" onClick={closeDesktopDropdowns} onMouseEnter={() => preloadRoute('/partners/endpoint/jamf')}>
                      <span className="block text-sm font-medium text-gray-900">Jamf</span>
                      <span className="block text-xs text-gray-500 mt-0.5">Apple device management &amp; security</span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          <Link className={`nav-item ${isActive('/contact') ? 'nav-item--active' : ''}`} to="/contact">
            Contact Us
          </Link>
          <Link className={`nav-item ${isActive('/assessment') ? 'nav-item--active' : ''}`} to="/assessment" onMouseEnter={() => preloadRoute('/assessment')}>
            Assessment
          </Link>
        </nav>
        <div className="hidden md:flex md:items-center md:gap-3">
          <Link to="/contact">
            <button className="rounded-full bg-emerald-700 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-600/40 transition hover:bg-emerald-600">
              Get Started
            </button>
          </Link>
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

      {/* Mobile menu overlay - full screen with logo, close button, nav */}
      <div
        className={`fixed inset-0 z-50 md:hidden mobile-menu-overlay ${mobileMenuOpen ? 'visible' : 'invisible pointer-events-none'}`}
      >
        <div className="mobile-menu-header">
          <Link to="/" className="mobile-menu-logo" onClick={closeMobileMenu}>
            <img src="/pir-logo.png" alt="Pirlanta" className="h-10 w-auto" />
          </Link>
          <button
            type="button"
            className="mobile-menu-close"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18" /><path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col overflow-y-auto px-4 py-6 pb-20 mobile-menu-nav">
          <Link className="mobile-nav-link" to="/" onClick={closeMobileMenu} onTouchStart={() => preloadRoute('/')}>
            Home
          </Link>
          <Link className="mobile-nav-link" to="/about" onClick={closeMobileMenu}>
            About Us
          </Link>
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
              <Link className="mobile-nav-sublink" to="/services/cybersecurity" onClick={closeMobileMenu} onTouchStart={() => preloadRoute('/services/cybersecurity')}>Cybersecurity</Link>
              <Link className="mobile-nav-sublink" to="/services/data-centre-cloud" onClick={closeMobileMenu} onTouchStart={() => preloadRoute('/services/data-centre-cloud')}>Data Centre</Link>
              <Link className="mobile-nav-sublink" to="/services/network-sd-wan" onClick={closeMobileMenu}>Secure Network</Link>
              <Link className="mobile-nav-sublink" to="/services/ai-code-audits" onClick={closeMobileMenu}>AI Code Audits</Link>
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
              <Link className="mobile-nav-sublink" to="/partners/ecosystem" onClick={closeMobileMenu}>Partner Ecosystem</Link>
              <span className="mobile-nav-section-label">Networking</span>
              <Link className="mobile-nav-sublink" to="/partners/networking/cisco" onClick={closeMobileMenu}>Cisco</Link>
              <Link className="mobile-nav-sublink" to="/partners/networking/juniper" onClick={closeMobileMenu}>Juniper</Link>
              <span className="mobile-nav-section-label">Security</span>
              <Link className="mobile-nav-sublink" to="/partners/security/barracuda" onClick={closeMobileMenu} onTouchStart={() => preloadRoute('/partners/security/barracuda')}>Barracuda</Link>
              <Link className="mobile-nav-sublink" to="/partners/security/fortinet" onClick={closeMobileMenu} onTouchStart={() => preloadRoute('/partners/security/fortinet')}>Fortinet</Link>
              <Link className="mobile-nav-sublink" to="/partners/security/rsa" onClick={closeMobileMenu} onTouchStart={() => preloadRoute('/partners/security/rsa')}>RSA</Link>
              <Link className="mobile-nav-sublink" to="/partners/security/crowdstrike" onClick={closeMobileMenu} onTouchStart={() => preloadRoute('/partners/security/crowdstrike')}>CrowdStrike</Link>
              <Link className="mobile-nav-sublink" to="/partners/security/forcepoint" onClick={closeMobileMenu} onTouchStart={() => preloadRoute('/partners/security/forcepoint')}>Forcepoint</Link>
              <Link className="mobile-nav-sublink" to="/partners/security/checkpoint" onClick={closeMobileMenu} onTouchStart={() => preloadRoute('/partners/security/checkpoint')}>Check Point</Link>
              <span className="mobile-nav-section-label">Endpoint</span>
              <Link className="mobile-nav-sublink" to="/partners/endpoint/apple-enterprise" onClick={closeMobileMenu} onTouchStart={() => preloadRoute('/partners/endpoint/apple-enterprise')}>Apple for Enterprise</Link>
              <Link className="mobile-nav-sublink" to="/partners/endpoint/apple-smb" onClick={closeMobileMenu} onTouchStart={() => preloadRoute('/partners/endpoint/apple-smb')}>Apple for SMB</Link>
              <Link className="mobile-nav-sublink" to="/partners/endpoint/jamf" onClick={closeMobileMenu} onTouchStart={() => preloadRoute('/partners/endpoint/jamf')}>Jamf</Link>
            </div>
          )}

          <Link className="mobile-nav-link" to="/contact" onClick={closeMobileMenu}>
            Contact Us
          </Link>
          <Link className="mobile-nav-link" to="/assessment" onClick={closeMobileMenu} onTouchStart={() => preloadRoute('/assessment')}>
            Assessment
          </Link>

          <Link
            to="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-600/40 transition hover:bg-emerald-600"
            onClick={closeMobileMenu}
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  )
}
