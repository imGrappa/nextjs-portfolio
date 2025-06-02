## Personal Portfolio – Koray Aslan

## 🔧 Tech Stack

- Next.js – React-based framework for building fast and SEO-friendly web applications
- TypeScript – Typed superset of JavaScript for better maintainability
- Tailwind CSS – Utility-first CSS framework for fast UI styling
- Sanity Studio – Headless CMS used for managing content like posts and projects
- shadcn/ui – Beautifully designed UI components built with Radix and Tailwind

## 📁 Folder Structure

```bash
.
├── app/ # Next.js App Router pages
├── components/ # Reusable UI components
├── sanity-studio/ # Sanity CMS studio
├── public/ # Static assets
├── styles/ # Global styles
├── lib/ # Utility functions
├── types/ # TypeScript types
└── README.md
```

## 🚀 Features

- Fully responsive layout for mobile and desktop
- Dynamic blog and works section powered by Sanity CMS
- SEO optimized with Next.js head management
- Accessible and modern UI components using shadcn/ui
- Type-safe development with TypeScript

## 🖥️ Getting Started (Local Development)

```bash
# Install dependencies
npm install

# Run Next.js frontend
npm run dev

# Navigate to sanity-studio folder
cd sanity-studio

# Install dependencies and run Sanity Studio
npm install
npm run dev
```

## 📦 Deployment

- The Next.js frontend is deployed separately (e.g., Vercel)
- The Sanity Studio is deployed using Sanity Studio Hosting

- Don't forget to edit your .env file in the root directory via sanity studio. Otherwise you will get an error.
