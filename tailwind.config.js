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
          400: '#9CA3AF', // e.g., gray-400
          500: '#1F2937', // gray-500
          600: '#4B5563', // gray-600
        },
        background: {
          DEFAULT: '#F9FAFB', // very light gray
          dark: '#1F2937',     // dark background
          muted: '#E5E7EB',    // light gray background
        },
        accent: {
          DEFAULT: '#2563EB', // blue-500
          light: '#E5E7EB',   // blue-300
          dark: '#1D4ED8',    // blue-700
        },
        foreground: {
          DEFAULT: '#111827', // gray-900
          soft: '#374151',    // gray-700
          muted: '#6B7280',   // gray-500
        },
        primary: {
          DEFAULT: '#111827',
        },
      },
    },
  },
  plugins: [],
}

