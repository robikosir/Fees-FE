import { email, minLength, required } from "vuelidate/lib/validators";

export default {
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
    login() {
      // TODO store auth token form the response to the store
      this.$router.push("/");
    },
  },
};
