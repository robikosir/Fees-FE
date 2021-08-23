<template>
  <MainLayout>
    <multiselect v-model="value" :options="options"></multiselect>
  </MainLayout>
</template>

<script>
import MainLayout from "@/components/layouts/MainLayout";
export default {
  name: "add",
  components: { MainLayout },
  data() {
    return {
      value: null,
      options: ["list", "of", "options"],
    };
  },
};
</script>
<style scoped></style>
