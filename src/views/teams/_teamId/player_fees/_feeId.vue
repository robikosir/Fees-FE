<template>
  <MainLayout title="Edit Fee">
    <template #action>
      <SubmitButton button-text="Save" @submit="save" class="mr-3" />
      <SubmitButton button-text="Delete" variant="danger" @submit="deleteFee" />
    </template>
    <div>
      <label class="label">Player</label>
      <multiselect
        v-model="fee.player"
        :options="players"
        :multiple="false"
        disabled="true"
        :custom-label="playerName"
        track-by="id"
      >
        <template slot="singleLabel" slot-scope="{ option }">
          {{ option.first_name }} {{ option.last_name }}
        </template>
      </multiselect>
      <label class="is-invalid-text" v-show="showPlayerError">
        Please select at least one player.
      </label>
    </div>
    <div class="mt-3">
      <label class="label">Select fee(s)</label>
      <multiselect
        v-model="fee.fee"
        :options="fees"
        :multiple="false"
        :custom-label="feeNameAndPrice"
        track-by="id"
      >
      </multiselect>
      <label class="is-invalid-text" v-show="showFeeError">
        Please select at least one fee.
      </label>
    </div>
    <div class="mt-3">
      <label class="label">Time</label>
      <b-form-datepicker v-model="fee.time" class="mb-2"></b-form-datepicker>
    </div>
    <ToastBase
      id="saved"
      variant="success"
      title="Fee Saved"
      message="Fee was successfully updated"
    />
  </MainLayout>
</template>

<script>
import MainLayout from "@/components/layouts/MainLayout";
import SubmitButton from "@/components/buttons/SubmitButton";
import ToastBase from "@/components/toasts/ToastBase";
import _player_fee from "@/mixins/team/fee/_player_fee";

export default {
  name: "_feeId",
  components: { ToastBase, SubmitButton, MainLayout },
  mixins: [_player_fee],
};
</script>

<style scoped></style>
