<template>
  <section class="w-full h-full text-black dark:text-white">
    <section
      id="lg-sreen"
      class="block w-11/12 h-full mx-auto sm:w-10/12 lg:w-7/12 md:w-9/12"
    >
      <div
        class="flex flex-col items-start justify-start w-full pt-10 space-y-8"
      >
        <div class="flex flex-row items-center justify-between w-full">
          <nuxt-link
            :to="{ name: 'articles-slug', params: { slug: article.slug } }"
            class="w-full text-4xl hover:underline"
          >
            {{ article.title }}
          </nuxt-link>
          <button
            type="button"
            tabindex="0"
            name="back"
            class="flex flex-row items-center justify-end group space-x-1 text-sm text-gray-600 capitalize transition-colors duration-300 cursor-pointer dark:text-gray-300 hover:text-indigo-600"
            @click="$router.back()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-4 w-4 group-hover:animate-bounce-r\:l"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>back</span>
          </button>
        </div>
        <div
          id="topics"
          class="flex flex-row items-center justify-between w-full"
        >
          <div class="flex flex-row w-full space-x-4 text-sm">
            <Badge v-for="(badge, i) in article.tags" :key="i" :name="badge" />
          </div>
          <div class="flex flex-row">
            <button
              id="toc-btn"
              name="change-toc"
              class="p-1 transition-colors duration-300 border border-gray-600 rounded-sm dark:text-gray-600 active:opacity-75 hover:text-gray-700 dark:hover:text-white dark:hover:border-white dark:focus:text-white dark:focus:border-white"
              type="button"
              tabindex="0"
              title="Table of contents"
              @click="changeToc"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-8 h-6"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
            <div
              v-if="showToc"
              class="hidden lg:text-white lg:bg-transparent lg:ml-20 lg:absolute lg:block"
            >
              <toc class="fixed" :content="article.toc" />
            </div>
          </div>
        </div>
        <div v-if="showToc" class="block w-full lg:hidden">
          <toc :content="article.toc" />
        </div>
        <nuxt-content :document="article" class="w-full prose" />
        <nuxt-previous :previous="previous" :nuxt="nuxt" />
      </div>
      <div class="w-full lg:h-32" />
    </section>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

// _slug...
export default Vue.extend({
  name: 'Slug',
  // @ts-ignore
  async validate({ $content, params }): Promise<boolean> | boolean {
    const article = await $content('articles', params.slug).limit(1).fetch()
    return !(article.title === '' || article.description === '')
  },
  async asyncData({
    // @ts-ignore
    $content,
    params,
    // @ts-ignore
  }): Promise<object | void> | object | void {
    const article = await $content('articles', params.slug).limit(1).fetch()
    let [previous, nuxt] = await $content('articles')
      .only(['title', 'slug', 'tags'])
      .surround(params.slug)
      .fetch()

    if (previous === null) previous = { title: null }
    if (nuxt === null) nuxt = { title: null }

    return {
      article,
      previous,
      nuxt,
    }
  },

  data() {
    return {
      showToc: true,
    }
  },
  methods: {
    changeToc() {
      this.showToc = !this.showToc
    },
  },
})
</script>

<style scoped>
@media screen and (min-width: 1280px) {
  #lg-screen {
    max-width: 50rem;
  }
}

@media screen and (max-width: 1120px) {
  #lg-screen {
    @apply w-8/12;
  }
  #toc {
    @apply ml-16;
  }
}

@media screen and (max-width: 320px) {
  #topics {
    @apply flex-col items-start justify-start;
  }
  #toc-btn {
    @apply mt-6;
  }
}
</style>
