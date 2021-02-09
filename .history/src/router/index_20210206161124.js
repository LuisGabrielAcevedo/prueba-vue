import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Preview from '../views/Preview.vue'
import Awards from '../views/Awards.vue'
import EnterCode from '../views/EnterCode.vue'
import HowToTakePart from '../views/HowToTakePart.vue'
import MyAccount from '../views/MyAccount.vue'
import Ranking from '../views/Ranking.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import TermsAndConditions from '../views/TermsAndConditions.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'review',
    component: Preview
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
