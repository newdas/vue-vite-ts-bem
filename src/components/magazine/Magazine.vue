<template>
  <div :style="style">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  // 类似于杂志，一张背景图，里面有内容
  import { computed } from 'vue'

  const props = defineProps({
    image: {
      type: String,
      required: true,
    },
  })

  const style = computed(() => {
    return (
      'position: relative; background: url(' +
      props.image +
      ') center; background-size: cover;'
    )
  })
</script>
