import React from 'react'
import { useIsAuthenticated } from '@azure/msal-react'
import { Navigate, useLocation } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
  const isAuthenticated = useIsAuthenticated()
  const location = useLocation()

  if (!isAuthenticated) {
    // Store current location in state so SignIn can redirect back after login
    return <Navigate to="/signin" state={{ from: location }} replace />
  }

  return children
}
