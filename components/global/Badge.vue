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
    class="badge sm:text-sm text-xs"
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
  padding-top: 0.15rem;
  @apply px-3 rounded-full border-2 text-center text-white capitalize tracking-wide;
}

.dark-mode .badge {
  @apply border;
}

.css {
  --css-color: #ffd500;
  border-color: var(--css-color);
  color: #645400;
  @apply uppercase;
}

.dark-mode .css {
  color: white;
}

.node {
  --node-color: #09b11a;
  border-color: var(--node-color);
  color: #07560f;
}

.dark-mode .node {
  --node-color: #0cff24;
  border-color: var(--node-color);
  color: var(--node-color);
}

.go {
  border-color: #0b2ede;
  color: #031160;
}

.dark-mode .go {
  color: white;
}

.dart,
.flutter {
  border-color: #de0b91;
  color: #620441;
}

.html {
  --html-color: #bc0024;
  border-color: var(--html-color);
  color: #ae0021;
  text-transform: uppercase;
}

.dark-mode .html {
  --html-color: #de0b36;
  border-color: var(--html-color);
  color: white;
}

.python {
  border-color: #0bd7de;
  color: #06686b;
}
</style>
