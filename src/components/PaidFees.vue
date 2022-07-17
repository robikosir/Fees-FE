<template>
  <div class="pb-2">
    <div class="green-text">Paid fees: {{ countPaidFees(fees) }}</div>
    <div class="red-text">Not paid fees: {{ countNotPaidFees(fees) }}</div>
  </div>
</template>

<script>
import feeCalculation from "@/mixins/team/_team/feeCalculation";

export default {
  name: "PaidFees",
  mixins: [feeCalculation],
  props: {
    fees: { type: Array, required: true },
  },
};
</script>

<style scoped>
.green-text {
  color: #06781f;
}
.red-text {
  color: #d51223;
}
</style>
