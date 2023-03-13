<template>
  <div class="grid grid-cols-12 gap-2">
    <Product
      v-for="(productItem, index) in products"
      :key="index"
      :product="productItem"
    />
  </div>
</template>

<script setup lang="ts">
import Product from "./product.vue";

const props = defineProps({
  products: {},
});
</script>

<style scoped></style>
