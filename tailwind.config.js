/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './app/**/*.{ts,tsx,js,jsx}',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        backgroundImage: {
          'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
        },
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#283F2B",  // Verde escuro
          foreground: "hsl(var(--primary-foreground))",
          100: "#E8F0E9",
          200: "#C4D9C6",
          300: "#9FC3A3",
          400: "#7BAC80",      // Verde médio-claro
          500: "#568B5D",      // Verde médio
          600: "#3A6E41",      // Verde médio-escuro
          700: "#283F2B",      // Verde escuro (DEFAULT)
          800: "#162218",      // Verde quase preto
          900: "#0D1510",
        },
        secondary: {
          DEFAULT: "#9D603B",  // Terracota médio
          foreground: "hsl(var(--secondary-foreground))",
          100: "#F5EAE0",
          200: "#E6CDB3",
          300: "#D7B085",      // Bege
          400: "#C89358",      // Marrom claro
          500: "#B9762A",      // Terracota claro
          600: "#9D603B",      // Terracota médio (DEFAULT)
          700: "#7D502B",      // Terracota escuro
          800: "#5E3F1C",
          900: "#3E2F0D",
        },
        accent: {
          DEFAULT: "#F0F4E8",  // Creme/off-white
          foreground: "#1A2A1E",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse": "pulse 4s ease-in-out infinite",
        "shimmer": "shimmer 8s ease-in-out infinite",
        "wave": "wave 2.5s ease-in-out infinite",
      },
      fontFamily: {
        sans: ['var(--font-satoshi)', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': "url('/images/noise.png')",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}