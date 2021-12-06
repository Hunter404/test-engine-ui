<template>
  <div
    class="n-table-tree"
    >
    <div
      class="row header"
      >
      <div class="col-2 text-left">Step</div>
      <div class="col-2 text-left">Description</div>
      <div class="col-1 text-left">Status</div>
      <div class="col-1 text-left">Comp</div>
      <div class="col-1 text-left">Low</div>
      <div class="col-1 text-left">High</div>
      <div class="col-4 text-left">Result</div>
    </div>

    <div
      class="body"
      >
      <n-row
        :value="tree"
        :children="tree.children"
        :columns="Object.keys(columns)"
        />
    </div>
  </div>
</template>

<style lang="scss">
.n-table-tree {
  .header > div {
    padding: 1em 0.5em;
    border-right: solid gray 1px;
  }

  .body {
    .row {
      &:hover {
        background: darken(white, 5%);
      }

      >div {
        padding: 1em 0.5em;
      }
    }
  }
}
</style>

<script lang="ts">
import NRow from './table-tree/NRow.vue'

export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    optionValue: { default: '' },
    optionLabel: { default: ''},
    columns: { default: [] as Array<String> },
    tree: { default: [] as Array<Object> },
    value: String,
    options: { default: [] as Array<Object> }
  },
  data: function () {
    return {
      columnKeys: Object.keys(this.columns)
    }
  },
  methods: {

  },
  components: {
    NRow,
  }
}
</script>
