import { Link } from 'react-router-dom'
import { getBaseUrl } from '../utils/baseUrl'
import { preloadRoute } from '../utils/routePreload'

export default function SiteFooter() {
  return (
    <>
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
        <Link to="/" onMouseEnter={() => preloadRoute('/')}>Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="footer-column">
        <h4>Services</h4>
        <Link to="/services/cybersecurity" onMouseEnter={() => preloadRoute('/services/cybersecurity')}>Cybersecurity</Link>
        <Link to="/services/data-centre-cloud" onMouseEnter={() => preloadRoute('/services/data-centre-cloud')}>Data Centre</Link>
        <Link to="/services/network-sd-wan">Secure Network</Link>
      </div>
      <div className="footer-column">
        <h4>Partners</h4>
        <Link to="/partners/networking/cisco">Cisco</Link>
        <Link to="/partners/networking/juniper">Juniper Networks</Link>
        <Link to="/partners/security/rsa" onMouseEnter={() => preloadRoute('/partners/security/rsa')}>RSA</Link>
        <Link to="/partners/security/crowdstrike" onMouseEnter={() => preloadRoute('/partners/security/crowdstrike')}>CrowdStrike</Link>
        <Link to="/partners/security/fortinet" onMouseEnter={() => preloadRoute('/partners/security/fortinet')}>Fortinet</Link>
        <Link to="/partners/security/checkpoint" onMouseEnter={() => preloadRoute('/partners/security/checkpoint')}>Check Point</Link>
        <Link to="/partners/security/forcepoint" onMouseEnter={() => preloadRoute('/partners/security/forcepoint')}>Forcepoint</Link>
        <Link to="/partners/security/barracuda" onMouseEnter={() => preloadRoute('/partners/security/barracuda')}>Barracuda</Link>
        <Link to="/partners/endpoint/apple-enterprise" onMouseEnter={() => preloadRoute('/partners/endpoint/apple-enterprise')}>Apple</Link>
        <Link to="/partners/endpoint/jamf" onMouseEnter={() => preloadRoute('/partners/endpoint/jamf')}>Jamf</Link>
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
    </>
  )
}
