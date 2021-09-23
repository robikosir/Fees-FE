import client from "@/client/client";

const route = "/teams/";

export const teams = {
  createTeam(data) {
    return client.post(route, data);
  },
  getTeams() {
    return client.get(route);
  },
  getTeam(teamId) {
    return client.get(`${route}${teamId}/`);
  },
  getPlayersAndFees(teamId) {
    return client.get(`${route}${teamId}/get_fees_and_players/`);
  },
};
