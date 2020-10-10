<template>
  <section class="w-full h-full">
    <div class="lg:w-3/4 w-11/12 mx-auto pt-16 h-full md:w-10/12">
      <h1 class="text-3xl font-bold mb-5 uppercase tracking-wider">posts</h1>
      <div
        v-if="articles.length > 0"
        class="flex flex-col justify-start h-full items-start space-y-3"
      >
        <SingleArticle
          v-for="(art, i) in articles"
          :key="i"
          class="border border-opacity-25 hover:border-opacity-50"
          :tags="art.tags"
          :description="art.description"
          :link="{ name: 'articles-slug', params: { slug: art.slug } }"
        />
      </div>
      <div
        v-else
        class="w-full items-center justify-center h-full flex flex-col"
      >
        <h1 class="text-4xl uppercase text-gray-800 text-opacity-50">
          No posts
        </h1>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

// Index...
export default Vue.extend({
  name: 'Index',
  // @ts-ignore
  async asyncData({ $content }): Promise<object | void> | object | void {
    const articles = await $content('articles')
      .only(['slug', 'description', 'tags'])
      .sortBy('createdAt', 'asc')
      .fetch()
    return { articles, article: [] }
  },
})
</script>

<style scoped></style>
