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
          <Categories :categories="init?.main_categories" />
        </section>

        <section class="">
          <Promotion :products="init?.incredible_products" />
        </section>

        <section class="my-12">
          <QuadrupleBanner :items="init?.banners?.top_banners" />
        </section>

        <section class="my-12">
          <Bestselling :products="init?.best_selling_products" />
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
import { onMounted, ref, computed } from "vue";
import Recommendation from "@/modules/web/components/recommendations/Recommendation.vue";
import TopSlider from "@/modules/web/components/main/slider/TopSlider.vue";
import Categories from "@/modules/web/components/main/category/categories.vue";
import Promotion from "@/modules/web/components/main/promotion/promotion.vue";
import Bestselling from "@/modules/web/components/main/bs/Bestselling.vue";
import TripleBanner from "@/modules/web/components/main/banners/Triple.vue";
import QuadrupleBanner from "@/modules/web/components/main/banners/Quadruple.vue";
import Pcc from "@/modules/web/components/main/pcc/pcc.vue";
import Articles from "@/modules/web/components/main/articles/Articles.vue";
import ApiService from "@/core/services/ApiService";
// import { LandingModel } from "@/modules/web/models/LandingModel";
import { useHead } from "@vueuse/head";

const init = ref<any>({});
const recommendations = ref<Array<object>>([]);
const loading = ref<any>(true);

useHead({
  title: computed(() => "صفحه اصلی"),
  meta: [
    {
      name: `description`,
      content: computed(() => "صفحه اصلی"),
    },
  ],
});

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

<style scoped></style>
