<template>
  <div class="container mb-4">
    <section
      class="relative overflow-hidden rounded-xl my-3 article-module__section bg-gray-100"
    >
      <div class="container">
        <div
          class="flex flex-col justify-center items-center py-[50px] lg:py-[120px] relative z-10"
        >
          <h2 class="text-3xl font-normal article-module__head">مقالات</h2>
          <p class="text-xs mt-2 text-center article-module__content">
            مقالات به روز رو از اینجا میتونی دنبال کنی :)
          </p>
          <!-- <div class="mt-3">
            <Countdown
              class="text-4xl font-normal heading-color-gradiernt"
              :date="discount_expire"
            />
          </div> -->
        </div>
        <!-- <img
          class="absolute left-[20%] top-[50%] right-auto bottom-auto max-w-full w-[60px] lg:w-[130px] z-10"
          src="/media/promotion/05.png"
          alt=""
        />
        <img
          class="absolute left-auto top-[55%] right-[25%] bottom-auto max-w-full w-[60px] lg:w-[130px] promotion-vector-rotate z-10"
          src="/media/promotion/05.png"
          alt=""
        /> -->
      </div>
    </section>

    <div clss="my-4">
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
            <section
              class="grid grid-cols-12 gap-2"
              v-infinite-scroll="loadArticles"
            >
              <ArticleItem
                :article="article"
                :key="index"
                v-for="(article, index) in articles"
              />
            </section>
          </div>
        </template>
      </hx-skeleton>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck
import { onMounted, ref } from "vue";

import ArticleItem from "@/components/app/main/articles/ArticleItem.vue";

import ApiService from "@/core/services/ApiService";

const articles = ref([]);

const pager = ref({
  current_page: 0,
});

const must_fetch = ref(true);
const loading = ref(true);

const loadArticles = () => {
  if (must_fetch.value) {
    const params = new URLSearchParams();

    pager.value.current_page = +pager.value.current_page + 1;

    params.append(`page`, +pager.value?.current_page ?? 1);
    loading.value = true;
    ApiService.query("articles", {
      params: params,
    }).then(({ data }) => {
      data.data.articles.map((item, index) => {
        articles.value.push(item);
      });
      loading.value = false;
      pager.value = data.data.pager;

      if (+pager.value.current_page == +pager.value.pages) {
        must_fetch.value = false;
      }
    });
  }
};

onMounted(() => {
  loadArticles();
});
</script>

<style scoped></style>
