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
        warm: {
          50: '#FDFBF7',   // Cream background
          100: '#F7F2EA',  // Soft container background
          200: '#EFE5D5',  // Subtle borders & divider lines
          300: '#E2D1B8',  // Stronger structural borders
          400: '#D2AF84',  // Muted accent
          500: '#C27B38',  // Primary warm accent (terracotta)
          600: '#A65F23',  // Darker accent / focus states
          800: '#4A3B32',  // Soft dark text (readable, non-harsh)
          900: '#2C221E',  // Deep contrast text & headings
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config
