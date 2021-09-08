<template>
  <BaseInput
    :id="id"
    :state="state"
    :field="field"
    :label="label"
    :ref="id"
    :icon="icon"
    :placeHolder="placeHolder"
    @update="$emit('update', $event)"
    @keyupEnter="$emit('keyupEnter')"
    type="number"
  >
    <b-form-invalid-feedback
      v-if="'required' in field && !field.required"
      class="input-error"
    >
      {{ constants.requiredField(fieldName) }}
    </b-form-invalid-feedback>
    <b-form-invalid-feedback
      v-for="error in serverErrors"
      :key="error"
      class="input-error"
    >
      {{ error }}
    </b-form-invalid-feedback>
  </BaseInput>
</template>

<script>
import BaseInput from "@/components/inputs/BaseInput";
import { constants } from "@/assets/constants/constants";
export default {
  name: "IntegerInput",
  components: { BaseInput },
  props: {
    id: { type: String, required: true },
    fieldName: { type: String, required: true },
    serverErrors: { type: Array, default: () => [] },
    icon: { type: String },
    field: { type: Object },
    state: { type: [Boolean] },
    placeHolder: { type: String },
    label: { type: String },
  },
  data() {
    return {
      constants: constants,
    };
  },
};
</script>

<style scoped></style>
