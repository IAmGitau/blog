<template>
  <section>
    <!--  -->
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

// index component...
export default Vue.extend({
  name: 'Index',
  validate({ redirect }): Promise<boolean> | boolean {
    redirect('/')
    return false
  },
})
</script>
