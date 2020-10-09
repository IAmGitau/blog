<template>
  <div class="border-green-500 group">
    <nuxt-link
      :to="link"
      class="flex flex-col items-start justify-start pt-5 pb-6 pl-4 space-y-4 text-sm text-gray-400 transition-colors duration-300 cursor-pointer hover:text-white"
    >
      <h1 class="text-2xl group-hover:underline">
        Fine-tune access to external actions
      </h1>
      <div class="flex flex-row space-x-5 text-xs">
        <Badge v-for="(tag, i) in tags" :key="i" :name="tag" />
      </div>
      <article class="w-10/12 tracking-wide">
        {{ description }}
      </article>
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
