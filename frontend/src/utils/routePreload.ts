/**
 * Preload route chunks on link hover so navigation feels instant.
 * Uses the same import paths as lazy() in App.tsx so Vite bundles to the same chunks.
 */
export function preloadRoute(path: string) {
  switch (path) {
    case '/services/cybersecurity':
      import('../pages/CybersecurityPage')
      break
    case '/services/data-centre-cloud':
      import('../pages/DataCentrePage')
      break
    case '/assessment':
    case '/assessment/':
      import('../components/AssessmentPage')
      break
    case '/partners/security/barracuda':
      import('../components/BarracudaSecurityPage')
      break
    case '/partners/security/fortinet':
      import('../components/FortinetSecurityPage')
      break
    case '/partners/security/rsa':
      import('../components/RSASecurityPage')
      break
    case '/partners/security/crowdstrike':
      import('../components/CrowdStrikeSecurityPage')
      break
    case '/partners/security/forcepoint':
      import('../components/ForcepointSecurityPage')
      break
    case '/partners/security/checkpoint':
      import('../components/CheckPointSecurityPage')
      break
    case '/partners/endpoint/apple-enterprise':
      import('../components/AppleForEnterprisePage')
      break
    case '/partners/endpoint/apple-smb':
      import('../components/AppleForSMBPage')
      break
    case '/partners/endpoint/jamf':
      import('../components/JamfPage')
      break
    case '/':
      import('../components/ThreatGlobe')
      break
    default:
      break
  }
}
