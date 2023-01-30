<template>
  <hx-skeleton animated :loading="loading">
    <template #template>
      <hx-skeleton-item variant="card"></hx-skeleton-item>
      <hx-skeleton-item variant="card"></hx-skeleton-item>
      <hx-skeleton-item variant="card"></hx-skeleton-item>
      <hx-skeleton-item variant="card"></hx-skeleton-item>
      <hx-skeleton-item variant="card"></hx-skeleton-item>
      <hx-skeleton-item variant="card"></hx-skeleton-item>
      <hx-skeleton-item variant="card"></hx-skeleton-item>
      <hx-skeleton-item variant="card"></hx-skeleton-item>
    </template>
    <template #default>
      <div>
        <section>
          <TopSlider :items="init?.banners?.header_banners" />
        </section>

        <section class="">
          <Categories />
        </section>

        <section class="">
          <Promotion :products="init?.incredible_products" />
        </section>

        <section class="my-12">
          <QuadrupleBanner :items="init?.banners?.top_banners" />
        </section>

        <section class="my-12">
          <Bestselling />
        </section>

        <section class="my-12">
          <TripleBanner :items="init?.banners?.middle_banners" />
        </section>


        <!-- <section class="my-12">
          <Pcc />
        </section> -->

        <section class="my-8">
          <Recommendation :recommendations="recommendations" />
        </section>

        <section class="my-12">
          <Articles :items="init.articles" />
        </section>
      </div>
    </template>
  </hx-skeleton>
</template>

<script setup lang="ts">
// @ts-nocheck

import { onMounted, ref } from "vue";
import Recommendation from "@/modules/landing/components/recommendations/Recommendation.vue";
import TopSlider from "@/components/app/main/slider/TopSlider.vue";
import Categories from "@/components/app/main/category/categories.vue";
import Promotion from "@/components/app/main/promotion/promotion.vue";
import Bestselling from "@/components/app/main/bs/Bestselling.vue";
import TripleBanner from "@/components/app/main/banners/Triple.vue";
import QuadrupleBanner from "@/components/app/main/banners/Quadruple.vue";
import Pcc from "@/components/app/main/pcc/pcc.vue";
import Articles from "@/components/app/main/articles/Articles.vue";
import ApiService from "@/core/services/ApiService";

const init = ref<Array<any>>([]);
const recommendations = ref<Array<any>>([]);
const loading = ref<any>(true);
onMounted(() => {
  ApiService.get("landing").then(({ data }) => {
    init.value = data.data;

  });
  ApiService.get("recommendation").then(({ data }) => {
    recommendations.value = data.data;
    loading.value = false;
  });
});
</script>

<style scoped>

</style>
