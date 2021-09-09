import functions from "@/router/helper";

export default {
  routes: [
    {
      path: "/user/change-password",
      name: "ChangePassword",
      component: () => import("../../views/users/change-password.vue"),
      beforeEnter: functions.ifAuthenticated,
    },
    {
      path: "/user/profile",
      name: "Profile",
      component: () => import("../../views/users/profile"),
      beforeEnter: functions.ifAuthenticated,
    },
  ],
};
