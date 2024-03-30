/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "auth/signup.html", "auth/login.html",],
  theme: {
    extend: {colors: {
      'text': '#070704',
      'background': '#fbfaf5',
      'primary': '#fbda03',
      'secondary': '#edde79',
      'accent': '#f9e248',
     },
     },
    
  },
  plugins: [],
}

