<template>
  <c-box-skin
    class="c-foot-nav"
    type="top"
  >
    <c-row style="height: 100%">
      <c-col
        v-for="item in list"
        :key="item"
        :span="24 / list['length']"
        class="c-foot-nav__text"
        :class="{ 'c-foot-nav__text--active': item['active'] }"
      >
        <router-link :to="item['path']">
          {{ item['text'] }}
        </router-link>
      </c-col>
    </c-row>
  </c-box-skin>
</template>
<script setup lang="ts">
  defineProps({
    list: {
      type: Object,
      default: function () {
        return []
      },
    },
  })
</script>
<style lang="scss" scoped>
  @include b(c-foot-nav) {
    @include e(text) {
      @include box-center($justify: center, $align: center);
      @include m(active) {
        & > a {
          color: $color-primary;
        }
      }
    }
  }
</style>
