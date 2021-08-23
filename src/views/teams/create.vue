<template>
  <div>
    <b-card class="text-center">
      <h1><b>Register</b></h1>
      <b-row>
        <b-col cols="12">
          <StringInput
            id="teamName"
            :field="$v.form.firstName"
            :state="validateState($v.form, 'teamName')"
            :server-errors="serverErrors['team_name']"
            icon="person-fill"
            @update="$v.form.firstName.$model = $event"
            @keyupEnter="register"
            label="Team Name"
            field-name="teamName"
          />
          <StringInput
            id="currency"
            :field="$v.form.lastName"
            :state="validateState($v.form, 'currency')"
            :server-errors="serverErrors['currency']"
            icon="person-fill"
            @update="$v.form.lastName.$model = $event"
            @keyupEnter="register"
            label="Currency"
            field-name="currency"
          />
          <SubmitButton button-text="Create" @submit="create" />
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "create",
};
</script>

<style scoped></style>
