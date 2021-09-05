<template>
  <b-container>
    <b-row class="mt-3">
      <b-col>
        <div v-if="!loading" class="mb-4 d-flex">
          <h1>{{ title }}</h1>
          <div class="ml-auto d-flex align-items-center">
            <slot name="action" />
          </div>
        </div>
        <div v-else class="d-flex justify-content-center mt-5">
          <b-spinner variant="primary"></b-spinner>
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
    loading: { type: Boolean },
  },
};
</script>

<style scoped></style>
