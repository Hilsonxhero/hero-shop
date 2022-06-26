<template>
  <div class="grid grid-cols-12 gap-2">
    <Product v-for="(item, index) in 28" :key="index" />
  </div>
</template>

<script setup lang="ts">
import Product from "./product.vue";
</script>

<style scoped></style>
