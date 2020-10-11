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
    <br />
    <div
      class="flex flex-col items-start justify-start space-y-2 pt-3 border-t border-dashed border-opacity-50 border-gray-600"
    >
      <toggle class="-ml-3" title="Toggle dark and light theme" />
      <nuxt-link
        to="/"
        tabindex="0"
        title="Home page"
        class="text-gray-800 dark:text-gray-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#2c3e50"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <polyline points="5 12 3 12 12 3 21 12 19 12" />
          <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
          <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
        </svg>
      </nuxt-link>
    </div>
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
