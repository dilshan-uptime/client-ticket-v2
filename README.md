# UT-Ticket - Microsoft SSO Authentication

A modern React-based ticket management system with Microsoft Azure Active Directory Single Sign-On authentication.

## Features

- ✅ Microsoft SSO Authentication (Azure AD)
- ✅ Modern React 19 with TypeScript
- ✅ Redux Toolkit for state management
- ✅ Tailwind CSS styling with brand color #ee754e
- ✅ Protected routes with MSAL integration
- ✅ Responsive sidebar navigation
- ✅ Clean, professional UI/UX

## Prerequisites

Before you begin, ensure you have:
- Node.js 20+ installed
- Microsoft Azure account with app registration
- Your Azure AD Client ID and Tenant ID

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory (or use Replit Secrets):

```env
# Microsoft SSO Configuration
VITE_CLIENT_ID=your-microsoft-client-id
VITE_TENANT_ID=your-microsoft-tenant-id
VITE_REDIRECT_URI=http://localhost:5000/home

# Backend API Configuration
VITE_API_URL=https://your-backend-api.com

# Other Configuration (Optional)
VITE_HTTP_REQUEST_TIMEOUT=5000
VITE_VERSION=v1.0.0
VITE_IS_PRODUCTION=false
VITE_ENABLE_SENTRY=false
VITE_HUB_NAME=local_user_hub
VITE_INVITATION_DEFAULT_MESSAGE=This is sample message
```

### 3. Run Development Server

```bash
npm run dev
```

The application will start on `http://localhost:5000`

### 4. Build for Production

```bash
npm run build
```

## Azure AD Setup

### Step 1: Register Application

1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to **Azure Active Directory** → **App registrations**
3. Click **New registration**
4. Configure:
   - **Name**: UT-Ticket (or your preferred name)
   - **Supported account types**: Accounts in this organizational directory only
   - **Redirect URI**: 
     - Type: Single-page application (SPA)
     - URI: `http://localhost:5000/home` (for development)

### Step 2: Copy Credentials

After registration, copy these values to your `.env`:

- **Application (client) ID** → `VITE_CLIENT_ID`
- **Directory (tenant) ID** → `VITE_TENANT_ID`

### Step 3: Configure API Permissions

1. Go to **API permissions**
2. Click **Add a permission**
3. Select **Microsoft Graph**
4. Select **Delegated permissions**
5. Add: `User.Read`
6. Click **Grant admin consent** (if you have admin rights)

### Step 4: Add Redirect URIs

For production deployment:

1. Go to **Authentication**
2. Under **Single-page application**, add your production URLs:
   - Example: `https://your-app.repl.co/home`
   - Example: `https://your-domain.com/home`

## Project Structure

```
src/
├── app/                    # Core application
│   ├── component/         # App-level components
│   ├── container/         # Main app container
│   ├── pages/            # Page components
│   ├── redux/            # Redux store & slices
│   └── routes/           # Route definitions
├── components/           # Reusable UI components
│   ├── layout/          # Layout components (NavBar)
│   └── ui/              # Base UI components
├── config/              # App configuration
│   └── authConfig.ts    # MSAL configuration
├── hooks/               # Custom React hooks
│   └── useMsalAuth.ts  # MSAL authentication hook
├── modules/             # Feature modules
│   └── auth/           # Authentication module
│       ├── pages/      # Auth-related pages
│       └── routes/     # Auth routes
├── services/            # Services
│   ├── api/           # API clients
│   ├── logger/        # Logging
│   └── storage/       # Local storage
└── models/             # TypeScript type definitions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| VITE_CLIENT_ID | Yes | Azure AD Application Client ID |
| VITE_TENANT_ID | Yes | Azure AD Tenant ID |
| VITE_REDIRECT_URI | Yes | Redirect URI after authentication |
| VITE_API_URL | Yes | Backend API base URL |
| VITE_HTTP_REQUEST_TIMEOUT | No | API timeout in milliseconds |
| VITE_VERSION | No | Application version |
| VITE_IS_PRODUCTION | No | Production flag |
| VITE_ENABLE_SENTRY | No | Enable error tracking |
| VITE_HUB_NAME | No | SignalR hub name |
| VITE_INVITATION_DEFAULT_MESSAGE | No | Default invitation message |

## Deployment

### Replit Deployment

1. Add environment variables to Replit Secrets (Tools → Secrets)
2. Update `VITE_REDIRECT_URI` to your Replit URL + `/home`
3. Add the Replit URL to Azure AD redirect URIs
4. Click "Run" or use the deployment feature

### Other Platforms

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting platform
3. Ensure environment variables are configured
4. Update Azure AD redirect URIs to match your production URL

## Troubleshooting

### "AADSTS50011: No reply address is registered"

- Ensure redirect URI in `.env` matches exactly with Azure AD configuration
- Check that you added it under "Single-page application" platform type

### Login button doesn't work

- Verify `VITE_CLIENT_ID` and `VITE_TENANT_ID` are set correctly
- Check browser console for error messages
- Ensure popup blockers are disabled

### Blank page after login

- Check that `VITE_REDIRECT_URI` is correct
- Verify the redirect URI is added to Azure AD
- Open browser console to check for errors

### User info not displaying

- Ensure `User.Read` permission is granted in Azure AD
- Check that consent was given (admin or user)

## Technology Stack

- **Frontend**: React 19.2
- **Language**: TypeScript
- **Build Tool**: Vite 7.2
- **Styling**: Tailwind CSS 4.1
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM 7
- **Authentication**: @azure/msal-react & @azure/msal-browser
- **UI Components**: Radix UI
- **Forms**: Formik + Yup
- **HTTP Client**: Axios + RxJS

## Security

- Authentication tokens are stored in localStorage
- MSAL handles token refresh automatically
- Protected routes require authentication
- Logout clears all session data
- PKCE flow is used for SPA security

## Support

For issues or questions:

1. Check the [MSAL React Documentation](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-react)
2. Review [Azure AD Documentation](https://learn.microsoft.com/en-us/azure/active-directory/develop/)
3. Check browser console for error messages

## License

Proprietary - All rights reserved

## Brand Colors

- Primary: #ee754e
- Primary Hover: #d66540

---

Built with ❤️ by UT-Ticket Team
