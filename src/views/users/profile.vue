<template>
  <CenterLayout>
    <template v-slot:content>
      <b-card class="text-center">
        <h1><b>Edit profile</b></h1>
        <b-row>
          <b-col cols="12">
            <StringInput
              id="firstName"
              :field="$v.form.email"
              :state="validateState($v.form, 'email')"
              :server-errors="serverErrors['email']"
              :disabled="true"
              @update="$v.form.email.$model = $event"
              @keyupEnter="submit"
              label="Email"
              field-name="email"
            />
            <StringInput
              id="firstName"
              :field="$v.form.first_name"
              :state="validateState($v.form, 'first_name')"
              :server-errors="serverErrors['first_name']"
              @update="$v.form.first_name.$model = $event"
              @keyupEnter="submit"
              label="First name"
              field-name="first name"
            />
            <StringInput
              id="firstName"
              :field="$v.form.last_name"
              :state="validateState($v.form, 'last_name')"
              :server-errors="serverErrors['last_name']"
              @update="$v.form.last_name.$model = $event"
              @keyupEnter="submit"
              label="Last name"
              field-name="last name"
            />
            <div class="text-left mt-2">
              <label> Phone number </label>
              <vue-phone-number-input
                v-model="phone_number"
                :default-country-code="$store.state.auth.user.country_code"
                @update="update"
              />
            </div>
            <SubmitButton
              class="mt-3"
              button-text="Change profile"
              @submit="submit"
            />
          </b-col>
        </b-row>
      </b-card>
      <ToastBase
        id="profile-saved"
        variant="success"
        title="Profile Changed"
        message="Your profile have been successfully changed!"
      />
    </template>
  </CenterLayout>
</template>

<script>
import CenterLayout from "../../components/layouts/CenterLayout";
import ToastBase from "@/components/toasts/ToastBase";
import SubmitButton from "@/components/buttons/SubmitButton";
import StringInput from "@/components/inputs/StringInput";
import profile from "@/mixins/user/profile";
export default {
  name: "profile",
  components: { StringInput, SubmitButton, ToastBase, CenterLayout },
  mixins: [profile],
};
</script>

<style scoped></style>
