# 🚀 Complete Guide to Upload to GitHub

## Your GitHub Repository
**URL**: https://github.com/dilshan-uptime/client-ticket-v2

---

## 📋 **Method 1: Using Replit Shell (Recommended)**

### Step 1: Open Replit Shell
Click on the **Shell** tab at the bottom of your Replit workspace.

### Step 2: Configure Git (One-time setup)
```bash
git config user.name "Dilshan"
git config user.email "your-email@example.com"
```

### Step 3: Add All Files to Git
```bash
git add .
```

### Step 4: Commit Your Changes
```bash
git commit -m "Initial commit: Microsoft SSO authentication system"
```

### Step 5: Add Remote Repository
```bash
git remote add origin https://github.com/dilshan-uptime/client-ticket-v2.git
```

### Step 6: Set Main Branch
```bash
git branch -M main
```

### Step 7: Push to GitHub
```bash
git push -u origin main
```

**Note**: GitHub will ask for authentication. You'll need to use a **Personal Access Token** instead of your password.

---

## 🔑 **Create GitHub Personal Access Token**

If you don't have a token yet:

1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token (classic)"**
3. Name it: `Replit Upload Token`
4. Check these permissions:
   - ✅ `repo` (Full control of private repositories)
5. Click **"Generate token"**
6. **Copy the token** (you'll use this as your password)

### When Pushing:
- **Username**: `dilshan-uptime`
- **Password**: Paste your Personal Access Token

---

## 📋 **Method 2: Download & Upload Manually**

If the shell method doesn't work:

### Step 1: Download Your Project
1. Find `ut-ticket-frontend.zip` in the Files panel (left side)
2. Right-click → **Download**

### Step 2: Extract the ZIP
Extract it on your computer

### Step 3: Upload to GitHub

**Option A: Using Git on Your Computer**
```bash
cd /path/to/extracted/workspace
git init
git add .
git commit -m "Initial commit: Microsoft SSO authentication"
git branch -M main
git remote add origin https://github.com/dilshan-uptime/client-ticket-v2.git
git push -u origin main
```

**Option B: Using GitHub Web Interface**
1. Go to: https://github.com/dilshan-uptime/client-ticket-v2
2. Click **"Add file"** → **"Upload files"**
3. Drag all your project files (except node_modules)
4. Click **"Commit changes"**

---

## 📋 **Method 3: Using Replit's Git Integration**

1. Click the **Git icon** (branch icon) on the left sidebar
2. Click **"Connect to GitHub"**
3. Authorize Replit to access your GitHub
4. Select your repository: `dilshan-uptime/client-ticket-v2`
5. Click **"Commit and Push"**

---

## ✅ **Verify Upload**

After uploading, check:
1. Go to: https://github.com/dilshan-uptime/client-ticket-v2
2. You should see all your files
3. Check that `.env` is **NOT** uploaded (protected by .gitignore)

---

## 🔐 **Important Files to Check**

**✅ Should be on GitHub:**
- All `src/` folder files
- `package.json`
- `README.md`
- `SETUP.md`
- `.env.example` (template only)
- `.gitignore`
- All config files

**❌ Should NOT be on GitHub:**
- `.env` (your real secrets)
- `node_modules/` (too large)
- `dist/` (build files)

---

## 🎯 **Quick Commands Summary**

```bash
# Configure git
git config user.name "Dilshan"
git config user.email "your-email@example.com"

# Add and commit
git add .
git commit -m "Initial commit: Microsoft SSO authentication"

# Connect to GitHub
git remote add origin https://github.com/dilshan-uptime/client-ticket-v2.git
git branch -M main

# Push to GitHub
git push -u origin main
```

---

## 🆘 **Troubleshooting**

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/dilshan-uptime/client-ticket-v2.git
```

### Error: "failed to push"
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### Authentication Failed
- Make sure you're using a **Personal Access Token**, not your password
- Generate a new token at: https://github.com/settings/tokens

---

## 📞 **Need Help?**

If you encounter any issues:
1. Check the error message in the Shell
2. Make sure you have access to the GitHub repository
3. Verify your Personal Access Token has the right permissions

---

**Your code is ready to go to GitHub!** 🚀
