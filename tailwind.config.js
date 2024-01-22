/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './@/components/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      screens: {
        lg: '1200px', // new larger breakpoint for lg
        nav: '1100px',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontSize: theme('fontSize.3xl'),
              fontWeight: theme('fontWeight.bold'),
              color: theme('colors.gray.800'),
              // any other styles
            },
            h2: {
              fontSize: theme('fontSize.2xl'),
              fontWeight: theme('fontWeight.bold'),
              color: theme('colors.primary.DEFAULT'),
              // any other styles
            },
            h3: {
              fontSize: theme('fontSize.xl'),
              fontWeight: theme('fontWeight.bold'),
              color: theme('colors.primary.DEFAULT'),
            },
            h4: {
              fontSize: theme('fontSize.lg'),
              fontWeight: theme('fontWeight.bold'),
              color: theme('colors.primary.DEFAULT'),
            },
            h5: {
              fontSize: theme('fontSize.sm'),
              fontWeight: theme('fontWeight.bold'),
              color: theme('colors.primary.DEFAULT'),
            },
          },
        },
      }),
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#08415A',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: '#B5D1DD',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        white: {
          DEFAULT: '#F4F4F4',
          foreground: '#F4F4F4',
        },
        red: {
          DEFAULT: '#CF0606',
          foreground: '#FDFAF5',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
}
