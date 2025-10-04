# JS Snippets - Reusable React Components

A curated collection of reusable JavaScript snippets and React components for modern web development. This repository serves as a personal library and reference for commonly used utilities, components, and patterns.

## 🚀 Features

- **React Components**: Reusable UI components built with React 19
- **React Hooks**: Custom hooks for common functionality
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
├── dom-helpers/            # DOM utility functions
│   └── copyToClipboard.js  # Vanilla JS copy to clipboard utility
├── react-hooks/            # Reusable React hooks
│   ├── useLocalStorage.js  # Simple localStorage hook
│   └── useCopyToClipboard.js # Copy text to clipboard hook
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

**Usage**:
```jsx
import { useLocalStorage } from './react-hooks/useLocalStorage';

function UserSettings() {
  const [user, setUser] = useLocalStorage('user', { name: '', theme: 'light' });
  const [count, setCount] = useLocalStorage('count', 0);

  return (
    <div>
      <input 
        value={user.name} 
        onChange={(e) => setUser({ ...user, name: e.target.value })} 
      />
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
    </div>
  );
}
```

### useCopyToClipboard Hook

Copy text to clipboard with fallback support for older browsers. Provides copy status feedback.

**Location**: `src/react-hooks/useCopyToClipboard.js`

**Features**: Modern Clipboard API, fallback for older browsers, copy status tracking

**Usage**:
```jsx
import { useCopytoClipboard } from './react-hooks/useCopyToClipboard';

function ShareButton() {
  const textToCopy = "https://example.com/share";
  const [isCopied, copy] = useCopytoClipboard(textToCopy);

  return (
    <button onClick={copy}>
      {isCopied ? 'Copied!' : 'Copy Link'}
    </button>
  );
}
```

### copyToClipboard Utility

Vanilla JavaScript function to copy text to clipboard. Promise-based with fallback support.

**Location**: `src/dom-helpers/copyToClipboard.js`

**Features**: Promise-based, modern Clipboard API, fallback for older browsers, return status

**Usage**:
```javascript
import { copyToClipboard } from './dom-helpers/copyToClipboard';

// Basic usage
copyToClipboard('Hello World!')
  .then(() => console.log('Copy successful'))
  .catch(() => console.log('Copy failed'));

// In event handler
async function handleCopy() {
  const success = await copyToClipboard(document.getElementById('text').value);
  if (success) {
    alert('Copied!');
  }
}
```

### LocalContext

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