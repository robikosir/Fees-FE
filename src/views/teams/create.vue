<template>
  <MainLayout title="Create team">
    <StringInput
      id="teamName"
      :field="$v.form.name"
      :state="validateState($v.form, 'name')"
      :server-errors="serverErrors['name']"
      @update="$v.form.name.$model = $event"
      @keyupEnter="createTeam"
      label="Team Name"
      field-name="team name"
    />
    <StringInput
      id="currency"
      :field="$v.form.currency"
      :state="validateState($v.form, 'currency')"
      :server-errors="serverErrors['currency']"
      @update="$v.form.currency.$model = $event"
      @keyupEnter="createTeam"
      label="Currency"
      field-name="currency"
    />
    <SubmitButton button-text="Create" @submit="createTeam" />
  </MainLayout>
</template>

<script>
import StringInput from "@/components/inputs/StringInput";
import SubmitButton from "@/components/buttons/SubmitButton";
import createTeam from "@/mixins/team/createTeam";
import MainLayout from "@/components/layouts/MainLayout";
export default {
  name: "create",
  components: { MainLayout, SubmitButton, StringInput },
  mixins: [createTeam],
};
</script>

<style scoped></style>
