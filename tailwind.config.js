/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fondo-pantalla': "url('fondo_pantalla.jpg')",
      },
      variables: {
        '--index': 'calc(1vw + 1vh)',
      },
    },   
    screens: {
      'md': '769px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px', 
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
    },

    fontFamily:{
      font:[ "Dancing Script", "cursive"]
    },
    
    keyframes: {
      zoomOut: {
        '0%': { transform: 'scale(1)' },
        '100%': { transform: 'scale(1.2)' },
      },

      typewriter: {
        from: { width: '0' },
        to: { width: '100%' },
      },
      blinkingCursor: {
        '0%, 100%': { borderRightColor: 'rgba(255,255,255,.75)' },
        '50%': { borderRightColor: 'transparent' },
      },
      hideCursor: {
        to: { borderRightColor: 'transparent' },
      },

      itemHover: {
        '0%': { transform: 'translateZ(0)' },
        '100%': { transform: 'translateZ(calc(var(--index) * 10))' },
      },
      itemFocus: {
        '0%': { width: 'calc(var(--index) * 3)', filter: 'brightness(0.5)' },
        '100%': { width: '28vw', filter: 'brightness(1)', zIndex: 100 },
      },

    },
    animation: {
      zoomOut: 'zoomOut 0.5s ease forwards',
      typewriter: 'typewriter 5s steps(50) 1s 1 normal both',
      blinkingCursor: 'blinkingCursor 500ms steps(50) infinite normal',
      hideCursor: 'hideCursor 0.5s forwards',
      itemHover: 'itemHover 1.25s cubic-bezier(.1, .7, 0, 1) forwards',
      itemFocus: 'itemFocus 1.25s cubic-bezier(.1, .7, 0, 1) forwards',
    },

    perspective: {
      '35': 'calc(1vw + 1vh * 35)',
    }

  },
  plugins: [],
}

