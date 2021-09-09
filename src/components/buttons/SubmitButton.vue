<template>
  <BaseButton
    :variant="variant"
    :button-text="buttonText"
    @submit="$emit('submit')"
  />
</template>

<script>
import BaseButton from "@/components/buttons/BaseButton";
export default {
  name: "SubmitButton",
  components: { BaseButton },
  props: {
    buttonText: { type: String, required: true },
    variant: { type: String, default: () => "primary" },
  },
};
</script>

<style scoped></style>
