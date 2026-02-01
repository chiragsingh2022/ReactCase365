# Production readiness checklist and changes made

This document lists production-oriented improvements added to the repo and recommendations for further hardening.

What I've added:

- Config & validation:
  - `src/authConfig.js` now validates key env vars and exposes `graphConfig`.
  - `.env.example` updated with `VITE_APP_ENV`, `VITE_AZURE_AUTH_FLOW`, `VITE_AZURE_CACHE_LOCATION`, and optional `VITE_SENTRY_DSN`.

- Resilience and UX:
  - `src/components/ErrorBoundary.jsx` — catches runtime errors and prevents white screens.
  - `src/components/Profile.jsx` — example to fetch the Microsoft Graph profile using acquired access token.
  - `src/components/AuthButtons.jsx` — supports `popup` or `redirect` flow and token acquisition fallback.

- Monitoring & CI:
  - Optional Application Insights initialization in `src/main.jsx` if `VITE_APPINSIGHTS_CONNECTION_STRING` is provided. Use Azure Monitor / Application Insights connection string for production telemetry.
  - Added `.github/workflows/ci.yml` for lint + build checks.

Recommended next improvements:

- Add E2E tests (Cypress) for login flows.
- Add a feature to restrict and validate allowed redirect URIs at build time.
- Secure hosting: configure server-side security headers (CSP, HSTS, X-Frame-Options) in your CDN or server (Netlify, Azure Static Web Apps, Nginx).
- Add a secrets pipeline (GitHub secrets) and store production DSNs in CI/CD securely.
- Add tests for `Profile` and auth flows using mocks (msal-browser can be mocked with the msw library).

Deployment options:
- Azure Static Web Apps or Azure Storage + CDN for static hosting, or Vercel/Netlify. Ensure the redirect URI in Azure matches deployed URL.

