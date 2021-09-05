import { teams } from "@/api/teams";
import baseTeam from "@/mixins/team/_team/baseTeam";

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
    this.loading = false;
  },
  methods: {
    async getTeam(teamId) {
      let response = await teams.getTeam(teamId);
      return response.data;
    },
    addPlayer() {
      this.$router.push(`/teams/${this.team.id}/invite`);
    },
    addFee() {
      this.$router.push(`/teams/${this.team.id}/fees/add`);
    },
    createFee() {
      this.$router.push(`/teams/${this.team.id}/fees/create`);
    },
  },
};
