export default {
  namespaced: true,
  state: {
    currency: localStorage.getItem("currency"),
  },
  mutations: {
    updateCurrency: (state, currency) => {
      localStorage.currency = currency;
      state.currency = currency;
    },
  },
};
