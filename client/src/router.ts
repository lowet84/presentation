import Vue from 'vue'
import Router from 'vue-router'
import Home from './Components/Home.vue'
import Setup from './Components/Setup.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/setup',
      name: 'setup',
      component: Setup
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})