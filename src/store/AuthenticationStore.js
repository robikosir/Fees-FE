export default {
  namespaced: true,
  state: {
    accessToken: localStorage.getItem("accessToken") || null,
  },
  mutations: {
    updateAccessToken: (state, accessToken) => {
      localStorage.accessToken = accessToken;
      state.accessToken = accessToken;
    },
  },
  getters: {
    accessToken: (state) => state.accessToken,
  },
};
