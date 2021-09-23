<template>
  <div class="h-100">
    <Navbar />
    <div class="container-fluid h-100">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
html,
body {
  height: 100%;
  overflow-x: hidden;
}
</style>
<script>
import Navbar from "@/components/Navbar";
export default {
  components: { Navbar },
  computed: {
    localStorage() {
      return JSON.stringify(localStorage);
    },
  },
};
</script>
