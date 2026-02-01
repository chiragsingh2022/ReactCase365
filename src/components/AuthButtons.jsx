import React from "react"
import { useMsal, useIsAuthenticated } from "@azure/msal-react"
import { loginRequest } from "../authConfig"

import { DEFAULT_AUTH_FLOW } from "../config/constants"

// Auth flow configurable via VITE_AZURE_AUTH_FLOW (popup|redirect). Default is centralized in constants.
const AUTH_FLOW = import.meta.env.VITE_AZURE_AUTH_FLOW || DEFAULT_AUTH_FLOW

export function SignInButton() {
  const { instance } = useMsal()
  const handleLogin = () => {
    if (AUTH_FLOW === "redirect") {
      instance.loginRedirect(loginRequest).catch(e => console.error(e))
    } else {
      instance.loginPopup(loginRequest).catch(e => console.error(e))
    }
  }
  return <button onClick={handleLogin}>Sign in</button>
}

export function SignOutButton() {
  const { instance } = useMsal()
  const handleLogout = () => {
    if (AUTH_FLOW === "redirect") {
      instance.logoutRedirect().catch(e => console.error(e))
    } else {
      instance.logoutPopup().catch(e => console.error(e))
    }
  }
  return <button onClick={handleLogout}>Sign out</button>
}

export function AuthStatus() {
  const { accounts } = useMsal()
  const isAuthenticated = useIsAuthenticated()
  if (!isAuthenticated) return <p>Not signed in</p>
  const account = accounts[0]
  return (
    <div>
      <p>Signed in as: <strong>{account && account.username}</strong></p>
    </div>
  )
}

