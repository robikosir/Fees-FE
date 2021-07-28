<template>
  <div>
    <div>Username: {{ username }}</div>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
  mixins: [],
  data() {
    return {
      username: "",
      password: "",
      error: "",
    };
  },
  methods: {},
};
</script>

<style scoped></style>
