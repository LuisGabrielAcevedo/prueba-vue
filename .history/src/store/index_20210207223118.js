import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const user = localStorage.getItem("user");
const token = localStorage.getItem("token");

export default new Vuex.Store({
  state: {
    loading: true,
    user: user ? JSON.parse(user) : null,
    // token: token ? token : null,
    alert: null,
    termsAndConditions: false,
    privacyPolicy: false,
    mobile: false,
  },
  mutations: {
    setLoading(state, loading) {
      state.loading = loading;
    },
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
    setAlert(state, data) {
      state.alert = data;
    },
    setTermsAndConditions(state, termsAndConditions) {
      state.termsAndConditions = termsAndConditions;
    },
    setPrivacyPolicy(state, privacyPolicy) {
      state.privacyPolicy = privacyPolicy;
    },
    setMobile(state, mobile) {
      state.mobile = mobile;
    },
  },
  getters: {
    loading(state) {
      return state.loading;
    },
    user(state) {
      return state.user;
    },
    token(state) {
      return state.token;
    },
    alert(state) {
      return state.alert;
    },
    termsAndConditions(state) {
      return state.termsAndConditions;
    },
    privacyPolicy(state) {
      return state.privacyPolicy;
    },
    mobile(state) {
      return state.mobile;
    },
  },
  actions: {
    setLoading({ commit }, loading) {
      commit("setLoading", loading);
    },
    setUser({ commit }, user) {
      localStorage.setItem("user", JSON.stringify(user));
      commit("setUser", user);
    },
    setToken({ commit }, token) {
      localStorage.setItem("token", token);
      commit("setToken", token);
    },
    logout({ commit }) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      commit("setToken", null);
      commit("setUser", null);
    },
    setAlert({ commit }, data) {
      commit("setAlert", data);
    },
    setTermsAndConditions({ commit }, status) {
      commit("setTermsAndConditions", status);
    },
    setPrivacyPolicy({ commit }, status) {
      commit("setPrivacyPolicy", status);
    },
    setMobile({ commit }, mobile) {
      commit("setMobile", mobile);
    },
  },
});
