<template>
  <MainLayout :loading="loading" title="QR payment">
    <div class="text-center">
      <b-img :src="this.QRLink" fluid alt="Responsive image" />
    </div>
  </MainLayout>
</template>

<script>
import loading from "@/mixins/common/loading";
import MainLayout from "@/components/layouts/MainLayout";
import QRPlatba from "@/helpers/QRPlatba";

export default {
  name: "pay-all",
  components: { MainLayout },
  mixins: [loading],
  data() {
    return {
      QRLink: "",
    };
  },
  mounted() {
    let playerFees = this.$store.state.team.team.player_fees_team.filter(
      (fee) => fee.player.email === this.$store.state.auth.user.email
    );
    this.QRLink = this.getQRLink(playerFees);
    this.loading = false;
  },
  methods: {
    getQRLink(playerFees) {
      let amount = playerFees.reduce(
        (sum, player_fee) => sum + player_fee.fee.price,
        0
      );
      let fees = playerFees.map((playerFee) => playerFee.fee.name).join(", ");
      let message = `Player: ${this.$store.state.auth.user.first_name} ${this.$store.state.auth.user.last_name} \n Fees: ${fees}`;
      return `${QRPlatba.API_ENDPOINT}?accountNumber=222885&bankCode=5500&amount=${amount}&message=${message}&currency=${this.$store.state.team.currency}`;
    },
  },
};
</script>

<style scoped></style>
