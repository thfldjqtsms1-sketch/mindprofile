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
        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          surface: 'var(--bg-surface)',
          elevated: 'var(--bg-elevated)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
          muted: 'var(--text-muted)',
        },
        gold: {
          DEFAULT: 'var(--accent-gold)',
          light: 'var(--accent-gold-light)',
          dim: 'var(--accent-gold-dim)',
        },
        danger: 'var(--color-danger)',
        success: 'var(--color-success)',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        accent: ['var(--font-accent)'],
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '20px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(0,0,0,0.3), inset 0 1px 0 rgba(216,195,160,0.04)',
        elevated: '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(216,195,160,0.06)',
        glow: '0 0 32px rgba(184,148,90,0.12)',
        'glow-strong': '0 0 48px rgba(184,148,90,0.20)',
        cta: '0 4px 20px rgba(184,148,90,0.25)',
        'cta-hover': '0 8px 36px rgba(184,148,90,0.35)',
      },
      maxWidth: {
        editorial: '1080px',
        wide: '1200px',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
