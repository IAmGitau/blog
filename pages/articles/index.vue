<template>
  <section class="w-full h-full overflow-y-scroll">
    <div class="w-3/4 mx-auto mt-10">
      <h1 class="text-3xl font-bold mb-5 uppercase tracking-wider">
        All posts
      </h1>
      <div class="flex flex-col justify-start items-start space-y-3">
        <SingleArticle
          v-for="(art, i) in articles"
          :key="i"
          class="border border-opacity-25 hover:border-opacity-50"
          :tags="art.tags"
          :description="art.description"
          :link="{ name: 'articles-slug', params: { slug: art.slug } }"
        />
      </div>
    </div>
    <div class="h-16 w-full" />
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
      .fetch()
    return { articles }
  },
})
</script>

<style scoped></style>
