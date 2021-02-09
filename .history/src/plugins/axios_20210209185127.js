import axios from "axios";
import Vue from "vue";
import VueAxios from "vue-axios";
const baseURL = "http://recaptcha.loyalquo.com/api/";
axios.defaults.baseURL = baseURL;
Vue.use(VueAxios, axios);
