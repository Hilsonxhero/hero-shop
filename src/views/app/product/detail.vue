<template>
  <div class="container my-6">
    <div class="flex flex-col lg:flex-row space-y-4 justify-between mb-5">
      <div>
        <h1 class="text-2xl">
          {{ product.title_fa }}
        </h1>
      </div>

      <div>
        <div class="flex items-center">
          <div class="ml-3">
            <hx-button icon variant="gray">
              <hx-icon class="text-gray-500" icon="heart"></hx-icon>
            </hx-button>
          </div>

          <div class="ml-3">
            <hx-button icon variant="gray">
              <hx-icon class="text-gray-500" icon="bell-off"></hx-icon>
            </hx-button>
          </div>

          <div class="ml-3">
            <hx-button icon variant="gray">
              <hx-icon class="text-gray-500" icon="chart-square"></hx-icon>
            </hx-button>
          </div>

          <div class="ml-3">
            <hx-button icon variant="gray">
              <hx-icon class="text-gray-500" icon="share"></hx-icon>
            </hx-button>
          </div>

          <div class="mr-3">
            <hx-button icon variant="gray">
              <hx-icon class="text-gray-500" icon="compare"></hx-icon>
            </hx-button>
          </div>
        </div>
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
                  <Gallery />
                </div>
              </div>

              <div class="lg:p-2 lg:overflow-hidden tabs-container flex-grow">
                <MobileSellerBox />
                <div>
                  <Attributes :items="product?.features" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="hidden mt-6 lg:block">
          <div id="desktop-provider-list" class="lg:mb-6"></div>
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
              <Comments />
            </div>
            <div id="-p-faq">
              <Faq />
            </div>
            <div id="-p-order-feed">
              <Fallback />
            </div>
          </div>
        </div>
      </div>
      <div class="3xl:col-span-2 lg:col-span-3">
        <SellerBox />
      </div>
    </section>

    <div class="sticky z-20 bottom-0 inset-x-0 -mx-3">
      <section
        class="px-4 py-3 bg-white shadow-design lg:px-0 lg:py-0 lg:shadow-none lg:bg-unset lg:hidden"
      >
        <div
          class="flex flex-row-reverse items-center justify-between lg:flex-col lg:items-start lg:justify-start lg:space-y-4"
        >
          <section class="flex">
            <div
              class="flex flex-col lg:space-y-4 lg:flex-col-reverse lg:space-y-reverse justify-evenly"
            >
              <span class="hidden text-sm font-medium lg:block">قیمت</span>
              <div>
                <span class="flex items-center font-bold">
                  <span
                    id="price"
                    class="text-base text-left min-w-[4.5rem] min-h-[1.625rem] font-bold leading-6 lg:text-xl"
                  >
                    55,600,000
                  </span>
                  <span class="font-normal text-sm leading-6 lg:text-sm mr-2"
                    >تومان</span
                  >
                </span>
              </div>
            </div>
          </section>
          <section class="w-full">
            <hx-button>افزودن به سبد خرید</hx-button>
          </section>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck
import { ref, onMounted } from "vue";
import Attributes from "@/components/app/product/Attributes.vue";
import SellerBox from "@/components/app/product/seller/Box.vue";
import MobileSellerBox from "@/components/app/product/seller/MobileBox.vue";
import Comments from "@/components/app/product/comments/Base.vue";
import Preview from "@/components/app/product/preview/Base.vue";
import Fallback from "@/components/app/product/fallback/Base.vue";
import Faq from "@/components/app/product/faq/Base.vue";
import MainImage from "@/components/app/product/gallery/MainImage.vue";
import Gallery from "@/components/app/product/gallery/Gallery.vue";
import ApiService from "@/core/services/ApiService";
import { useRoute } from "vue-router";

const id = ref(null);
const product = ref({});
const route = useRoute();
onMounted(() => {
  id.value = route.params.id;
  ApiService.get(`product/${id.value}`)
    .then(({ data }) => {
      product.value = data.data;
      console.log("product.value", product.value);
    })
    .catch(() => {});
});
</script>

<style scoped></style>
