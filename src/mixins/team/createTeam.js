import { required } from "vuelidate/lib/validators";
import validation from "@/mixins/validation";
import { teams } from "@/api/teams";

export default {
  mixins: [validation],
  data() {
    return {
      form: {
        name: "",
        currency: "",
      },
    };
  },
  validations: {
    form: {
      name: {
        required,
      },
      currency: {
        required,
      },
    },
  },
  methods: {
    async createTeam() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        try {
          await teams.createTeam(this.form);
          this.$router.push(`/?toast=team-created`);
        } catch (e) {
          this.serverErrors = e.response.data;
          this.$v.$touch();
        }
      }
    },
  },
};
