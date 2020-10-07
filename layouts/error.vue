<template>
  <section>
    <pre>{{ error }}</pre>
    <br />
    <button class="border p-3" @click="$router.back()">back</button>
  </section>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

type error = {
  path: string
  message: string
  statusCode: string
}

interface Error {
  error: error
}

// error...
export default Vue.extend({
  name: 'Error',
  props: {
    error: {
      type: Object,
      required: true,
    } as PropOptions<Error>,
  },
})
</script>

<style scoped></style>
