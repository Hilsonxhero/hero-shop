<template>
  <div v-if="init">
    <section>
      <TopSlider :items="init.header_banners" />
    </section>

    <section class="my-12">
      <Promotion :products="init.incredible_products" />
    </section>

    <section class="my-12">
      <QuadrupleBanner :items="init.top_banners" />
    </section>

    <section class="my-12">
      <Bestselling />
    </section>

    <section class="my-12">
      <TripleBanner :items="init.middle_banners" />
    </section>

    <!-- <section class="my-12">
      <Categories />
    </section> -->
    <!-- 
    <section class="my-12">
      <Pcc />
    </section>

    <section class="my-12">
      <Pcc />
    </section> -->

    <section class="my-12">
      <Articles :items="init.articles" />
    </section>
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck

import { onMounted, ref } from "vue";
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

onMounted(() => {
  // ApiService.get("user/init").then(({ data }) => {
  //   console.log("data", data.data);
  // });
  ApiService.get("landing").then(({ data }) => {
    init.value = data.data;
  });
});
</script>

<style scoped></style>
