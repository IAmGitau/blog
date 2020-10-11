<template>
  <section
    class="w-full h-full"
    style="transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1)"
  >
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
        <div class="flex flex-row items-center space-x-2">
          <toggle />
          <a class="focus:outline-none active:opacity-75" href="/feed/rss.xml">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
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
              <circle cx="5" cy="19" r="1" />
              <path d="M4 4a16 16 0 0 1 16 16" />
              <path d="M4 11a9 9 0 0 1 9 9" />
            </svg>
          </a>
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
          :link="{
            name: 'articles-slug',
            params: { slug: art.slug },
            query: { theme: $colorMode.preference, tags: art.tags },
          }"
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
  async asyncData({ query, $content }): Promise<object | void> | object | void {
    const articles = await $content('articles')
      .only(['slug', 'description', 'tags'])
      .sortBy('createdAt', 'asc')
      .fetch()
    const { theme } = query
    return { articles, theme }
  },
  transition: 'slide-right',
})
</script>
