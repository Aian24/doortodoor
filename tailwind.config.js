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
        brand: {
          pink: "#DC1F62",
          pinkHover: "#BE185D",
          pinkLight: "#FCE7F3",
          pinkPale: "#FDF2F8",
          blue: "#0284C7",
          blueHover: "#0369A1",
          blueLight: "#38BDF8",
          bluePale: "#DEF2FB",
          blueMuted: "#E0F2FE",
          cyan: "#0EA5E9",
          navy: "#0F172A",
          navyCard: "#1E293B",
          navyBorder: "#334155",
          slateText: "#64748B",
          darkBg: "#0F172A",
          lightBg: "#F0F9FF",
          cardLight: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        heading: ["var(--font-catamaran)", "Catamaran", "Roboto", "system-ui", "-apple-system", "sans-serif"],
        mono: ["SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      boxShadow: {
        "solid-xs": "2px 2px 0px 0px #0F172A",
        "solid-sm": "3px 3px 0px 0px #0F172A",
        "solid": "4px 4px 0px 0px #0F172A",
        "solid-md": "6px 6px 0px 0px #0F172A",
        "solid-lg": "8px 8px 0px 0px #0F172A",
        "solid-pink": "4px 4px 0px 0px #DC1F62",
        "solid-blue": "4px 4px 0px 0px #0284C7",
        "solid-white": "4px 4px 0px 0px #FFFFFF",
      },
      borderRadius: {
        "card": "16px",
      }
    },
  },
  plugins: [],
};
