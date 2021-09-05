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
      name: "TeamDetail",
      component: () => import("../../views/teams/_teamId/index"),
      beforeEnter: functions.ifAuthenticated,
    },
    {
      path: "/teams/:team_id/fees/create",
      name: "TeamCreate",
      component: () => import("../../views/teams/fees/create"),
      beforeEnter: functions.ifAuthenticated,
    },
    {
      path: "/teams/:team_id/fees/add",
      name: "TeamFeeAdd",
      component: () => import("../../views/teams/fees/add"),
      beforeEnter: functions.ifAuthenticated,
    },
    {
      path: "/teams/:team_id/fees/:fee_id",
      name: "TeamFeeDetail",
      component: () => import("../../views/teams/fees/_feeId"),
      beforeEnter: functions.ifAuthenticated,
    },
    {
      path: "/teams/:team_id/users/invite",
      name: "TeamUserInvite",
      component: () => import("../../views/teams/_teamId/users/invite"),
      beforeEnter: functions.ifAuthenticated,
    },
  ],
};
