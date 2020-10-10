<template>
  <nuxt-link
    :to="{ name: 'articles-slug', params: { slug: data.slug } }"
    class="w-full py-4 pl-3 space-y-3 transition-colors duration-300 group dark:hover:bg-gray-900 hover:bg-opacity-25 hover:bg-transparent"
  >
    <h4 class="text-xs tracking-wide text-gray-600 text-opacity-50 capitalize">
      {{ name }}
    </h4>

    <h1 class="truncate ttl group-hover:underline">
      {{ data.title }}
    </h1>
    <div class="flex flex-row w-full space-x-3">
      <Badge v-for="(tag, i) in data.tags" :key="i" :name="tag" />
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

interface ArticleData {
  title: string
  tags: []
  slug: string
}

// SinglePN component...
export default Vue.extend({
  name: 'SinglePN',
  props: {
    data: {
      type: Object,
      required: true,
    } as PropOptions<ArticleData>,
    name: {
      type: String,
      required: true,
    },
  },
})
</script>

<style scoped>
.ttl {
  @apply text-sm font-bold tracking-wide transition duration-300;
}
</style>
