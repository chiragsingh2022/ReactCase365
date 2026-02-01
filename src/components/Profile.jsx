import React, { useState } from "react"
import { useMsal, useIsAuthenticated, AuthenticatedTemplate } from "@azure/msal-react"
import { acquireToken } from "../utils/authUtils"
import { graphConfig } from "../authConfig"

export default function Profile() {
  const { instance, accounts } = useMsal()
  const isAuthenticated = useIsAuthenticated()
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchProfile = async () => {
    setLoading(true)
    setError(null)
    try {
      const token = await acquireToken(instance, accounts[0], ["User.Read"])
      const res = await fetch(graphConfig.graphMeEndpoint, {
        headers: { Authorization: `Bearer ${token}` },
      })
      if (!res.ok) throw new Error(`Graph request failed: ${res.status}`)
      const data = await res.json()
      setProfile(data)
    } catch (e) {
      setError(e.message || String(e))
    } finally {
      setLoading(false)
    }
  }

  if (!isAuthenticated) return <p>Please sign in to view profile</p>

  return (
    <AuthenticatedTemplate>
      <div>
        <h3>Profile</h3>
        <button onClick={fetchProfile} disabled={loading}>{loading ? 'Loading...' : 'Load profile'}</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {profile && (
          <pre style={{ whiteSpace: 'pre-wrap', maxWidth: 600 }}>{JSON.stringify(profile, null, 2)}</pre>
        )}
      </div>
    </AuthenticatedTemplate>
  )
}
