# Frontend Development

The BlokMap frontend is a modern React application built with TypeScript, providing a responsive and accessible user interface.

## Technology Stack

- **React 18**: Component-based UI library
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool and dev server
- **Material-UI**: Component library
- **Redux Toolkit**: State management
- **React Router**: Client-side routing
- **React Query**: Server state management

## Project Structure

```
frontend/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── store/         # Redux store and slices
│   ├── hooks/         # Custom React hooks
│   ├── utils/         # Utility functions
│   ├── types/         # TypeScript type definitions
│   └── styles/        # Global styles and themes
├── public/            # Static assets
└── tests/            # Test files
```

## Development Guidelines

### Component Development
- Use functional components with hooks
- Implement proper TypeScript typing
- Follow accessibility best practices
- Write comprehensive tests

### State Management
- Use Redux Toolkit for global state
- React Query for server state
- Local state for component-specific data

### Styling
- Use Material-UI components when possible
- Follow the design system
- Implement responsive design
- Support dark/light themes

## Getting Started

See the specific guides for:
- [Setup & Installation](/developers/frontend/setup)
- [Code Style Guide](/developers/frontend/code-style)
- [Component Guidelines](/developers/frontend/components)
- [State Management](/developers/frontend/state)
- [Testing](/developers/frontend/testing)
