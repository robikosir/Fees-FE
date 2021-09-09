import { email, required } from "vuelidate/lib/validators";
import validation from "@/mixins/validation";
import { users } from "@/api/users";

export default {
  mixins: [validation],
  data() {
    return {
      form: {
        email: "",
        first_name: "",
        last_name: "",
      },
    };
  },
  validations: {
    form: {
      email: {
        email,
        required,
      },
      first_name: {},
      last_name: {},
    },
  },
  methods: {
    async invite() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        try {
          this.form["team_id"] = this.$route.params.team_id;
          await users.inviteUser(this.form);
          this.$router.push(
            `/teams/${this.$route.params.team_id}?toast=invite-successful`
          );
        } catch (e) {
          this.serverErrors = e.response.data;
          this.$v.$touch();
        }
      }
    },
  },
};
