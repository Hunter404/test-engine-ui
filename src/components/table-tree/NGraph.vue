<template>

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

    return {
      values,
      toggle,
    }
  },
  methods: {

  },
}
</script>
