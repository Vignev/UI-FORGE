import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from '@ui-forge/angular';

interface ButtonStoryArgs {
  label: string;
  variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size: 'sm' | 'md' | 'lg';
  disabled: boolean;
  loading: boolean;
  fullWidth: boolean;
}

const meta: Meta<ButtonStoryArgs> = {
  title: 'Angular/Components/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent],
    }),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    fullWidth: false,
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'The text content of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Button' },
      },
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
      description: 'The visual style of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in loading state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button should take full width',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  render: (args) => ({
    props: args,
    template: `<uif-button
      [variant]="variant"
      [size]="size"
      [disabled]="disabled"
      [loading]="loading"
      [fullWidth]="fullWidth"
    >{{ label }}</uif-button>`,
  }),
};

export default meta;
type Story = StoryObj<ButtonStoryArgs>;

// Basic variants
export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    label: 'Outline Button',
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    label: 'Ghost Button',
    variant: 'ghost',
  },
};

export const Danger: Story = {
  args: {
    label: 'Danger Button',
    variant: 'danger',
  },
};

// Sizes
export const Small: Story = {
  args: {
    label: 'Small Button',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium Button',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    label: 'Large Button',
    size: 'lg',
  },
};

// States
export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading Button',
    loading: true,
  },
};

// Full width
export const FullWidth: Story = {
  args: {
    label: 'Full Width Button',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
  render: (args) => ({
    props: args,
    template: `<div style="width: 400px;">
      <uif-button
        [variant]="variant"
        [size]="size"
        [disabled]="disabled"
        [loading]="loading"
        [fullWidth]="fullWidth"
      >{{ label }}</uif-button>
    </div>`,
  }),
};

// With icons
export const WithStartIcon: Story = {
  args: {
    label: 'Next',
    variant: 'primary',
  },
  render: (args) => ({
    props: args,
    template: `<uif-button
      [variant]="variant"
      [size]="size"
      [disabled]="disabled"
      [loading]="loading"
      [fullWidth]="fullWidth"
    >
      <svg startIcon width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
      {{ label }}
    </uif-button>`,
  }),
};

export const WithEndIcon: Story = {
  args: {
    label: 'Back',
    variant: 'secondary',
  },
  render: (args) => ({
    props: args,
    template: `<uif-button
      [variant]="variant"
      [size]="size"
      [disabled]="disabled"
      [loading]="loading"
      [fullWidth]="fullWidth"
    >
      {{ label }}
      <svg endIcon width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
    </uif-button>`,
  }),
};

export const WithBothIcons: Story = {
  args: {
    label: 'Download',
    variant: 'outline',
  },
  render: (args) => ({
    props: args,
    template: `<uif-button
      [variant]="variant"
      [size]="size"
      [disabled]="disabled"
      [loading]="loading"
      [fullWidth]="fullWidth"
    >
      <svg startIcon width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
      </svg>
      {{ label }}
      <svg endIcon width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M6 9l6 6 6-6" />
      </svg>
    </uif-button>`,
  }),
};

// Showcase stories
export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-wrap: wrap; gap: 1rem; align-items: center;">
        <uif-button variant="primary">Primary</uif-button>
        <uif-button variant="secondary">Secondary</uif-button>
        <uif-button variant="outline">Outline</uif-button>
        <uif-button variant="ghost">Ghost</uif-button>
        <uif-button variant="danger">Danger</uif-button>
      </div>
    `,
  }),
  parameters: {
    layout: 'padded',
  },
};

export const AllSizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <uif-button size="sm">Small</uif-button>
        <uif-button size="md">Medium</uif-button>
        <uif-button size="lg">Large</uif-button>
      </div>
    `,
  }),
  parameters: {
    layout: 'padded',
  },
};
