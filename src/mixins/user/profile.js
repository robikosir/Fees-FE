import { required } from "vuelidate/lib/validators";
import validation from "@/mixins/validation";
import { users } from "@/api/users";

export default {
  mixins: [validation],
  data() {
    return {
      phone_number: "",
      form: {
        first_name: "",
        last_name: "",
        phone_number: "",
        country_code: "",
        email: "",
      },
    };
  },
  validations: {
    form: {
      first_name: {
        required,
      },
      last_name: {
        required,
      },
      phone_number: {
        required,
      },
      email: {},
    },
  },
  mounted() {
    this.form.first_name = this.$store.state.auth.user.first_name;
    this.form.last_name = this.$store.state.auth.user.last_name;
    this.form.email = this.$store.state.auth.user.email;
    this.phone_number = this.$store.state.auth.user.phone_number;
  },
  methods: {
    async submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        try {
          let response = await users.updateSelf(
            this.$store.state.auth.user.id,
            this.form
          );
          this.$store.commit("auth/updateUser", response.data);
          this.$bvToast.show("profile-saved");
        } catch (e) {
          this.serverErrors = e.response.data;
          this.$v.$touch();
        }
      }
    },
    update(event) {
      this.form.phone_number = event.formattedNumber;
      this.form.country_code = event.countryCode;
    },
  },
};
