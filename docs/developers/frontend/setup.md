# Frontend Setup & Installation

Get your frontend development environment ready for BlokMap.

## Prerequisites

- Node.js 18+ and npm
- VS Code (recommended)
- React Developer Tools browser extension

## Installation

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

## Development Tools

### VS Code Extensions
- ES7+ React/Redux/React-Native snippets
- TypeScript Importer
- Prettier - Code formatter
- ESLint
- Auto Rename Tag

### Browser Extensions
- React Developer Tools
- Redux DevTools

## Environment Variables

Create `.env.local` file:
```env
VITE_API_URL=http://localhost:3000
VITE_WS_URL=ws://localhost:3000
VITE_UPLOAD_URL=http://localhost:3000/upload
```

## Scripts

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build

# Testing
npm run test         # Run tests
npm run test:watch   # Watch mode
npm run test:coverage # Coverage report

# Linting
npm run lint         # ESLint
npm run lint:fix     # Fix linting issues
npm run format       # Prettier formatting
```

## Hot Reload

The development server supports:
- Hot Module Replacement (HMR)
- Fast Refresh for React components
- TypeScript compilation
- CSS preprocessing
