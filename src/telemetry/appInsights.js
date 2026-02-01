import { ApplicationInsights } from '@microsoft/applicationinsights-web'
import { ReactPlugin } from '@microsoft/applicationinsights-react-js'

const connectionString = import.meta.env.VITE_APPINSIGHTS_CONNECTION_STRING || ''

const reactPlugin = new ReactPlugin()
let appInsights = null

if (connectionString) {
  try {
    appInsights = new ApplicationInsights({
      config: {
        connectionString,
        extensions: [reactPlugin],
        extensionConfig: {
          // You can add config for the React plugin here if needed.
          // [reactPlugin.identifier]: { history }
        },
      },
    })
    appInsights.loadAppInsights()
    console.log('Application Insights initialized')
  } catch (e) {
    console.warn('Application Insights initialization failed', e)
  }
} else {
  console.warn('VITE_APPINSIGHTS_CONNECTION_STRING is not set. App Insights disabled.')
}

export { appInsights, reactPlugin }
