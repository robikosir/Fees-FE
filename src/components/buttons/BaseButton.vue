<template>
  <b-button :variant="variant" class="float-left" @click="$emit('submit')">
    {{ buttonText }}
  </b-button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    variant: { type: String, required: true },
    buttonText: { type: String, required: true },
  },
};
</script>

<style scoped></style>
