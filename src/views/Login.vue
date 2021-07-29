<template>
  <div>
    <EmailInput
      id="email"
      :field="$v.form.email"
      :state="validateState($v.form, 'email')"
      @update="$v.form.email.$model = $event"
      label="Email"
      field-name="email"
    />
  </div>
</template>

<script>
import login from "@/mixins/auth/login";
import EmailInput from "@/components/inputs/EmailInput";

export default {
  name: "Login",
  components: { EmailInput },
  mixins: [login],
  data() {
    return {
      username: "",
      password: "",
      error: "",
    };
  },
  methods: {},
};
</script>

<style scoped></style>
