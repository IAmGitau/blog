<template>
  <nuxt-link
    :to="{ name: 'articles-slug', params: { slug: data.slug } }"
    class="group space-y-3 pl-3 py-4 w-full hover:bg-gray-900 hover:bg-opacity-25 transition-colors duration-300"
  >
    <h4 class="text-xs text-gray-600 text-opacity-50 capitalize tracking-wide">
      {{ name }}
    </h4>

    <h1 class="ttl group-hover:underline truncate">
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
