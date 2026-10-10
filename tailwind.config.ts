import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#eef1f6',
          100: '#d1dae6',
          200: '#a3b5cc',
          300: '#7591b3',
          400: '#476c99',
          500: '#24476A',
          600: '#14253D',
          700: '#0e1b2e',
          800: '#09121f',
          900: '#04090f',
        },
        teal: {
          50:  '#e8faf8',
          100: '#c0f2ec',
          200: '#81e5d9',
          300: '#41d9c7',
          400: '#11B7A3',
          500: '#0e9e8c',
          600: '#0b8574',
          700: '#086c5d',
          800: '#055346',
          900: '#023a2f',
        },
        coral: {
          50:  '#fff2ef',
          100: '#ffd9d2',
          200: '#ffb3a5',
          300: '#ff8d78',
          400: '#FF765E',
          500: '#ff5a3d',
          600: '#e0401f',
          700: '#b83318',
          800: '#912710',
          900: '#6a1b09',
        },
        cream: {
          50:  '#fdfcfa',
          100: '#FAF8F3',
          200: '#f5f0e8',
          300: '#efe8d8',
          400: '#e8e0c9',
          500: '#ddd6ba',
        },
        neutral: {
          50:  '#F2F5F8',
          100: '#e4e9ef',
          200: '#c9d3df',
          300: '#adbdcf',
          400: '#92a7bf',
          500: '#7691af',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        telugu: ['Noto Sans Telugu', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'bounce-soft': 'bounceSoft 1s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(20, 37, 61, 0.08), 0 2px 4px -2px rgba(20, 37, 61, 0.05)',
        'card-hover': '0 10px 25px -5px rgba(20, 37, 61, 0.15), 0 8px 10px -6px rgba(20, 37, 61, 0.1)',
        'nav': '0 1px 3px rgba(20, 37, 61, 0.1)',
        'inner-sm': 'inset 0 1px 3px rgba(20, 37, 61, 0.1)',
      },
    },
  },
  plugins: [typography],
} satisfies Config;
