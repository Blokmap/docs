# Quick Setup

This guide will get you up and running with BlokMap development in minutes.

## Prerequisites

- Node.js 18+ and npm
- PostgreSQL 14+
- Git
- Docker (optional, for containerized development)

## Repository Setup

```bash
# Clone the repository
git clone https://github.com/blokmap/blokmap.git
cd blokmap

# Install dependencies
npm install
```

## Environment Configuration

1. Copy environment template files
2. Configure database connection
3. Set up authentication keys
4. Configure external service APIs

## Development Servers

```bash
# Start backend development server
npm run dev:backend

# Start frontend development server (in another terminal)
npm run dev:frontend
```

## Verification

- Backend API: http://127.0.0.1:3000
- Frontend app: http://127.0.0.1:5173
- Database admin: http://127.0.0.1:5432

## Next Steps

- Review the [Architecture Overview](/developers/architecture)
- Set up your preferred development tools
- Read the coding style guides for [Frontend](/developers/frontend/code-style) and [Backend](/developers/backend/code-style)
