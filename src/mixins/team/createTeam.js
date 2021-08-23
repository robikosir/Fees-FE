import { required } from "vuelidate/lib/validators";
import validation from "@/mixins/validation";

export default {
  mixins: [validation],
  data() {
    return {
      form: {
        teamName: "",
        currency: "",
      },
    };
  },
  validations: {
    form: {
      teamName: {
        required,
      },
      currency: {
        required,
      },
    },
  },
  methods: {
    async register() {
      this.$v.$touch();
      // eslint-disable-next-line no-empty
      if (!this.$v.$invalid) {
      }
    },
  },
};
