import { required } from "vuelidate/lib/validators";
import validation from "@/mixins/validation";
import { teams } from "@/api/teams";

export default {
  mixins: [validation],
  data() {
    return {
      form: {
        account_number: "",
        bank_code: "",
        account_prefix: "",
      },
    };
  },
  validations: {
    form: {
      account_number: {
        required,
      },
      bank_code: {
        required,
      },
      account_prefix: {
      },
    },
  },
  mounted() {
    this.form.account_number = this.$store.state.team.team.account_number;
    this.form.bank_code = this.$store.state.team.team.bank_code;
    this.form.account_prefix = this.$store.state.team.team.account_prefix;
  },
  methods: {
    async changeBankAccount() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        try {
          await teams.patchTeam(this.$store.state.team.team.id, this.form);
          this.$router.push(
            `/teams/${this.$store.state.team.team.id}?toast=team-updated`
          );
        } catch (e) {
          this.serverErrors = e.response.data;
          this.$v.$touch();
        }
      }
    },
  },
};
