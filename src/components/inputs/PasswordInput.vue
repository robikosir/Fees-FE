<template>
  <div>
    <BaseInput
      id="password"
      :field="field"
      :state="state"
      :label="label"
      :icon="icon"
      :ref="id"
      @update="$emit('update', $event)"
      @keyupEnter="$emit('keyupEnter')"
      type="password"
    >
      <b-form-invalid-feedback
        v-if="'sameAsPassword' in field && !field.sameAsPassword"
        class="input-error"
      >
        Passwords must be identical.
      </b-form-invalid-feedback>
      <b-form-invalid-feedback
        v-else-if="'required' in field && !field.required"
        class="input-error"
      >
        {{ constants.requiredField(fieldName) }}
      </b-form-invalid-feedback>
      <b-form-invalid-feedback
        v-else-if="'minLength' in field && !field.minLength"
        class="input-error"
      >
        Password must have at least
        {{ field.$params.minLength.min }} characters.
      </b-form-invalid-feedback>
      <b-form-invalid-feedback
        v-for="error in serverErrors"
        :key="error"
        class="input-error"
      >
        {{ error }}
      </b-form-invalid-feedback>
    </BaseInput>
  </div>
</template>

<script>
import BaseInput from "@/components/inputs/BaseInput";
import { constants } from "@/assets/constants/constants";

export default {
  name: "PasswordInput",
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
