<template>
  <div class="container">
    <div
      v-if="products?.length >= 1"
      class="hx-bs__box w-full relative py-8 px-4 bg-gray-100 overflow-hidden h-full rounded-lg"
    >
      <div
        class="flex flex-col lg:flex-row items-stretch justify-start relative z-10"
      >
        <div
          class="flex flex-col items-center justify-center text-center mx-auto lg:justify-start w-60 min-w-[15rem]"
        >
          <h4 class="text-center mb-2 text-white text-3xl">پر فروش ترین ها</h4>
          <div class="text-base text-white mt-3 lg:mt-6 mb-6">مشاهده همه</div>
          <img
            loading="lazy"
            class="w-24 h-full hidden lg:flex justify-end object-contain mt-12"
            src="/media/rocket.png"
            alt=""
          />
        </div>

        <div class="flex-grow overflow-hidden">
          <swiper
            :autoplay="config.auto"
            :modules="modules"
            :breakpoints="config.breakpoints"
          >
            <swiper-slide v-for="(product, index) in products" :key="index">
              <product :product="product"></product>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <div v-else></div>
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck
// @ts-ignore
import { Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ref } from "vue";
import Product from "@/modules/web/components/main/promotion/product.vue";
const modules = [Navigation, Pagination, Autoplay];

const config = ref({
  auto: {
    delay: 1000,
    disableOnInteraction: false,
  },
  breakpoints: {
    "320": {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    "410": {
      slidesPerView: 1.8,
      spaceBetween: 10,
    },
    "640": {
      slidesPerView: 2.1,
      spaceBetween: 10,
    },
    "768": {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    "1024": {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    "1200": {
      slidesPerView: 4.5,
      spaceBetween: 10,
    },
    "1400": {
      slidesPerView: 5.5,
      spaceBetween: 10,
    },
  },
});

const props = defineProps({
  products: {},
});
</script>

<style lang="scss" scoped>
.hx-bs__box {
  z-index: 2;

  &::before {
    content: "";
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 250px;
    background: url("/media/bs-bg.png") no-repeat;
    background-size: cover;
  }

  .hx-product__item {
    @apply bg-white shadow-md flex flex-col items-center rounded-md p-4 relative;
  }

  .t-percent {
    height: 1.75rem;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    border-radius: 0.375rem;
    border-width: 2px;
    border-color: rgba(255, 255, 255, 1);
    background-color: rgba(255, 106, 106, 1);
    padding-left: 0.25rem;
    padding-right: 0.5rem;
    color: rgba(255, 255, 255, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
}
</style>
