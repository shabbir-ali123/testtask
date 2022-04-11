module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors:{
      'secondary':' #FD1A79',
      'bar':'#5B32FD',
      'searchBar':'#393153',
      table:'#482BC7',
      email:'#FDD032'
     },
   screens:{
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
   },
  
  },
  plugins: [],
}
