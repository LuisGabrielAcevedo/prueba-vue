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
    path: '/muy-pronto-comienza-la-promo',
    name: 'preview',
    component: Preview
  },
  {
    path: '/ingresar',
    name: 'signIn',
    component: SignIn
  },
  {
    path: '/registrarse',
    name: 'signUp',
    component: SignUp
  },
  {
    path: '/ranking',
    name: 'ranking',
    component: Ranking
  },
  {
    path: '/terminos-y-condiciones',
    name: 'termsAndConditions',
    component: TermsAndConditions
  },
  {
    path: '/mi-cuenta',
    name: 'myAccount',
    component: MyAccount
  },
  {
    path: '/como ',
    name: 'howToTakePart',
    component: HowToTakePart
  },
  {
    path: '/enterCode',
    name: 'enterCode',
    component: EnterCode
  },
  {
    path: '/premios',
    name: 'awards',
    component: Awards
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
