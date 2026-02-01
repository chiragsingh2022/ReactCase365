import { DEFAULT_SCOPES, DEFAULT_CACHE_LOCATION, GRAPH_ME_ENDPOINT } from "./config/constants"

// MSAL configuration
const clientId = import.meta.env.VITE_AZURE_CLIENT_ID || ""
const tenantId = import.meta.env.VITE_AZURE_TENANT_ID || "common"
const redirectUri = import.meta.env.VITE_AZURE_REDIRECT_URI || window.location.origin

if (!clientId) {
  console.error("VITE_AZURE_CLIENT_ID is not set. Authentication will fail. See .env.example for setup.")
}

export const msalConfig = {
  auth: {
    clientId,
    authority: `https://login.microsoftonline.com/${tenantId}`,
    redirectUri,
  },
  cache: {
    cacheLocation: import.meta.env.VITE_AZURE_CACHE_LOCATION || DEFAULT_CACHE_LOCATION, // sessionStorage recommended for SPAs
    storeAuthStateInCookie: false,
  },
}

// Scopes used for acquiring tokens to call protected APIs (Microsoft Graph by default)
export const loginRequest = {
  scopes: import.meta.env.VITE_AZURE_SCOPES ? import.meta.env.VITE_AZURE_SCOPES.split(',') : DEFAULT_SCOPES,
}

export const graphConfig = {
  graphMeEndpoint: import.meta.env.VITE_GRAPH_ME_ENDPOINT || GRAPH_ME_ENDPOINT,
}
