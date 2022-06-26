<template>
  <div class="w-full relative container">

    <div class="grid lg:grid-cols-9 gap-4 my-6">
      <div class="col-span-2">
        <Filters />
      </div>
      <div class="col-span-7">
        <Sort />
        <Products />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Products from "@/components/app/search/products.vue";
import Filters from "@/components/app/search/filters.vue";
import Sort from "@/components/app/search/sort.vue";

const activeName = ref("1");
</script>

<style scoped></style>
