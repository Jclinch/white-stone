// // tailwind.config.ts
// module.exports = {
//   content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         indigo: "#0f172a",
//         cerise: "#5b21b6",
//         teal: "#06b6d4",
//         ice: "#eef2ff",
//       },
//     },
//   },
//   plugins: [],
// };





// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ws: {
          indigo: "#0f172a",
          cerise: "#5b21b6",
          teal: "#06b6d4",
          ice: "#eef2ff",
        },
      },
    },
  },
  plugins: [],
};

export default config;
