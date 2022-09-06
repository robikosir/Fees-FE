<template>
  <MainLayout title="Admin page">
    <b-row>
      <b-col cols="12">
        <StringInput
          id="acc-number"
          :field="$v.form.account_number"
          :state="validateState($v.form, 'account_number')"
          :server-errors="serverErrors['account_number']"
          @update="$v.form.account_number.$model = $event"
          @keyupEnter="changeBankAccount"
          label="Account number"
          field-name="account number"
        />
        <StringInput
          id="bank-code"
          :field="$v.form.bank_code"
          :state="validateState($v.form, 'bank_code')"
          :server-errors="serverErrors['bank_code']"
          @update="$v.form.bank_code.$model = $event"
          @keyupEnter="changeBankAccount"
          label="Bank code"
          field-name="bank code"
        />
        <StringInput
          id="account_prefix"
          :field="$v.form.account_prefix"
          :state="validateState($v.form, 'account_prefix')"
          :server-errors="serverErrors['account_prefix']"
          @update="$v.form.account_prefix.$model = $event"
          @keyupEnter="changeBankAccount"
          label="Account prefix"
          field-name="account prefix"
        />
        <SubmitButton
          button-text="Change team admin stuff"
          @submit="changeBankAccount"
        />
      </b-col>
    </b-row>
  </MainLayout>
</template>

<script>
import MainLayout from "@/components/layouts/MainLayout";
import StringInput from "@/components/inputs/StringInput";
import admin from "@/mixins/admin/admin";
import SubmitButton from "@/components/buttons/SubmitButton";
export default {
  name: "index",
  components: { SubmitButton, StringInput, MainLayout },
  mixins: [admin],
};
</script>

<style scoped></style>
