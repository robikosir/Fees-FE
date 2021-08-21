<template>
  <MainLayout>
    <div>{{ team }}</div>
  </MainLayout>
</template>

<script>
import _team from "@/mixins/team/_team";
import MainLayout from "@/components/layouts/MainLayout";

export default {
  name: "_teamId",
  components: { MainLayout },
  mixins: [_team],
};
</script>

<style scoped></style>
