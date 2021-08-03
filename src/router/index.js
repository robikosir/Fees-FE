import Vue from "vue";
import VueRouter from "vue-router";
import { store } from "@/store";

Vue.use(VueRouter);

const ifAuthenticated = (to, from, next) => {
  if (store.getters["auth/isAuthenticated"]) {
    next();
    return;
  }
  next("/login");
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/home/index.vue"),
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login/index.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/register/index.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
