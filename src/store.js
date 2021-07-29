import Vue from "vue";
import Vuex from "vuex";
import AuthenticationStore from "@/store/AuthenticationStore";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    auth: AuthenticationStore,
  },
});
