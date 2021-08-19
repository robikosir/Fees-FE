import client from "@/client/client";
import { store } from "@/store";

client.interceptors.request.use((config) => {
  let token = store.getters["auth/accessToken"];

  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }

  return config;
});
