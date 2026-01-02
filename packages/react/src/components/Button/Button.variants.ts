/**
 * Button component variants using Class Variance Authority (CVA)
 *
 * Theming: Override CSS variables in your app to customize colors:
 * --uif-primary, --uif-primary-hover, --uif-primary-text
 * --uif-secondary, --uif-secondary-hover, --uif-secondary-text
 * --uif-outline-border, --uif-outline-text, --uif-outline-hover
 * --uif-ghost-text, --uif-ghost-hover
 * --uif-danger, --uif-danger-hover, --uif-danger-text
 */

import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
  // Base classes (always applied)
  'uif-btn',
  {
    variants: {
      variant: {
        primary: 'uif-btn-primary',
        secondary: 'uif-btn-secondary',
        outline: 'uif-btn-outline',
        ghost: 'uif-btn-ghost',
        danger: 'uif-btn-danger',
      },
      size: {
        sm: 'uif-btn-sm',
        md: 'uif-btn-md',
        lg: 'uif-btn-lg',
      },
      fullWidth: {
        true: 'uif-btn-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
