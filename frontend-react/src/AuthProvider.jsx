import { useState, useEffect, createContext } from 'react'

export const AuthContext = createContext(null)

export default function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem('accessToken'))
  useEffect(() => {
    const onExpired = () => setIsLoggedIn(false)
    window.addEventListener('auth:expired', onExpired)
    return () => window.removeEventListener('auth:expired', onExpired)
  }, [])
  return <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>{children}</AuthContext.Provider>
}
