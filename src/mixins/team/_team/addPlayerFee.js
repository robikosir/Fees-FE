import { playerFees } from "@/api/playerFees";
import feeDetail from "@/mixins/team/_team/feeDetail";

export default {
  mixins: [feeDetail],
  data() {
    return {
      feeDate: "",
    };
  },
  async mounted() {
    this.loading = true;
    let now = new Date();
    this.feeDate = `${now.getFullYear()}-${now.getMonth() + 1}-${
      now.getDate() + 1
    }`;
    this.loading = false;
  },
  methods: {
    async addFees() {
      this.showPlayerError = this.selectedPlayers.length === 0;
      this.showFeeError = this.selectedFees.length === 0;
      if (!this.showPlayerError && !this.showFeeError) {
        try {
          let response = await playerFees.savePlayerFees(
            this.selectedPlayers.map((player) => player.id),
            this.selectedFees.map((player) => player.id),
            this.teamId,
            this.feeDate
          );
          console.log(response);
        } catch (e) {
          console.log(e);
        }
        console.log();
      }
    },
  },
};
