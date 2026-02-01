import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { PublicClientApplication } from "@azure/msal-browser"
import { MsalProvider } from "@azure/msal-react"
import { msalConfig } from "./authConfig"
import ErrorBoundary from './components/ErrorBoundary'
import { ThemeProvider } from './contexts/ThemeContext'

// Application Insights (optional; set VITE_APPINSIGHTS_CONNECTION_STRING in production only)
import { AppInsightsErrorBoundary } from '@microsoft/applicationinsights-react-js'
import { appInsights } from './telemetry/appInsights'

const msalInstance = new PublicClientApplication(msalConfig)

import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MsalProvider instance={msalInstance}>
      <ThemeProvider>
        <BrowserRouter>
          {/* If App Insights is configured use its error boundary which captures errors and traces; fallback to our ErrorBoundary. */}
          {appInsights ? (
            <AppInsightsErrorBoundary appInsights={appInsights}>
              <ErrorBoundary>
                <App />
              </ErrorBoundary>
            </AppInsightsErrorBoundary>
          ) : (
            <ErrorBoundary>
              <App />
            </ErrorBoundary>
          )}
        </BrowserRouter>
      </ThemeProvider>
    </MsalProvider>
  </StrictMode>,
)
