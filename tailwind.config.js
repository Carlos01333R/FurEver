// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind");
// eslint-disable-next-line no-undef
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
   "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      backgroundImage: {
       'bg-hero': 'url("https://st4.depositphotos.com/8207706/19950/v/450/depositphotos_199501680-stock-illustration-seamless-background-colored-hearts-colorful.jpg")',
       'bg-hero-heard': 'url("/src/assets/img/corazon.png")',
      },
      backgroundColor: {
        'bg-hero-gradient': 'bg-gradient-to-tr from-violet-200 to-pink-200',
      },
     

    },
  },
  darkMode: "class",
  plugins: [
    flowbite.plugin(),
    nextui()
    
  ],
}