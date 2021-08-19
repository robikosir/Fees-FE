import { email, minLength, required } from "vuelidate/lib/validators";
import validation from "@/mixins/validation";
import { mapActions } from "vuex";

export default {
  mixins: [validation],
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  validations: {
    form: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(7),
      },
    },
  },
  methods: {
    ...mapActions("auth", ["login"]),
    async submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        try {
          await this.login([this.form.email, this.form.password]);
          this.$router.push("/");
        } catch (e) {
          this.serverErrors = e.response.data;
          if (this.serverErrors.non_field_errors) {
            this.serverErrors["email"] = this.serverErrors.non_field_errors;
          }
        }
      }
    },
  },
};
