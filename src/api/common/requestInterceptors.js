import client from "@/client/client";
import { store } from "@/store";
import router from "@/router";

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
      router.push("/login");
    }
    throw error;
  }
);
