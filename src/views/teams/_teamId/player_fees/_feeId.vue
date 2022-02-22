<template>
  <MainLayout title="Edit Fee">
    <template #action>
      <SubmitButton
        v-if="$store.state.auth.isAdmin"
        button-text="Save"
        @submit="save"
        class="mr-3"
      />
      <SubmitButton
        v-if="$store.state.auth.isAdmin"
        button-text="Delete"
        variant="danger"
        @submit="deleteFee"
      />
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
        selectLabel=""
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
        :disabled="!$store.state.auth.isAdmin"
        :custom-label="feeNameAndPrice"
        track-by="id"
        selectLabel=""
      >
      </multiselect>
      <label class="is-invalid-text" v-show="showFeeError">
        Please select at least one fee.
      </label>
    </div>
    <div class="mt-3">
      <label class="label">Time</label>
      <b-form-datepicker
        v-model="fee.time"
        class="mb-2"
        :disabled="!$store.state.auth.isAdmin"
      ></b-form-datepicker>
    </div>
    <div class="mt-3">
      <label class="label">Description</label>
      <b-form-textarea
        id="textarea"
        v-model="fee.description"
        placeholder="Enter description"
        :disabled="!$store.state.auth.isAdmin"
        rows="5"
      ></b-form-textarea>
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
