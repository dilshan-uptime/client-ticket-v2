# UT Ticket Frontend

## Overview
A React-based ticket management system with user authentication and authorization. This frontend application provides a modern interface for managing tickets with features including user login, signup, and role-based access control.

## Technology Stack
- **Framework**: React 19.2 with TypeScript
- **Build Tool**: Vite 7.2
- **Styling**: Tailwind CSS 4.1 with Radix UI components
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **Form Handling**: Formik with Yup validation
- **HTTP Client**: Axios with RxJS observables
- **UI Components**: Custom components with Radix UI primitives

## Project Structure
```
src/
├── app/                    # Core application logic
│   ├── component/         # App-level components (ScrollToTop, SideBar)
│   ├── container/         # App container and layout components
│   ├── pages/            # Main pages (NotFoundPage)
│   ├── redux/            # Redux store, slices (auth, app)
│   └── routes/           # Route definitions
├── assets/               # Static assets
├── components/           # Reusable UI components
│   ├── layout/          # Layout components (NavBar)
│   └── ui/              # Base UI components (button, input, dialog, etc.)
├── constants/           # Application constants (API, storage keys, user roles)
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── models/             # TypeScript type definitions
├── modules/            # Feature modules
│   └── auth/          # Authentication module
│       ├── forms/     # Login and signup forms
│       ├── pages/     # Auth pages (Login, SignUp, Ticket, Home)
│       └── routes/    # Auth routes
├── services/           # API and utility services
│   ├── api/          # API clients (base-api, user-api)
│   ├── logger/       # Logging utilities
│   ├── other/        # Error handling, toaster, modal mapping
│   └── storage/      # Local storage service
└── shared/            # Shared components
    ├── forms/        # Form components (AppInput, AppAdvanceDropdown)
    ├── global-modal/ # Global modal system
    └── private-route/ # Route protection
```

## Key Features
- User authentication (login/signup)
- JWT token management with automatic refresh
- Role-based access control
- Protected routes
- Global modal system
- Form validation
- Error handling with toast notifications
- Responsive design with Tailwind CSS

## Environment Variables
Required environment variables (set in `.env`):
- `VITE_API_URL`: Backend API base URL
- `VITE_FRONTEND_URL`: Frontend application URL

## Development
The application runs on port 5000 and is configured for the Replit environment with:
- Host: 0.0.0.0 (to allow external access)
- HMR configured for Replit's proxy
- Path aliases configured for clean imports (@/)

## Authentication Flow
1. User submits credentials via LoginForm/SignUpForm
2. API call made to backend using Axios
3. JWT token received and stored in localStorage
4. Redux state updated with auth information
5. Token automatically attached to subsequent requests
6. Token refresh handled automatically on 401/403 errors

## Recent Changes
- 2025-11-18: Microsoft SSO Authentication Implementation
  - Installed and configured @azure/msal-react and @azure/msal-browser
  - Created MSAL configuration with tenant and client ID support
  - Implemented SsoLoginPage with Microsoft sign-in button
  - Created custom useMsalAuth hook for authentication management
  - Updated Redux auth slice to work with Microsoft SSO
  - Removed username/password login and sign-up pages
  - Created new HomePage with user profile information
  - Updated NavBar with logout functionality using MSAL
  - Applied brand color #ee754e throughout the UI
  - Configured deployment for static site build
  - Created .env.example for environment variable documentation

- 2025-11-18: Initial Replit setup
  - Configured Vite for Replit environment (port 5000, host 0.0.0.0)
  - Added .gitignore for Node.js project
  - Installed all dependencies

## User Preferences
- Primary brand color: #ee754e
- Authentication method: Microsoft SSO only (no traditional login/signup)
- Clean, modern UI with standard user experience

## Notes
- Backend API URL needs to be configured in .env file
- Application uses snake_case to camelCase conversion for API responses
- Token refresh is handled automatically in axios interceptors
