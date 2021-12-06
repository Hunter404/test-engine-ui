<template>
  <div
    class="relative"
    >
    <div
      class="row tree"
      v-on:click="toggle = !toggle"
      >
      <div
        class="col-2 step text-left"
        :style="{ 'margin-left': `${depth * 1.5}em`, 'margin-right': `-${depth * 1.5}em` }"
        >
        <svg
          v-if="children.length > 0"
          class="q-icon q-tree__arrow"
          :class="{ 'q-tree__arrow--rotate': toggle }"
          aria-hidden="true"
          role="presentation"
          viewBox="0 0 24 24">
          <path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path>
        </svg>

        {{ value.step }}
      </div>

      <template v-if="value.type === 'numeric'">
        <v-action
          :item="value"
          />
      </template>

      <template v-else-if="value.type === 'string'">
        <v-string
          :item="value"
          />
      </template>

      <template v-else-if="value.type === 'graph'">
        <v-graph
          :item="value"
          />
      </template>

      <template v-else>
        <div
          class="col-3 text-left"
          >
          {{ value.description }}
        </div>
      </template>
    </div>

    <template
      v-if="toggle"
      >
      <n-row
        v-for="(item, key) in children"
        :key="key"
        :value="item"
        :children="item.children"
        :columns="columns"
        :depth="depth+1"
        class="child"
        />
    </template>
  </div>
</template>

<style lang="scss">
.relative {
  position: relative;
  // padding-left: 1.5em;
}

.tree {
  position: relative;
  align-items: center;
}

.relative.child {
  .carrot {
    position: absolute;
    height: 100%;

    &:before {
      content: " ";
      top: 0;
      left: -0.5em;
      width: 1em;
      bottom: 50%;
      position: absolute;
      border-bottom: 1px solid black;
      border-left: 1px solid black;
    }
  }

  .line {
    position: absolute;
    height: 100%;

    &:after {
      content: " ";
      top: 0;
      height: 100%;
      left: -0.5em;
      position: absolute;
      width: 1px;
      background: black;
    }

    &:last-child:after {
      display:none
    }
  }
}
</style>

<script lang="ts">
import { ref } from 'vue'

import Action  from './NString.vue'

export default {
  props: {
    depth: { default: 0 },
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
  components: {
    Action
  }
}
</script>
