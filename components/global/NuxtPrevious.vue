<template>
  <section
    class="flex flex-col items-center justify-between w-full pt-5 mt-5 space-y-5 border-t border-gray-700 border-opacity-25 md:divide-x md:divide-gray-400 md:divide-dotted sm:flex-row sm:space-y-0"
  >
    <div class="w-full">
      <single-pn v-if="has(previous)" :data="previous" name="Previous" />
      <div v-else class="w-full"></div>
    </div>
    <div class="w-full pl-3">
      <single-pn v-if="has(nuxt)" :data="nuxt" class="text-left" name="Next" />
      <div v-else class="w-full"></div>
    </div>
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
