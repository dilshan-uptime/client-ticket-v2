import { LogLevel, type Configuration } from '@azure/msal-browser';

/**
 * IMPORTANT: Azure AD Redirect URI Configuration
 * 
 * After changing VITE_REDIRECT_URI, you MUST update your Azure AD app registration:
 * 1. Go to Azure Portal (https://portal.azure.com)
 * 2. Navigate to Azure AD > App registrations > Your App
 * 3. Go to Authentication
 * 4. Under "Single-page application", update redirect URI to match VITE_REDIRECT_URI
 *    - Development: https://your-replit-url/ticket
 *    - Production: https://your-domain/ticket
 * 5. Click Save
 */

export const msalConfig: Configuration = {
  auth: {
    clientId: import.meta.env.VITE_CLIENT_ID || '',
    authority: `https://login.microsoftonline.com/${import.meta.env.VITE_TENANT_ID}`,
    redirectUri: import.meta.env.VITE_REDIRECT_URI || window.location.origin + '/ticket',
    postLogoutRedirectUri: '/',
    navigateToLoginRequestUrl: false,
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
        }
      },
    },
  },
};

export const loginRequest = {
  scopes: ['User.Read'],
};
