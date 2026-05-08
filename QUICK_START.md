# ⚡ Quick Start Guide - Get Your Portfolio Running in 5 Minutes

## Step 1: Install Dependencies (1 minute)
```bash
npm install
```

## Step 2: Quick EmailJS Setup (2 minutes)

### Option A: Skip Email for Now (Quick Demo)
If you want to just run it without email functionality:
```bash
npm run dev
```
- Portfolio will work, but contact form will show a message asking you to set up EmailJS
- The form will still have the direct email link as fallback

### Option B: Set Up EmailJS (For Full Functionality)

1. **Go to [emailjs.com](https://www.emailjs.com/)**
   - Sign up (free account)
   - Verify your email

2. **Set up Email Service**:
   - Dashboard → Email Services
   - Click "Add Service"
   - Select "Gmail" (or your email provider)
   - Follow setup wizard
   - **Copy your Service ID** (looks like: `service_abc123xyz`)

3. **Create Email Template**:
   - Dashboard → Email Templates
   - Click "Create New Template"
   - Paste this template:
   ```
   Subject: {{subject}}
   
   Message from {{from_name}}
   Email: {{from_email}}
   
   {{message}}
   
   Reply to: {{reply_to}}
   ```
   - Click "Save"
   - **Copy your Template ID** (looks like: `template_abc123xyz`)

4. **Get Your Public Key**:
   - Dashboard → Account
   - **Copy Public Key**

## Step 3: Create Environment File (1 minute)

Create `.env.local` in your project root (same folder as package.json):

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=service_abc123xyz
VITE_EMAILJS_TEMPLATE_ID=template_abc123xyz
```

*Replace the values with what you copied above*

## Step 4: Update Your Email (30 seconds)

Open `src/Contact.jsx` and find line ~73:

```javascript
const templateParams = {
  to_email: 'your-email@gmail.com', // ← Change this to YOUR email
```

## Step 5: Start Development Server (30 seconds)

```bash
npm run dev
```

Visit `http://localhost:5173` - Your portfolio is now live! 🎉

---

## 🧪 Test Your Setup

1. Navigate to the **Contact** section
2. Fill out the form:
   - Name: Your Name
   - Email: test@example.com
   - Message: Test message
3. Click "Send Message"
4. Check your email for the message

You should receive the email within seconds!

---

## 🚀 Deploy to Production

### Option A: Deploy to Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

Then in Vercel Dashboard:
1. Go to your project settings
2. Environment Variables
3. Add the 3 EmailJS variables:
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
4. Redeploy

### Option B: Manual Deployment

1. Build: `npm run build`
2. Upload the `dist/` folder to your hosting provider

---

## ✅ Checklist

- [ ] Installed dependencies (`npm install`)
- [ ] Created EmailJS account
- [ ] Set up email service in EmailJS
- [ ] Created email template in EmailJS
- [ ] Created `.env.local` file with credentials
- [ ] Updated email address in `src/Contact.jsx`
- [ ] Started dev server (`npm run dev`)
- [ ] Tested contact form
- [ ] Updated social links (GitHub, LinkedIn)
- [ ] Ready to deploy!

---

## 🆘 Troubleshooting

**"Email not sending?"**
- Check that all three keys in `.env.local` are correct
- Make sure `.env.local` is in the root directory
- Restart dev server after creating `.env.local`
- Check browser console for errors (F12)

**"Form shows error message?"**
- Verify Service ID and Template ID are correct
- Check that email service is activated in EmailJS dashboard
- Make sure template variables match the template you created

**"Environment variables not loading?"**
- File must be named `.env.local` (not `.env`)
- Must be in root directory (same level as `package.json`)
- Restart dev server after creating file
- Variables must start with `VITE_` prefix

**"Still having issues?"**
- See [EMAIL_SETUP.md](./EMAIL_SETUP.md) for detailed instructions
- Review [IMPROVEMENTS.md](./IMPROVEMENTS.md) for what was changed
- Check the code comments in `src/services/email.js`

---

## 📚 Additional Resources

- [Full EmailJS Setup Guide](./EMAIL_SETUP.md)
- [All Changes & Improvements](./IMPROVEMENTS.md)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

---

**Your portfolio is ready! Start by running `npm run dev` now! 🚀**
