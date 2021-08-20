<template>
  <b-toast
    :id="id"
    :variant="variant"
    :title="title"
    solid
    :append-toast="true"
  >
    <div v-if="message.length > 0">
      {{ message }}
    </div>
  </b-toast>
</template>

<script>
export default {
  name: "ToastBase",
  props: {
    id: { type: String, required: true },
    title: { type: String, required: true },
    variant: { type: String, required: true },
    message: { type: String, required: true },
  },
};
</script>

<style scoped></style>
