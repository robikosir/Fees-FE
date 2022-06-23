import loading from "@/mixins/common/loading";

export default {
  mixins: [loading],
  data() {
    return {
      playerId: "",
    };
  },
  watch: {
    $route(to) {
      this.playerId = to.params.player_id || "";
    },
  },
  async mounted() {
    this.loading = true;
    this.playerId = this.$route.params.player_id;
    this.loading = false;
  },
};
