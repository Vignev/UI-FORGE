# UI Forge

A cross-framework UI component library supporting both **React** and **Angular** applications with a unified design system.

## Features

- Unified design system across React and Angular
- CSS custom properties for easy theming
- Light and dark mode support
- Accessible components (WCAG 2.1 AA)
- Comprehensive Storybook documentation
- TypeScript support

## Prerequisites

- Node.js v20 or higher
- npm v10 or higher

## Quick Start

### 1. Clone and Install

```bash
# Clone the repository
git clone <repository-url>
cd UI-FORGE

# Install dependencies
npm install --legacy-peer-deps
```

### 2. Build the Libraries

```bash
# Build React library
npm run build:react

# Build Angular library
npm run build:angular
```

### 3. Run Storybook

```bash
# Start React Storybook (opens at http://localhost:6006)
npm run storybook:react

# In a separate terminal, start Angular Storybook (opens at http://localhost:6007)
npm run storybook:angular
```

## Project Structure

```
UI-FORGE/
├── packages/
│   ├── react/                 # React component library (@ui-forge/react)
│   │   ├── src/
│   │   │   ├── components/    # React components (Button, etc.)
│   │   │   └── styles/        # CSS variables (ui-forge.css)
│   │   └── dist/              # Built library output
│   │
│   ├── angular/               # Angular component library (@ui-forge/angular)
│   │   ├── src/
│   │   │   ├── lib/           # Angular components (button/, etc.)
│   │   │   └── styles/        # CSS variables (ui-forge.css)
│   │   └── dist/              # Built library output
│   │
│   └── docs/
│       ├── react/             # React Storybook
│       │   └── stories/       # React component stories
│       └── angular/           # Angular Storybook
│           └── stories/       # Angular component stories
│
└── package.json               # Root monorepo configuration
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run build:react` | Build the React library |
| `npm run build:angular` | Build the Angular library |
| `npm run storybook:react` | Start React Storybook on port 6006 |
| `npm run storybook:angular` | Start Angular Storybook on port 6007 |

## Using the Libraries

### React

1. **Install the package:**
```bash
npm install @ui-forge/react
```

2. **Import the CSS in your app's entry file:**
```tsx
import '@ui-forge/react/styles/ui-forge.css';
```

3. **Use the components:**
```tsx
import { Button, ThemeProvider } from '@ui-forge/react';

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Button variant="primary" size="md">
        Click Me
      </Button>
    </ThemeProvider>
  );
}
```

4. **Button with icons:**
```tsx
<Button
  variant="primary"
  startIcon={<ArrowRightIcon />}
>
  Next
</Button>

<Button
  variant="secondary"
  endIcon={<ArrowLeftIcon />}
>
  Back
</Button>
```

### Angular

1. **Install the package:**
```bash
npm install @ui-forge/angular
```

2. **Add the CSS to your `angular.json`:**
```json
{
  "projects": {
    "your-app": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              "node_modules/@ui-forge/angular/styles/ui-forge.css",
              "src/styles.css"
            ]
          }
        }
      }
    }
  }
}
```

3. **Import and use the components:**
```typescript
import { Component } from '@angular/core';
import { ButtonComponent } from '@ui-forge/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <uif-button variant="primary" size="md">
      Click Me
    </uif-button>
  `
})
export class AppComponent {}
```

4. **Button with icons:**
```html
<uif-button variant="primary">
  <svg startIcon width="16" height="16" viewBox="0 0 24 24">
    <!-- icon path -->
  </svg>
  Next
</uif-button>

<uif-button variant="secondary">
  Back
  <svg endIcon width="16" height="16" viewBox="0 0 24 24">
    <!-- icon path -->
  </svg>
</uif-button>
```

## Components

### Button

A versatile button component with multiple variants and sizes.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | `'primary'` \| `'secondary'` \| `'outline'` \| `'ghost'` \| `'danger'` | `'primary'` | Visual style |
| `size` | `'sm'` \| `'md'` \| `'lg'` | `'md'` | Button size |
| `disabled` | `boolean` | `false` | Disabled state |
| `loading` | `boolean` | `false` | Loading spinner |
| `fullWidth` | `boolean` | `false` | Full width button |

**React only:**
- `startIcon` - ReactNode for icon before text
- `endIcon` - ReactNode for icon after text

**Angular only:**
- Use `startIcon` attribute on element projected before text
- Use `endIcon` attribute on element projected after text

## Theming

UI Forge uses CSS custom properties for theming. Override variables in your app:

```css
:root {
  /* Brand Colors */
  --uif-primary: #your-color;
  --uif-primary-hover: #your-hover-color;
  --uif-primary-text: #ffffff;

  /* More variables available - see Storybook Theming docs */
}
```

### Dark Mode

Add `data-theme="dark"` to your root element:

```html
<html data-theme="dark">
```

Or use the ThemeProvider (React) / ThemeService (Angular) for programmatic control.

## Troubleshooting

### Installation Issues

If you encounter peer dependency conflicts:
```bash
npm install --legacy-peer-deps
```

### Changes Not Reflecting in Storybook

1. Rebuild the library:
```bash
npm run build:react   # or npm run build:angular
```

2. Restart the Storybook server

### CSS Not Loading

Ensure you've imported the base CSS:
- **React:** `import '@ui-forge/react/styles/ui-forge.css'`
- **Angular:** Add to `angular.json` styles array

## Development Workflow

### Adding a New Component

1. Create component in `packages/react/src/components/YourComponent/`
2. Create component in `packages/angular/src/lib/your-component/`
3. Add component CSS to respective folders
4. Export from package `index.ts` files
5. Create Storybook stories in `packages/docs/`
6. Rebuild libraries and test in Storybook

### Building for Production

```bash
# Build both libraries
npm run build:react && npm run build:angular
```

## License

MIT
