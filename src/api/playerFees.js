import client from "@/client/client";

const route = "/player_fees/";

export const playerFees = {
  savePlayerFees(players, fees, team, time) {
    let data = {
      players: players,
      fees: fees,
      team: team,
      time: time,
    };
    return client.post(route, data);
  },
  getPlayerFee(id) {
    return client.get(`${route}${id}/`);
  },
  editFee(id, player, fee, team, time) {
    let data = {
      id: id,
      player: player,
      fee: fee,
      team: team,
      time: time,
    };
    return client.put(`${route}${id}/`, data);
  },
  deleteFee(id) {
    return client.delete(`${route}${id}/`);
  },
  payFee(id, data) {
    return client.patch(`${route}${id}/`, data);
  },
};
