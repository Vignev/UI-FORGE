# UI Forge - Demo Guide

## 🚀 Running Applications

### Storybook
**URL**: http://localhost:6006/

Interactive component documentation showcasing all UI Forge components with:
- Live component playground
- All variants and sizes
- Dark/Light theme toggle
- Accessibility testing
- Code examples

### React Demo App
**URL**: http://localhost:3001/

Full-featured React application demonstrating:
- Button components with all variants (Primary, Secondary, Outline, Ghost, Danger)
- Multiple sizes (Small, Medium, Large)
- Loading and disabled states
- Icons support
- Theme switcher (Light/Dark mode)
- Full-width layouts
- Interactive examples

## 🎨 What You Can See

### Available Components
- ✅ **Button** - Complete implementation with:
  - 5 variants (primary, secondary, outline, ghost, danger)
  - 3 sizes (sm, md, lg)
  - Loading state with spinner animation
  - Disabled state
  - Icon support (start/end positions)
  - Full width option
  - Keyboard navigation & accessibility

### Theme System
- 🌞 Light mode (default)
- 🌙 Dark mode
- CSS custom properties for easy customization
- Tailwind CSS v4 integration
- Automatic system preference detection

## 📝 Current Status

### ✅ Completed (Phase 0)
- [x] Monorepo setup with npm workspaces
- [x] TypeScript configuration
- [x] ESLint + Prettier
- [x] Design tokens package (@ui-forge/tokens)
- [x] Core utilities package (@ui-forge/core)
- [x] React package with Vite (@ui-forge/react)
- [x] Angular package setup (@ui-forge/angular)
- [x] Tailwind CSS v4 preset
- [x] Storybook configuration
- [x] Sample Button component (React)
- [x] Sample Button component (Angular structure)
- [x] React demo application
- [x] CI/CD pipeline setup

### 🎯 Theme Features
The buttons are fully themed! You should now see:
- **Primary**: Blue buttons (--uif-primary-500)
- **Secondary**: Light gray buttons (--uif-secondary-100)
- **Outline**: Transparent with borders
- **Ghost**: Transparent hover effects
- **Danger**: Red buttons (--uif-danger-500)

### 🔧 Troubleshooting

If buttons still appear unstyled:
1. Hard refresh the browser (Cmd/Ctrl + Shift + R)
2. Check browser console for any CSS loading errors
3. Verify Tailwind CSS is processing correctly

## 📦 Package Structure

```
@ui-forge/tokens    → Design tokens & CSS variables
@ui-forge/core      → Utilities (cn(), ThemeManager, validators)
@ui-forge/react     → React components
@ui-forge/angular   → Angular components
@ui-forge/docs      → Storybook documentation
```

## 🚧 Next Steps (Phase 1)

Ready for team development:
- Input, Textarea
- Select
- Checkbox, Radio, Switch
- Card, Divider
- More components as per the implementation plan

## 📚 Documentation

- Storybook: http://localhost:6006/
- Implementation Guide: [email-dev-team-implementation.md](./email-dev-team-implementation.md)
- Component Pattern: See packages/react/src/components/Button/

Enjoy exploring UI Forge! 🎉
