# Azure AD integration (MSAL)

This project includes a minimal Azure AD integration using MSAL.

Quick steps:

1. Register an app in Azure AD (Azure portal → App registrations).
2. Set Redirect URI to your dev URL (e.g. `http://localhost:5173`).
3. Copy the **Application (client) ID** and **Directory (tenant) ID** into a local `.env` using the provided `.env.example`:

   VITE_AZURE_CLIENT_ID=your-client-id-here

   VITE_AZURE_TENANT_ID=your-tenant-id-or-domain

4. Run the app: `npm install` (done) and `npm run dev`.

Files added/updated:

- `src/authConfig.js` — MSAL configuration
- `src/components/AuthButtons.jsx` — Sign in, sign out, and status components
- `src/main.jsx` — wraps app with `MsalProvider`
- `.env.example` — env var placeholders

Use the sign in / sign out buttons in the app UI to authenticate with Azure AD.
