export default {
  methods: {
    countPaidFees(fees) {
      let sum = 0;
      for (let feeDetail of fees) {
        if (feeDetail.is_paid) {
          sum = sum + feeDetail.fee.price;
        }
      }
      return sum;
    },
    countNotPaidFees(fees) {
      let sum = 0;
      for (let feeDetail of fees) {
        if (!feeDetail.is_paid) {
          sum = sum + feeDetail.fee.price;
        }
      }
      return sum;
    },
  },
};
