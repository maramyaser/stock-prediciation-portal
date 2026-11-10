import { useState } from 'react'
import { Link } from 'react-router-dom'
import axiosInstance from '../axiosInstance'

export default function Register() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  async function handleRegistration(event) {
    event.preventDefault()
    setErrors({})
    setSuccess(false)
    setLoading(true)
    try {
      await axiosInstance.post('/register/', { username, email, password })
      setSuccess(true)
    } catch (error) {
      setErrors(error.response?.data || { general: 'Registration failed. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return <main className="auth-page page-shell"><div className="auth-aside"><span className="section-kicker">START YOUR JOURNEY</span><h1>Clarity is <em>a good investment.</em></h1><p>A cleaner way to explore markets is just one account away.</p><div className="auth-decoration">✳<span>MAKE YOUR NEXT MOVE</span></div></div><div className="auth-card"><div className="auth-card-top"><span className="auth-symbol">↗</span><span className="section-kicker">JOIN THE WORKSPACE</span></div><h2>Create account</h2><p className="auth-subtitle">A few details and you're on your way.</p><form onSubmit={handleRegistration} className="auth-form"><label htmlFor="register-username">Username</label><input id="register-username" autoComplete="username" placeholder="Choose a username" required value={username} onChange={e => setUsername(e.target.value)} />{errors.username && <p className="form-error">{String(errors.username)}</p>}<label htmlFor="register-email">Email address</label><input id="register-email" type="email" autoComplete="email" placeholder="you@example.com" required value={email} onChange={e => setEmail(e.target.value)} />{errors.email && <p className="form-error">{String(errors.email)}</p>}<label htmlFor="register-password">Password</label><input id="register-password" type="password" autoComplete="new-password" minLength={8} placeholder="At least 8 characters" required value={password} onChange={e => setPassword(e.target.value)} />{errors.password && <p className="form-error">{String(errors.password)}</p>}{errors.general && <p className="form-error" role="alert">{errors.general}</p>}{success && <p className="form-success" role="status">Account created! <Link to="/login">Sign in now →</Link></p>}<button className="button button-primary auth-submit" disabled={loading} type="submit">{loading ? 'Creating account…' : 'Create account'} <span>↗</span></button></form><p className="auth-switch">Already have an account? <Link to="/login">Sign in</Link></p></div></main>
}