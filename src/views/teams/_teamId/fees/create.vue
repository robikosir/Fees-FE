<template>
  <MainLayout title="Add fee to the team">
    <StringInput
      id="name"
      :field="$v.form.name"
      :state="validateState($v.form, 'name')"
      :server-errors="serverErrors['name']"
      icon="person-fill"
      @update="$v.form.name.$model = $event"
      @keyupEnter="add"
      label="Fee name"
      field-name="fee name"
    />
    <IntegerInput
      id="price"
      :field="$v.form.price"
      :state="validateState($v.form, 'price')"
      :server-errors="serverErrors['price']"
      icon="person-fill"
      @update="$v.form.price.$model = $event"
      @keyupEnter="add"
      label="Price"
      field-name="price"
    />
    <SubmitButton button-text="Add fee" @submit="add" />
  </MainLayout>
</template>

<script>
import MainLayout from "@/components/layouts/MainLayout";
import StringInput from "@/components/inputs/StringInput";
import SubmitButton from "@/components/buttons/SubmitButton";
import _fee from "@/mixins/team/fee/_fee";
import IntegerInput from "@/components/inputs/IntegerInput";
export default {
  name: "create",
  components: {
    IntegerInput,
    SubmitButton,
    StringInput,
    MainLayout,
  },
  mixins: [_fee],
};
</script>

<style scoped></style>
