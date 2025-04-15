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
        custom_alert: "#F7DDDC",
        custom_white: "#F5F5F5",
        custom_green: "#4BBF73"
      },
      backgroundImage: {
        custom_gradient: "linear-gradient(90deg, #1F5DB6 0%, #1F5DB6 100%)",
      },
      borderColor: {
        custom_border: "#ced4da",
        custom_alert: "#F7DDDC",
      },
      textColor: {
        alert_red: "712B29",
      },
    },
  },
  plugins: [],
};
