<template>
  <MainLayout :loading="loading" :title="team.name ? team.name : ''">
    <b-tabs content-class="mt-3">
      <b-tab title="Overview" active>
        <ActionTable
          :loading="loading"
          :items="team.player_fees_team"
          :fields="feeFields"
          :cell-templates="['fee.price', 'time', 'actions']"
          @addAction="addFee"
          @rowClicked="
            $router.push(`/teams/${team.id}/player_fees/${$event.id}`)
          "
        >
          <template #cell(fee.price)="data">
            <b>{{ data.item.fee.price }} </b>
            <small>{{ $store.state.team.currency }}</small>
          </template>
          <template #cell(time)="data">
            {{ getTimeFormat(data.item.time) }}
          </template>
          <template #cell(actions)="data">
            <b-button
              variant="danger"
              size="sm"
              @click="deleteFee(data.item.id)"
            >
              <b-icon icon="trash" />
            </b-button>
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
      <b-tab title="Fees">
        <ActionTable
          :loading="loading"
          :items="team.team_fees"
          :fields="teamFeeFields"
          @addAction="createFee"
        />
      </b-tab>
    </b-tabs>
    <ToastBase
      id="invite-successful"
      variant="success"
      title="Person Invited"
      message="Person has received email and was added to your team!"
    />
    <ToastBase
      id="player-fee"
      variant="success"
      title="Fee was added"
      message="You can find fee(s) below!"
    />
    <ToastBase
      id="fee-added"
      variant="success"
      title="Fee was added"
      message="You can find fee(s) below, under Fees tab!"
    />
  </MainLayout>
</template>

<script>
import _team from "@/mixins/team/_team/_team";
import MainLayout from "@/components/layouts/MainLayout";
import ActionTable from "@/components/table/ActionTable";
import ToastBase from "@/components/toasts/ToastBase";

export default {
  name: "team",
  components: { ToastBase, ActionTable, MainLayout },
  mixins: [_team],
};
</script>

<style scoped></style>
