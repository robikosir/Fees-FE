<template>
  <b-container>
    <b-row class="mt-3">
      <b-col>
        <div class="mb-4 d-flex">
          <h1>{{ title }}</h1>
          <div class="ml-auto d-flex align-items-center">
            <slot name="action" />
          </div>
        </div>
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
