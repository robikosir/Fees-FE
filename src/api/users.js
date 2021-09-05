import client from "@/client/client";

const route = "/users/";

export const users = {
  registerUser(data) {
    return client.post(route, data);
  },
  changePassword(data) {
    return client.post(`${route}change_password/`, data);
  },
  getSelf() {
    return client.get(`${route}get_self/`);
  },
  inviteUser(data) {
    return client.post(`${route}invite/`, data);
  },
};
