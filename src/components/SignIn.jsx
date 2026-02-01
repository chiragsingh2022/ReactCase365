import React, { useEffect } from 'react'
import { useIsAuthenticated } from '@azure/msal-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { SignInButton } from './AuthButtons'

export default function SignIn() {
  const isAuthenticated = useIsAuthenticated()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      const from = location.state?.from?.pathname || '/'
      navigate(from, { replace: true })
    }
  }, [isAuthenticated, location, navigate])

  return (
    <div style={{ padding: 20 }}>
      <h2>Sign in</h2>
      <p>You need to sign in to access this page.</p>
      <SignInButton />
    </div>
  )
}
