<template>
  <q-select
    :label="label"
    use-input
    hide-selected
    fill-input
    :model-value="value"
    :options="filteredOptions"
    :option-value="optionValue"
    :option-label="optionLabel"
    @filter="filterFn"
    @input-value="setModel"
  >
    <template v-slot:no-option>
      <q-item>
        <q-item-section class="text-grey">
          No results
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<style scoped>

</style>

<script lang="ts">
export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    optionValue: { default: '' },
    optionLabel: { default: ''},
    label: { default: '' },
    value: String,
    options: { default: [] as Array<Object> }
  },
  data: function () {
    return {
      filteredOptions: [] as string[]
    }
  },
  methods: {
    setModel (val: string) {
      this.$emit('update:value', val)
    },
    filterFn (val: any, update: any, abort: any) {
      update(() => {
        const needle = val.toLocaleLowerCase()

        this.filteredOptions = this.options
        .filter((v: any) => (typeof(v) === 'string' ? v : v[this.optionLabel])
          .toLocaleLowerCase()
          .indexOf(needle) > -1)
        .map((v: any) => (typeof(v) === 'string' ? v : v[this.optionLabel]))
        console.log(this.filteredOptions, this.options)
      })
    }
  },
}
</script>
