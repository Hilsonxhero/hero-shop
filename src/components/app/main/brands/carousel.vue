<template>
  <section class="my-10">
    <div class="container">
      <div class="border rounded-xl p-4">
        <div class="flex justify-center items-center my-4">
          <hx-icon class="w-6 h-6 ml-2 text-yellow-400" icon="medal"></hx-icon>
          <h4 class="text-xl">محبوب ترین برند ها</h4>
        </div>
        <swiper :breakpoints="config.breakpoints">
          <swiper-slide v-for="(item, index) in 10" class="brand-swiper__item">
            <div class="flex justify-center items-center border-l">
              <div
                class="mix-blend-multiply overflow-hidden w-full mx-auto p-4"
              >
                <img
                  class="w-full h-full object-contain"
                  src="/media/brands/02.jpg"
                  alt=""
                />
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

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
      slidesPerView: 7,
      spaceBetween: 10,
    },
  },
});
</script>

<style>
.brand-swiper__item:last-of-type > div {
  border: none !important;
}
</style>
