import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cards from '../views/Cards.vue'
import Credit from '../views/Credit.vue'
import Payments from '../views/Payments.vue'
import Settings from '../views/Settings.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/cards',
    name: 'Cards',
    component: Cards
  },
  {
    path: '/credit',
    name: 'Credit',
    component: Credit
  },
  {
    path: '/payments',
    name: 'Payments',
    component: Payments
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/',
    name: 'Cards',
    component: Cards
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
