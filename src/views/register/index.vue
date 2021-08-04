<template>
  <CenterLayout>
    <template v-slot:content>
      <b-row>
        <b-col cols="12">
          <StringInput
            id="firstName"
            :field="$v.form.firstName"
            :state="validateState($v.form, 'firstName')"
            @update="$v.form.firstName.$model = $event"
            label="First name"
            field-name="first name"
          />
          <StringInput
            id="lastName"
            :field="$v.form.lastName"
            :state="validateState($v.form, 'lastName')"
            @update="$v.form.lastName.$model = $event"
            label="Last name"
            field-name="last name"
          />
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
            label="Password"
            field-name="password"
          />
          <PasswordInput
            id="repeatPassword"
            :field="$v.form.repeatPassword"
            :state="validateState($v.form, 'repeatPassword')"
            @update="$v.form.repeatPassword.$model = $event"
            label="Repeat paswword"
            field-name="repeat password"
          />
          <b-button pill class="register" @click="next()">Register</b-button>
        </b-col>
      </b-row>
    </template>
  </CenterLayout>
</template>

<script>
import registration from "@/mixins/auth/registration";
import EmailInput from "@/components/inputs/EmailInput";
import PasswordInput from "@/components/inputs/PasswordInput";
import CenterLayout from "../../../layout/CenterLayout";
import StringInput from "../../components/inputs/StringInput.vue";

export default {
  name: "Registration",
  components: { CenterLayout, PasswordInput, EmailInput, StringInput },
  mixins: [registration],
  methods: {
    next() {
      console.log("next!");
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      }
    },
  },
};
</script>

<style scoped></style>
