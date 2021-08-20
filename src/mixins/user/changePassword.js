import { minLength, required, sameAs } from "vuelidate/lib/validators";
import validation from "@/mixins/validation";
import { users } from "@/api/users";

export default {
  mixins: [validation],
  data() {
    return {
      form: {
        old_password: "",
        new_password: "",
        new_password_repeat: "",
      },
    };
  },
  validations: {
    form: {
      old_password: {
        required,
      },
      new_password: {
        required,
        minLength: minLength(7),
      },
      new_password_repeat: {
        required,
        sameAsPassword: sameAs("new_password"),
      },
    },
  },
  methods: {
    async submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        try {
          let data = {
            old_password: this.form.old_password,
            new_password: this.form.new_password,
          };
          await users.changePassword(data);
          this.$bvToast.show("change-password-toast");
          this.form = {
            old_password: "",
            new_password: "",
            new_password_repeat: "",
          };
          this.$router.push("/");
        } catch (e) {
          this.serverErrors = e.response.data;
          this.$v.$touch();
        }
      }
    },
  },
};
