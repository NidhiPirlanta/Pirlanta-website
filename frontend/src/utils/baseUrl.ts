/**
 * Returns the backend/base URL for API calls, static assets, and links.
 * - Local dev (localhost/127.0.0.1): http://localhost:8000
 * - Production: current origin (e.g. http://3.110.143.60 or https://yourdomain.com)
 * - Override with VITE_BASE_URL in .env if needed
 *
 * Usage: threatmap link, static images, API calls - all auto-detect dev vs prod.
 */
export function getBaseUrl(): string {
  if (typeof window === 'undefined') return ''
  const env = import.meta.env.VITE_BASE_URL
  if (env && typeof env === 'string') return env.replace(/\/$/, '')
  const { hostname } = window.location
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return 'http://localhost:8000'
  }
  return window.location.origin
}
