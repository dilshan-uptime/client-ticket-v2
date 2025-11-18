# Azure AD Redirect URI Update

## Important: Update Required in Azure Portal

After deploying this application, you **MUST** update the redirect URI in Azure AD app registration.

### Current Redirect URI
The application now redirects to `/ticket` after successful SSO login (changed from `/home`).

### Steps to Update Azure AD:

1. **Go to Azure Portal**
   - Navigate to: https://portal.azure.com

2. **Open App Registrations**
   - Go to **Azure Active Directory**
   - Click on **App registrations**
   - Select your application

3. **Update Redirect URIs**
   - Click on **Authentication** in the left menu
   - Under **Single-page application** section
   - Update or add the new redirect URI:

### For Replit Development:
```
https://client-ticket-v2.dilshansandaru2.repl.co/ticket
```

### For Local Development:
```
http://localhost:5000/ticket
```

### For Production:
```
https://your-production-domain.com/ticket
```

4. **Remove Old Redirect URI** (optional)
   - You can remove the old `/home` redirect URI if no longer needed
   - Old URI: `https://your-domain/home`

5. **Click Save**
   - Don't forget to save your changes!

---

## Environment Variables

Make sure your `.env` file (or Replit Secrets) has:

```env
VITE_REDIRECT_URI=https://your-domain/ticket
```

**Important:** The `VITE_REDIRECT_URI` in your environment must **exactly match** the redirect URI registered in Azure AD.

---

## Testing

After updating:
1. Sign out of the application
2. Clear browser cache/cookies
3. Try signing in again
4. You should land on the Ticket Dashboard with the navbar visible

---

## Troubleshooting

### Error: "redirect_uri_mismatch"
- **Cause**: Azure AD redirect URI doesn't match `VITE_REDIRECT_URI`
- **Fix**: Double-check both values are identical

### Stuck on Login Page
- **Cause**: Redirect URI not registered in Azure AD
- **Fix**: Add the redirect URI in Azure Portal > Authentication

### 404 Error After Login
- **Cause**: Route doesn't exist
- **Fix**: Ensure `/ticket` route is defined in your application
