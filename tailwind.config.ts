import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#0d0d0f',
          900: '#111214',
          800: '#18191d',
          700: '#1e2026',
          600: '#242731',
          500: '#2c303b',
        },
        lime: {
          300: '#d9f99d',
          400: '#a3e635',
          500: '#84cc16',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'glass': '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
        'card': '0 2px 12px rgba(0,0,0,0.3)',
        'card-hover': '0 8px 32px rgba(0,0,0,0.5)',
        'lime-glow': '0 0 24px rgba(163,230,53,0.15)',
      },
    },
  },
  plugins: [],
}

export default config
