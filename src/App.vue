<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title shrink>
          Test Engine <span class="ml-3 mr-3">v{{version}}</span>
        </q-toolbar-title>

        <q-tabs shrink class="inline">
          <q-route-tab alert icon="home" :to="{ name: 'Start' }">
            <q-tooltip>Start</q-tooltip>
          </q-route-tab>

          <q-route-tab icon="settings" :to="{ name: 'Settings' }">
            <q-tooltip>Settings</q-tooltip>
          </q-route-tab>

          <q-route-tab icon="article" :to="{ name: 'Logs' }">
            <q-badge color="purple" text-color="white" floating>10+</q-badge>
            <q-tooltip>Logs</q-tooltip>
          </q-route-tab>
        </q-tabs>

        <q-space/>

        <div class="logo">
          <div class="primary-skew"></div>
          <div class="secondary-skew"></div>

          <q-img
            alt="NEP Logo"
            src="./assets/logo.png"
            height="100%"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :width="300"
      :breakpoint="500"
      bordered
      class="bg-grey-3"
    >
      <div class="flex-inline justify-between flex column full-height">
        <div class="q-pa-sm">
          <q-autocomplete
            label="Operator"
            v-model="operator"
            :options="operatorOptions"
            />

          <q-autocomplete
            label="Operation Mode"
            v-model="mode"
            :options="modeOptions"
            />

          <q-autocomplete
            label="Product"
            v-model="product"
            option-value="id"
            option-label="name"
            :options="productOptions"
            />

          <q-autocomplete
            v-if="variantOptions.length > 0"
            label="Variant"
            v-model="variant"
            :options="variantOptions"
            />

          <q-input
            label="Serial Number"
            v-model="serialNumber"
            />

          <q-input
            label="Batch"
            v-model="batch"
            />

          <q-input
            label="Comment"
            v-model="comment"
            />
        </div>

        <div class="row q-gutter-sm q-mb-sm q-ml-none">
          <q-btn
            :disabled="running"
            color="primary"
            class="col"
            label="Start"
            />

          <q-btn
            :disabled="!running"
            class="col"
            label="Stop"
            />
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss">
@import "./style/main.scss";

.q-tabs.inline {
  height: 50px;

  .q-tab__content {
    min-width: auto;
  }
}
</style>

<script lang="ts">
import QAutocomplete from './components/QAutocomplete.vue'
import { ref } from 'vue'

const operatorOptions = [
  'frekar', 'frelar', 'fremar'
]

const modeOptions = [
  'Normal', 'Debug', 'FAT', 'SAT'
]

const productOptions = [
  {
    id: 'test',
    name: 'Test XXX'
  },
  {
    id: 'test2',
    name: 'Test YYY'
  }
]

const variantOptions = [] as Array<String>

export default {
  setup() {
    const running = ref(false)
    const operator = ref('')
    const mode = ref('')
    const product = ref('')
    const variant = ref('')
    const serialNumber = ref('')
    const batch = ref('')
    const comment = ref('')

    return {
      version: '4.0.0',
      running,
      operator,
      mode,
      product,
      variant,
      serialNumber,
      batch,
      comment,
      operatorOptions,
      modeOptions,
      productOptions,
      variantOptions,
    }
  },
  components: {
    QAutocomplete
  },
}
</script>
