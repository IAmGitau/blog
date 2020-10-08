<template>
  <div
    :class="{
      css: badge === 'css',
      html: badge === 'html',
      go: badge === 'go',
      python: badge === 'python',
      flutter: badge === 'flutter',
      dart: badge === 'dart',
      node: badge === 'node',
    }"
    class="badge"
  >
    {{ name }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

// Badge component...
export default Vue.extend({
  name: 'Badge',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    badge() {
      return this.name.toLowerCase()
    },
  },
})
</script>

<style scoped>
.badge {
  @apply py-1 px-3 rounded-full border text-white text-sm capitalize tracking-wide;
}

.css {
  border-color: #ffd500;
  color: #ffd500;
  text-transform: uppercase;
}

.node {
  border-color: #0cff24;
  color: #0cff24;
}

.go {
  border-color: #0b2ede;
  color: #0b2ede;
}

.dart,
.flutter {
  border-color: #de0b91;
  color: #de0b91;
}

.html {
  border-color: #de0b36;
  color: #de0b36;
  text-transform: uppercase;
}

.python {
  border-color: #0bd7de;
  color: #0bd7de;
}
</style>
