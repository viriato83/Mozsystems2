/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0066FF",       // azul principal (links e botões)
        secondary: "#00C1FF",     // gradiente
        accent: "#00FF88",        // botão WhatsApp
        darkbg: "#0A0F2C",        // fundo Hero escuro
        lightgray: "#F9FAFB",     // fundo seções claras
        graytext: "#6B7280",      // texto cinza
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Poppins", "sans-serif"]
      },
      boxShadow: {
        card: "0 10px 15px rgba(0,0,0,0.1)",
        hover: "0 15px 25px rgba(0,0,0,0.2)",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding"
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom right, #0A0F2C, #0066FF)',
      },
    },
  },
  plugins: [],
}