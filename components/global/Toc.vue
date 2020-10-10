<template>
  <section class="space-y-2">
    <h4
      class="text-sm tracking-wide text-gray-700 text-opacity-50 dark:text-opacity-100 dark:text-gray-500"
    >
      Table of contents
    </h4>
    <ul class="flex flex-col items-start justify-start text-left">
      <li v-for="(toc, i) in content" :key="i">
        <a
          :href="`#${toc.id}`"
          class="block py-2 text-sm text-gray-900 capitalize transition duration-500 ease-in-out transform dark:text-gray-300 focus:outline-none hover:scale-95 dark-hover:text-indigo-500 transition-padding hover:pl-1"
          tabindex="0"
          role="link"
        >
          {{ toc.text }}
        </a>
      </li>
    </ul>
    <toggle class="-ml-4" />
  </section>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

interface TOC {
  id: string
  depth: number
  text: string
}

// Toc component...
export default Vue.extend({
  name: 'Toc',
  inheritAttrs: true,
  props: {
    content: {
      type: Array,
      required: true,
    } as PropOptions<Array<TOC>>,
  },
})
</script>
