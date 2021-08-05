import { email, minLength, required } from "vuelidate/lib/validators";
import validation from "@/mixins/validation";

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
    async login() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        console.log("Successful login");
        this.$router.push("/");
      }
      // TODO store auth token form the response to the store
    },
  },
};
