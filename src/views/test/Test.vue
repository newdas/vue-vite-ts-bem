<template>
  <div class="box">
    <ul>
      <li
          v-for="(item, index ) in items"
          :key="index"
      > {{ item['name'] }}</li>
    </ul>
  </div>

</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {getTestItems} from "@/api/test";

const items = ref([])

onMounted(
    () => {
      getTestItems().then(res => {
        items.value = res.data.data
      }).catch(err => {
        console.log(err)
      })
    }
)
</script>

<style scoped lang="scss">
@include b(box) {
  color: black;
}
</style>
