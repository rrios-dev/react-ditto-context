# React Ditto Context

[![npm version](https://badge.fury.io/js/react-ditto-context.svg)](https://badge.fury.io/js/react-ditto-context)

A lightweight, type-safe React context library that simplifies state management in React applications.

## Features

- 🚀 Lightweight and performant
- 🔒 Type-safe with TypeScript
- 🎯 Simple and intuitive API
- 📦 Zero dependencies
- 🧪 Fully tested
- 📚 Storybook documentation

## Installation

```bash
npm install react-ditto-context
# or
yarn add react-ditto-context
# or
bun add react-ditto-context
```

## Quick Start

```tsx
import { DittoContextProvider, useDittoContext } from 'react-ditto-context';

// Define your context type
type MyContext = {
  count: number;
  increment: () => void;
};

// Create your context provider
const MyProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);
  
  const value = {
    count,
    increment: () => setCount(prev => prev + 1)
  };

  return (
    <DittoContextProvider<MyContext> value={value}>
      {children}
    </DittoContextProvider>
  );
};

// Use the context in your components
const Counter = () => {
  const { count, increment } = useDittoContext<MyContext>();
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
```

## API Reference

### `DittoContextProvider<T>`

A type-safe context provider component.

```tsx
<DittoContextProvider<T> value={value}>
  {children}
</DittoContextProvider>
```

#### Props

- `value: T` - The context value
- `children: React.ReactNode` - Child components

### `useDittoContext<T>`

A hook to access the context value.

```tsx
const value = useDittoContext<T>();
```

## Development

```bash
# Install dependencies
bun install

# Run tests
bun test

# Start Storybook
bun run storybook

# Build the library
bun run build
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [Roberto Ríos](https://github.com/rrios-dev)
