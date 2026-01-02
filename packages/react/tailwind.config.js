import tailwindPreset from '@ui-forge/tokens/tailwind.preset';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [tailwindPreset],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
