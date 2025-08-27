# Frontend Code Style Guide

Consistent coding standards for the BlokMap frontend.

## General Principles

- Write self-documenting code
- Favor readability over cleverness
- Use TypeScript for type safety
- Follow functional programming patterns
- Keep components small and focused

## Naming Conventions

### Files and Directories
```
PascalCase for components: UserProfile.tsx
camelCase for utilities: dateUtils.ts
kebab-case for pages: user-profile.tsx
```

### Variables and Functions
```typescript
// camelCase for variables and functions
const userName = 'john';
const fetchUserData = async () => {};

// PascalCase for components and types
const UserCard = () => {};
interface UserProfile {}

// UPPER_SNAKE_CASE for constants
const API_ENDPOINTS = {};
```

## Component Structure

```typescript
// 1. Imports (React, libraries, local)
import React, { useState, useEffect } from 'react';
import { Button, Card } from '@mui/material';
import { UserProfile } from './types';

// 2. Types and interfaces
interface Props {
  user: UserProfile;
  onUpdate: (user: UserProfile) => void;
}

// 3. Component
export const UserCard: React.FC<Props> = ({ user, onUpdate }) => {
  // 4. Hooks and state
  const [isEditing, setIsEditing] = useState(false);
  
  // 5. Event handlers
  const handleEdit = () => {
    setIsEditing(true);
  };
  
  // 6. Render
  return (
    <Card>
      {/* Component JSX */}
    </Card>
  );
};
```

## TypeScript Guidelines

### Interface vs Type
```typescript
// Use interfaces for object shapes
interface User {
  id: string;
  name: string;
}

// Use types for unions, primitives
type Status = 'active' | 'inactive';
type ID = string | number;
```

### Props Typing
```typescript
// Always type component props
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  disabled = false
}) => {
  // Component implementation
};
```

## ESLint and Prettier

### ESLint Rules
```json
{
  "extends": [
    "@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  "rules": {
    "react/prop-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off"
  }
}
```

### Prettier Configuration
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false
}
```

## Import Organization

```typescript
// 1. Node modules
import React from 'react';
import { Box, Typography } from '@mui/material';

// 2. Internal modules (absolute imports)
import { api } from '@/utils/api';
import { UserCard } from '@/components/UserCard';

// 3. Relative imports
import './Component.styles.css';
```

## Error Handling

```typescript
// Use try-catch for async operations
const handleSubmit = async () => {
  try {
    await api.updateUser(userData);
    setSuccess(true);
  } catch (error) {
    setError(error.message);
  }
};

// Use Error Boundaries for component errors
class ErrorBoundary extends React.Component {
  // Error boundary implementation
}
```
