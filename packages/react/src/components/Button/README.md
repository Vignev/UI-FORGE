# Button Component

A versatile button component with multiple variants, sizes, and states.

## Features

- ✅ Multiple variants (primary, secondary, outline, ghost, danger)
- ✅ Three sizes (small, medium, large)
- ✅ Loading state with spinner
- ✅ Disabled state
- ✅ Support for start/end icons
- ✅ Full width option
- ✅ Keyboard navigation
- ✅ ARIA attributes for accessibility

## Usage

### Basic Usage

```tsx
import { Button } from '@ui-forge/react';

function App() {
  return <Button>Click me</Button>;
}
```

### Variants

```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>
```

### Sizes

```tsx
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

### States

```tsx
<Button disabled>Disabled</Button>
<Button loading>Loading...</Button>
```

### With Icons

```tsx
<Button startIcon={<Icon />}>Start Icon</Button>
<Button endIcon={<Icon />}>End Icon</Button>
```

### Full Width

```tsx
<Button fullWidth>Full Width Button</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'danger'` | `'primary'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `disabled` | `boolean` | `false` | Whether button is disabled |
| `loading` | `boolean` | `false` | Whether button is in loading state |
| `fullWidth` | `boolean` | `false` | Whether button should take full width |
| `startIcon` | `ReactNode` | - | Icon to display before text |
| `endIcon` | `ReactNode` | - | Icon to display after text |
| `className` | `string` | - | Additional CSS classes |
| `onClick` | `(event: MouseEvent) => void` | - | Click handler |

All other standard HTML button attributes are also supported.

## Accessibility

- Uses semantic `<button>` element
- Keyboard navigable (Tab, Enter, Space)
- Includes `aria-busy` attribute when loading
- Disabled buttons are not keyboard accessible
- Focus visible styles included

## Customization

The Button component can be customized using Tailwind CSS classes:

```tsx
<Button className="shadow-lg hover:shadow-xl">Custom Button</Button>
```

Or by overriding design tokens:

```css
:root {
  --uif-primary-500: 220 38 38; /* Custom primary color */
}
```
