<template>
  <section
    class="flex flex-col items-center justify-between w-full pt-10 space-y-5 border-t border-gray-700 border-opacity-50 sm:flex-row sm:space-y-0"
  >
    <single-pn v-if="previous !== null" :data="previous" name="Previous" />
    <div v-else class="w-full"></div>
    <single-pn
      v-if="nuxt !== null"
      :data="nuxt"
      class="text-left"
      name="Next"
    />
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
      type: Object || null,
      default: null,
      required: true,
    },
    nuxt: {
      type: Object || null,
      default: null,
      required: true,
    },
  },
})
</script>
