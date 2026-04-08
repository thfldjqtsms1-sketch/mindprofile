import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: 'var(--color-navy)',
          light: 'var(--color-navy-light)',
          dark: 'var(--color-navy-dark)',
        },
        gold: {
          DEFAULT: 'var(--color-gold)',
          light: 'var(--color-gold-light)',
          dark: 'var(--color-gold-dark)',
        },
        ivory: 'var(--color-ivory)',
        trust: 'var(--color-trust)',
        danger: {
          DEFAULT: 'var(--color-danger)',
          light: 'var(--color-danger-light)',
        },
        success: 'var(--color-success)',
        gray: {
          100: 'var(--color-gray-100)',
          200: 'var(--color-gray-200)',
          400: 'var(--color-gray-400)',
          600: 'var(--color-gray-600)',
          800: 'var(--color-gray-800)',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
        accent: ['var(--font-accent)'],
      },
      fontSize: {
        display: ['3.5rem', { lineHeight: '1.1', fontWeight: '800' }],
        'display-m': ['2rem', { lineHeight: '1.1', fontWeight: '800' }],
        h1: ['2.75rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h1-m': ['1.75rem', { lineHeight: '1.2', fontWeight: '700' }],
        h2: ['2rem', { lineHeight: '1.3', fontWeight: '700' }],
        'h2-m': ['1.5rem', { lineHeight: '1.3', fontWeight: '700' }],
        h3: ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h3-m': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        h4: ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],
        body: ['1rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }],
        caption: ['0.75rem', { lineHeight: '1.5', fontWeight: '500' }],
      },
      borderRadius: {
        sm: '6px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(0,0,0,0.06)',
        md: '0 4px 16px rgba(0,0,0,0.08)',
        lg: '0 8px 32px rgba(0,0,0,0.12)',
        xl: '0 16px 48px rgba(0,0,0,0.16)',
        glow: '0 0 24px rgba(201,169,110,0.15)',
        'glow-lg': '0 0 48px rgba(201,169,110,0.2)',
        cta: '0 4px 16px rgba(201,169,110,0.3)',
        'cta-hover': '0 8px 32px rgba(201,169,110,0.4)',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
      },
      maxWidth: {
        container: '1200px',
      },
      animation: {
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'count-up': 'countUp 2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
