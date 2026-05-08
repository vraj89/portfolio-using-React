# 🚀 Professional React Portfolio

A modern, responsive personal portfolio website built with **React**, **Vite**, and **Tailwind CSS**. Showcasing projects, skills, and experience with a sleek, professional design optimized for recruiters.

![React](https://img.shields.io/badge/React-19.2.4-blue?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-8.0.4-purple?style=flat-square&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.2.2-teal?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Features

- **Professional Design** - Clean, modern interface optimized for recruiters
- **Responsive Layout** - Perfect viewing experience on all devices
- **Functional Contact Form** - Direct email integration with EmailJS
- **One-Page Navigation** - Smooth scrolling through all sections
- **Project Showcase** - Detailed project cards with features and technologies
- **Skills Display** - Organized skill categories with proficiency levels
- **Education Timeline** - Academic background and certifications
- **Performance Optimized** - Fast load times with Vite
- **Mobile Friendly** - Responsive hamburger menu for mobile devices
- **Loading Animation** - Professional loading screen
- **SEO Optimized** - Proper meta tags and structure
- **Accessible** - WCAG accessibility standards

## 📋 Sections

- **Home** - Professional introduction with call-to-action buttons
- **About** - Background, expertise areas, and technical skills
- **Education** - Academic qualifications and learning highlights
- **Skills** - Organized technical skills with proficiency levels
- **Projects** - Featured projects with key features and technologies
- **Contact** - Direct email form and social media links

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.4
- **Build Tool**: Vite 8.0.4
- **Styling**: Tailwind CSS 4.2.2
- **Routing**: React Router DOM 7.14.0
- **Email Service**: EmailJS 4.3.1 (for contact form)
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vraj89/portfolio-using-React.git
cd portfolio-using-React
```

2. Install dependencies:
```bash
npm install
```

3. **Configure EmailJS (for contact form)**:
   - Create a `.env.local` file in the root directory
   - Copy the template from `.env.example`
   - Add your EmailJS credentials (see [EMAIL_SETUP.md](./EMAIL_SETUP.md) for detailed instructions):
     ```
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     ```

4. Update your contact information:
   - Open `src/Contact.jsx`
   - Replace `vrajvaghela89@gmail.com` with your email address
   - Update LinkedIn and GitHub URLs in the Contact component

5. Start the development server:
```bash
npm run dev
```

The application will run at `http://localhost:5173`

### Email Setup (EmailJS)

For detailed instructions on setting up the contact form with EmailJS, see [EMAIL_SETUP.md](./EMAIL_SETUP.md)

Quick start:
1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Create an email service and template
3. Add your credentials to `.env.local`
4. Done! Your contact form will work immediately

## 📦 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm lint
```

## 🌐 Deployment

This project is optimized for deployment on **Vercel**.

### Quick Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and import your repository
4. Add environment variables in Vercel dashboard:
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
5. Click "Deploy"

Your portfolio will be live! 🎉

### Vercel CLI Deployment

```bash
npm i -g vercel
vercel
```

**Note**: Make sure to add environment variables in Vercel dashboard after deployment.

## 📂 Project Structure

```
portfolio-using-React/
├── public/
│   └── vite.svg
├── src/
│   ├── services/
│   │   └── email.js          # EmailJS integration
│   ├── Home.jsx              # Landing page
│   ├── About.jsx             # About section
│   ├── Education.jsx         # Education section
│   ├── Skills.jsx            # Skills section
│   ├── project.jsx           # Projects showcase
│   ├── Contact.jsx           # Contact form
│   ├── Navbar.jsx            # Navigation bar
│   ├── MobileMenu.jsx        # Mobile navigation
│   ├── LoadingScreen.jsx     # Loading animation
│   ├── App.jsx               # Main app component
│   ├── App.css               # Main styles
│   ├── index.css             # Global styles
│   ├── projectsData.js       # Projects data
│   └── main.jsx              # React entry point
├── .env.example              # Environment variables template
├── EMAIL_SETUP.md            # Email configuration guide
├── package.json              # Dependencies
├── vite.config.js            # Vite configuration
├── index.html                # HTML entry point
├── eslint.config.js          # ESLint rules
└── README.md                 # This file
│   ├── main.jsx              # Entry point
│   ├── index.css             # Global styles
│   ├── projectsData.js       # Project data (imported from external file)
│   └── context/              # React context providers
│       └── ThemeContext.jsx
├── .env.example              # Environment variables template
├── .env.local                # Local environment variables (gitignored)
├── .vercelignore             # Vercel ignore file
├── vite.config.js            # Vite configuration
├── package.json              # Dependencies and scripts
├── README.md                 # This file
└── LICENSE                   # MIT License
```

## 🔧 Configuration

### Tailwind CSS

Configured with Tailwind's Vite plugin for optimal performance. Custom colors and utilities can be found in `tailwind.config.cjs` (if present) or via the Vite plugin.

### Vite Config

Pre-configured for React with Fast Refresh support. Supports environment variables and building for production.

### ESLint

Includes ESLint configuration for code quality and consistency. Follows Airbnb-based rules with React hooks plugin.

### Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID | `service_xxxxx` |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID | `template_xxxxx` |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key | `user_xxxxx` |

## 💌 Contact Form Setup

To enable the contact form, configure your EmailJS credentials in the `.env.local` file as described above. The form uses EmailJS to send emails without a backend.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork, modify, and use this portfolio as a template for your own!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please make sure to update tests as appropriate and follow the existing code style.

## 📞 Contact

For questions or suggestions:

- **GitHub**: [vraj89](https://github.com/vraj89)
- **Email**: Check the contact form on the portfolio
- **Twitter**: [@vraj89](https://twitter.com/vraj89)

## 🙏 Acknowledgements

- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [EmailJS](https://www.emailjs.com/) - Email service for developers
- [Heroicons](https://heroicons.com/) - Beautiful hand-crafted SVG icons
- [React Icons](https://react-icons.github.io/react-icons/) - Popular icons library

---

Built with ❤️ by Vraj