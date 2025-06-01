# CyberShield - Modern Cybersecurity Website

A modern, responsive cybersecurity website built with Next.js, React, and Tailwind CSS.

## Features

- Modern and responsive design
- Animated UI elements
- Dark theme with cyan accents
- Multiple pages (Home, Services, Solutions, About, Contact)
- Interactive components
- Mobile-friendly navigation

## Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cybershield
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
cybershield/
├── app/
│   ├── page.tsx              # Home page
│   ├── services/
│   │   └── page.tsx         # Services page
│   ├── solutions/
│   │   └── page.tsx         # Solutions page
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── contact/
│   │   └── page.tsx         # Contact page
│   └── globals.css          # Global styles
├── components/
│   └── ui/                  # UI components
│       ├── button.tsx
│       ├── card.tsx
│       └── badge.tsx
├── lib/
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
└── package.json           # Project dependencies
```

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide Icons
- shadcn/ui components

## Customization

- Colors and theme can be modified in `tailwind.config.js`
- Global styles can be adjusted in `app/globals.css`
- Component styles can be customized in their respective files

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 