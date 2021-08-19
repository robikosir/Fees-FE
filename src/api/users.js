import client from "@/client/client";

const route = "/users/";

export const users = {
  registerUser(data) {
    return client.post(route, data);
  },
  getSelf() {
    return client.get(`${route}get_self/`);
  },
};
