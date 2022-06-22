import Vue from "vue";
import VueRouter from "vue-router";
import functions from "@/router/helper";
import users from "@/router/routes/users";
import teams from "@/router/routes/teams";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/home/index.vue"),
    beforeEnter: functions.ifAuthenticated,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login/index.vue"),
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("../views/test/index"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/register/index.vue"),
  },
  ...users.routes,
  ...teams.routes,
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
