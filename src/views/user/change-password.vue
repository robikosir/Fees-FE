<template>
  <CenterLayout>
    <template v-slot:content>
      <b-card class="text-center">
        <h1><b>Change password</b></h1>
        <b-row>
          <b-col cols="12">
            <PasswordInput
              id="old_password"
              :field="$v.form.old_password"
              :state="validateState($v.form, 'old_password')"
              :server-errors="serverErrors['old_password']"
              icon="lock-fill"
              @update="$v.form.old_password.$model = $event"
              @keyupEnter="submit"
              label="Current password"
              field-name="current password"
            />
            <PasswordInput
              id="new_password"
              :field="$v.form.new_password"
              :state="validateState($v.form, 'new_password')"
              :server-errors="serverErrors['new_password']"
              icon="lock-fill"
              @update="$v.form.new_password.$model = $event"
              @keyupEnter="submit"
              label="New password"
              field-name="new password"
            />
            <PasswordInput
              id="new_password_repeat"
              :field="$v.form.new_password_repeat"
              :state="validateState($v.form, 'new_password_repeat')"
              :server-errors="serverErrors['new_password_repeat']"
              icon="lock-fill"
              @update="$v.form.new_password_repeat.$model = $event"
              @keyupEnter="submit"
              label="Repeat new password"
              field-name="new password"
            />
            <b-button
              variant="primary"
              class="register float-left"
              @click="submit"
              >Register</b-button
            >
          </b-col>
        </b-row>
      </b-card>
      <ToastBase
        id="change-password-toast"
        variant="success"
        title="Password Changed"
        message="Your password have been successfully changed!"
      />
    </template>
  </CenterLayout>
</template>

<script>
import CenterLayout from "../../../layout/CenterLayout";
import PasswordInput from "@/components/inputs/PasswordInput";
import changePassword from "@/mixins/user/changePassword";
import ToastBase from "@/components/toasts/ToastBase";
export default {
  name: "change-password",
  components: { ToastBase, PasswordInput, CenterLayout },
  mixins: [changePassword],
};
</script>

<style scoped></style>
