<template>
  <b-container>
    <b-row class="mt-3">
      <b-col>
        <h1 class="mb-4">{{ title }}</h1>
        <slot />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "MainLayout",
  props: {
    title: { type: String, required: true },
  },
};
</script>

<style scoped></style>
