import { teams } from "@/api/teams";
import loading from "@/mixins/common/loading";

export default {
  mixins: [loading],
  data() {
    return {
      team: {},
      teamId: "",
    };
  },
  watch: {
    $route(to) {
      this.teamId = to.params.team_id || "";
    },
  },
  async mounted() {
    this.loading = true;
    this.teamId = this.$route.params.team_id;
    this.team = await this.getTeam(this.teamId);
    this.loading = false;
  },
  methods: {
    async getTeam(teamId) {
      let response = await teams.getTeam(teamId);
      return response.data;
    },
  },
};
