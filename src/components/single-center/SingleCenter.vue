<template>
  <div class="c-single-center">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  // c-single-center
</script>

<style scoped lang="scss">
  @include b(c-single-center) {
    @include grid($align-items: center);
  }
</style>
