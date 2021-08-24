import functions from "@/router/helper";

export default {
  routes: [
    {
      path: "/teams/create",
      name: "TeamCreate",
      component: () => import("../../views/teams/create"),
      beforeEnter: functions.ifAuthenticated,
    },
    {
      path: "/teams/:team_id",
      name: "Team",
      component: () => import("../../views/teams/_teamId"),
      beforeEnter: functions.ifAuthenticated,
    },
    {
      path: "/teams/:team_id/fees/create",
      name: "Team",
      component: () => import("../../views/teams/fees/create"),
      beforeEnter: functions.ifAuthenticated,
    },
    {
      path: "/teams/:team_id/fees/add",
      name: "Team",
      component: () => import("../../views/teams/fees/add"),
      beforeEnter: functions.ifAuthenticated,
    },
  ],
};