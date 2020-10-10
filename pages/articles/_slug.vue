<template>
  <section class="w-full h-full text-black dark:text-white">
    <section
      id="lg-sreen"
      class="block h-full w-11/12 sm:w-10/12 mx-auto lg:w-7/12 md:w-9/12"
    >
      <div
        class="flex flex-col items-start justify-start w-full pt-10 space-y-8"
      >
        <div class="flex flex-row items-center justify-between w-full">
          <h1 class="w-full text-4xl">{{ page.title }}</h1>
          <button
            type="button"
            tabindex="0"
            class="flex flex-row space-x-1 text-sm text-gray-300 capitalize transition-colors duration-300 cursor-pointer hover:text-indigo-600"
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
              class="feather feather-arrow-left"
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
            <Badge v-for="(badge, i) in page.tags" :key="i" :name="badge" />
          </div>
          <div class="flex flex-row">
            <button
              id="toc-btn"
              class="p-1 text-gray-600 transition-colors duration-300 border border-gray-600 rounded-sm active:opacity-75 hover:text-white hover:border-white focus:text-white focus:border-white"
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
              class="lg:text-white lg:bg-transparent lg:ml-20 lg:absolute lg:block hidden"
            >
              <toc class="fixed" :content="page.toc" />
            </div>
          </div>
        </div>
        <div v-if="showToc" class="w-full block lg:hidden">
          <toc :content="page.toc" />
        </div>
        <nuxt-content :document="page" class="w-full prose" />
        <nuxt-previous :previous="previous" :nuxt="nuxt" />
      </div>
    </section>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

// _slug...
export default Vue.extend({
  name: 'Slug',
  async asyncData({
    // @ts-ignore
    $content,
    params,
    // @ts-ignore
  }): Promise<object | void> | object | void {
    const page = await $content('articles', params.slug).limit(1).fetch()

    const [previous, nuxt] = await $content('articles')
      .only(['title', 'slug', 'tags'])
      .surround(params.slug)
      .fetch()

    return {
      page,
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
    @apply flex-col justify-start items-start;
  }
  #toc-btn {
    @apply mt-6;
  }
}
</style>
