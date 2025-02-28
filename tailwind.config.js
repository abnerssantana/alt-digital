/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
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
        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring))",
        background: "#111111", // Fundo escuro conforme guia visual
        foreground: "#F2F2F2", // Texto claro conforme guia visual
        primary: {
          DEFAULT: "#283F2B", // Verde escuro
          foreground: "#F2F2F2",
          100: "#E8F0E9",
          200: "#C4D9C6",
          300: "#9FC3A3",
          400: "#7BAC80", // Verde médio-claro
          500: "#568B5D", // Verde médio
          600: "#3A6E41", // Verde médio-escuro
          700: "#283F2B", // Verde escuro
          800: "#162218", // Verde quase preto
          900: "#0D1510",
        },
        secondary: {
          DEFAULT: "#9D603B", // Terracota médio
          foreground: "#F2F2F2",
          100: "#F5EAE0",
          200: "#E6CDB3",
          300: "#D7B085", // Bege
          400: "#C89358", // Marrom claro
          500: "#B9762A", // Terracota claro
          600: "#9D603B", // Terracota médio
          700: "#7D502B", // Terracota escuro
          800: "#5E3F1C",
          900: "#3E2F0D",
        },
        accent: {
          DEFAULT: "#F0F4E8", // Creme/off-white
          foreground: "#1A2A1E",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive))",
          foreground: "oklch(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "oklch(var(--muted))",
          foreground: "oklch(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "oklch(var(--popover))",
          foreground: "oklch(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "oklch(var(--card))",
          foreground: "oklch(var(--card-foreground))",
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
  plugins: ["tailwindcss-animate"],
};

export default config;