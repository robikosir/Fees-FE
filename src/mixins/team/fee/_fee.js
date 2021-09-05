import loading from "@/mixins/common/loading";
import { playerFees } from "@/api/playerFees";
import feeDetail from "@/mixins/team/_team/feeDetail";
import baseTeam from "@/mixins/team/_team/baseTeam";

export default {
  mixins: [loading, feeDetail, baseTeam],
  data() {
    return {
      feeId: "",
      fee: {},
    };
  },
  watch: {
    $route(to) {
      this.feeId = to.params.fee_id || "";
    },
  },
  async mounted() {
    this.loading = true;
    this.feeId = this.$route.params.fee_id;
    let response = await playerFees.getPlayerFee(this.feeId);
    this.fee = response.data;
    this.loading = false;
  },
};
