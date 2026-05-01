# 🔧 Vercel Deployment Fix Guide

## ✅ What I Fixed

1. **Updated vercel.json** - Fixed environment variable naming and added SPA routing rewrites
2. **Added route rewrites** - Critical for React Router to work properly on all pages

---

## 🚀 Steps to Redeploy on Vercel

### Step 1: Push Changes to GitHub
```bash
cd c:\Users\dell\Desktop\react\portfolio
git add .
git commit -m "Fix Vercel deployment configuration"
git push origin main
```

### Step 2: Set Environment Variables in Vercel Dashboard

1. Go to [https://vercel.com/dashboard](https://vercel.com/dashboard)
2. Click on your **portfolio** project
3. Navigate to **Settings** → **Environment Variables**
4. Add these three variables (get values from EmailJS):

| Variable Name | Value | Source |
|---|---|---|
| `VITE_EMAILJS_SERVICE_ID` | your_service_id | [EmailJS Dashboard](https://dashboard.emailjs.com/admin) |
| `VITE_EMAILJS_TEMPLATE_ID` | your_template_id | [EmailJS Dashboard](https://dashboard.emailjs.com/admin) |
| `VITE_EMAILJS_PUBLIC_KEY` | your_public_key | [EmailJS Dashboard](https://dashboard.emailjs.com/admin) |

### Step 3: Trigger Redeployment

**Option A: Automatic (Recommended)**
- Just pushing to GitHub will trigger automatic deployment

**Option B: Manual Redeploy**
1. Go to Vercel Dashboard → Your Project
2. Click **"Deployments"** tab
3. Find the latest deployment
4. Click the **"..."** menu → **"Redeploy"**

### Step 4: Verify Deployment
- Wait for build to complete (usually 1-2 minutes)
- Check the deployment status - should show ✅ **Production**
- Visit your portfolio URL

---

## 🆘 If Still Getting 404 Error

Try these troubleshooting steps:

### Check Build Logs
1. Go to your Vercel Project
2. Click **"Deployments"**
3. Click on the failed deployment
4. Scroll to **"Build Logs"** to see exact errors

### Common Issues & Solutions

| Issue | Solution |
|---|---|
| **Build fails with dependency error** | Run `npm install` locally and test `npm run build` |
| **Missing env variables** | Make sure all 3 EmailJS variables are set in Vercel Settings |
| **React Router 404 on refresh** | ✅ Fixed by rewrites in vercel.json |
| **Old cache showing error** | Clear browser cache or use Incognito mode |

### Force Full Rebuild
```bash
# Option 1: Redeploy from CLI
npm install -g vercel
vercel --prod

# Option 2: Delete and redeploy from dashboard
# 1. Go to Settings → Danger Zone → Delete Project
# 2. Re-import from GitHub
```

---

## 📧 EmailJS Setup (If Not Done)

1. Go to [https://dashboard.emailjs.com](https://dashboard.emailjs.com)
2. Sign up/Login
3. Create a new **Service** (connect Gmail, Outlook, etc.)
4. Create a new **Email Template**
5. Copy the **Service ID**, **Template ID**, and **Public Key**
6. Paste these into Vercel Environment Variables

---

## ✨ After Successful Deployment

- Your portfolio will be at: `https://vraj89s-projects.vercel.app`
- Contact form should work properly
- All pages should be accessible via React Router

If you still see the error after these steps, let me know the exact error code from your Vercel deployment logs!
