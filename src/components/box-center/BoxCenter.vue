<template>
  <div
    class="c-box-center"
    font-tertiary
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  // c-box-center
</script>

<style scoped lang="scss">
  @include b(c-box-center) {
    @include box-center();
  }
</style>
