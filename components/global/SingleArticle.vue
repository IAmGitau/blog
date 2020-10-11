<template>
  <div class="border-green-500 group">
    <nuxt-link
      :to="link"
      class="flex flex-col items-start justify-start py-4 pl-4 space-y-4 text-sm dark:text-gray-400 transition-colors duration-300 cursor-pointer sm:py-6 dark:hover:text-white"
    >
      <h1 class="text-xl md:text-2xl group-hover:underline">
        Fine-tune access to external actions
      </h1>
      <div class="flex flex-row space-x-2 text-xs sm:space-x-5">
        <Badge v-for="(tag, i) in tags" :key="i" :name="tag" />
      </div>
      <article class="w-10/12 tracking-wide">
        {{ description }}
      </article>
      <span class="sm:hidden text-sm text-blue-800 dark:text-gray-500">
        Read more
      </span>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

// Structure of a link
interface Link {
  name: string
  params: {
    slug: string
  }
}

// SingleArticle component...
export default Vue.extend({
  name: 'SingleArticle',
  props: {
    link: { type: Object, required: true } as PropOptions<Link>,
    description: { type: String, required: true },
    tags: { type: Array, required: true },
  },
  data() {
    return {
      badges: ['Html', 'Css', 'Golang'],
    }
  },
})
</script>

<style scoped></style>
