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
  getUser(user_id) {
    return client.get(`${route}${user_id}/`);
  },
  inviteUser(data) {
    return client.post(`${route}invite/`, data);
  },
  updateUser(id, data) {
    return client.patch(`${route}${id}/`, data);
  },
};
