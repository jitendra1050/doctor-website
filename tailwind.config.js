/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom medical brand palette - sophisticated teal/slate system
        brand: {
          50: '#f0fdfb',
          100: '#d0f9f3',
          200: '#a1f2e7',
          300: '#6de4d8',
          400: '#3dcfc3',
          500: '#1eb3a6', // Primary brand color
          600: '#15968c',
          700: '#127871',
          800: '#0f5f5a',
          900: '#0d4e4a',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          50: '#fef3f2',
          100: '#fee5e2',
          200: '#fecfc9',
          300: '#fdada4',
          400: '#fb7d6f',
          500: '#f25942',
          600: '#df3a25',
          700: '#bc2e1b',
          800: '#9c291a',
          900: '#81271d',
        },
      },
      fontFamily: {
        display: ['Spectral', 'Georgia', 'serif'], // Display/headings
        sans: ['Inter', 'system-ui', 'sans-serif'], // Body text
      },
      boxShadow: {
        'soft': '0 2px 8px -2px rgba(30, 179, 166, 0.08), 0 4px 16px -4px rgba(30, 179, 166, 0.04)',
        'soft-lg': '0 4px 16px -4px rgba(30, 179, 166, 0.12), 0 8px 32px -8px rgba(30, 179, 166, 0.08)',
        'soft-xl': '0 8px 32px -8px rgba(30, 179, 166, 0.16), 0 16px 64px -16px rgba(30, 179, 166, 0.12)',
        'elevated': '0 1px 3px rgba(15, 23, 42, 0.04), 0 8px 24px -4px rgba(15, 23, 42, 0.08)',
        'floating': '0 4px 16px -2px rgba(15, 23, 42, 0.08), 0 24px 48px -12px rgba(15, 23, 42, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      letterSpacing: {
        'tighter': '-0.03em',
      },
      lineHeight: {
        'relaxed-plus': '1.7',
      },
    },
  },
  plugins: [],
}
