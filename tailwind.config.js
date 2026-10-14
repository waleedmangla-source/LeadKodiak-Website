/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: 'rgb(var(--color-navy-900) / <alpha-value>)',
          800: 'rgb(var(--color-navy-800) / <alpha-value>)',
          700: 'rgb(var(--color-navy-700) / <alpha-value>)',
        },
        cream: {
          100: 'rgb(var(--color-cream-100) / <alpha-value>)',
          200: 'rgb(var(--color-cream-200) / <alpha-value>)',
        },
        sage: {
          300: 'rgb(var(--color-sage-300) / <alpha-value>)',
          400: 'rgb(var(--color-sage-400) / <alpha-value>)',
          500: 'rgb(var(--color-sage-500) / <alpha-value>)',
        },
        cognac: {
          400: 'rgb(var(--color-cognac-400) / <alpha-value>)',
          500: 'rgb(var(--color-cognac-500) / <alpha-value>)',
          600: 'rgb(var(--color-cognac-600) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(var(--color-navy-800), 0.08)',
        'glass-dark': '0 8px 32px 0 rgba(var(--color-navy-900), 0.37)',
        'cognac-glow': '0 0 25px rgba(var(--color-cognac-500), 0.35)',
      }
    },
  },
  plugins: [],
};
