<template>
  <b-form-group class="text-left">
    <label class="font-label" :for="id">{{ label }}</label>
    <b-input-group>
      <b-input-group-prepend v-if="icon" is-text>
        <b-icon :icon="icon"></b-icon>
      </b-input-group-prepend>
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
    </b-input-group>
  </b-form-group>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    id: { type: String, required: true },
    type: { type: String, required: true },
    field: { type: Object, required: true },
    icon: { type: String },
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
