<template>
  <b-form-group class="custom-input text-left">
    <label class="font-label" :for="id">{{ label }}</label>
    <b-form-input
      :id="id"
      :ref="id"
      :value="field.$model"
      @input="updateField"
      :state="state"
      :type="type"
      :placeholder="placeHolder"
      @keyup.enter="$emit('keyupEnter')"
    />
    <slot></slot>
  </b-form-group>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    id: { type: String, required: true },
    type: { type: String, required: true },
    field: { type: Object, required: true },
    state: { type: [Boolean] },
    placeHolder: { type: String },
    label: { type: String },
  },
  data() {
    return {
      event: "update",
    };
  },
  methods: {
    updateField(event) {
      this.$emit("update", event);
    },
  },
};
</script>

<style scoped></style>
