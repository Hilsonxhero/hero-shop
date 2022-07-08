<template>
  <div>
    <section>
      <TopSlider />
    </section>

    <section class="my-12">
      <Promotion />
    </section>

    <section class="my-12">
      <QuadrupleBanner />
    </section>

    <section class="my-12">
      <Bestselling />
    </section>

    <section class="my-12">
      <TripleBanner />
    </section>
    <!-- 
    <section class="my-12">
      <Categories />
    </section> -->

    <section class="my-12">
      <Pcc />
    </section>

    <section class="my-12">
      <Pcc />
    </section>

    <section class="my-12">
      <Articles />
    </section>
  </div>
</template>

<script setup lang="ts">
import TopSlider from "@/components/app/main/slider/TopSlider.vue";
import Categories from "@/components/app/main/category/categories.vue";
import Promotion from "@/components/app/main/promotion/promotion.vue";
import Bestselling from "@/components/app/main/bs/Bestselling.vue";
import TripleBanner from "@/components/app/main/banners/Triple.vue";
import QuadrupleBanner from "@/components/app/main/banners/Quadruple.vue";
import Pcc from "@/components/app/main/pcc/pcc.vue";
import Articles from "@/components/app/main/articles/Articles.vue";
</script>

<style scoped></style>
