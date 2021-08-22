<template>
  <MainLayout>
    <div>{{ team }}</div>
    <b-tabs content-class="mt-3">
      <b-tab title="Players" active>
        <ActionTable
          :loading="loading"
          :players="team.players"
          :fields="playerFields"
          @addPlayer="addPlayer"
        />
      </b-tab>
      <b-tab title="Fees">
        <ActionTable
          :loading="loading"
          :players="team.fees"
          :fields="playerFields"
          @addPlayer="addPlayer"
      /></b-tab>
      <b-tab title="Admin panel"><p>I'm the second tab</p></b-tab>
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
