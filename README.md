# Professional React Portfolio

A modern, responsive personal portfolio website built with React, Vite, and Tailwind CSS. It showcases education, skills, projects, and contact options with a recruiter-friendly one-page layout.

## Features

- Responsive portfolio layout for desktop, tablet, and mobile
- Smooth one-page navigation with active section indicators
- Hero intro with clear calls to action
- Active Hire Me flow that scrolls to the contact form, pre-fills a hiring subject, and focuses the form
- Education section focused on academic background and learning highlights
- Interactive skills filtering for project discovery
- Project showcase with technologies, features, and live links
- EmailJS-powered contact form
- Direct email and social profile links
- Loading animation and polished transitions
- Optimized Vite production build

## Sections

- Home
- Education
- Skills
- Projects
- Contact

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- React Router DOM
- EmailJS
- Render deployment

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm
- Git

### Installation

```bash
git clone https://github.com/vraj89/portfolio-using-React.git
cd portfolio-using-React
npm install
```

Create a `.env.local` file in the project root and add your EmailJS credentials:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

Start the development server:

```bash
npm run dev
```

The app runs locally at `http://localhost:5173`.

## Available Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Deploying on Render

This portfolio is deployed on Render. The deployment process is the same as before: connect the GitHub repository, set the build settings, and add the required environment variables. Only the hosting platform changes.

### Render Setup

1. Push the latest code to GitHub.
2. Open [Render](https://render.com).
3. Select **New** and create a **Static Site**.
4. Connect the GitHub repository.
5. Use these build settings:

```bash
Build Command: npm run build
Publish Directory: dist
```

6. Add the same environment variables in the Render dashboard:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

7. Deploy the site.

## Environment Variables

| Variable | Description |
| --- | --- |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key |
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID |

## Project Structure

```text
portfolio-using-React/
├── public/
├── src/
│   ├── services/
│   │   └── email.js
│   ├── Contact.jsx
│   ├── Education.jsx
│   ├── InteractiveProjects.jsx
│   ├── InteractiveSkills.jsx
│   ├── Intro.jsx
│   ├── Portfolio.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.example
├── package.json
├── vite.config.js
└── README.md
```

## Contact

- GitHub: [vraj89](https://github.com/vraj89)
- Email: Use the contact form in the portfolio

Built by Vraj Vaghela.
