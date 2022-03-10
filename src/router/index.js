import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/beverage',
    name: 'Beverage',
    component: () => import('../components/Beverage.vue')
  }, {
    path: '/meal',
    name: 'Meal',
    component: () => import('../components/Meal.vue')
  }, {
    path: '/nightSnack',
    name: 'NightSnack',
    component: () => import('../components/NightSnack.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
