<template>
  <div class="container">
    <div class="grid grid-cols-12 gap-y-6 gap-2 lg:gap-4">
      <ArticleItem
        v-for="(item, index) in items"
        :article="item"
        :key="index"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck

const props = defineProps({
  items: {
    type: Array,
  },
});
import ArticleItem from "./ArticleItem.vue";
</script>

<style scoped></style>
