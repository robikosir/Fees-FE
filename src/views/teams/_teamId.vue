<template>
  <MainLayout>
    <b-tabs content-class="mt-3">
      <b-tab title="Overview" active>
        <ActionTable
          :loading="loading"
          :items="team.fees"
          :fields="playerFields"
          @addAction="addFee"
      /></b-tab>
      <b-tab title="Players">
        <ActionTable
          :loading="loading"
          :items="team.players"
          :fields="playerFields"
          @addAction="addPlayer"
        />
      </b-tab>
      <b-tab title="Fees"> Test </b-tab>
    </b-tabs>
  </MainLayout>
</template>

<script>
import _team from "@/mixins/team/_team";
import MainLayout from "@/components/layouts/MainLayout";
import ActionTable from "@/components/table/ActionTable";

export default {
  name: "_teamId",
  components: { ActionTable, MainLayout },
  mixins: [_team],
};
</script>

<style scoped></style>
