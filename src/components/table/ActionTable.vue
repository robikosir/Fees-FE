<template>
  <BaseTable
    :items="items"
    :fields="fields"
    :loading="loading"
    :head-templates="['actions']"
    :cell-templates="['actions']"
    @rowClicked="$emit('rowClicked', $event)"
  >
    <template
      #head(actions)
      class="pull-right"
      v-if="$store.state.auth.isAdmin"
    >
      <b-button variant="success" size="sm" @click="$emit('addAction')">
        <b-icon icon="plus" />
      </b-button>
    </template>
  </BaseTable>
</template>

<script>
import BaseTable from "@/components/table/BaseTable";
export default {
  name: "ActionTable",
  components: { BaseTable },
  props: {
    items: { type: Array, default: () => [] },
    fields: { type: Array, default: () => [] },
    loading: { type: [Boolean] },
  },
};
</script>

<style scoped></style>
