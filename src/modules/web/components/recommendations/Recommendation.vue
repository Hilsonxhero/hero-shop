<template>
  <div class="container">
    <div class="grid grid-cols-12 gap-2">
      <div
        class="col-span-12 md:col-span-6 lg:col-span-3"
        v-for="(recommendation, index) in recommendations"
        :key="index"
      >
        <div class="recommendation-module__item rounded-xl p-3">
          <div class="mb-2 flex flex-col items-center justify-center">
            <h5 class="text-base text-gray-700">{{ recommendation.title }}</h5>
            <p class="text-xs text-gray-400 mt-1">
              {{ recommendation.description }}
            </p>
          </div>
          <div class="grid grid-cols-12 gap-2">
            <div
              class="col-span-6"
              v-for="(product, index) in recommendation.products"
              :key="index"
            >
              <router-link
                class="flex justify-center"
                :to="{
                  name: 'product detail',
                  params: {
                    id: product?.product?.id,
                    slug: product?.product?.slug,
                  },
                }"
              >
                <img
                  loading="lazy"
                  class="w-[150px] h-[150px] object-contain"
                  :src="product?.product?.media.thumb"
                  alt=""
                />
              </router-link>
            </div>
          </div>
          <div class="mt-6 flex flex-col items-center">
            <router-link to="/" class="text-blue-500 text-sm"
              >مشاهده بیشتر</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck
// @ts-ignore
import type { PropType } from "vue";
// import { recommendationModel } from "@/modules/web/models/recommendationModel";

const props = defineProps({
  recommendations: {
    type: Array as PropType<any[]>,
  },
});
</script>

<style lang="scss" scoped>
.recommendation-module {
  &__item {
    position: relative;
    background: linear-gradient(90deg, #f0f2f5 25%, #e6e8eb 37%, #f0f2f5 63%);
    background-size: 400% 100%;
    animation: hx-skeleton-loading 1.4s ease infinite;
  }
}

@keyframes hx-skeleton-loading {
  0% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0 50%;
  }
}
</style>
