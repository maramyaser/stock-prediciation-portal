import { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

export default function Header() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  function logout() {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsLoggedIn(false)
    setMenuOpen(false)
    navigate('/login')
  }

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <Link className="brand" to="/" onClick={() => setMenuOpen(false)}>
          <span className="brand-icon" aria-hidden="true">↗</span>
          <span>stock<span className="brand-accent">wise</span><small className="brand-dot">.</small></span>
        </Link>
        <button className="mobile-toggle" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>Overview</NavLink>
          {isLoggedIn && <NavLink to="/dashboard" onClick={() => setMenuOpen(false)}>Workspace</NavLink>}
          <span className="nav-spacer" />
          {isLoggedIn ? (
            <>
              <Link className="nav-cta" to="/dashboard" onClick={() => setMenuOpen(false)}>Open dashboard <span>↗</span></Link>
              <button className="nav-logout" type="button" onClick={logout}>Log out</button>
            </>
          ) : (
            <>
              <Link className="nav-login" to="/login" onClick={() => setMenuOpen(false)}>Log in</Link>
              <Link className="nav-cta" to="/register" onClick={() => setMenuOpen(false)}>Get started <span>↗</span></Link>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}