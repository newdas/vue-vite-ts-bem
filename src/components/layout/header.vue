<template>
  <header
    class="c-header"
    :class="{ 'c-header--fixed': fixed }"
  >
    <slot></slot>
  </header>
</template>
<script setup lang="ts">
  defineProps({
    fixed: {
      type: Boolean,
      default: false,
    },
  })
</script>
<style lang="scss" scoped>
  @include b(c-header) {
    @include m(fixed) {
      position: fixed;
      top: 0px;
      width: 100%;
      z-index: 10;
    }
  }
</style>
