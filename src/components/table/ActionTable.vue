<template>
  <BaseTable
    :items="items"
    :fields="fields"
    :loading="loading"
    :head-templates="['actions', ...headTemplates]"
    :cell-templates="['actions', ...cellTemplates]"
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
    <template
      v-for="column in headTemplates"
      v-slot:[toHeadName(column)]="props"
    >
      <slot v-bind="props" :name="toHeadName(column)" />
    </template>
    <template
      v-for="column in cellTemplates"
      v-slot:[toCellName(column)]="props"
    >
      <slot v-bind="props" :name="toCellName(column)" />
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
    headTemplates: { type: Array, default: () => [] },
    cellTemplates: { type: Array, default: () => [] },
    loading: { type: [Boolean] },
  },
  methods: {
    toHeadName(column) {
      return `head(${column})`;
    },
    toCellName(column) {
      return `cell(${column})`;
    },
  },
};
</script>

<style scoped></style>
