// Centralized application constants and defaults
export const APP_NAME = "CASE"

export const DEFAULT_AUTH_FLOW = "popup" // 'popup' or 'redirect'
export const DEFAULT_SCOPES = ["User.Read"]
export const DEFAULT_CACHE_LOCATION = "sessionStorage"
export const GRAPH_ME_ENDPOINT = "https://graph.microsoft.com/v1.0/me"

// Feature flags / timeouts
export const API_TIMEOUT_MS = 15000

// Env var keys (for reference)
export const ENV = {
  APPINSIGHTS_CONNECTION_STRING: "VITE_APPINSIGHTS_CONNECTION_STRING",
  AZURE_CLIENT_ID: "VITE_AZURE_CLIENT_ID",
  AZURE_TENANT_ID: "VITE_AZURE_TENANT_ID",
  AZURE_REDIRECT_URI: "VITE_AZURE_REDIRECT_URI",
  AZURE_AUTH_FLOW: "VITE_AZURE_AUTH_FLOW",
}
