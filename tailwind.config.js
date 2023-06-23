/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "300px",
        sm: "450px",

        // ...defaultTheme.screens,
      },
      colors: {
        mediumGray: "#A1ACB8",
        dimGray: "#1A1B1C",
        primaryBlue: "#198ADA",
        dimWhite: "#FAFAFA",
        textColor: "#212121",
        iconColor: "#595959",
        primaryYellow: "#DAB019",
        primary: "#292872",
        primaryGreen: "#19DA66",
      },
    },
  },
  plugins: [],
};
