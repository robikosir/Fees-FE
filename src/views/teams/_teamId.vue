<template>
  <MainLayout :title="team.name">
    <b-tabs content-class="mt-3">
      <b-tab title="Overview" active>
        <ActionTable
          :loading="loading"
          :items="team.player_fees_team"
          :fields="feeFields"
          :cell-templates="['fee.price']"
          @addAction="addFee"
        >
          <template #cell(fee.price)="data">
            <b>{{ data.item.fee.price }} </b>
            <small>{{ $store.state.team.currency }}</small>
          </template>
        </ActionTable>
      </b-tab>
      <b-tab title="Players">
        <ActionTable
          :loading="loading"
          :items="team.players"
          :fields="playerFields"
          @addAction="addPlayer"
        />
      </b-tab>
      <b-tab title="Fees"> {{ team.team_fees }} </b-tab>
    </b-tabs>
  </MainLayout>
</template>

<script>
import _team from "@/mixins/team/_team/_team";
import MainLayout from "@/components/layouts/MainLayout";
import ActionTable from "@/components/table/ActionTable";

export default {
  name: "team",
  components: { ActionTable, MainLayout },
  mixins: [_team],
};
</script>

<style scoped></style>
