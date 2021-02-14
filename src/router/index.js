import Vue from "vue";
import VueRouter from "vue-router";
import Preview from "../views/Preview.vue";
import Awards from "../views/Awards.vue";
import EnterCode from "../views/EnterCode.vue";
import HowToTakePart from "../views/HowToTakePart.vue";
import MyAccount from "../views/MyAccount.vue";
import Ranking from "../views/Ranking.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import TermsAndConditions from "../views/TermsAndConditions.vue";
import AppContent from "../views/AppContent.vue";
import ContactUs from "../views/ContactUs.vue";
import store from "@/store";
import { Activity } from "../api";

Vue.use(VueRouter);

const getActivity = async () => {
  // return null;
  try {
    const resp = await Activity();
    if (resp.data.days > 0) return "/muy-pronto-comienza-la-promo";
    if (resp.data.days === 0) return "/";
    return null;
  } catch (err) {
    return "/muy-pronto-comienza-la-promo";
  }
};

const activityGuard = async (to, from, next) => {
  const redirect = await getActivity();
  redirect ? next(redirect) : next();
};

const authGuard = async (to, from, next) => {
  const isAuthenticated = !!store.state.token;
  isAuthenticated ? next() : next("/ingresar");
};

const authGuardNot = async (to, from, next) => {
  const isAuthenticated = !!store.state.token;
  !isAuthenticated ? next() : next("/ingresar-codigo");
};

const routes = [
  {
    path: "/muy-pronto-comienza-la-promo",
    name: "preview",
    component: Preview,
  },
  {
    path: "/",
    name: "home",
    component: AppContent,
    beforeEnter: activityGuard,
    children: [
      {
        path: "",
        redirect: "ingresar",
      },
      {
        path: "ingresar",
        name: "signIn",
        component: SignIn,
        beforeEnter: authGuardNot,
      },
      {
        path: "registrarse",
        name: "signUp",
        component: SignUp,
        beforeEnter: authGuardNot,
      },
      {
        path: "ranking",
        name: "ranking",
        component: Ranking,
        beforeEnter: authGuard,
      },
      {
        path: "terminos-y-condiciones",
        name: "termsAndConditions",
        component: TermsAndConditions,
      },
      {
        path: "mi-cuenta",
        name: "myAccount",
        component: MyAccount,
        beforeEnter: authGuard,
      },
      {
        path: "como-particiar",
        name: "howToTakePart",
        component: HowToTakePart,
      },
      {
        path: "ingresar-codigo",
        name: "enterCode",
        component: EnterCode,
        beforeEnter: authGuard,
      },
      {
        path: "premios",
        name: "awards",
        component: Awards,
      },
      {
        path: "contactenos",
        name: "contactUs",
        component: ContactUs,
        beforeEnter: authGuard,
      },
      {
        path: "*",
        redirect: "/ingresar",
      },
      {
        path: "",
        redirect: "/ingresar",
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
