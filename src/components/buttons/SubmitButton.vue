<template>
  <BaseButton
    variant="primary"
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
  },
};
</script>

<style scoped></style>
