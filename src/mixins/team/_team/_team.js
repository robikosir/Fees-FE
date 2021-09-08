import { teams } from "@/api/teams";
import baseTeam from "@/mixins/team/_team/baseTeam";
import { playerFees } from "@/api/playerFees";
import moment from "moment";

export default {
  mixins: [baseTeam],
  data() {
    return {
      team: {},
      playerFields: [
        { key: "email", label: "Email" },
        { key: "first_name", label: "Name" },
        { key: "last_name", label: "Surname" },
        { key: "actions" },
      ],
      feeFields: [
        { key: "player.first_name", label: "Name" },
        { key: "fee.name", label: "Fee" },
        { key: "fee.price", label: "Cost" },
        { key: "time", label: "Time" },
        { key: "actions" },
      ],
      teamFeeFields: [
        { key: "name", label: "Name" },
        { key: "price", label: "Price" },
        { key: "actions" },
      ],
    };
  },
  async mounted() {
    this.loading = true;
    this.team = await this.getTeam(this.teamId);
    this.$store.commit("team/updateCurrency", this.team.currency);
    if (
      this.team.admins.filter(
        (admin) => admin.id === this.$store.state.auth.user.id
      ).length === 1
    ) {
      this.$store.commit("auth/updateIsAdmin", true);
    } else {
      this.$store.commit("auth/updateIsAdmin", false);
    }
    this.processToast();
    this.loading = false;
  },
  methods: {
    async getTeam(teamId) {
      let response = await teams.getTeam(teamId);
      return response.data;
    },
    addPlayer() {
      this.$router.push(`/teams/${this.team.id}/users/invite`);
    },
    addFee() {
      this.$router.push(`/teams/${this.team.id}/player_fees/add`);
    },
    createFee() {
      this.$router.push(`/teams/${this.team.id}/fees/create`);
    },
    async deleteFee(id) {
      try {
        await playerFees.deleteFee(id);
        this.team.player_fees_team = this.team.player_fees_team.filter(
          (fee) => fee.id !== id
        );
      } catch (e) {
        console.error(e);
      }
    },
    getTimeFormat(time) {
      let date = new Date(time);
      return moment(date).format("Do MMM YYYY");
    },
    processToast() {
      if (this.$route.query.toast === "invite-successful") {
        this.$bvToast.show("invite-successful");
      } else if (this.$route.query.toast === "player-fee") {
        this.$bvToast.show("player-fee");
      } else if (this.$route.query.toast === "fee-added") {
        this.$bvToast.show("fee-added");
      }
    },
  },
};
