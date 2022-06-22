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
      path: "/teams/:team_id/admin",
      name: "Admin",
      component: () => import("../../views/teams/_teamId/admin/index"),
      beforeEnter: functions.ifAdmin,
    },
    {
      path: "/teams/:team_id/pay-all",
      name: "PayAll",
      component: () => import("../../views/teams/_teamId/pay-all"),
      beforeEnter: functions.ifAuthenticated,
    },
    {
      path: "/teams/:team_id/player_fees/create",
      name: "TeamCreate",
      component: () => import("../../views/teams/_teamId/player_fees/create"),
      beforeEnter: functions.ifAuthenticated,
    },
    {
      path: "/teams/:team_id/player_fees/add",
      name: "TeamFeeAdd",
      component: () => import("../../views/teams/_teamId/player_fees/add"),
      beforeEnter: functions.ifAuthenticated,
    },
    {
      path: "/teams/:team_id/player_fees/:fee_id",
      name: "TeamFeeDetail",
      component: () => import("../../views/teams/_teamId/player_fees/_feeId"),
      beforeEnter: functions.ifAuthenticated,
    },
    {
      path: "/teams/:team_id/users/invite",
      name: "TeamUserInvite",
      component: () => import("../../views/teams/_teamId/users/invite"),
      beforeEnter: functions.ifAuthenticated,
    },
    {
      path: "/teams/:team_id/fees/create",
      name: "TeamUserInvite",
      component: () => import("../../views/teams/_teamId/fees/create"),
      beforeEnter: functions.ifAuthenticated,
    },
    {
      path: "/teams/:team_id/player/:player_id",
      name: "EditPlayer",
      component: () => import("../../views/teams/_teamId/users/Edit"),
      beforeEnter: functions.ifAuthenticated,
    },
  ],
};
