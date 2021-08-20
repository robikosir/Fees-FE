import functions from "@/router/helper";

export default {
  routes: [
    {
      path: "/user/change-password",
      name: "ChangePassword",
      component: () => import("../../views/users/change-password.vue"),
      beforeEnter: functions.ifAuthenticated,
    },
  ],
};
