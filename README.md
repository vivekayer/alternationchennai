# Next.js App with Centered Logo and Footer Links

A modern Next.js application featuring a beautiful centered logo and footer with navigation links.

## Features

- **Modern UI**: Built with Next.js 14 and Tailwind CSS
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Centered Logo**: Beautiful animated logo with gradient design
- **Footer Navigation**: Clean footer with useful links
- **TypeScript**: Full TypeScript support for better development experience
- **Dark Mode Support**: Automatic dark mode detection

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or your preferred package manager

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
├── app/
│   ├── components/
│   │   ├── Logo.tsx          # Animated logo component
│   │   └── Footer.tsx        # Footer with navigation links
│   ├── globals.css           # Global styles with Tailwind
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── public/                  # Static assets
└── package.json            # Dependencies and scripts
```

## Components

### Logo Component
- Animated gradient design
- Responsive sizing
- Pulse animation effect

### Footer Component
- Navigation links
- Company information
- Responsive layout
- Copyright notice

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Logo
Edit `app/components/Logo.tsx` to customize the logo design, colors, or animation.

### Footer Links
Modify the `footerLinks` array in `app/components/Footer.tsx` to add, remove, or change footer navigation links.

### Styling
Update `app/globals.css` or component files to customize the color scheme and styling.

## Tech Stack

- **Framework**: Next.js 16.1.0
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Package Manager**: npm

## License

This project is open source and available under the [MIT License](LICENSE).