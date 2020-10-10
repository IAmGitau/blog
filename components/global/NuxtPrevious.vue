<template>
  <section
    class="flex flex-col items-center justify-between w-full pt-5 mt-5 space-y-5 border-t border-gray-700 border-opacity-25 sm:flex-row sm:space-y-0"
  >
    <single-pn v-if="has(previous)" :data="previous" name="Previous" />
    <div v-else class="w-full"></div>

    <single-pn v-if="has(nuxt)" :data="nuxt" class="text-left" name="Next" />
    <div v-else class="w-full"></div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

// NuxtPrevious component...
export default Vue.extend({
  name: 'NuxtPrevious',
  props: {
    previous: {
      type: Object,
      default: null,
      required: true,
    },
    nuxt: {
      type: Object,
      default: null,
      required: true,
    },
  },
  methods: {
    has(obj: Object): boolean {
      // @ts-ignore
      return !(obj.title == null)
    },
  },
})
</script>
