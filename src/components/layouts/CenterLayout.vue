<template>
  <div class="h-100 wrapper">
    <b-container
      class="h-100 d-flex flex-column text-lg-left text-center pl-2 pr-2 pl-md-0 pr-md-0"
    >
      <b-row
        class="justify-content-center align-content-center mt-lg-auto mt-md-5 mt-3"
      >
        <b-col xl="9" lg="11" md="12">
          <slot name="content" />
        </b-col>
      </b-row>
      <b-row
        class="mt-auto justify-content-center align-content-center"
        style="height: 80px"
      >
        <b-col xl="9" lg="11" md="12">
          <slot name="footer" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "CenterLayout",
};
</script>

<style scoped></style>
git status
