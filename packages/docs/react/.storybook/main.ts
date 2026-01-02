import type { StorybookConfig } from '@storybook/react-vite';
import { readFileSync } from 'fs';
import { join } from 'path';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    disableTelemetry: true,
  },
  previewHead: (head) => {
    const customStyles = readFileSync(join(__dirname, 'preview-head.html'), 'utf8');
    return `${head}${customStyles}`;
  },
};

export default config;
