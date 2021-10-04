import { store } from "@/store";

export default {
  ifAuthenticated(to, from, next) {
    if (store.getters["auth/isAuthenticated"]) {
      next();
      return;
    }
    next("/login");
  },
  ifAdmin(to, from, next) {
    if (store.getters["auth/isAuthenticated"] && store.state.auth.isAdmin) {
      next();
      return;
    }
    next(from.path);
  },
};
