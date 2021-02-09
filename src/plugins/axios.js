import axios from "axios";
import Vue from "vue";
import VueAxios from "vue-axios";
const baseURL = "http://18.219.1.133/api/";
axios.defaults.baseURL = baseURL;
Vue.use(VueAxios, axios);
