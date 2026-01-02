## Overview

I'm excited to kick off development on **UI Forge**, our cross-framework UI component library supporting both Angular and React. This email outlines our technical approach, architecture decisions, and the steps we'll follow to build this library.

**Important Note:** I will be creating the base architecture, project scaffolding, and foundational infrastructure. Once this is in place, we will divide component development among the team for parallel execution.

---

## Project Goals

1. Build a production-ready component library usable in both Angular and React applications
2. Implement a robust dynamic theming system using CSS variables and Tailwind CSS v4
3. Ensure all components meet WCAG 2.1 AA accessibility standards
4. Provide both "batteries-included" and headless component patterns for flexibility
5. Maintain comprehensive documentation via Storybook

---

## Technology Stack

| Layer | Technology | Version |
|-------|------------|---------|
| Monorepo Management | npm workspaces | Latest |
| Design Tokens | CSS Custom Properties | - |
| Styling | Tailwind CSS | v4.x |
| Variant Management | Class Variance Authority (CVA) | Latest |
| React Components | React + TypeScript | 18.x |
| Angular Components | Angular Standalone Components | 17+ |
| Documentation | Storybook | 8.x |
| Build (React) | Vite + vite-plugin-dts | Latest |
| Build (Angular) | ng-packagr | Latest |
| Testing | Vitest (React) / Jest (Angular) | Latest |
| Linting | ESLint + Prettier | Latest |

---

## Repository Structure

```
ui-forge/
├── package.json                    # Root workspace configuration
├── tsconfig.base.json              # Shared TypeScript config
├── .eslintrc.js                    # Shared linting rules
├── .prettierrc                     # Code formatting rules
│
├── packages/
│   ├── tokens/                     # @ui-forge/tokens
│   │   ├── src/
│   │   │   ├── tokens.css          # CSS custom properties
│   │   │   ├── themes/             # light.css, dark.css, etc.
│   │   │   ├── tailwind.preset.js  # Tailwind v4 preset
│   │   │   └── index.ts            # TypeScript exports
│   │   └── package.json
│   │
│   ├── core/                       # @ui-forge/core
│   │   ├── src/
│   │   │   ├── theme/              # ThemeManager, createTheme()
│   │   │   ├── utils/              # cn(), accessibility helpers
│   │   │   ├── validators/         # Form validation logic
│   │   │   └── types/              # Shared TypeScript interfaces
│   │   └── package.json
│   │
│   ├── react/                      # @ui-forge/react
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Button/
│   │   │   │   │   ├── Button.tsx
│   │   │   │   │   ├── Button.variants.ts
│   │   │   │   │   ├── Button.test.tsx
│   │   │   │   │   └── index.ts
│   │   │   │   ├── Input/
│   │   │   │   ├── Select/
│   │   │   │   ├── Card/
│   │   │   │   ├── Table/
│   │   │   │   └── ...
│   │   │   ├── hooks/              # useDataTable, useTheme, etc.
│   │   │   ├── providers/          # ThemeProvider
│   │   │   └── index.ts            # Public API exports
│   │   ├── vite.config.ts
│   │   └── package.json
│   │
│   ├── angular/                    # @ui-forge/angular
│   │   ├── src/
│   │   │   ├── lib/
│   │   │   │   ├── button/
│   │   │   │   │   ├── button.component.ts
│   │   │   │   │   ├── button.component.spec.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── input/
│   │   │   │   ├── select/
│   │   │   │   ├── card/
│   │   │   │   ├── table/
│   │   │   │   └── ...
│   │   │   ├── services/           # DataTableService, ThemeService
│   │   │   └── public-api.ts
│   │   ├── ng-package.json
│   │   └── package.json
│   │
│   └── docs/                       # Storybook documentation
│       ├── stories/
│       └── .storybook/
│
├── apps/                           # Demo applications
│   ├── react-demo/
│   └── angular-demo/
│
└── tools/
    └── theme-generator/            # CLI for custom theme generation
```

---

## Architecture Decisions & Rationale

### 1. Styling Approach: Tailwind CSS v4 + CVA

We are using **Tailwind CSS v4** with **Class Variance Authority (CVA)** for the following reasons:

- **Customization Flexibility**: Consumers can override at three levels:
  1. **Global**: Change CSS variables (e.g., `--uif-primary-500`)
  2. **Component Instance**: Pass additional `className` props
  3. **Variant Level**: Extend CVA configurations for new variants

- **No Style Leakage**: Tailwind utilities are scoped; no global CSS pollution

- **Tree-Shaking**: Only used utilities end up in the final bundle

**Example CVA Pattern:**

```typescript
// Button.variants.ts
import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
  // Base classes (always applied)
  'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary-500 text-white hover:bg-primary-600',
        secondary: 'bg-secondary-100 text-secondary-900 hover:bg-secondary-200',
        outline: 'border border-border bg-transparent hover:bg-accent',
        ghost: 'hover:bg-accent',
        danger: 'bg-danger-500 text-white hover:bg-danger-600',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-12 px-6 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
```

### 2. State Management: Dual-Mode Architecture

For complex stateful components (DataTable, Select, etc.), we provide **two patterns**:

#### Stateful Mode (Simple Use Cases)
```tsx
// React
<DataTable data={users} columns={columns} pagination sortable />
```
```html
<!-- Angular -->
<uif-data-table [data]="users" [columns]="columns" pagination sortable />
```

#### Headless Mode (Advanced Use Cases)
```tsx
// React - Consumer controls state
const table = useDataTable({ data: users, columns });
<DataTablePrimitive table={table} />
```
```typescript
// Angular - Consumer controls state via service
tableService = inject(DataTableService).configure({ data: users, columns });
```

**When to use which:**
- **Stateful**: Quick implementations, client-side data, prototypes
- **Headless**: Server-side pagination, NgRx/Redux integration, custom behaviors

### 3. Theming System

Design tokens are defined as CSS custom properties with RGB values (for opacity support):

```css
:root {
  --uif-primary-500: 59 130 246;  /* RGB without rgb() wrapper */
  --uif-background: 255 255 255;
}

[data-theme="dark"] {
  --uif-background: 15 23 42;
}
```

**Tailwind v4 Integration:**
```css
@theme {
  --color-primary-500: rgb(var(--uif-primary-500) / <alpha-value>);
  --color-background: rgb(var(--uif-background) / <alpha-value>);
}
```

This allows usage like `bg-primary-500/50` for 50% opacity.

---

## Component Development Standards

### File Structure per Component

Every component must include:

```
Button/
├── Button.tsx / button.component.ts    # Main component
├── Button.variants.ts                   # CVA variant definitions (shared)
├── Button.test.tsx / .spec.ts          # Unit tests
├── Button.stories.tsx                   # Storybook stories
├── README.md                            # Component documentation
└── index.ts                             # Public exports
```

### Props/Inputs Naming Convention

Maintain consistency across frameworks:

| React Prop | Angular Input | Description |
|------------|---------------|-------------|
| `variant` | `variant` | Visual style variant |
| `size` | `size` | Component size |
| `disabled` | `disabled` | Disabled state |
| `loading` | `loading` | Loading state |
| `className` | `class` | Additional CSS classes |
| `onClick` | `(clicked)` | Click event |

### Accessibility Requirements

Every component MUST:

1. Support keyboard navigation (Tab, Enter, Space, Arrow keys as appropriate)
2. Include proper ARIA attributes (`aria-label`, `aria-expanded`, `aria-disabled`, etc.)
3. Maintain visible focus indicators
4. Support screen readers (test with VoiceOver/NVDA)
5. Meet color contrast requirements (4.5:1 for normal text, 3:1 for large text)

### Testing Requirements

| Test Type | Coverage Target | Tool |
|-----------|-----------------|------|
| Unit Tests | 80% minimum | Vitest / Jest |
| Accessibility | All components | jest-axe / axe-core |
| Visual Regression | Key components | Chromatic (Storybook) |

---

## Implementation Phases & Task Breakdown

### Phase 0: Base Architecture (Vic - Week 1)

I will complete the following before team development begins:

- [ ] Repository initialization with npm workspaces
- [ ] TypeScript configuration (base + per-package)
- [ ] ESLint + Prettier setup
- [ ] `@ui-forge/tokens` package with complete design tokens
- [ ] `@ui-forge/core` package with utilities (`cn()`, ThemeManager)
- [ ] `@ui-forge/react` package scaffolding with Vite build
- [ ] `@ui-forge/angular` package scaffolding with ng-packagr
- [ ] Tailwind v4 preset configuration
- [ ] Storybook setup for both frameworks
- [ ] CI/CD pipeline (lint, test, build)
- [ ] Sample Button component in both frameworks (as reference)

### Phase 1: Foundation Components (Team - Weeks 2-3)

| Component | React Developer | Angular Developer |
|-----------|-----------------|-------------------|
| Button, IconButton, ButtonGroup | Dev A | Dev B |
| Input, Textarea | Dev A | Dev B |
| Select | Dev A | Dev B |
| Checkbox, Radio, Switch | Dev A | Dev B |
| Card, Divider | Dev A | Dev B |

### Phase 2: Data & Feedback (Team - Weeks 4-6)

| Component | React Developer | Angular Developer |
|-----------|-----------------|-------------------|
| DataTable (stateful + headless) | Dev A | Dev B |
| Alert | Dev A | Dev B |
| Toast/Snackbar | Dev A | Dev B |
| Badge, Chip, Avatar | Dev A | Dev B |
| Progress, Spinner, Skeleton | Dev A | Dev B |

### Phase 3: Navigation & Overlay (Team - Weeks 7-9)

| Component | React Developer | Angular Developer |
|-----------|-----------------|-------------------|
| Modal/Dialog | Dev A | Dev B |
| Drawer | Dev A | Dev B |
| Tabs, Accordion | Dev A | Dev B |
| Dropdown, Popover | Dev A | Dev B |
| Breadcrumb, Pagination | Dev A | Dev B |

### Phase 4: Polish & Documentation (Team - Weeks 10-12)

- DatePicker implementation
- FormField with validation integration
- Comprehensive Storybook documentation
- Migration guides for existing projects
- Performance audit and optimization
- Bundle size analysis and tree-shaking verification

---

## Development Workflow

### Branch Strategy

```
main                    # Production-ready releases
├── develop             # Integration branch
│   ├── feature/button  # Component development
│   ├── feature/input
│   └── fix/button-a11y # Bug fixes
```

### Commit Convention

Follow Conventional Commits:

```
feat(react): add Button component with variants
fix(angular): resolve Input focus ring issue
docs(storybook): add Button usage examples
chore: update dependencies
```

### Pull Request Process

1. Create feature branch from `develop`
2. Implement component following standards above
3. Ensure all tests pass locally
4. Create PR with description and screenshots
5. Request review (minimum 1 approval)
6. Squash and merge to `develop`

### Definition of Done

A component is complete when:

- [ ] Implementation matches design specifications
- [ ] Works in both light and dark themes
- [ ] All variants and sizes implemented
- [ ] Unit tests written and passing (80%+ coverage)
- [ ] Accessibility tests passing
- [ ] Storybook stories created for all variants
- [ ] README documentation complete
- [ ] Code reviewed and approved
- [ ] No TypeScript errors or ESLint warnings

---

## Getting Started (After Base Setup)

Once I complete the base architecture, you will:

```bash
# Clone repository
git clone <repo-url>
cd ui-forge

# Install dependencies
npm install

# Build tokens (required first)
npm run build:tokens

# Start Storybook for development
npm run storybook

# Run tests
npm run test

# Build all packages
npm run build
```

### Development Commands

```bash
# Watch mode for specific package
npm run dev -w @ui-forge/react

# Run tests for specific package
npm run test -w @ui-forge/angular

# Lint all packages
npm run lint

# Format code
npm run format
```

---

## Resources & References

- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Class Variance Authority](https://cva.style/docs)
- [Angular Standalone Components](https://angular.dev/guide/components)
- [Storybook Documentation](https://storybook.js.org/docs)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

---

## Questions & Support

- **Architecture Questions**: Reach out to me directly
- **Component Specifications**: Refer to Storybook designs
- **Blocking Issues**: Raise in daily standups

I'll schedule a team kickoff meeting once the base architecture is ready. Please review this document and come prepared with any questions.

Let's build something great!

---

**Vic**  
Lead Developer - UI Forge

