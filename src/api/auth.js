import client from "@/client/client";

const route = "/auth/";

export const auth = {
  login(email, password) {
    let data = {
      username: email,
      password: password,
    };
    return client.post(route, data);
  },
};
