<template>
  <section
    class="flex flex-col w-full h-screen max-h-screen min-h-screen bg-color"
  >
    <NavBar />
    <Nuxt />
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

.bg-color {
  background-color: white;
}

.dark-mode .bg-color {
  background-color: #212121;
}
</style>
