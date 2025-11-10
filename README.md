# View Transition Animation Demo

A demonstration of smooth page transitions and animations built with **React 19**, **Next.js 16**, and **Tailwind CSS** - **without any additional animation libraries**.

## Purpose

This repository showcases how to create beautiful, smooth page transitions and animations using only native browser APIs and modern React features. No Framer Motion, no React Spring, no GSAP - just pure React 19's ViewTransition API, Next.js 16's routing, and Tailwind CSS for styling.

## Key Features

- ✨ **Smooth page transitions** using React 19's ViewTransition API
- 🎬 **Morphing animations** for images and content between pages
- 📱 **Mobile-optimized** scroll position restoration
- 🎨 **Light, modern UI** with thin borders and subtle shadows
- 🚀 **Zero animation dependencies** - pure React, Next.js, and Tailwind

## Tech Stack

- **React 19** - ViewTransition API for native browser transitions
- **Next.js 16** - App Router with view transition support
- **Tailwind CSS** - Utility-first CSS for styling
- **TypeScript** - Type-safe development

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How It Works

The app demonstrates:

1. **View Transitions**: Using React 19's `<ViewTransition>` component to create smooth morphing animations between pages
2. **Scroll Restoration**: Custom implementation for mobile devices to preserve scroll position when navigating back
3. **Responsive Design**: Flex-based layouts with consistent spacing (16px mobile, 24px desktop)
4. **Component Architecture**: Reusable components with PascalCase naming convention

## Project Structure

```
app/
  ├── page.tsx              # Home page with movie grid
  ├── movies/[id]/
  │   └── page.tsx          # Movie detail page
  └── globals.css            # View transition animations

components/
  ├── MovieCard.tsx         # Movie card component
  ├── MoviePoster.tsx       # Poster with view transition
  ├── InfoCard.tsx          # Reusable info card
  ├── DetailItem.tsx        # Label-value pairs
  └── ScrollRestoration.tsx # Mobile scroll restoration
```

## Learn More

- [React 19 ViewTransition API](https://react.dev/reference/react/ViewTransition)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

## License

See LICENSE file for details.
