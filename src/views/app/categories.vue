<template>
  <div class="container">
    <section class="my-10" v-for="(item, index) in 6">
      <div class="flex items-center justify-between my-6">
        <h4>کالای دیجیتال</h4>
        <div>
          <!-- <hx-button size="sm" outlined variant="primary">مشاهده همه</hx-button> -->
        </div>
      </div>
      <swiper :breakpoints="config.breakpoints">
        <swiper-slide v-for="(item, index) in 20">
          <router-link to="/"
            class="flex flex-col items-center p-5 bg-gray-100 rounded-xl border-2 border-transparent hover:border-2 hover:border-gray-200 transition-all duration-200 ease-in-out">
            <div class="overflow-hidden max-w-[6rem] mix-blend-multiply">
              <img class="w-full h-full object-contain" src="/media/products/06.png" loading="lazy" alt="" />
            </div>
            <div class="my-2 flex flex-col items-center">
              <h4 class="text-gray-600">کنسول بازی</h4>
              <p class="mt-3 text-sm text-gray-400">1521 کالا</p>
            </div>
          </router-link>
        </swiper-slide>
      </swiper>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
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
      slidesPerView: 6,
      spaceBetween: 10,
    },
    "1200": {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    "1300": {
      slidesPerView: 10,
      spaceBetween: 10,
    },
    "1400": {
      slidesPerView: 10,
      spaceBetween: 10,
    },
  },
});

const categories = ref<Array<any>>([]);



</script>

<style scoped>

</style>
