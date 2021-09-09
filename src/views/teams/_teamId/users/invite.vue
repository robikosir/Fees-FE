<template>
  <MainLayout title="Invite User">
    <template #action>
      <SubmitButton button-text="Invite" @submit="invite" />
    </template>
    <EmailInput
      id="email"
      :field="$v.form.email"
      :state="validateState($v.form, 'email')"
      :server-errors="serverErrors['email']"
      icon="envelope-fill"
      @update="$v.form.email.$model = $event"
      @keyupEnter="invite"
      label="Email"
      field-name="email"
    />
    <StringInput
      id="firstName"
      :field="$v.form.first_name"
      :state="validateState($v.form, 'first_name')"
      :server-errors="serverErrors['first_name']"
      icon="person-fill"
      @update="$v.form.first_name.$model = $event"
      @keyupEnter="invite"
      label="First name"
      field-name="first name"
    />
    <StringInput
      id="firstName"
      :field="$v.form.last_name"
      :state="validateState($v.form, 'last_name')"
      :server-errors="serverErrors['last_name']"
      icon="person-fill"
      @update="$v.form.last_name.$model = $event"
      @keyupEnter="invite"
      label="Last name"
      field-name="last name"
    />
  </MainLayout>
</template>

<script>
import MainLayout from "@/components/layouts/MainLayout";
import EmailInput from "@/components/inputs/EmailInput";
import invite from "@/mixins/user/invite";
import StringInput from "@/components/inputs/StringInput";
import SubmitButton from "@/components/buttons/SubmitButton";
export default {
  name: "invite",
  components: { SubmitButton, StringInput, EmailInput, MainLayout },
  mixins: [invite],
};
</script>

<style scoped></style>
