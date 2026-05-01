# 🚀 Portfolio using React

A modern, responsive personal portfolio website built with **React**, **Vite**, and **Tailwind CSS**. Showcasing projects, skills, and experience with a sleek, professional design.

![React](https://img.shields.io/badge/React-19.2.4-blue?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-8.0.4-purple?style=flat-square&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.2.2-teal?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/vraj89/portfolio-using-React?style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/vraj89/portfolio-using-React?style=flat-square)
![GitHub stars](https://img.shields.io/github/stars/vraj89/portfolio-using-React?style=flat-square)

## ✨ Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI** - Built with Tailwind CSS for a clean, professional appearance
- **Fast Performance** - Optimized with Vite for lightning-fast load times
- **Smooth Navigation** - React Router for seamless page transitions
- **Contact Form** - Integrated EmailJS for direct contact functionality
- **Loading Screen** - Professional loading animation for better UX
- **Mobile Menu** - Responsive navigation drawer for mobile users
- **Projects Showcase** - Display your best work with detailed project information
- **SEO Friendly** - Proper meta tags and structure for search engines
- **Accessible** - Follows accessibility best practices (WCAG)

## 📋 Pages & Components

- **Home** - Landing page with introduction and call-to-action
- **About** - Personal information and background
- **Projects** - Portfolio of completed projects
- **Contact** - Contact form for inquiries
- **Navigation** - Responsive navbar with mobile menu support
- **Loading Screen** - Professional loading animation
- **Footer** - Copyright and social links
- **UI Components** - Reusable components (buttons, cards, modals)

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.4
- **Build Tool**: Vite 8.0.4
- **Styling**: Tailwind CSS 4.2.2
- **Routing**: React Router DOM 7.14.0
- **State Management**: React Context API (for theme and modal states)
- **Email Service**: EmailJS 3.2.0
- **Icons**: Heroicons & React Icons
- **Linting**: ESLint 9.39.4
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
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
   - Create a `.env.local` file in the root directory
   - Add your EmailJS credentials:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```

4. Start the development server:
```bash
npm run dev
```

The application will run at `http://localhost:5173`

## 📦 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm preview

# Run ESLint
npm lint

# Format code with Prettier
npm run format
```

## 🌐 Deployment

This project is optimized for deployment on **Vercel**.

### Deploy to Vercel (Automatic)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and import your repository
4. Vercel will automatically detect Vite configuration
5. Click "Deploy"

### Deploy to Vercel (CLI)

```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Deploy
vercel
```

Your portfolio will be live! 🎉

**Live Demo**: https://portfolio-vraj89.vercel.app

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── vite.svg              # Vite logo
│   └── robots.txt            # SEO configuration
├── src/
│   ├── assets/               # Static assets (images, icons)
│   │   ├── logo.png
│   │   └── ...
│   ├── components/           # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── MobileMenu.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── Footer.jsx
│   │   └── UI/
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       └── Modal.jsx
│   ├── pages/                # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx               # Main application component
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