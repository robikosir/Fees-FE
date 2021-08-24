import base from "@/mixins/team/_team/base";
import { teams } from "@/api/teams";
import { playerFees } from "@/api/playerFees";

export default {
  mixins: [base],
  data() {
    return {
      players: [],
      fees: [],
      selectedPlayers: [],
      selectedFees: [],
      showPlayerError: false,
      showFeeError: false,
      feeDate: "",
    };
  },
  async mounted() {
    this.loading = true;
    let response = await teams.getPlayersAndFees(this.teamId);
    this.fees = response.data.fees;
    this.players = response.data.players;
    let now = new Date();
    this.feeDate = `${now.getFullYear()}-${now.getMonth() + 1}-${
      now.getDate() + 1
    }`;
    this.loading = false;
  },
  methods: {
    playerName({ first_name, last_name }) {
      return `${first_name} ${last_name}`;
    },
    feeNameAndPrice({ name, price }) {
      return `${name} - ${price} ${this.$store.state.team.currency}`;
    },
    async addFees() {
      this.showPlayerError = this.selectedPlayers.length === 0;
      this.showFeeError = this.selectedFees.length === 0;
      if (!this.showPlayerError && !this.showFeeError) {
        try {
          let data = {
            players: this.selectedPlayers.map((player) => player.id),
            fees: this.selectedFees.map((player) => player.id),
            team: this.teamId,
            time: this.feeDate,
          };
          let response = await playerFees.createPlayerFees(data);
          console.log(response);
        } catch (e) {
          console.log(e);
        }
        console.log();
      }
    },
  },
};
