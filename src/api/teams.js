import client from "@/client/client";

const route = "/teams/";

export const teams = {
  getTeams() {
    return client.get(route);
  },
  getTeam(teamId) {
    return client.get(`${route}${teamId}`);
  },
};
