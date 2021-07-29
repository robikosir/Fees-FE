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
    <PasswordInput
      id="password"
      :field="$v.form.password"
      :state="validateState($v.form, 'password')"
      @update="$v.form.password.$model = $event"
      label="password"
      field-name="password"
    />
  </div>
</template>

<script>
import login from "@/mixins/auth/login";
import EmailInput from "@/components/inputs/EmailInput";
import PasswordInput from "../components/inputs/PasswordInput";

export default {
  name: "Login",
  components: { PasswordInput, EmailInput },
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
