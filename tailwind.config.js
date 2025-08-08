/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      text: {
        400: '#6B7280', // gray-500 — soft text
        500: '#374151', // gray-700 — body text
        600: '#1F2937', // gray-800 — headings or strong text
      },
      background: {
        DEFAULT: '#FFFFFF', // pure white background
        muted: '#F3F4F6',    // very light gray — for cards, sections
        subtle: '#F9FAFB',   // background accents or alternate rows
        dark: '#61646b',
      },
      accent: {
        DEFAULT: '#3B82F6', // blue-500 — interactive elements
        light: '#DBEAFE',   // blue-100 — hover backgrounds or soft accents
        dark: '#2563EB',    // blue-600 — active or strong accents
      },
      foreground: {
        DEFAULT: '#1F2937', // gray-800 — general text
        soft: '#4B5563',    // gray-600 — muted UI text
        muted: '#9CA3AF',   // gray-400 — placeholders, secondary info
      },
      primary: {
        DEFAULT: '#2563EB', // brand/main color
        contrast: '#FFFFFF', // text on primary (e.g., buttons)
      },
    },
  },
},

  plugins: [],
}

