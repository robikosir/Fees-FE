<template>
  <CenterLayout>
    <template v-slot:content>
      <b-card class="text-center">
        <h1><b>Login1</b></h1>
        <b-row>
          <b-col cols="12">
            <EmailInput
              id="email"
              :field="$v.form.email"
              :state="validateState($v.form, 'email')"
              :server-errors="serverErrors['email']"
              icon="envelope-fill"
              @update="$v.form.email.$model = $event"
              @keyupEnter="submit"
              label="Email"
              field-name="email"
            />
            <PasswordInput
              id="password"
              :field="$v.form.password"
              :state="validateState($v.form, 'password')"
              :server-errors="serverErrors['password']"
              icon="lock-fill"
              @update="$v.form.password.$model = $event"
              @keyupEnter="submit"
              label="Password"
              field-name="password"
            />
            <SubmitButton button-text="Login" @submit="submit" />
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
import CenterLayout from "../../components/layouts/CenterLayout";
import SubmitButton from "@/components/buttons/SubmitButton";

export default {
  name: "Login",
  components: { SubmitButton, CenterLayout, PasswordInput, EmailInput },
  mixins: [login],
};
</script>

<style scoped></style>
