<template>
  <MainLayout title="Add Fee to player">
    <div>
      <label class="label">Select player(s)</label>
      <multiselect
        v-model="selectedPlayers"
        :options="players"
        :multiple="true"
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
        v-model="selectedFees"
        :options="fees"
        :multiple="true"
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
      <b-form-datepicker v-model="feeDate" class="mb-2"></b-form-datepicker>
    </div>
    <div class="mt-3">
      <label class="label">Description</label>
      <b-form-textarea
        id="textarea"
        v-model="description"
        placeholder="Enter description"
        rows="5"
      ></b-form-textarea>
    </div>
    <SubmitButton button-text="Add Fees" @submit="addFees" class="mt-3" />
  </MainLayout>
</template>

<script>
import MainLayout from "@/components/layouts/MainLayout";
import addPlayerFee from "@/mixins/team/_team/addPlayerFee";
import SubmitButton from "@/components/buttons/SubmitButton";
export default {
  name: "add",
  components: { SubmitButton, MainLayout },
  mixins: [addPlayerFee],
};
</script>
<style scoped></style>
