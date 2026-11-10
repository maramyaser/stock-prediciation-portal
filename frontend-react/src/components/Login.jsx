import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'
import axiosInstance from '../axiosInstance'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { setIsLoggedIn } = useContext(AuthContext)
  const navigate = useNavigate()

  async function handleLogin(event) {
    event.preventDefault()
    setLoading(true)
    setError('')
    try {
      const response = await axiosInstance.post('/token/', { username, password })
      localStorage.setItem('accessToken', response.data.access)
      localStorage.setItem('refreshToken', response.data.refresh)
      setIsLoggedIn(true)
      navigate('/dashboard')
    } catch {
      setError('Unable to sign in. Check your username and password.')
    } finally {
      setLoading(false)
    }
  }

  return <main className="auth-page page-shell"><div className="auth-aside"><span className="section-kicker">WELCOME BACK</span><h1>Your next insight <em>starts here.</em></h1><p>Stay on top of your research with a workspace made for the way you think.</p><div className="auth-decoration">↗<span>FOLLOW THE SIGNAL</span></div></div><div className="auth-card"><div className="auth-card-top"><span className="auth-symbol">✳</span><span className="section-kicker">MEMBER ACCESS</span></div><h2>Sign in</h2><p className="auth-subtitle">Welcome back. Enter your details to continue.</p><form onSubmit={handleLogin} className="auth-form"><label htmlFor="login-username">Username</label><input id="login-username" autoComplete="username" placeholder="Your username" required value={username} onChange={e => setUsername(e.target.value)} /><label htmlFor="login-password">Password</label><div className="password-field"><input id="login-password" type={showPassword ? 'text' : 'password'} autoComplete="current-password" placeholder="Enter password" required value={password} onChange={e => setPassword(e.target.value)} /><button type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</button></div>{error && <p className="form-error" role="alert">{error}</p>}<button className="button button-primary auth-submit" type="submit" disabled={loading}>{loading ? 'Signing in…' : 'Sign in'} <span>↗</span></button></form><p className="auth-switch">New here? <Link to="/register">Create an account</Link></p></div></main>
}