import client from "@/client/client";
import { store } from "@/store";

client.interceptors.request.use((config) => {
  let token = store.getters["auth/accessToken"];

  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }

  return config;
});

client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      store.dispatch("auth/logout");
    }
    throw error;
  }
);
