<template>
  <div class="container my-6">
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
        <div class="">
          <div
            class="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 justify-between mb-5"
          >
            <div>
              <h1 class="text-2xl">
                {{ product.title_fa }}
              </h1>
            </div>

            <div>
              <ProductActions
                :product="product"
                :default-variant="default_variant"
              />
            </div>
          </div>

          <section
            class="3xl:grid-cols-12 space-y-3 lg:grid lg:gap-x-4 lg:grid-cols-12 lg:space-y-6"
          >
            <div class="3xl:col-span-10 lg:col-span-9">
              <section class="section-main">
                <div class="">
                  <div class="flex items-center">
                    <h3
                      class="flex items-end w-full text-left text-typo-light text-xs lg:w-auto lg:min-h-8 lg:text-right lg:whitespace-nowrap lg:text-sm"
                    >
                      {{ product.title_en }}
                    </h3>
                    <div
                      class="hidden mx-4 w-full bg-gray-100 lg:block h-[0.125rem]"
                    ></div>
                  </div>

                  <div class="flex flex-col lg:flex-row">
                    <div class="flex items-start lg:sticky lg:top-20">
                      <div
                        class="relative flex-col mb-4 mt-3 w-full lg:mb-0 lg:w-auto t-flex-center"
                      >
                        <MainImage :source="product?.media?.main" />
                        <Gallery :galleries="product?.media?.galleries" />
                      </div>
                    </div>

                    <div
                      class="lg:p-2 lg:overflow-hidden tabs-container flex-grow"
                    >
                      <div>
                        <BaseCombinations
                          :variant="product.default_variant"
                          :variants="product.variants"
                          :combinations="product?.combinations"
                          v-model="default_variant"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <Attributes :items="product?.features" />
              </section>

              <div class="flex items-start justify-between w-full lg:mt-6">
                <div></div>
                <div
                  class="flex flex-col mt-4 w-full lg:flex-grow lg:mr-3 lg:mt-0 lg:space-y-6"
                >
                  <div class="rounded lg:bg-white lg:mt-[3.75rem]">
                    <Preview :review="product.review" />
                  </div>
                  <div id="-p-u-comments">
                    <base-comments
                      :rating="product?.rating"
                      :count="product?.comments_count"
                    ></base-comments>
                  </div>
                  <div>
                    <BaseFaq :count="2" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-12 3xl:col-span-2 lg:col-span-3">
              <SellerBox :variant="default_variant" />
            </div>
          </section>
        </div>
      </template>
    </hx-skeleton>
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck
import { ref, onMounted, computed } from "vue";
import BaseCombinations from "@/modules/product/components/detail/combination/Combinations.vue";
import Attributes from "@/modules/product/components/detail/Attributes.vue";
import SellerBox from "@/modules/product/components/detail/seller/BaseSellerAside.vue";
import MobileSellerBox from "@/modules/product/components/detail/seller/MobileBox.vue";
import BaseComments from "@/modules/product/components/detail/comments/BaseComment.vue";
import Preview from "@/modules/product/components/detail/preview/BasePreview.vue";
import BaseFaq from "@/modules/product/components/detail/faq/BaseFaq.vue";
import MainImage from "@/modules/product/components/detail/gallery/MainImage.vue";
import Gallery from "@/modules/product/components/detail/gallery/Gallery.vue";
import ProductActions from "@/modules/product/components/detail/actions/ProductActions.vue";
import ApiService from "@/core/services/ApiService";
import { useRoute } from "vue-router";

import { useHead } from "@vueuse/head";

const id = ref(null);
const loading = ref(true);
const product = ref({});
const route = useRoute();
const comments = ref(null);
const comment_scores = ref([]);
const default_variant = ref({});
useHead({
  title: computed(() => product.value.title_fa),
  meta: [
    {
      name: `description`,
      content: computed(() => product.value.title_fa),
    },
  ],
});

onMounted(() => {
  id.value = route.params.id;
  ApiService.get(`product/${id.value}`)
    .then(({ data }) => {
      product.value = data.data;
      loading.value = false;
    })
    .catch(() => {});

  // ApiService.get(`comments/product/${id.value}`)
  //   .then(({ data }) => {
  //     comments.value = data;
  //   })
  //   .catch(() => { });
});
</script>

<style scoped></style>
