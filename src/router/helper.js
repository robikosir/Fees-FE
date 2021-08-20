import { store } from "@/store";

export default {
  ifAuthenticated(to, from, next) {
    if (store.getters["auth/isAuthenticated"]) {
      next();
      return;
    }
    next("/login");
  },
};
