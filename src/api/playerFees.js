import client from "@/client/client";

const route = "/player_fees/";

export const playerFees = {
  createPlayerFees(data) {
    return client.post(route, data);
  },
};
