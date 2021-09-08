import client from "@/client/client";

const route = "/fees/";

export const fee = {
  addFee(data) {
    return client.post(route, data);
  },
};
