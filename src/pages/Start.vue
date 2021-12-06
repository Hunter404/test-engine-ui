<template>
  <q-page>
    <n-table-tree
      :columns="columns"
      :tree="sequence"
      >
    </n-table-tree>
  </q-page>
</template>

<style lang="scss">

</style>

<script lang="ts">
import NTableTree from '../components/NTableTree.vue'

export default {
  setup() {
    const columns = {
      step: 'Step',
      description: 'Description',
      status: 'Status',
      comp: 'Comp',
      low: 'Low',
      high: 'High',
      result: 'Result',
    }

    const sequence = {
      step: 'Main Sequence',
      children: [
        {
          step: 'Setup',
          children: [
            {
              step: 'PSU',
              description: 'Turn on main power',
            },
            {
              step: 'DMM',
              description: 'Turn on DMM'
            }
          ],
        },
        {
          step: 'Main',
          children: [
            {
              step: 'DMM',
              description: 'Measure 12v output',
              status: 'Passed',
              comp: 'GELE',
              low: 11.5,
              high: 12.5,
              result: 12,
            },
            {
              step: 'DMM',
              description: 'Measure 24v output',
              status: 'Failed',
              comp: 'GELE',
              low: 23.5,
              high: 24.5,
              result: 12,
            }
          ]
        },
        {
          step: 'Cleanup',
          children: [
            {
              step: 'PSU',
              description: 'Set zero and disable output'
            },
            {
              step: 'Turn off DMM',
              description: 'Cleanup reference'
            }
          ],
        }
      ]
    }

    return {
      columns,
      sequence
    }
  },
  components: {
    NTableTree
  }
}
</script>
