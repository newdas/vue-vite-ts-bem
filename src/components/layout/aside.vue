<template>
  <div class="c-aside">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  // aside.vue
</script>

<style lang="scss" scoped>
  @include b(c-aside) {
    overflow: auto;
    flex-shrink: 0;
  }
</style>
