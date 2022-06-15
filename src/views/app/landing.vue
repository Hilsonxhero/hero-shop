<template>
  <div>
    <section>
      <TopSlider />
    </section>
    <section>
      <Categories />
    </section>

    <section class="my-12">
      <Promotion />
    </section>
    <section class="my-12">
      <Bestselling />
    </section>
  </div>
</template>

<script setup lang="ts">
import TopSlider from '@/components/app/main/slider/TopSlider.vue';
import Categories from '../../components/app/main/category/categories.vue';
import Promotion from '../../components/app/main/promotion/promotion.vue';
import Bestselling from '@/components/app/main/bs/Bestselling.vue';

</script>

<style scoped>
</style>