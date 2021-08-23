import { required } from "vuelidate/lib/validators";
import validation from "@/mixins/validation";
import loading from "@/mixins/common/loading";

export default {
  mixins: [validation, loading],
  data() {
    return {
      form: {
        player: {},
        team: "",
        fee: "",
        time: new Date(),
      },
    };
  },
  validations: {
    form: {
      player: {
        required,
      },
      team: {
        required,
      },
      fee: {
        required,
      },
      time: {
        required,
      },
    },
  },
  methods: {
    async submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        console.log("test");
      }
    },
  },
};
