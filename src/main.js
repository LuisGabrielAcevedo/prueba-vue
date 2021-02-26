import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "@/plugins/vuetify";
import "./styles.scss";
import "@/plugins/axios";
import VueAnalytics from "vue-analytics";
import AxiosInterceptor from "@/plugins/axios-interceptor";
new AxiosInterceptor();
import VueMask from "v-mask";
Vue.use(VueMask);

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  id: "G-57WE3C7GRZ",
  router,
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
