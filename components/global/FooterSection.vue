<template>
  <footer
    class="relative mb-0 w-full py-8 text-black bg-white border-t border-gray-700 sm:py-4 dark:border-0 border-opacity-25"
  >
    <div
      class="flex flex-col items-start justify-start w-11/12 mx-auto space-y-4 sm:flex-row sm:space-y-0 sm:justify-between lg:w-3/4 md:w-10/12"
    >
      <div id="g-fold" class="flex flex-row items-start justify-start">
        <span>&copy;{{ currentYear }}</span>
        <span id="dot">-</span>
        <span>
          made with 💖 by
          <a
            href="https://github.com/IAmGitau"
            class="underline"
            target="_blank"
            rel="noreferrer"
          >
            IAmGitau
          </a>
        </span>
      </div>
      <span>
        Check the code on
        <a
          href="https://github.com/IAmGitau/blog"
          target="_blank"
          rel="noreferrer"
          class="underline"
        >
          github
        </a>
      </span>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

// Footer component...
export default Vue.extend({
  name: 'Footer',
  computed: {
    currentYear(): number {
      return new Date().getFullYear()
    },
  },
})
</script>

<style scoped>
@media screen and (max-width: 300px) {
  #dot {
    display: none;
  }

  #g-fold {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
}
</style>
