import { required } from "vuelidate/lib/validators";
import validation from "@/mixins/validation";
import { fee } from "@/api/fee";

export default {
  mixins: [validation],
  data() {
    return {
      form: {
        name: "",
        price: "",
      },
    };
  },
  validations: {
    form: {
      name: {
        required,
      },
      price: {
        required,
      },
    },
  },
  methods: {
    async add() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        try {
          this.form["team"] = this.$route.params.team_id;
          await fee.addFee(this.form);
          this.$router.push(
            `/teams/${this.$route.params.team_id}?toast=fee-added`
          );
        } catch (e) {
          this.serverErrors = e.response.data;
          this.$v.$touch();
        }
      }
    },
  },
};
