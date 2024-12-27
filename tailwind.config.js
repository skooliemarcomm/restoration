/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#25496b',
          light: '#325c87',
          dark: '#1b3650',
        },
        accent: {
          DEFAULT: '#c6ab86',
          light: '#d4bea0',
          dark: '#b89869',
        },
      },
      animation: {
        waterdrop: 'waterdrop 1.5s infinite',
        ripple: 'ripple 1.5s infinite',
        wave1: 'wave 24s linear infinite',
        wave2: 'wave 20s linear infinite reverse',
        wave3: 'wave 18s linear infinite',
        wave4: 'wave 22s linear infinite reverse',
        wave5: 'wave 19s linear infinite',
        wave6: 'wave 21s linear infinite reverse',
        rise: 'rise 2s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.8s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        waterdrop: {
          '0%': { transform: 'translateX(-50%) translateY(0)', opacity: 1 },
          '33%': { transform: 'translateX(-50%) translateY(40px)', opacity: 0 },
          '100%': { transform: 'translateX(-50%) translateY(40px)', opacity: 0 },
        },
        ripple: {
          '0%, 25%': { transform: 'scale(0)', opacity: 0 },
          '25.1%': { transform: 'scale(0)', opacity: 1 },
          '100%': { transform: 'scale(1)', opacity: 0 },
        },
        wave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        rise: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};