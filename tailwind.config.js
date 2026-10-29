/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark surfaces, taken from the RYX sales deck's cover/closing slides.
        night: {
          DEFAULT: '#111317',
          900: '#0B0C0F',
          800: '#16191F',
          700: '#1D2129',
          600: '#272C36',
        },
        // Light surfaces, from the deck's content slides.
        paper: '#FFFFFF',
        mist: '#F6F7F9',
        line: '#E4E7EC',
        ink: {
          DEFAULT: '#101217',
          secondary: '#4A5160',
          muted: '#646B78',
        },
        // Primary accent: the deck's "Book a 30-minute call" blue.
        blue: {
          DEFAULT: '#3D5AFE',
          dark: '#2A44D8',
          light: '#E8ECFF',
          soft: '#8C9EFF',
        },
        // Ferry's own accent, from the Ferry deck.
        gold: {
          DEFAULT: '#D6A84E',
          dark: '#8A6620',
          light: '#F6EBD3',
        },
        // Problem / solution tints used on the use-case detail cards.
        rose: { light: '#FDF2F2', DEFAULT: '#B4333E' },
        mint: { light: '#EEF7F1', DEFAULT: '#1B6E45' },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'sans-serif'],
      },
      borderRadius: {
        card: '20px',
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(16,18,23,0.04), 0 8px 24px -12px rgba(16,18,23,0.12)',
        lift: '0 2px 4px rgba(16,18,23,0.05), 0 20px 40px -16px rgba(16,18,23,0.22)',
        glow: '0 10px 40px -10px rgba(61, 90, 254, 0.6)',
        'glow-gold': '0 10px 40px -12px rgba(214, 168, 78, 0.55)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        dropdown: {
          from: { opacity: '0', transform: 'translateY(-8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'backdrop-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'modal-in': {
          from: { opacity: '0', transform: 'translateY(12px) scale(0.97)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        orbit: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'msg-in': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 700ms cubic-bezier(0.22,1,0.36,1) both',
        dropdown: 'dropdown 250ms cubic-bezier(0.22,1,0.36,1)',
        'backdrop-in': 'backdrop-in 200ms ease-out both',
        'modal-in': 'modal-in 280ms cubic-bezier(0.22,1,0.36,1) both',
        orbit: 'orbit 80s linear infinite',
        'orbit-reverse': 'orbit 120s linear infinite reverse',
        'msg-in': 'msg-in 500ms cubic-bezier(0.22,1,0.36,1) both',
        blink: 'blink 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
