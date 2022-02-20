import { teams } from "@/api/teams";
import baseTeam from "@/mixins/team/_team/baseTeam";
import { playerFees } from "@/api/playerFees";
import moment from "moment";

export default {
  mixins: [baseTeam],
  data() {
    return {
      team: {
        name: "",
        currency: "",
        players: [],
        player_fees_team: [],
        team_fees: [],
      },
      playerFields: [
        { key: "email", label: "Email" },
        { key: "first_name", label: "Name", sortable: true },
      ],
      feeFields: [
        { key: "player.first_name", label: "Name", sortable: true },
        { key: "fee.name", label: "Fee", sortable: true },
        { key: "time", label: "Time", sortable: true },
      ],
      teamFeeFields: [
        { key: "name", label: "Name", sortable: true },
        { key: "price", label: "Price", sortable: true },
      ],
    };
  },
  async mounted() {
    this.loading = true;
    this.team = await this.getTeam(this.teamId);
    this.$store.commit("team/updateTeam", this.team);
    this.$store.commit("team/updateCurrency", this.team.currency);
    if (
      this.team.admins.filter(
        (admin) => admin.id === this.$store.state.auth.user.id
      ).length === 1
    ) {
      this.$store.commit("auth/updateIsAdmin", true);
      this.playerFields.push({ key: "actions" });
      this.feeFields.push({ key: "actions" });
      this.teamFeeFields.push({ key: "actions" });
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
    payAll() {
      this.$router.push(`/teams/${this.team.id}/pay-all`);
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
    async payFee(fee) {
      fee.is_paid = !fee.is_paid;
      try {
        await playerFees.payFee(fee.id, {
          is_paid: fee.is_paid,
        });
      } catch (e) {
        console.error(e);
      }
    },
    getTimeFormat(time) {
      let date = new Date(time);
      return moment(date).format("D.M");
    },
    processToast() {
      if (this.$route.query.toast === "invite-successful") {
        this.$bvToast.show("invite-successful");
      } else if (this.$route.query.toast === "player-fee") {
        this.$bvToast.show("player-fee");
      } else if (this.$route.query.toast === "fee-added") {
        this.$bvToast.show("fee-added");
      } else if (this.$route.query.toast === "already-in-team") {
        this.$bvToast.show("already-in-team");
      }
    },
  },
};
