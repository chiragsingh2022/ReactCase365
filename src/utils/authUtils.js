export async function acquireToken(instance, account, scopes = ["User.Read"]) {
  try {
    const request = { account, scopes }
    const response = await instance.acquireTokenSilent(request)
    return response.accessToken
  } catch (e) {
    console.warn("acquireTokenSilent failed, attempting interactive acquisition", e)
    try {
      const response = await instance.acquireTokenPopup({ scopes })
      return response.accessToken
    } catch (err) {
      console.error("Interactive token acquisition failed", err)
      throw err
    }
  }
}
