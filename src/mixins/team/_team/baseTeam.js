import loading from "@/mixins/common/loading";

export default {
  mixins: [loading],
  data() {
    return {
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
    this.loading = false;
  },
};
