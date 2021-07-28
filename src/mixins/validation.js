import { validationMixin } from "vuelidate";

export default {
  mixins: [validationMixin],
  data() {
    return {
      serverErrors: {},
    };
  },
  methods: {
    validateState(formData, name) {
      const { $dirty, $error } = formData[name];
      let hasServerError = !!this.serverErrors[name];
      if ($error) {
        this.clearServerError(formData, name);
      }
      return $dirty ? !($error || hasServerError) : null;
    },
    clearServerError(formData, name) {
      if (name in this.serverErrors) {
        this.$delete(this.serverErrors, name);
        formData[name].$reset();
        formData[name].$touch();
      }
    },
  },
};
