# Deployment Guide - Portfolio Using React

Complete guide to deploy your portfolio to Vercel and configure all necessary services.

---

## 📋 Pre-Deployment Checklist

- ✅ Project builds successfully (`npm run build`)
- ✅ All environment variables are configured
- ✅ Repository is pushed to GitHub
- ✅ EmailJS credentials are ready

---

## 🚀 Step 1: Vercel Deployment

### Option A: Deploy via Vercel CLI (Fastest)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to project directory
cd c:\Users\dell\Desktop\react\portfolio

# Deploy to Vercel
vercel --prod
```

### Option B: Deploy via Vercel Dashboard (Recommended)

1. Go to [https://vercel.com/dashboard](https://vercel.com/dashboard)
2. Click **"New Project"**
3. Select **"Import Git Repository"**
4. Search for `portfolio-using-React`
5. Click **"Import"**
6. Vercel will auto-detect:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
7. Click **"Deploy"** ✅

Your portfolio will be available at: `https://portfolio-[random-id].vercel.app`

---

## 🌐 Step 2: Add Custom Domain (vrajportfolio)

### Using Vercel's Domain Registration

1. Go to your **Vercel Project Dashboard**
2. Click **"Settings"** → **"Domains"**
3. Click **"Add Domain"**
4. Enter your desired domain: `vrajportfolio.com` or `vrajportfolio.dev`
5. Choose registration method:
   - **Use Vercel's registrar** (Automatic DNS setup)
   - **Use external registrar** (Manual DNS configuration)

### If Using External Registrar (GoDaddy, Namecheap, etc.)

1. In Vercel Dashboard: **Settings** → **Domains**
2. Add your domain name
3. Copy the **Vercel nameservers**
4. In your domain registrar's control panel:
   - Navigate to DNS/Nameserver settings
   - Replace existing nameservers with Vercel's nameservers
5. Wait 24-48 hours for DNS propagation
6. Vercel will show a green checkmark when ready

### Domain Configuration Costs
- `.com` / `.dev` / `.app`: ~$12-15/year
- Premium domains may cost more

---

## 🔑 Step 3: Set Up EmailJS

### Get EmailJS Credentials

1. Go to [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)
2. Create a free account (if you haven't already)
3. In the dashboard, find:
   - **Service ID**: Click "Email Services" → Copy `service_xxxxx`
   - **Template ID**: Click "Email Templates" → Create new template → Copy `template_xxxxx`
   - **Public Key**: Click "Account" → Copy your Public Key

### Create EmailJS Template

1. Go to **Email Templates**
2. Click **"Create New Template"**
3. Set the template name (e.g., "Portfolio Contact Form")
4. Configure template variables:
   ```
   Subject: {{subject}}
   
   Name: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   ```
5. Set recipient email (your email)
6. Save template

### Add Environment Variables to Vercel

1. In **Vercel Project Dashboard**
2. Go to **Settings** → **Environment Variables**
3. Add these three variables:

| Name | Value |
|------|-------|
| `VITE_EMAILJS_SERVICE_ID` | `service_xxxxx` |
| `VITE_EMAILJS_TEMPLATE_ID` | `template_xxxxx` |
| `VITE_EMAILJS_PUBLIC_KEY` | Your Public Key |

4. Select environments: **Production, Preview, Development**
5. Click **"Save"**

### Configure Local Environment Variables

Create `.env.local` in your project root:
```bash
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

---

## ⚙️ Step 4: Environment Variables in Vercel

### From Vercel Dashboard

1. **Settings** → **Environment Variables**
2. Add all three EmailJS variables (see table above)
3. Mark for **Production** environment
4. Click **"Save"**
5. **Redeploy** to apply changes

### Verify Variables are Working

After deployment:
1. Visit your deployed site
2. Test the contact form
3. Check browser console for errors
4. If error says "Email service is not configured", verify variables were added

---

## 📊 Step 5: Performance Optimization

### Current Bundle Size

```
HTML:  0.82 kB (gzipped: 0.45 kB)
CSS:   32.06 kB (gzipped: 5.98 kB)
JS:    251.81 kB (gzipped: 79.03 kB)
```

### Optimization Tips Implemented

✅ **Code Splitting**: React, Router, EmailJS in separate chunks
✅ **Console Removal**: Production builds have console logs removed
✅ **CSS Optimization**: Tailwind purges unused styles
✅ **Minification**: Terser minifies all JavaScript
✅ **Lazy Loading**: Code-split components load on demand

### Further Optimization Options

1. **Image Optimization**:
   ```bash
   npm install -D sharp
   ```

2. **Enable Compression** (Vercel does this automatically)

3. **Monitor Performance**:
   - Use Vercel Analytics (Settings → Analytics)
   - Check Google PageSpeed Insights
   - Monitor Core Web Vitals

---

## 🔄 Step 6: Continuous Deployment

Vercel automatically deploys when you:
1. Push to main branch
2. Create pull requests
3. Merge pull requests

### Workflow

```
Local Development
     ↓
git commit & git push
     ↓
GitHub Repository Updated
     ↓
Vercel Auto-Detects Push
     ↓
Build & Deploy
     ↓
Live on vrajportfolio.com
```

---

## 🧪 Testing After Deployment

### 1. Test Homepage
- [ ] Page loads quickly
- [ ] Responsive design works on mobile
- [ ] All navigation links work

### 2. Test Contact Form
- [ ] Form validation works
- [ ] Submit button works
- [ ] Success message appears
- [ ] Email arrives in your inbox

### 3. Performance Checks
- [ ] Google PageSpeed: https://pagespeed.web.dev/
- [ ] Lighthouse Report (DevTools → Lighthouse)
- [ ] Load time under 3 seconds

### 4. SEO Basics
- [ ] Meta tags are present
- [ ] Title tag is set
- [ ] Favicon displays
- [ ] OG tags (optional but recommended)

---

## 🐛 Troubleshooting

### Contact Form Not Working

**Problem**: "Email service is not configured"

**Solution**:
1. Verify environment variables in Vercel dashboard
2. Redeploy project
3. Check browser console for errors
4. Verify EmailJS credentials are correct

### Domain Not Resolving

**Problem**: Domain takes >48 hours or doesn't work

**Solution**:
1. Check DNS propagation: https://www.whatsmydns.net/
2. Verify nameservers in registrar settings
3. Clear browser cache and try incognito mode
4. Wait full 48 hours before contacting support

### Build Fails

**Problem**: Deployment fails with build error

**Solution**:
1. Test build locally: `npm run build`
2. Check build logs in Vercel dashboard
3. Fix any TypeScript or syntax errors
4. Push fix to GitHub
5. Vercel will auto-redeploy

### Performance Issues

**Problem**: Site loads slowly

**Solution**:
1. Check Vercel Analytics
2. Optimize images
3. Enable caching headers
4. Monitor Core Web Vitals
5. Check for large npm dependencies

---

## 📚 Useful Links

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [React Best Practices](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [EmailJS Setup](https://www.emailjs.com/docs/introduction/how-it-works/)

---

## ✅ Final Checklist

- [ ] Vercel account created
- [ ] Repository linked to Vercel
- [ ] Custom domain purchased (vrajportfolio)
- [ ] Domain added to Vercel
- [ ] EmailJS account created
- [ ] EmailJS credentials added to .env.local
- [ ] Environment variables added to Vercel
- [ ] Site deployed to Vercel
- [ ] Custom domain pointing to Vercel
- [ ] Contact form tested and working
- [ ] Performance optimized
- [ ] README updated on GitHub

---

**🎉 Your portfolio is now live! Share it with the world!**

Questions? Check the troubleshooting section or contact Vercel support.
