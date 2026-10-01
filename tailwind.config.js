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
          teal: "#0D9488",
          tealDark: "#0F766E",
          tealDeep: "#115E59",
          tealLight: "#14B8A6",
          tealPale: "#F0FDFA",
          tealMuted: "#CCFBF1",
          orange: "#C2410C",
          orangeBright: "#EA580C",
          orangeLight: "#FB923C",
          orangePale: "#FFF7ED",
          navy: "#090D16",
          navyCard: "#111726",
          navyBorder: "#1E293B",
          slateText: "#64748B",
          darkBg: "#06090F",
          lightBg: "#F8F9FB",
          cardLight: "#FFFFFF",
          purpleBrand: "#7C3AED",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        heading: ["var(--font-outfit)", "Outfit", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        "solid-xs": "2px 2px 0px 0px #090D16",
        "solid-sm": "3px 3px 0px 0px #090D16",
        "solid": "4px 4px 0px 0px #090D16",
        "solid-md": "6px 6px 0px 0px #090D16",
        "solid-lg": "8px 8px 0px 0px #090D16",
        "solid-teal": "4px 4px 0px 0px #0D9488",
        "solid-orange": "4px 4px 0px 0px #C2410C",
        "solid-white": "4px 4px 0px 0px #FFFFFF",
      },
      borderRadius: {
        "card": "12px",
      }
    },
  },
  plugins: [],
};
