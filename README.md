# JS Snippets - Reusable React Components

A curated collection of reusable JavaScript snippets and React components for modern web development. This repository serves as a personal library and reference for commonly used utilities, components, and patterns.

## 🚀 Features

- **React Components**: Reusable UI components built with React 19
- **React Hooks**: Custom hooks for common functionality
- **Core JavaScript**: Fundamental utility functions (debounce, throttle, etc.)
- **DOM Utilities**: Vanilla JavaScript helper functions for DOM operations
- **localStorage Solutions**: Both simple hooks and centralized context management
- **JavaScript Utilities**: Helper functions for arrays, strings, and more
- **Modern Tooling**: Vite for fast development and building
- **TailwindCSS**: Utility-first CSS framework for styling
- **ESLint**: Code quality and consistency
- **TypeScript Support**: Full TypeScript integration

## 📁 Project Structure

```
src/
├── array-methods/          # Array utility functions and methods
├── string-methods/         # String manipulation utilities
├── core-js/                # Core JavaScript utility functions
│   ├── debounce.js         # Debounce function utility
│   └── throttle.js         # Throttle function utility
├── dom-helpers/            # DOM utility functions
│   └── copyToClipboard.js  # Vanilla JS copy to clipboard utility
├── react-hooks/            # Reusable React hooks
│   ├── useLocalStorage.js  # Simple localStorage hook
│   ├── useCopyToClipboard.js # Copy text to clipboard hook
│   └── useDebounce.js      # Debounce values hook
└── react-components/       # Reusable React components
    ├── cacheContext.jsx    # Context for caching functionality (deprecated)
    └── localContext.jsx    # Centralized localStorage management
```


## 🛠️ Tech Stack

- **React** 19.1.1 - UI library
- **Vite** 7.1.7 - Build tool and dev server
- **TailwindCSS** 4.1.14 - Utility-first CSS framework
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/BigFudge420/js-snippets.git
cd js-snippets
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build the project for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check for code issues |

## 📚 Components & Utilities

### useLocalStorage Hook

A simple, traditional localStorage hook that syncs state with localStorage. Perfect for straightforward use cases.

**Location**: `src/react-hooks/useLocalStorage.js`

**Features**: SSR-safe, automatic sync, error handling, supports function updates

### useCopyToClipboard Hook

Copy text to clipboard with fallback support for older browsers. Provides copy status feedback.

**Location**: `src/react-hooks/useCopyToClipboard.js`

**Features**: Modern Clipboard API, fallback for older browsers, copy status tracking

### useDebounce Hook

Debounce state values to prevent excessive updates. Ideal for search inputs and performance optimization.

**Location**: `src/react-hooks/useDebounce.js`

**Features**: State debouncing, automatic cleanup, customizable delay

### debounce Utility

Vanilla JavaScript debounce function to limit function execution frequency.

**Location**: `src/core-js/debounce.js`

**Features**: Function debouncing, preserves `this` context, handles arguments

### throttle Utility

Vanilla JavaScript throttle function to limit how often a function can run. Preserves `this` and arguments. Returns a simple throttled function; consider adding a `.cancel()` method in the utility if you need cleanup support.

**Location**: `src/core-js/throttle.js`

**Features**: Function throttling, preserves `this`, simple API, framework-agnostic

React note: keep core utilities pure. If you need a hook-friendly version (stable identity, cleanup, latest callback), wrap this utility in a React hook such as `useThrottledCallback` in `src/react-hooks/`.

### deepClone Utility

Robust deep-cloning utility for plain objects, arrays, Maps, Sets, Dates, RegExps and typed arrays. Handles circular references and preserves prototypes and property descriptors where possible. Framework-agnostic.

### copyToClipboard Utility

Vanilla JavaScript function to copy text to clipboard. Promise-based with fallback support.

**Location**: `src/dom-helpers/copyToClipboard.js`

**Features**: Promise-based, modern Clipboard API, fallback for older browsers, return status

### LocalContext

### CopyButton Component

Simple React component that provides an input and a copy button. Uses the `useCopyToClipboard` hook and Tailwind utility classes for styling.

**Location**: `src/react-components/copyButton.jsx`

**Features**: Controlled input, copy feedback (changes button color/text), Tailwind-based styles

Note: Tailwind classes are used — make sure `src/output.css` (Tailwind build output) is imported in your app entry so classes apply at runtime.

Centralized localStorage management with automatic expiration. Trades simplicity for centralization and helper methods.

**Location**: `src/react-components/localContext.jsx`

**Features**: Auto-expiration (60s), error handling, `get`, `set`, `isValid`, `clear` methods

**Usage**:
```jsx
// Wrap app
<LocalProvider>
  <App />
</LocalProvider>

// Use in components
const { get, set, isValid, clear } = useLocalStorage();
set('key', data);           // Store with expiration
const data = get('key');    // Get data or null if expired
if (isValid('key')) { ... } // Check if still valid
clear('key');               // Remove data
```

**Comparison**: useLocalStorage hook = simplicity, LocalContext = centralization + expiration

## 🤝 Contributing

This is a personal snippets repository, but suggestions and improvements are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-snippet`)
3. Commit your changes (`git commit -am 'Add new snippet'`)
4. Push to the branch (`git push origin feature/new-snippet`)
5. Create a Pull Request

## 📝 Code Style

This project follows these conventions:

- **ESLint**: Configured with React hooks and refresh plugins
- **File Naming**: Use camelCase for JavaScript files, PascalCase for React components
- **Components**: Functional components with hooks
- **Styling**: TailwindCSS utility classes

## 🔧 Configuration Files

- `vite.config.js` - Vite configuration
- `eslint.config.js` - ESLint rules and settings
- `tailwind.config.js` - TailwindCSS configuration
- `postcss.config.js` - PostCSS plugins

## 📄 License

This project is private and for personal use.

---

**Note**: This repository is continuously updated with new snippets and components as needed for various projects.