import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/react/src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'rgb(239 246 255 / <alpha-value>)',
          100: 'rgb(219 234 254 / <alpha-value>)',
          200: 'rgb(191 219 254 / <alpha-value>)',
          300: 'rgb(147 197 253 / <alpha-value>)',
          400: 'rgb(96 165 250 / <alpha-value>)',
          500: 'rgb(59 130 246 / <alpha-value>)',
          600: 'rgb(37 99 235 / <alpha-value>)',
          700: 'rgb(29 78 216 / <alpha-value>)',
          800: 'rgb(30 64 175 / <alpha-value>)',
          900: 'rgb(30 58 138 / <alpha-value>)',
          950: 'rgb(23 37 84 / <alpha-value>)',
        },
        secondary: {
          50: 'rgb(248 250 252 / <alpha-value>)',
          100: 'rgb(241 245 249 / <alpha-value>)',
          200: 'rgb(226 232 240 / <alpha-value>)',
          300: 'rgb(203 213 225 / <alpha-value>)',
          400: 'rgb(148 163 184 / <alpha-value>)',
          500: 'rgb(100 116 139 / <alpha-value>)',
          600: 'rgb(71 85 105 / <alpha-value>)',
          700: 'rgb(51 65 85 / <alpha-value>)',
          800: 'rgb(30 41 59 / <alpha-value>)',
          900: 'rgb(15 23 42 / <alpha-value>)',
          950: 'rgb(2 6 23 / <alpha-value>)',
        },
        danger: {
          50: 'rgb(254 242 242 / <alpha-value>)',
          100: 'rgb(254 226 226 / <alpha-value>)',
          200: 'rgb(254 202 202 / <alpha-value>)',
          300: 'rgb(252 165 165 / <alpha-value>)',
          400: 'rgb(248 113 113 / <alpha-value>)',
          500: 'rgb(239 68 68 / <alpha-value>)',
          600: 'rgb(220 38 38 / <alpha-value>)',
          700: 'rgb(185 28 28 / <alpha-value>)',
          800: 'rgb(153 27 27 / <alpha-value>)',
          900: 'rgb(127 29 29 / <alpha-value>)',
          950: 'rgb(69 10 10 / <alpha-value>)',
        },
        background: 'rgb(255 255 255 / <alpha-value>)',
        foreground: 'rgb(15 23 42 / <alpha-value>)',
        border: 'rgb(226 232 240 / <alpha-value>)',
        accent: 'rgb(241 245 249 / <alpha-value>)',
        ring: 'rgb(59 130 246 / <alpha-value>)',
      },
    },
  },
} satisfies Config;
