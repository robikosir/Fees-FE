export default {
  namespaced: true,
  state: {
    team: JSON.parse(localStorage.getItem("team")),
    currency: localStorage.getItem("currency"),
  },
  mutations: {
    updateCurrency: (state, currency) => {
      localStorage.currency = currency;
      state.currency = currency;
    },
    updateTeam: (state, team) => {
      localStorage.team = JSON.stringify(team);
      state.team = team;
    },
  },
};
