import { auth } from "@/api/auth";
import { users } from "@/api/users";

export default {
  namespaced: true,
  state: {
    accessToken: localStorage.getItem("accessToken") || null,
    user: JSON.parse(localStorage.getItem("user")) || {},
    isAdmin: JSON.parse(localStorage.getItem("isAdmin")) || false,
  },
  mutations: {
    updateAccessToken: (state, accessToken) => {
      localStorage.accessToken = accessToken;
      state.accessToken = accessToken;
    },
    updateUser: (state, user) => {
      localStorage.user = JSON.stringify(user);
      state.user = user;
    },
    updateIsAdmin: (state, isAdmin) => {
      localStorage.isAdmin = JSON.stringify(isAdmin);
      state.isAdmin = isAdmin;
    },
  },
  getters: {
    accessToken: (state) => state.accessToken,
    isAuthenticated: (state) => !!state.accessToken,
  },
  actions: {
    login({ commit, dispatch }, [email, password]) {
      return new Promise((resolve, reject) => {
        auth
          .login(email, password)
          .then((response) => {
            let token = response.data.token;
            commit("updateAccessToken", token);
            dispatch("getSelf");
            resolve(response);
          })
          .catch((err) => {
            commit("updateAccessToken", null);
            reject(err);
          });
      });
    },
    async getSelf({ commit }) {
      let response = await users.getSelf();
      commit("updateUser", response.data);
    },
    logout({ commit }) {
      commit("updateAccessToken", "");
      localStorage.removeItem("accessToken");
    },
  },
};
