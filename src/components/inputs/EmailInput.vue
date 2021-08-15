<template>
  <BaseInput
    :id="id"
    :field="field"
    :state="state"
    :label="label"
    :ref="id"
    :icon="icon"
    @update="$emit('update', $event)"
    @keyupEnter="$emit('keyupEnter')"
    type="email"
  >
    <b-form-invalid-feedback
      v-if="'required' in field && !field.required"
      class="input-error"
    >
      {{ constants.requiredField(fieldName) }}
    </b-form-invalid-feedback>
    <b-form-invalid-feedback
      v-else-if="'email' in field && !field.email"
      class="input-error"
    >
      {{ constants.INVALID_EMAIL }}
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
  name: "EmailInput",
  components: { BaseInput },
  props: {
    id: { type: String, required: true },
    label: { type: String, required: true },
    field: { type: Object, required: true },
    fieldName: { type: String, required: true },
    icon: { type: String },
    serverErrors: { type: Array, default: () => [] },
    state: { type: [Boolean] },
  },
  data() {
    return {
      constants: constants,
    };
  },
};
</script>

<style scoped></style>
