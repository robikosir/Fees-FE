<template>
  <CenterLayout>
    <template v-slot:content>
      <b-card class="text-center">
        <h1><b>Login</b></h1>
        <b-row>
          <b-col cols="12">
            <EmailInput
              id="email"
              :field="$v.form.email"
              :state="validateState($v.form, 'email')"
              icon="person-fill"
              @update="$v.form.email.$model = $event"
              label="Email"
              field-name="email"
            />
            <PasswordInput
              id="password"
              :field="$v.form.password"
              :state="validateState($v.form, 'password')"
              icon="lock-fill"
              @update="$v.form.password.$model = $event"
              label="Password"
              field-name="password"
            />
            <b-button
              variant="primary"
              class="login float-left"
              @click="login()"
              >Login</b-button
            >
          </b-col>
        </b-row>
      </b-card>
    </template>
  </CenterLayout>
</template>

<script>
import login from "@/mixins/auth/login";
import EmailInput from "@/components/inputs/EmailInput";
import PasswordInput from "@/components/inputs/PasswordInput";
import CenterLayout from "../../../layout/CenterLayout";

export default {
  name: "Login",
  components: { CenterLayout, PasswordInput, EmailInput },
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
