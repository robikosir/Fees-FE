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
        { key: "last_name", label: "Surname" },
        { key: "actions" },
      ],
      feeFields: [
        { key: "player.first_name", label: "Name", sortable: true },
        { key: "fee.name", label: "Fee", sortable: true },
        { key: "fee.price", label: "Cost", sortable: true },
        { key: "time", label: "Time", sortable: true },
        { key: "actions" },
      ],
      teamFeeFields: [
        { key: "name", label: "Name", sortable: true },
        { key: "price", label: "Price", sortable: true },
        { key: "actions" },
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
    async payFee(fee) {
      fee.is_paid = true;
      try {
        await playerFees.payFee(fee.id, {
          is_paid: true,
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
      }
    },
  },
};
