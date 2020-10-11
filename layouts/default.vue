<template>
  <section class="flex flex-col w-full min-h-screen overflow-y-auto bg-color">
    <Nuxt />
    <br v-for="br in 3" :key="br" />
    <FooterSection />
  </section>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
@media (min-width: 1024px) {
  lg\:h-unset {
    height: unset;
  }
}

::-webkit-scrollbar-thumb {
  border-radius: 10px !important;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
  background-color: #005bcb !important;
}

::-webkit-scrollbar-track {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    inset 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
  border-radius: 10px !important;
}

:target {
  color: #005bcb !important;
}
</style>
