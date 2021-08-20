import functions from "@/router/helper";

export default {
  routes: [
    {
      path: "/teams/:team_id",
      name: "Team",
      component: () => import("../../views/teams/_teamId"),
      beforeEnter: functions.ifAuthenticated,
    },
  ],
};
