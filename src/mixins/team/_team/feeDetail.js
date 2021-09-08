import { teams } from "@/api/teams";
import loading from "@/mixins/common/loading";
import baseTeam from "@/mixins/team/_team/baseTeam";
import { playerFees } from "@/api/playerFees";

export default {
  mixins: [loading, baseTeam],
  data() {
    return {
      players: [],
      fees: [],
      selectedPlayers: [],
      selectedFees: [],
      showPlayerError: false,
      showFeeError: false,
    };
  },
  async mounted() {
    this.loading = true;
    let response = await teams.getPlayersAndFees(this.teamId);
    this.fees = response.data.fees;
    this.players = response.data.players;
    this.loading = false;
  },
  methods: {
    playerName({ first_name, last_name }) {
      return `${first_name} ${last_name}`;
    },
    feeNameAndPrice({ name, price }) {
      return `${name} - ${price} ${this.$store.state.team.currency}`;
    },
    async save() {
      await playerFees.editFee(
        this.fee.id,
        this.fee.player.id,
        this.fee.fee.id,
        this.fee.team.id,
        this.fee.time
      );
      this.$bvToast.show("saved");
    },
  },
};
