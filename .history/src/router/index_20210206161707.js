import Vue from 'vue'
import VueRouter from 'vue-router'
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
    name: 'preview',
    component: Preview
  },
  {
    path: '/ingresar',
    name: 'signIn',
    component: SignIn
  },
  {
    path: '/ingresar',
    name: 'signUp',
    component: SignUp
  },
  {
    path: '/ranking',
    name: 'ranking',
    component: Ranking
  },
  {
    path: '/terminosycondiciones',
    name: 'termsAndConditions',
    component: TermsAndConditions
  },
  {
    path: '/micuenta',
    name: 'myAccount',
    component: MyAccount
  },
  {
    path: '/howToTakePart',
    name: 'howToTakePart',
    component: HowToTakePart
  },
  {
    path: '/EnterCode',
    name: 'enterCode',
    component: EnterCode
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
