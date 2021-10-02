<template>
  <MainLayout :loading="loading" :title="team.name ? team.name : ''">
    <template
      v-if="
        team.player_fees_team.filter(
          (fee) => fee.player.email === this.$store.state.auth.user.email
        ).length > 0
      "
      #action
    >
      <b-button variant="success" size="sm" @click="payAll()">
        <b-icon icon="cash" class="mr-1" /> <b>Pay all</b>
      </b-button>
    </template>
    <b-tabs content-class="mt-3">
      <b-tab title="Overview" active>
        <b-form-group class="text-left">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Search" />
            <slot></slot>
          </b-input-group>
        </b-form-group>
        <ActionTable
          :loading="loading"
          :items="team.player_fees_team"
          :fields="feeFields"
          :cell-templates="['fee.name', 'fee.price', 'time', 'actions']"
          :row-class="rowClass"
          :filter="filter"
          @addAction="addFee"
          @rowClicked="
            $router.push(`/teams/${team.id}/player_fees/${$event.id}`)
          "
        >
          <template #cell(fee.name)="data">
            {{ data.item.fee.name }} (<b>{{ data.item.fee.price }}&nbsp;</b>
            <small>{{ $store.state.team.currency }}</small
            >)
          </template>
          <template #cell(time)="data">
            {{ getTimeFormat(data.item.time) }}
          </template>
          <template #cell(actions)="data">
            <b-button
              v-if="$store.state.auth.isAdmin"
              variant="warning"
              size="sm"
              @click="payFee(data.item)"
            >
              <b-icon icon="cash" />
            </b-button>
          </template>
        </ActionTable>
      </b-tab>
      <b-tab title="My Fees">
        <ActionTable
          :loading="loading"
          :items="
            team.player_fees_team.filter(
              (fee) => fee.player.email === this.$store.state.auth.user.email
            )
          "
          :fields="feeFields"
          :cell-templates="['fee.name', 'fee.price', 'time', 'actions']"
          :row-class="rowClass"
          :filter="filter"
          @addAction="addFee"
          @rowClicked="
            $router.push(`/teams/${team.id}/player_fees/${$event.id}`)
          "
        >
          <template #cell(fee.name)="data">
            {{ data.item.fee.name }} (<b>{{ data.item.fee.price }}&nbsp;</b>
            <small>{{ $store.state.team.currency }}</small
            >)
          </template>
          <template #cell(time)="data">
            {{ getTimeFormat(data.item.time) }}
          </template>
          <template #cell(actions)="data">
            <b-button
              v-if="$store.state.auth.isAdmin"
              variant="warning"
              size="sm"
              @click="payFee(data.item)"
            >
              <b-icon icon="cash" />
            </b-button>
          </template>
        </ActionTable>
      </b-tab>
      <b-tab title="Players">
        <b-form-group class="text-left">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Search" />
            <slot></slot>
          </b-input-group>
        </b-form-group>
        <ActionTable
          :loading="loading"
          :items="team.players"
          :fields="playerFields"
          :filter="filter"
          :cell-templates="['first_name']"
          @addAction="addPlayer"
        >
          <template #cell(first_name)="data">
            {{ data.item.first_name }} {{ data.item.last_name }}
          </template>
        </ActionTable>
      </b-tab>
      <b-tab title="Fees">
        <b-form-group class="text-left">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Search" />
            <slot></slot>
          </b-input-group>
        </b-form-group>
        <ActionTable
          :loading="loading"
          :items="team.team_fees"
          :fields="teamFeeFields"
          :filter="filter"
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
  data() {
    return {
      filter: "",
    };
  },
  methods: {
    rowClass(item) {
      if (item && this.$store.state.auth.isAdmin) {
        return item.is_paid ? "table-success" : "table-danger";
      }
    },
  },
};
</script>

<style scoped></style>
