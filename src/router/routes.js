import Home from '../views/Home.vue'
export default [
   {
      path: "*",
      redirect: "/"
   },
   {
      path: '/', // the path of this new page
      component: Home, // the one you imported
      name: 'home'
   }
]