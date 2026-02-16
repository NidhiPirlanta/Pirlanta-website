import { useState, useEffect } from 'react'

import { getApiBaseUrl } from '../utils/baseUrl'

type StepData = {
  title?: string
  fields?: Array<{
    key: string
    label: string
    type: string
    placeholder?: string
    required?: boolean
    options?: Array<{ value: string; label: string }>
    detectLocation?: boolean
  }>
  questions?: Array<{
    key: string
    text: string
    type: string
    hint?: string
    sub_question?: string
    required?: boolean
    options?: Array<{ value: string; label: string; hasOther?: boolean }>
  }>
  benefits?: Array<{ icon: string; text: string }>
}

const BENEFITS = [
  { icon: 'rocket', text: 'Accelerated Recovery For Mission-Critical Systems.' },
  { icon: 'dollar', text: 'Lower Costs With Modern Infrastructure And Automation.' },
  { icon: 'cloud', text: 'Audit-Ready Compliance Across Hybrid Cloud Environments.' },
  { icon: 'growth', text: 'Scalable Solutions To Support Business Innovation And Growth.' },
  { icon: 'shield', text: 'Enhanced Security Posture Aligned With Global Resilience Standards.' },
]

function TermsModal({ onClose }: { onClose: () => void }) {
  const [logoError, setLogoError] = useState(false)
  return (
    <div className="terms-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="terms-modal-title">
      <div className="terms-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="terms-modal-header">
          <div className="terms-modal-logo">
            {!logoError ? (
              <img src="/pir-logo.png" alt="Pirlanta Logo" className="terms-modal-logo-img" onError={() => setLogoError(true)} />
            ) : (
              <div className="terms-modal-logo-fallback">
                <span className="terms-modal-logo-icon">P</span>
                <div className="terms-modal-logo-text">
                  <span className="terms-modal-logo-name">PIRLANTA</span>
                  <span className="terms-modal-logo-tagline">SECURE & SCALABLE SOLUTION PROVIDER</span>
                </div>
              </div>
            )}
          </div>
          <button type="button" className="terms-modal-close" onClick={onClose} aria-label="Close">&times;</button>
        </div>
        <div className="terms-modal-body">
          <h2 id="terms-modal-title">Terms & Conditions – Digital Assessment</h2>
          <div className="terms-title-divider" aria-hidden="true" />
          <p className="terms-intro">Welcome to Pirlanta IT Solutions. These Terms & Conditions govern your participation in any Digital Assessment conducted through our website (<a href="https://www.pirlanta.in/" target="_blank" rel="noopener noreferrer" className="terms-link-inline">https://www.pirlanta.in/</a>). By accessing or submitting an assessment, you agree to the terms outlined below.</p>

          <div className="terms-section-item">
            <h3>1. Purpose of Digital Assessment</h3>
            <p>The Digital Assessment is designed to evaluate business readiness, digital maturity, security posture, or related parameters. The results are indicative in nature and intended for informational and advisory purposes only.</p>
          </div>

          <div className="terms-section-item">
            <h3>2. Eligibility</h3>
            <p>By participating in the Digital Assessment, you confirm that:</p>
            <ul>
              <li>You are authorized to provide the submitted information</li>
              <li>The information belongs to you or your organization</li>
              <li>You are at least 18 years of age</li>
            </ul>
          </div>

          <div className="terms-section-item">
            <h3>3. Information Collected</h3>
            <p>During the assessment, we may collect:</p>
            <ul>
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Mobile Number (OTP verified)</li>
              <li>Business or organizational details</li>
              <li>Assessment responses and preferences</li>
            </ul>
            <p>All information must be accurate and complete.</p>
          </div>

          <div className="terms-section-item">
            <h3>4. OTP Verification</h3>
            <p>OTP (One-Time Password) verification is mandatory for participation.</p>
            <p>You agree that:</p>
            <ul>
              <li>The mobile number provided is valid and belongs to you</li>
              <li>OTP is used solely for authentication and security</li>
              <li>Pirlanta IT Solutions is not responsible for delays caused by telecom providers</li>
            </ul>
          </div>

          <div className="terms-section-item">
            <h3>5. Use of Collected Data</h3>
            <p>The collected data may be used to:</p>
            <ul>
              <li>Generate assessment reports</li>
              <li>Contact you regarding assessment results</li>
              <li>Provide relevant IT, digital, or security solutions</li>
              <li>Improve our services and assessment models</li>
            </ul>
            <p>Your data will not be sold or shared with unauthorized third parties.</p>
          </div>

          <div className="terms-section-item">
            <h3>6. Confidentiality</h3>
            <p>Pirlanta IT Solutions maintains confidentiality of your assessment data. Access is restricted to authorized personnel only and handled in accordance with applicable data protection laws.</p>
          </div>

          <div className="terms-section-item">
            <h3>7. Accuracy of Results</h3>
            <p>Assessment outcomes are based on the information provided by you.</p>
            <p>Pirlanta IT Solutions does not guarantee:</p>
            <ul>
              <li>Absolute accuracy</li>
              <li>Specific business outcomes</li>
              <li>Compliance certifications</li>
            </ul>
            <p>Results should not be treated as legal or regulatory advice.</p>
          </div>

          <div className="terms-section-item">
            <h3>8. User Responsibilities</h3>
            <p>You agree not to:</p>
            <ul>
              <li>Submit false or misleading information</li>
              <li>Attempt to manipulate assessment results</li>
              <li>Misuse the platform or disrupt its functionality</li>
            </ul>
            <p>Violation may result in suspension or denial of access.</p>
          </div>

          <div className="terms-section-item">
            <h3>9. Intellectual Property</h3>
            <p>All assessment frameworks, methodologies, reports, content, and system logic remain the intellectual property of Pirlanta IT Solutions. Unauthorized copying or reuse is prohibited.</p>
          </div>

          <div className="terms-section-item">
            <h3>10. Limitation of Liability</h3>
            <p>Pirlanta IT Solutions shall not be liable for:</p>
            <ul>
              <li>Business decisions made based on assessment results</li>
              <li>Direct or indirect losses arising from assessment usage</li>
              <li>Technical interruptions or data transmission failures</li>
            </ul>
          </div>

          <div className="terms-section-item">
            <h3>11. Modifications</h3>
            <p>We reserve the right to modify the assessment process or these Terms & Conditions at any time. Updated terms will be published on this page.</p>
          </div>

          <div className="terms-section-item">
            <h3>12. Governing Law</h3>
            <p>These Terms & Conditions shall be governed by the laws of India, including the Information Technology Act, 2000.</p>
          </div>

          <div className="terms-section-item">
            <h3>13. Contact Information</h3>
            <p>For questions related to the Digital Assessment or these Terms, contact:</p>
            <p className="terms-contact-link">🌐 <a href="https://www.pirlanta.in/" target="_blank" rel="noopener noreferrer" className="terms-link-inline">https://www.pirlanta.in/</a></p>
          </div>
        </div>
        <div className="terms-modal-footer">
          <button type="button" className="terms-modal-close-btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}

function ReadyForNextBanner() {
  return (
    <section className="assessment-banner relative overflow-hidden bg-[#0b1016] px-6 py-16">
      <div className="assessment-banner-pattern" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:items-center md:justify-between">
        <div className="assessment-banner-headline">
          <h2 className="flex flex-wrap items-center gap-2 text-3xl font-bold text-white md:text-4xl">
            <span>Ready</span>
            <span>for</span>
            {/* <button type="button" className="assessment-play-btn flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white transition hover:bg-emerald-400" aria-label="Play">
              <svg className="h-6 w-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </button> */}
            <span>Next</span>
          </h2>
          <p className="mt-3 text-sm text-slate-300">Digital Evaluation Business Advice</p>
        </div>
        <ul className="assessment-benefits-list">
          {BENEFITS.map((b) => (
            <li key={b.text} className="flex items-start gap-3 text-sm text-white">
              <span className="assessment-benefit-icon shrink-0 text-emerald-400">
                {b.icon === 'rocket' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>}
                {b.icon === 'dollar' && <span className="text-lg font-bold">$</span>}
                {b.icon === 'cloud' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /></svg>}
                {b.icon === 'growth' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18" /><path d="m7 16 4-4 4 4 5-6" /></svg>}
                {b.icon === 'shield' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>}
              </span>
              <span>{b.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default function AssessmentPage() {
  const [phase, setPhase] = useState<'prereg' | 'otp' | 'steps' | 'complete'>('prereg')
  const [sessionId, setSessionId] = useState<string | null>(null)
  const [currentStep, setCurrentStep] = useState(1)
  const [progressPercent, setProgressPercent] = useState(0)
  const [stepData, setStepData] = useState<StepData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [prereg, setPrereg] = useState({ name: '', phone: '', email: '', terms: false })
  const [showTermsModal, setShowTermsModal] = useState(false)
  const [otp, setOtp] = useState('')
  const [otpExpiresIn, setOtpExpiresIn] = useState(0)
  const [formData, setFormData] = useState<Record<string, unknown>>({})

  const handlePreregSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch(`${getApiBaseUrl()}/api/assessment/start/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: prereg.name,
          phone: prereg.phone,
          email: prereg.email,
          terms_accepted: prereg.terms,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to start')
      setSessionId(data.session_id)
      setOtpExpiresIn(data.otp_expires_in || 300)
      setPhase('otp')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  const handleOtpVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch(`${getApiBaseUrl()}/api/assessment/verify-otp/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: sessionId, otp }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Invalid OTP')
      setCurrentStep(data.current_step || 1)
      setProgressPercent(Math.round(((data.current_step || 1) - 1) * 25))
      setPhase('steps')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid OTP')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (phase === 'otp' && otpExpiresIn > 0) {
      const t = setInterval(() => setOtpExpiresIn((p) => Math.max(0, p - 1)), 1000)
      return () => clearInterval(t)
    }
  }, [phase, otpExpiresIn])

  useEffect(() => {
    if (phase === 'steps' && sessionId && currentStep <= 4) {
      setLoading(true)
      fetch(`${getApiBaseUrl()}/api/assessment/questions/${currentStep}/?session_id=${sessionId}`)
        .then((r) => r.json())
        .then((d) => {
          if (d.error) throw new Error(d.error)
          setStepData(d)
          if (d.form_data) setFormData(d.form_data)
        })
        .catch(() => setError('Failed to load questions'))
        .finally(() => setLoading(false))
    }
  }, [phase, sessionId, currentStep])

  const handleStepSubmit = async (e: React.FormEvent, data: Record<string, unknown>) => {
    e.preventDefault()
    if (!sessionId) return
    setError('')
    setLoading(true)
    try {
      const res = await fetch(`${getApiBaseUrl()}/api/assessment/submit/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: sessionId, step: currentStep, form_data: data }),
      })
      const d = await res.json()
      if (!res.ok) throw new Error(d.error || 'Failed to save')
      setCurrentStep(d.current_step)
      setProgressPercent(d.progress_percent)
      setFormData({})
      if (d.current_step > 4) {
        setPhase('complete')
      } else {
        setStepData(null)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save')
    } finally {
      setLoading(false)
    }
  }

  if (phase === 'prereg') {
    return (
      <main className="assessment-page min-h-screen bg-slate-100 pt-24 pb-12">
        <div className="assessment-prereg-wrapper relative mx-auto max-w-[96rem] px-6">
          <div className="assessment-prereg-stack flex flex-col gap-10">
          <div className="assessment-card assessment-prereg-card relative rounded-2xl bg-white p-8 shadow-lg">
            <h1 className="text-xl font-semibold text-slate-800">a few details before you get started...</h1>
            <form onSubmit={handlePreregSubmit} className="mt-6">
              <div className="assessment-prereg-grid grid grid-cols-1 gap-6 md:grid-cols-3">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Name</label>
                  <input
                    type="text"
                    value={prereg.name}
                    onChange={(e) => setPrereg((p) => ({ ...p, name: e.target.value }))}
                    placeholder="Your name"
                    className="assessment-prereg-input mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800"
                    required
                  />
                  <p className="mt-1 text-xs text-slate-500">e.g. Aarush Patel</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Mobile Number</label>
                  <input
                    type="tel"
                    value={prereg.phone}
                    onChange={(e) => setPrereg((p) => ({ ...p, phone: e.target.value }))}
                    className="assessment-prereg-input mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800"
                    required
                  />
                  <p className="mt-1 text-xs text-slate-500">This gives Business a consent to contact you</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email Address</label>
                  <input
                    type="email"
                    value={prereg.email}
                    onChange={(e) => setPrereg((p) => ({ ...p, email: e.target.value }))}
                    className="assessment-prereg-input mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800"
                    required
                  />
                  <p className="mt-1 text-xs text-slate-500">This gives Vi Business a consent to contact you</p>
                </div>
              </div>
              <label className="assessment-terms-checkbox group mt-6 flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={prereg.terms}
                  onChange={(e) => setPrereg((p) => ({ ...p, terms: e.target.checked }))}
                  className="assessment-terms-input sr-only"
                />
                <span className="assessment-terms-box mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-slate-300 group-has-[:checked]:border-emerald-700 group-has-[:checked]:bg-emerald-700">
                  <svg className="hidden h-3 w-3 text-white group-has-[:checked]:block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
                </span>
                <span className="text-sm text-slate-700">I agree to the <button type="button" onClick={() => setShowTermsModal(true)} className="text-emerald-600 underline hover:text-emerald-700">terms and conditions</button></span>
              </label>
              {showTermsModal && <TermsModal onClose={() => setShowTermsModal(false)} />}
              {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
              <div className="mt-6 flex justify-center">
                <button type="submit" disabled={loading} className="rounded-lg bg-emerald-700 px-12 py-3 font-semibold text-white hover:bg-emerald-600 disabled:opacity-70">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="assessment-prereg-banner">
            <ReadyForNextBanner />
          </div>
          </div>
        </div>
      </main>
    )
  }

  if (phase === 'otp') {
    const m = Math.floor(otpExpiresIn / 60)
    const s = otpExpiresIn % 60
    return (
      <main className="assessment-page min-h-screen bg-slate-100 pt-24 pb-12">
        <div className="assessment-prereg-wrapper relative mx-auto max-w-[96rem] px-6">
          <div className="assessment-prereg-stack flex flex-col gap-10">
            <div className="assessment-card relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-8 shadow-lg md:p-10">
              <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/2 translate-y-1/2 rounded-full bg-emerald-400/20 blur-3xl" aria-hidden />
              <div className="relative">
                <h1 className="text-xl font-semibold text-slate-600">a few details before you get started...</h1>
                <div className="mt-6 space-y-4">
                  <div className="rounded-lg border border-slate-200/80 bg-emerald-50/80 px-4 py-3 text-slate-700">{prereg.name}</div>
                  <div className="rounded-lg border border-slate-200/80 bg-emerald-50/80 px-4 py-3 text-slate-700">{prereg.phone}</div>
                  <div className="rounded-lg border border-slate-200/80 bg-emerald-50/80 px-4 py-3 text-slate-700">{prereg.email}</div>
                </div>
                <form onSubmit={handleOtpVerify} className="mt-6 space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Enter OTP</label>
                    <input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                      placeholder="000000"
                      className="mt-1 w-full rounded-lg border-2 border-emerald-300 bg-white px-4 py-3 text-lg tracking-widest text-slate-800 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      maxLength={6}
                    />
                    <p className="mt-1 text-xs text-slate-600">OTP expires in {m}:{s.toString().padStart(2, '0')}</p>
                    <p className="text-xs text-slate-600">OTP sent to {prereg.email}</p>
                  </div>
                  {error && <p className="text-sm text-red-600">{error}</p>}
                  <div className="flex justify-center">
                    <button type="submit" disabled={loading} className="rounded-lg bg-emerald-600 px-12 py-3 font-semibold text-white hover:bg-emerald-500 disabled:opacity-70">
                      Verify OTP
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="assessment-prereg-banner">
              <ReadyForNextBanner />
            </div>
          </div>
        </div>
      </main>
    )
  }

  if (phase === 'steps' && loading && !stepData) {
    return (
      <main className="assessment-page flex min-h-screen items-center justify-center pt-24">
        <p className="text-slate-500">Loading...</p>
      </main>
    )
  }

  if (phase === 'steps' && stepData) {
    const isStep1 = currentStep === 1 && stepData.fields
    const title = stepData.title || ''

    const isStep1Complete = isStep1 && stepData.fields
      ? stepData.fields.every((f) => {
          if (!f.required) return true
          const v = formData[f.key]
          return v !== undefined && v !== null && String(v).trim() !== ''
        })
      : false

    return (
      <main className="assessment-page min-h-screen bg-slate-100 pt-24 pb-12">
        <div className="mx-auto max-w-[96rem] px-6">
          <div className="assessment-prereg-stack flex flex-col gap-10">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
              <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/2 translate-y-1/2 rounded-full bg-emerald-400/20 blur-3xl" aria-hidden />
            <div className="relative p-8 md:p-10">
              <div className="mb-8">
                <h1 className="text-2xl font-semibold text-slate-800 md:text-3xl">{title}</h1>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-slate-500">{progressPercent}% complete</span>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <div key={s} className="flex items-center">
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-medium ${
                            s <= currentStep ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-500'
                          }`}
                        >
                          {s}
                        </div>
                        {s < 5 && (
                          <div
                            className={`mx-0.5 h-0.5 w-6 md:w-12 ${
                              s < currentStep ? 'bg-emerald-600' : 'bg-slate-200'
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {isStep1 && stepData.fields && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    const fd: Record<string, unknown> = {}
                    stepData.fields!.forEach((f) => {
                      const v = formData[f.key]
                      if (v !== undefined) fd[f.key] = v
                    })
                    handleStepSubmit(e, fd)
                  }}
                  className="assessment-form grid gap-6 md:grid-cols-2"
                >
                  {stepData.fields.map((f) => (
                    <div key={f.key}>
                      <label className="block text-sm font-medium text-slate-700">
                        {f.label} {f.required && '*'}
                      </label>
                      {f.type === 'text' && (
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={(formData[f.key] as string) || ''}
                            onChange={(e) => setFormData((d) => ({ ...d, [f.key]: e.target.value }))}
                            placeholder={f.placeholder}
                            className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-800 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                            required={f.required}
                          />
                          {f.detectLocation && (
                            <button
                              type="button"
                              onClick={() => {
                                if (navigator.geolocation) {
                                  navigator.geolocation.getCurrentPosition(
                                    (pos) => {
                                      const { latitude, longitude } = pos.coords
                                      fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
                                        .then((r) => r.json())
                                        .then((d) => {
                                          const pc = d?.address?.postcode
                                          if (pc) setFormData((prev) => ({ ...prev, [f.key]: pc }))
                                        })
                                        .catch(() => {})
                                    },
                                    () => {}
                                  )
                                }
                              }}
                              className="mt-1 shrink-0 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-emerald-500"
                            >
                              Detect location
                            </button>
                          )}
                        </div>
                      )}
                      {f.type === 'dropdown' && (
                        <select
                          value={(formData[f.key] as string) || ''}
                          onChange={(e) => setFormData((d) => ({ ...d, [f.key]: e.target.value }))}
                          className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-800 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                          required={f.required}
                        >
                          <option value="">{f.placeholder}</option>
                          {f.options?.map((o) => (
                            <option key={o.value} value={o.value}>{o.label}</option>
                          ))}
                        </select>
                      )}
                    </div>
                  ))}
                  {error && <p className="col-span-2 text-sm text-red-600">{error}</p>}
                  <div className="col-span-2 flex justify-center pt-2">
                    <button
                      type="submit"
                      disabled={loading || !isStep1Complete}
                      className={`rounded-lg px-12 py-3 font-semibold transition-colors ${
                        isStep1Complete && !loading
                          ? 'bg-emerald-600 text-white hover:bg-emerald-500'
                          : 'cursor-not-allowed bg-slate-300 text-slate-500'
                      }`}
                    >
                      Next
                    </button>
                  </div>
                </form>
              )}

              {!isStep1 && stepData.questions && (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleStepSubmit(e, formData)
              }}
              className="space-y-8"
            >
              {stepData.questions.map((q) => (
                <div key={q.key} className="assessment-question rounded-xl border border-slate-200 bg-white p-6">
                  <p className="font-medium text-slate-800">{q.text}</p>
                  {q.sub_question && <p className="mt-1 text-sm text-slate-600">{q.sub_question}</p>}
                  {q.hint && <p className="mt-1 text-xs text-slate-500">{q.hint}</p>}
                  <div className="mt-4 space-y-2">
                    {q.type === 'radio' && q.options?.map((o) => (
                      <label key={o.value} className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 px-4 py-3 hover:bg-slate-50">
                        <input
                          type="radio"
                          name={q.key}
                          value={o.value}
                          checked={(formData[q.key] as string) === o.value}
                          onChange={(e) => setFormData((d) => ({ ...d, [q.key]: e.target.value }))}
                          className="h-4 w-4 text-emerald-600"
                        />
                        <span>{o.label}</span>
                      </label>
                    ))}
                    {q.type === 'checkbox' && q.options?.map((o) => (
                      <label key={o.value} className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 px-4 py-3 hover:bg-slate-50">
                        <input
                          type="checkbox"
                          checked={((formData[q.key] as string[]) || []).includes(o.value)}
                          onChange={(e) => {
                            const arr = ((formData[q.key] as string[]) || []).filter((x) => x !== o.value)
                            if (e.target.checked) arr.push(o.value)
                            setFormData((d) => ({ ...d, [q.key]: arr }))
                          }}
                          className="h-4 w-4 rounded border-slate-300 text-emerald-600"
                        />
                        <span>{o.label}</span>
                        {o.hasOther && (
                          <input
                            type="text"
                            placeholder="please specify (optional)"
                            className="ml-2 flex-1 rounded border border-slate-200 px-3 py-1.5 text-sm"
                            onChange={(ev) => setFormData((d) => ({ ...d, [`${q.key}_other`]: ev.target.value }))}
                          />
                        )}
                      </label>
                    ))}
                    {q.type === 'dropdown' && (
                      <select
                        value={(formData[q.key] as string) || ''}
                        onChange={(e) => setFormData((d) => ({ ...d, [q.key]: e.target.value }))}
                        className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-2.5"
                        required={q.required}
                      >
                        <option value="">select</option>
                        {q.options?.map((o) => (
                          <option key={o.value} value={o.value}>{o.label}</option>
                        ))}
                      </select>
                    )}
                  </div>
                </div>
              ))}
              {error && <p className="text-sm text-red-600">{error}</p>}
              <div className="flex justify-center">
                <button type="submit" disabled={loading} className="rounded-lg bg-emerald-600 px-12 py-3 font-semibold text-white hover:bg-emerald-500 disabled:opacity-70">
                  Next
                </button>
              </div>
            </form>
          )}
              </div>
            </div>
            <div className="assessment-prereg-banner">
              <ReadyForNextBanner />
            </div>
          </div>
        </div>
      </main>
    )
  }

  if (phase === 'complete') {
    return (
      <main className="assessment-page min-h-screen bg-slate-100 pt-24 pb-12">
        <div className="mx-auto max-w-xl px-6">
          <div className="assessment-card relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-10 shadow-lg text-center">
            <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/2 translate-y-1/2 rounded-full bg-emerald-400/20 blur-3xl" aria-hidden />
            <div className="relative">
              <h1 className="text-3xl font-semibold text-slate-800">Thank you!</h1>
              <p className="mt-4 text-slate-600">Your assessment has been submitted. Your Digital Assessment Report has been sent to your email.</p>
              <a href="/" className="mt-8 inline-block rounded-lg bg-emerald-600 px-8 py-3 font-semibold text-white hover:bg-emerald-500">
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return null
}
