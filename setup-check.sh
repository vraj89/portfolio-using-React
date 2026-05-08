#!/usr/bin/env bash

# 🚀 Portfolio Setup Checklist Script
# This script helps you verify all setup steps

echo "================================"
echo "🚀 Portfolio Setup Verification"
echo "================================"
echo ""

# Check 1: Node modules installed
echo "1️⃣ Checking if dependencies are installed..."
if [ -d "node_modules" ]; then
    echo "✅ node_modules found"
else
    echo "❌ node_modules not found - Run: npm install"
fi
echo ""

# Check 2: .env.local exists
echo "2️⃣ Checking .env.local file..."
if [ -f ".env.local" ]; then
    echo "✅ .env.local exists"
    echo "   (Make sure it contains:"
    echo "    - VITE_EMAILJS_PUBLIC_KEY"
    echo "    - VITE_EMAILJS_SERVICE_ID"
    echo "    - VITE_EMAILJS_TEMPLATE_ID)"
else
    echo "⚠️  .env.local not found"
    echo "   Copy .env.example to .env.local and fill in values"
    echo "   Command: cp .env.example .env.local"
fi
echo ""

# Check 3: Contact.jsx exists
echo "3️⃣ Checking Contact.jsx..."
if [ -f "src/Contact.jsx" ]; then
    echo "✅ Contact.jsx found"
else
    echo "❌ src/Contact.jsx not found"
fi
echo ""

# Check 4: Email service exists
echo "4️⃣ Checking email service..."
if [ -f "src/services/email.js" ]; then
    echo "✅ Email service found at src/services/email.js"
else
    echo "❌ Email service not found"
fi
echo ""

# Check 5: package.json has EmailJS
echo "5️⃣ Checking EmailJS dependency..."
if grep -q "@emailjs/browser" package.json; then
    echo "✅ EmailJS found in package.json"
else
    echo "⚠️  EmailJS not in package.json"
    echo "   Run: npm install @emailjs/browser"
fi
echo ""

# Check 6: Guide files exist
echo "6️⃣ Checking documentation..."
files=("QUICK_START.md" "EMAIL_SETUP.md" "IMPROVEMENTS.md" "PORTFOLIO_READY.md")
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file found"
    else
        echo "❌ $file not found"
    fi
done
echo ""

# Summary
echo "================================"
echo "📋 Next Steps:"
echo "================================"
echo ""
echo "1. Run: npm install"
echo "2. Copy: cp .env.example .env.local"
echo "3. Edit: .env.local with your EmailJS keys"
echo "4. Edit: src/Contact.jsx line ~73 with your email"
echo "5. Run: npm run dev"
echo "6. Visit: http://localhost:5173"
echo ""
echo "For detailed help, see QUICK_START.md"
echo ""
