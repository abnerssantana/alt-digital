/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
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
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#283F2B",
          foreground: "hsl(var(--primary-foreground))",
          100: "#E8F0E9",
          200: "#C4D9C6",
          300: "#9FC3A3",
          400: "#7BAC80",
          500: "#568B5D",
          600: "#3A6E41",
          700: "#283F2B",
          800: "#162218",
          900: "#0D1510",
        },
        secondary: {
          DEFAULT: "#9D603B",
          foreground: "hsl(var(--secondary-foreground))",
          100: "#F5EAE0",
          200: "#E6CDB3",
          300: "#D7B085",
          400: "#C89358",
          500: "#B9762A",
          600: "#9D603B",
          700: "#7D502B",
          800: "#5E3F1C",
          900: "#3E2F0D",
        },
        accent: {
          DEFAULT: "#F0F4E8",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse": "pulse 4s ease-in-out infinite",
      },
      fontFamily: {
        sans: ['var(--font-satoshi)', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}