<template>
  <section class="w-full h-full overflow-y-scroll text-black dark:text-white">
    <section class="block w-7/12 h-full mx-auto">
      <div
        class="flex flex-col items-start justify-start w-full mt-20 space-y-8"
      >
        <h1 class="w-full text-4xl">{{ page.title }}</h1>
        <div class="flex flex-row items-center justify-between w-full">
          <div class="flex flex-row w-full space-x-4">
            <Badge v-for="(badge, i) in page.tags" :key="i" :name="badge" />
          </div>
          <div class="flex flex-row">
            <button
              id="toc"
              class="p-1 text-gray-600 transition-colors duration-300 border border-gray-600 rounded-sm active:opacity-75 hover:text-white hover:border-white focus:text-white focus:border-white"
              type="button"
              aria-labelledby="toc"
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
              class="ml-20 text-white bg-transparent space-y-3"
              :class="showToc ? 'absolute' : 'hidden'"
            >
              <h4 class="text-sm tracking-wide text-gray-500">
                Table of contents
              </h4>
              <ul class="flex flex-col items-start justify-start text-left">
                <li v-for="(toc, i) in page.toc" :key="i">
                  <a
                    :href="`#${toc.id}`"
                    class="block focus:outline-none py-2 text-sm capitalize transition duration-500 ease-in-out transform hover:scale-95 hover:text-blue-500 transition-padding hover:pl-1"
                    tabindex="0"
                    role="link"
                  >
                    {{ toc.text }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <nuxt-content :document="page" class="w-full prose" />
        <div class="w-full my-32" />
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
    return {
      page,
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
