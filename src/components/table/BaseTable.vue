<template>
  <b-table
    v-if="items.length > 0"
    striped
    hover
    :items="items"
    :fields="fields"
    :busy="loading"
    :tbody-tr-class="rowClass"
    :filter="filter"
    sort-icon-left
    thead-class="table-radius"
    @row-clicked="$emit('rowClicked', $event)"
    show-empty
  >
    <template #table-busy>
      <div class="text-center text-danger my-2">
        <b-spinner class="align-middle"></b-spinner>
      </div>
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
    <slot name="properties" />
  </b-table>
</template>

<script>
export default {
  name: "BaseTable",
  props: {
    items: { type: Array, required: true },
    fields: { type: Array, required: true },
    loading: { type: Boolean, required: true },
    headTemplates: { type: Array },
    cellTemplates: { type: Array },
    rowClass: { type: Function },
    filter: { type: String },
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
