# NovaHub - Developer Runtime Guide

Welcome to the NovaHub frontend repository! This project is built using Next.js 14 (App Router), Tailwind CSS v4, and shadcn/ui.

## Prerequisites
- **Node.js**: Ensure you have Node.js version 18.x or newer installed.
- **npm / yarn / pnpm**: A package manager (npm is recommended as we use it).

## Getting Started

### 1. Install Dependencies
Run the following command in the project root to install all required packages:
```bash
npm install
```

### 2. Start the Development Server
Run the local development server with Turbopack for faster hot-reloading:
```bash
npm run dev
```

### 3. View the Site
Open your browser and navigate to:
[http://localhost:3000](http://localhost:3000)

## Available Scripts
- `npm run dev` - Starts the development server.
- `npm run build` - Builds the app for production.
- `npm start` - Runs the built application in production mode.
- `npm run lint` - Runs ESLint to check for code issues.

## Project Structure
- `src/app/` - Next.js App Router files (Pages and Layouts)
- `src/components/ui/` - Shadcn UI components
- `src/components/home/` - Specific sections for the homepage
- `src/components/layout/` - Global shell components (Nav, Footer, etc)
- `docs/` - Contains project specifications, PRDs, and architecture decisions.

## Environment Variables
*(For Phase 2 & 3 Backend Integration)*
Create a `.env.local` file in the root of the project with the following keys (once set up):
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```
