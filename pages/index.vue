<template>
  <section class="w-full h-full">
    <section id="dot-slant" class="w-full pt-4">
      <section
        class="flex flex-row items-center justify-start w-3/4 h-full mx-auto"
      >
        <div
          class="flex flex-row items-center justify-start w-full space-x-4 h-full"
        >
          <div
            class="flex flex-col items-start justify-start space-y-2 text-xs"
          >
            <svg
              v-for="i in 8"
              :key="i"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-gray-600 transform rotate-90"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <line x1="1.05" y1="12" x2="7" y2="12"></line>
              <line x1="17.01" y1="12" x2="22.96" y2="12"></line>
            </svg>
          </div>
          <div class="flex flex-col items-start justify-start space-y-4">
            <h1
              class="flex flex-row items-center justify-start space-x-2 text-3xl font-semibold tracking-wide"
            >
              <span>✋</span>
              <span>Hey, I am Joseph Gitau.</span>
            </h1>
            <article
              class="text-lg leading-8 tracking-wide text-left text-gray-400"
            >
              <p>
                I'm a full stack developer. I write about about many different
                programming topics mainly in these language and framework:
                Python, modern javascript, vuejs, Expressjs, Django, Golang,
                Flutter or Dart.
              </p>
            </article>
            <button
              id="news-letter"
              class="flex flex-row items-center mt-10 justify-center px-4 py-3 space-x-2 tracking-wide text-white bg-blue-800 rounded-sm"
              type="button"
              aria-labelledby="news-letter"
              aria-haspopup="true"
              aria-label="button"
              tabindex="0"
              role="button"
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
                class="text-white"
              >
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                ></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span class="text-lg tracking-wide capitalize">
                news letter
              </span>
            </button>
          </div>
        </div>
        <div class="flex flex-row items-center justify-start w-full">
          <img
            src="~assets/images/metal.png"
            alt="shapefest image"
            draggable="false"
          />
        </div>
      </section>
    </section>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'default',
  name: 'Index',
})
</script>

<style scoped>
#dot-slant {
  background: url('~assets/images/dot-slant.svg') top left no-repeat;
}
</style>
