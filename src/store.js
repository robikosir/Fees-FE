import Vue from "vue";
import Vuex from "vuex";
import AuthenticationStore from "@/store/AuthenticationStore";
import TeamStore from "@/store/TeamStore";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    auth: AuthenticationStore,
    team: TeamStore,
  },
});
