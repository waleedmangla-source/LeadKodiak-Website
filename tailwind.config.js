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
          900: '#071E36',
          800: '#0A2947',
          700: '#12375C',
        },
        cream: {
          100: '#F3E4C9',
          200: '#E8D2AF',
        },
        sage: {
          300: '#D3D4C0',
          400: '#BCBEA5',
        },
        cognac: {
          500: '#8B5E3C',
          600: '#734C2E',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(10, 41, 71, 0.08)',
        'glass-dark': '0 8px 32px 0 rgba(7, 30, 54, 0.37)',
        'cognac-glow': '0 0 25px rgba(139, 94, 60, 0.35)',
      }
    },
  },
  plugins: [],
};
