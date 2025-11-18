# Microsoft SSO Setup Guide

This application uses Microsoft Azure Active Directory for authentication. Follow these steps to configure it:

## Required Environment Variables

You need to add the following environment variables to Replit Secrets (Tools → Secrets):

### Microsoft SSO Configuration
- `VITE_CLIENT_ID` - Your Azure AD application client ID
- `VITE_TENANT_ID` - Your Azure AD tenant ID
- `VITE_REDIRECT_URI` - Redirect URI (e.g., https://your-app.repl.co/home)

### Backend Configuration
- `VITE_API_URL` - Your backend API URL

### Optional Configuration
- `VITE_HTTP_REQUEST_TIMEOUT` - API request timeout (default: 5000ms)
- `VITE_VERSION` - Application version
- `VITE_IS_PRODUCTION` - Production flag (true/false)
- `VITE_ENABLE_SENTRY` - Enable Sentry error tracking (true/false)
- `VITE_HUB_NAME` - Hub name for real-time features
- `VITE_INVITATION_DEFAULT_MESSAGE` - Default invitation message

## How to Add Secrets in Replit

1. Open your Replit project
2. Click on "Tools" in the left sidebar
3. Select "Secrets"
4. Click "New Secret"
5. Add each variable name and value
6. The app will automatically use these values

## Azure AD Application Setup

If you haven't already set up an Azure AD application:

1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to "Azure Active Directory" → "App registrations"
3. Click "New registration"
4. Name your application (e.g., "Uptime Ticket System")
5. Select "Single-page application (SPA)" as the platform
6. Add your redirect URI (e.g., `https://your-repl-name.your-username.repl.co/home`)
7. After registration, copy the:
   - Application (client) ID → use as `VITE_CLIENT_ID`
   - Directory (tenant) ID → use as `VITE_TENANT_ID`
8. Under "API permissions", add:
   - Microsoft Graph → Delegated → User.Read

## Development vs Production

### Development (Replit)
- Use: `http://localhost:5000/home` as redirect URI for local testing
- Or use: Your Replit webview URL with `/home` path

### Production (Deployed)
- Update `VITE_REDIRECT_URI` to your production domain
- Make sure to add the production URL to Azure AD redirect URIs
- Set `VITE_IS_PRODUCTION=true`

## Testing the Setup

1. Add all required secrets to Replit
2. Restart the application (it will reload automatically)
3. Navigate to your app
4. Click "Sign in with Microsoft"
5. You should be redirected to Microsoft login
6. After successful login, you'll be redirected to /home

## Troubleshooting

### "AADSTS50011: No reply address is registered"
- Add your redirect URI to Azure AD app registration
- Make sure it matches exactly (including protocol and path)

### "Client ID is required"
- Check that `VITE_CLIENT_ID` is set in Replit Secrets
- Restart the application after adding secrets

### "Tenant ID is required"
- Check that `VITE_TENANT_ID` is set in Replit Secrets
- Restart the application after adding secrets

### Login works but redirects to wrong page
- Verify `VITE_REDIRECT_URI` matches your current environment
- Update Azure AD redirect URI to match

## Support

For more information about MSAL.js, visit:
- [MSAL React Documentation](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-react)
- [Azure AD App Registration Guide](https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app)
