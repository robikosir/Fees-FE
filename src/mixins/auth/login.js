import { email, minLength, required } from "vuelidate/lib/validators";
import validation from "@/mixins/validation";

export default {
  mixins: [validation],
  data() {
    return {
      form: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        repeatpassword: "",
      },
    };
  },
  validations: {
    form: {
      firstname: {
        required,
      },
      lastname: {
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
      repeatpassword: {
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
    register() {},
  },
};
