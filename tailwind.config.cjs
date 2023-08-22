const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
      },
    },
    keyframes: {
      blink: {
        "0%, 100%": { opacity: 1 },
        "50%": { opacity: 0 },
      },
      wave: {
        "0%, 100%": { transform: "rotate(0deg)" },
        "50%": { transform: "rotate(15deg)" },
      },
    },
    animation: {
      blink: "blink 1s steps(1, end) infinite",
      wave: "wave 1s ease-in-out infinite",
    },
  },
  // TODO: customize the theming
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
