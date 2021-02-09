import axios from "axios";
import Vue from "vue";
import VueAxios from "vue-axios";
const baseURL = "https://api-rcn.loyalquo.com/api/";
axios.defaults.baseURL = baseURL;
Vue.use(VueAxios, axios);