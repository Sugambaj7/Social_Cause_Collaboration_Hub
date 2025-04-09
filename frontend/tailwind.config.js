/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins_light: ["Poppins", "sans-serif"],
        nunito: ["Nunito"],
      },
      backgroundColor: {
        custom_blue: "#1F5DB6",
      },
      backgroundImage: {
        custom_gradient: "linear-gradient(90deg, #1F5DB6 0%, #1F5DB6 100%)",
      },
      borderColor: {
        custom_border: "#ced4da",
      },
    },
  },
  plugins: [],
};
