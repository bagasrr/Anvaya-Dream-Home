/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "border-blink": {
          "0%, 100%": { borderColor: "#10B981" }, // Warna hijau
          "50%": { borderColor: "#D1FAE5" }, // Warna hijau muda
        },
        animation: {
          "border-blink": "border-blink 5s infinite",
        },
      },
    },
  },
  plugins: [],
};
