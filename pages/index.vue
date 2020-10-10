<template>
  <section class="w-full h-full">
    <section
      class="flex flex-row items-center w-full py-3 border-b border-gray-400 dark:border-gray-800"
    >
      <header
        class="flex items-center justify-between w-11/12 mx-auto lg:w-3/4 md:w-10/12"
      >
        <nuxt-link
          to="/"
          tabindex="0"
          class="text-2xl font-bold tracking-wider uppercase"
        >
          posts
        </nuxt-link>
        <div>
          <toggle />
        </div>
      </header>
    </section>
    <div class="w-11/12 h-full pt-16 mx-auto lg:w-3/4 md:w-10/12">
      <div
        v-if="articles.length > 0"
        class="flex flex-col items-start justify-start h-full space-y-3"
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
        class="flex flex-col items-center justify-center w-full h-full"
      >
        <h1 class="text-4xl text-gray-800 text-opacity-50 uppercase">
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
    return { articles }
  },
})
</script>
