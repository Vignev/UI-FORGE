# UI Forge

A cross-framework UI component library supporting both **React** and **Angular** applications.

![CI Status](https://github.com/your-org/ui-forge/workflows/CI/badge.svg)

## Features

- 🎨 **Dynamic Theming** - Built-in light/dark mode with customizable CSS variables
- ♿ **Accessibility First** - WCAG 2.1 AA compliant components
- 🎯 **Framework Agnostic** - Same design system for React and Angular
- 🎭 **Flexible Variants** - Powered by Class Variance Authority (CVA)
- 🚀 **Modern Stack** - TypeScript, Tailwind CSS v4, Vite
- 📚 **Well Documented** - Comprehensive Storybook documentation
- 🧪 **Fully Tested** - Unit tests with 80%+ coverage

## Packages

| Package | Description | Version |
|---------|-------------|---------|
| [@ui-forge/tokens](./packages/tokens) | Design tokens and CSS variables | 0.1.0 |
| [@ui-forge/core](./packages/core) | Core utilities and theme management | 0.1.0 |
| [@ui-forge/react](./packages/react) | React components | 0.1.0 |
| [@ui-forge/angular](./packages/angular) | Angular components | 0.1.0 |

## Quick Start

### React

```bash
npm install @ui-forge/react @ui-forge/tokens
```

```tsx
import { ThemeProvider, Button } from '@ui-forge/react';

function App() {
  return (
    <ThemeProvider>
      <Button variant="primary">Click me</Button>
    </ThemeProvider>
  );
}
```

### Angular

```bash
npm install @ui-forge/angular @ui-forge/tokens
```

```typescript
import { Component } from '@angular/core';
import { ButtonComponent } from '@ui-forge/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent],
  template: `<uif-button variant="primary">Click me</uif-button>`,
})
export class AppComponent {}
```

## Development

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Setup

```bash
# Clone repository
git clone <repo-url>
cd ui-forge

# Install dependencies
npm install

# Build tokens (required first)
npm run build:tokens

# Start Storybook
npm run storybook
```

### Development Commands

```bash
# Watch mode for specific package
npm run dev -w @ui-forge/react

# Run tests
npm run test

# Run tests for specific package
npm run test -w @ui-forge/react

# Lint all packages
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Build all packages
npm run build

# Type check
npm run typecheck
```

## Repository Structure

```
ui-forge/
├── packages/
│   ├── tokens/          # Design tokens and CSS variables
│   ├── core/            # Core utilities and theme management
│   ├── react/           # React components
│   ├── angular/         # Angular components
│   └── docs/            # Storybook documentation
├── apps/                # Demo applications
│   ├── react-demo/
│   └── angular-demo/
└── tools/               # Build tools and utilities
```

## Component Status

### Phase 0 (Completed)
- ✅ Base architecture and monorepo setup
- ✅ Design tokens package
- ✅ Core utilities package
- ✅ React package with Vite
- ✅ Angular package with ng-packagr
- ✅ Tailwind CSS v4 integration
- ✅ Storybook setup
- ✅ Sample Button component (React & Angular)
- ✅ CI/CD pipeline

### Phase 1 (Planned)
- Button, IconButton, ButtonGroup
- Input, Textarea
- Select
- Checkbox, Radio, Switch
- Card, Divider

### Phase 2 (Planned)
- DataTable (stateful + headless)
- Alert
- Toast/Snackbar
- Badge, Chip, Avatar
- Progress, Spinner, Skeleton

### Phase 3 (Planned)
- Modal/Dialog
- Drawer
- Tabs, Accordion
- Dropdown, Popover
- Breadcrumb, Pagination

## Theming

UI Forge uses CSS custom properties for theming. All components support light and dark modes out of the box.

### Using Themes

```tsx
// React
import { ThemeProvider } from '@ui-forge/react';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      {/* Your app */}
    </ThemeProvider>
  );
}
```

```typescript
// Angular
import { ThemeService } from '@ui-forge/angular';

export class AppComponent {
  constructor(private themeService: ThemeService) {
    this.themeService.setTheme('dark');
  }
}
```

### Customizing Tokens

```css
:root {
  --uif-primary-500: 220 38 38;  /* Custom red primary */
  --uif-radius-base: 0;           /* Square corners */
}
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

### Development Workflow

1. Create feature branch from `develop`
2. Implement component following our standards
3. Ensure tests pass and coverage is 80%+
4. Create PR with description and screenshots
5. Request review (minimum 1 approval)
6. Squash and merge to `develop`

## License

MIT © UI Forge Team

## Support

- [Documentation](https://ui-forge.dev)
- [GitHub Issues](https://github.com/your-org/ui-forge/issues)
- [Discord Community](https://discord.gg/ui-forge)
