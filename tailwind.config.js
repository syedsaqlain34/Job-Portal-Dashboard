/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#071A2F', /* Deep Navy Blue */
          700: '#061428'
        },
        secondary: '#38BDF8', /* Sky Blue */
        background: '#F5F7FA', /* Light Gray background */
        accent: '#FFFFFF'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial']
      },
      borderRadius: {
        lg: '0.75rem'
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.1)'
      }
    }
  },
  plugins: [],
}

