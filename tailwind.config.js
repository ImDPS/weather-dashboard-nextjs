/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        "dark-blue": "#2C3741",
        "light-blue": "#7AB2D8",
        "sky-blue": "#C2E0E8",
        
        // Secondary Colors
        "sunshine-yellow": "#F9D77E",
        "sunset-orange": "#F7A37B",
        "cloud-gray": "#D9E3EA",
        
        // Weather Condition Colors
        "storm-blue": "#4A6FA5",
        "rain-blue": "#85B9D3",
        "snow-white": "#F0F4F7",
        "sunny-yellow": "#FFD166",
        "cloudy-gray": "#A9B5C1",
        
        // Neutrals
        "neutral-white": "#FFFFFF",
        "light-gray": "#F5F5F3",
        "medium-gray": "#D3D3D3",
        "dark-gray": "#565656",
        "neutral-black": "#1C1C1C",
        
        // Theme colors
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
      },
      borderRadius: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      fontSize: {
        'header-xl': '28px',
        'header-l': '22px',
        'header-m': '18px',
        'body': '16px',
        'small': '14px',
        'xsmall': '12px',
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        bold: '700',
      },
      lineHeight: {
        'tight': '1.2',
        'normal': '1.5',
      },
      spacing: {
        '2xs': '4px',
        'xs': '8px',
        's': '16px',
        'm': '24px',
        'l': '32px',
        'xl': '48px',
      },
      boxShadow: {
        'card': '0px 4px 12px rgba(0,0,0,0.05)',
        'card-hover': '0px 4px 16px rgba(0,0,0,0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          /* For IE and Edge */
          '-ms-overflow-style': 'none',
          /* For Firefox */
          'scrollbar-width': 'none',
          /* For Chrome, Safari, and Opera */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      }
      addUtilities(newUtilities);
    }
  ],
} 