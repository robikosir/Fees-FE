import { email, minLength, required, sameAs } from "vuelidate/lib/validators";
import validation from "@/mixins/validation";

export default {
  mixins: [validation],
  data() {
    return {
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
    register() {},
  },
};
