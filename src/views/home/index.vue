<template>
  <MainLayout title="Your teams">
    <template #action>
      <b-button variant="primary">Create team</b-button>
    </template>
    <BaseTable
      :items="teams"
      :fields="fields"
      :loading="loading"
      :head-templates="['actions', 'team_fees_total']"
      :cell-templates="['actions', 'team_fees_total']"
      @rowClicked="openTeam($event)"
    >
      <template #empty-state>
        <div
          class="d-flex justify-content-center align-items-center"
          @click="createTeam"
        >
          <b-button variant="success" size="sm" class="mr-3">
            <b-icon icon="plus" />
          </b-button>
          <b>Add a team</b>
        </div>
      </template>
      <template #head(actions)>
        <b-icon icon="gear" />
      </template>
      <template #cell(team_fees_total)="data">
        {{ data.item.team_fees_total }} {{ $store.state.team.currency }}
      </template>
      <template #cell(actions)>
        <b-button variant="primary" size="sm">
          <b-icon icon="pencil" />
        </b-button>
      </template>
    </BaseTable>
  </MainLayout>
</template>

<script>
import MainLayout from "@/components/layouts/MainLayout";
import myTeams from "@/mixins/team/myTeams";
import BaseTable from "@/components/table/BaseTable";
export default {
  name: "index",
  components: { BaseTable, MainLayout },
  mixins: [myTeams],
};
</script>

<style scoped></style>
