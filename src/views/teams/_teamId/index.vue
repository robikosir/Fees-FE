<template>
  <MainLayout :loading="loading" :title="team.name ? team.name : ''">
    {{ playerRowClass() }}
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
      <b-tab title="Overview" :active="$store.state.auth.isAdmin">
        <b-form-group class="text-left">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Search" />
            <slot></slot>
          </b-input-group>
        </b-form-group>
        <PaidFees :fees="team.player_fees_team" />
        <ActionTable
          :loading="loading"
          :items="team.player_fees_team"
          :fields="feeFields"
          :cell-templates="[
            'player.first_name',
            'fee.name',
            'fee.price',
            'time',
            'actions',
          ]"
          :row-class="rowClass"
          :filter="filter"
          @addAction="addFee"
          @rowClicked="
            $router.push(`/teams/${team.id}/player_fees/${$event.id}`)
          "
        >
          <template #cell(player.first_name)="data">
            {{ data.item.player.first_name }} {{ data.item.player.last_name }}
          </template>
          <template #cell(fee.name)="data">
            {{ data.item.id }} {{ data.item.fee.name }} (<b
              >{{ data.item.fee.price }}&nbsp;</b
            >
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
      <b-tab :active="!$store.state.auth.isAdmin">
        <template #title>
          My fees
          <span v-if="countNotPaidFees(playerFees) > 0">
            <b-icon
              class="ml-1"
              icon="exclamation-circle-fill"
              variant="danger"
          /></span>
        </template>
        <PaidFees :fees="playerFees" />
        <ActionTable
          :loading="loading"
          :items="playerFees"
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
          :row-class="playerRowClass"
          @addAction="addPlayer"
          @rowClicked="playerRowClicked($event)"
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
    <ToastBase
      id="already-in-team"
      variant="danger"
      title="Player was not added"
      message="Player with this email is already in team!"
    />
  </MainLayout>
</template>

<script>
import _team from "@/mixins/team/_team/_team";
import MainLayout from "@/components/layouts/MainLayout";
import ActionTable from "@/components/table/ActionTable";
import ToastBase from "@/components/toasts/ToastBase";
import feeCalculation from "@/mixins/team/_team/feeCalculation";
import PaidFees from "@/components/PaidFees";

export default {
  name: "team",
  components: { PaidFees, ToastBase, ActionTable, MainLayout },
  mixins: [_team, feeCalculation],
  data() {
    return {
      filter: "",
    };
  },
  computed: {
    playerFees() {
      return this.team.player_fees_team.filter(
        (fee) => fee.player.email === this.$store.state.auth.user.email
      );
    },
  },
  methods: {
    rowClass(item) {
      if (item && this.$store.state.auth.isAdmin) {
        return item.is_paid ? "table-success" : "table-danger";
      }
    },
    playerRowClass() {
      if (!this.$store.state.auth.isAdmin) {
        return "no_pointer";
      }
    },
    playerRowClicked(event) {
      if (this.$store.state.auth.isAdmin) {
        this.$router.push(`/teams/${this.team.id}/player/${event.id}`);
      }
    },
  },
};
</script>

<style scoped></style>
