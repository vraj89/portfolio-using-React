# Email Setup Instructions

## Setting Up EmailJS for Your Portfolio

This portfolio now includes a functional contact form that can send emails directly from the browser using **EmailJS** (no backend required).

### Step 1: Install Dependencies

```bash
npm install
```

The `@emailjs/browser` package has already been added to package.json.

### Step 2: Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 3: Set Up Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add Service**
3. Choose **Gmail** (or your preferred email provider)
4. Follow the instructions to connect your email
5. Copy your **Service ID** (e.g., `service_abc123xyz`)

### Step 4: Create an Email Template

1. In the EmailJS dashboard, go to **Email Templates**
2. Click **Create New Template**
3. Use this template:

```
Template ID: portfolio_contact (or your chosen name)

Subject: {{subject}}

Message from {{from_name}}

Email: {{from_email}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

4. Copy your **Template ID**

### Step 5: Get Your Public Key

1. Go to **Account Settings** in EmailJS
2. Copy your **Public Key**

### Step 6: Set Environment Variables

Create a `.env.local` file in your project root (same level as `package.json`):

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=service_abc123xyz
VITE_EMAILJS_TEMPLATE_ID=portfolio_contact
```

### Step 7: Update Your Email

Open `src/services/email.js` and update the `to_email`:

```javascript
const templateParams = {
  to_email: 'your-email@gmail.com', // Change this to your email
  // ... rest of template
};
```

### Step 8: Test Your Setup

1. Run your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the Contact section
3. Fill out the form and submit
4. Check your email to confirm it works!

## Troubleshooting

### Emails not sending?
- Verify all three IDs (Public Key, Service ID, Template ID) are correct
- Check that your email service is activated in EmailJS dashboard
- Look at browser console for error messages (F12)

### Template Variables not working?
- Ensure template parameter names match exactly
- Variables should be in `{{double braces}}`

### CORS Issues?
- Make sure you're using the correct Public Key
- EmailJS handles CORS, so this shouldn't be an issue with proper setup

## Alternative: Using Backend Service

If you prefer not to use EmailJS, you can:

1. Set up a backend service (Node.js/Express, Python/Flask, etc.)
2. Use the `sendEmailViaBackend` function in `src/services/email.js`
3. Implement an API endpoint at `/api/send-email`

## Security Notes

- Your public key is exposed in the browser (this is intentional in EmailJS)
- For production, consider limiting your service to specific domains in EmailJS settings
- Never commit `.env.local` files with real credentials to git

For more help, visit [EmailJS Documentation](https://www.emailjs.com/docs/)
