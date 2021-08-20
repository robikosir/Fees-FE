<template>
  <CenterLayout>
    <template v-slot:content>
      <b-card class="text-center">
        <h1><b>Register</b></h1>
        <b-row>
          <b-col cols="12">
            <StringInput
              id="firstName"
              :field="$v.form.firstName"
              :state="validateState($v.form, 'firstName')"
              :server-errors="serverErrors['fist_name']"
              icon="person-fill"
              @update="$v.form.firstName.$model = $event"
              @keyupEnter="register"
              label="First name"
              field-name="first name"
            />
            <StringInput
              id="lastName"
              :field="$v.form.lastName"
              :state="validateState($v.form, 'lastName')"
              :server-errors="serverErrors['last_name']"
              icon="person-fill"
              @update="$v.form.lastName.$model = $event"
              @keyupEnter="register"
              label="Last name"
              field-name="last name"
            />
            <EmailInput
              id="email"
              :field="$v.form.email"
              :state="validateState($v.form, 'email')"
              :server-errors="serverErrors['email']"
              icon="envelope-fill"
              @update="$v.form.email.$model = $event"
              @keyupEnter="register"
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
              @keyupEnter="register"
              label="Password"
              field-name="password"
            />
            <PasswordInput
              id="repeatPassword"
              :field="$v.form.repeatPassword"
              :state="validateState($v.form, 'repeatPassword')"
              icon="arrow-counterclockwise"
              @update="$v.form.repeatPassword.$model = $event"
              @keyupEnter="register"
              label="Repeat password"
              field-name="repeat password"
            />
            <SubmitButton button-text="Register" @submit="register" />
          </b-col>
        </b-row>
      </b-card>
    </template>
  </CenterLayout>
</template>

<script>
import registration from "@/mixins/auth/registration";
import EmailInput from "@/components/inputs/EmailInput";
import PasswordInput from "@/components/inputs/PasswordInput";
import CenterLayout from "../../../layout/CenterLayout";
import StringInput from "../../components/inputs/StringInput.vue";
import SubmitButton from "@/components/buttons/SubmitButton";

export default {
  name: "Registration",
  components: {
    SubmitButton,
    CenterLayout,
    PasswordInput,
    EmailInput,
    StringInput,
  },
  mixins: [registration],
};
</script>

<style scoped></style>
