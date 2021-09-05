<template>
  <MainLayout title="Edit Fee">
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
    <SubmitButton button-text="Save" @submit="save" class="mt-3" />
    <ToastBase
      id="saved"
      variant="success"
      title="Fee Saved"
      message="Fee was successfully updated"
    />
  </MainLayout>
</template>

<script>
import _fee from "@/mixins/team/fee/_fee";
import MainLayout from "@/components/layouts/MainLayout";
import SubmitButton from "@/components/buttons/SubmitButton";
import ToastBase from "@/components/toasts/ToastBase";

export default {
  name: "_feeId",
  components: { ToastBase, SubmitButton, MainLayout },
  mixins: [_fee],
};
</script>

<style scoped></style>
