/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0c0d0e',
        surface: '#151719',
        raised: '#1f2225',
        line: 'rgba(255,255,255,0.07)',
        'line-strong': 'rgba(255,255,255,0.13)',
        'line-hover': 'rgba(255,255,255,0.24)',
        fg: '#eceef0',
        'fg-2': '#b4babf',
        'fg-3': '#8a9096',
        metal: '#d6dbe0',
        'metal-edge': '#b9c2cb',
        steel: '#9fb6cc',
        signal: '#4c8dff',
        done: '#4fa574',
      },
      fontFamily: {
        sans: ['Archivo', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', '"Cascadia Mono"', 'Menlo', 'monospace'],
      },
      maxWidth: {
        wrap: '76rem',
        narrow: '46rem',
      },
      borderRadius: {
        DEFAULT: '8px',
        lg: '14px',
      },
      boxShadow: {
        shot: '0 30px 80px -20px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.13)',
      },
      transitionTimingFunction: {
        snap: 'cubic-bezier(.2,.7,.2,1)',
      },
    },
  },
  plugins: [],
};
