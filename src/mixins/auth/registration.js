import { email, minLength, required, sameAs } from "vuelidate/lib/validators";
import validation from "@/mixins/validation";
import { users } from "@/api/users";

export default {
  mixins: [validation],
  data() {
    return {
      phoneNumber: "",
      phoneNumberObject: {},
      form: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        repeatPassword: "",
      },
    };
  },
  validations: {
    form: {
      firstName: {
        required,
      },
      lastName: {
        required,
      },
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(7),
      },
      repeatPassword: {
        required,
        sameAsPassword: sameAs("password"),
      },
    },
  },
  methods: {
    async register() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        let data = {
          first_name: this.form.firstName,
          last_name: this.form.lastName,
          email: this.form.email,
          password: this.form.password,
          phone_number: this.phoneNumberObject.formattedNumber,
          country_code: this.phoneNumberObject.countryCode,
        };
        try {
          // check if response is OK
          await users.registerUser(data);
        } catch (e) {
          this.serverErrors = e.response.data;
          this.$v.$touch();
        }
      }
    },
    update(event) {
      this.phoneNumberObject = event;
    },
  },
};
