<template>
  <div
    v-for="(variable, key) in keys"
    :key="key"
    class="col text-left"
    >
    {{ value[variable] }}
  </div>
</template>

<style lang="scss">

</style>

<script lang="ts">
import { ref } from 'vue'

export default {
  props: {
    depth: { default: 1 },
    columns: { default: [] as Array<String> },
    children: { default: [] as Array<Object> },
    value: { default: {} as Object }
  },
  data: function () {
    const toggle = ref(true)
    const values = this.columns.filter(x => this.value[x]).map(x => this.value[x])
    const keys = [ 'description', 'status', 'comp', 'low', 'high', 'result' ];

    return {
      values,
      toggle,
      keys,
    }
  },
  methods: {

  },
}
</script>
