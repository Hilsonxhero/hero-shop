<template>
    <div class="container">
        <div class="hx-promotion__box w-full relative py-8 px-4 bg-gray-100 overflow-hidden h-full">
            <div class="flex items-stretch justify-start relative z-10">
                <div class="flex flex-col items-center w-60 min-w-[15rem]">
                    <h4 class="text-center mb-2 text-white text-3xl">تخفیفات ویژه</h4>
                    <div class="text-base text-white mt-6">مشاهده همه</div>
                    <img class="w-24 h-full flex justify-end object-contain" src="media/bell.png" alt="" />
                </div>
                <div class="flex-grow overflow-hidden">
                    <swiper :autoplay="config.auto" :modules="modules" :breakpoints="config.breakpoints">
                        <swiper-slide v-for="(item, index) in 10">
                            <product></product>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SwiperClass, { Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Product from "./product.vue";
import { ref } from "vue";
const modules = [Navigation, Pagination, Autoplay];
const config = ref({
    auto: {
        delay: 1000,
        disableOnInteraction: false
    },
    breakpoints: {
        '320': {
            slidesPerView: 5,
            spaceBetween: 20
        },
        '410': {
            slidesPerView: 5,
            spaceBetween: 20
        },
        '640': {
            slidesPerView: 6,
            spaceBetween: 20
        },
        '768': {
            slidesPerView: 5,
            spaceBetween: 10
        },
        '1024': {
            slidesPerView: 5,
            spaceBetween: 10
        },
        '1200': {
            slidesPerView: 5.5,
            spaceBetween: 10
        }
    }
})
</script>

<style lang="scss" scoped>
.hx-promotion__box {
    z-index: 2;

    &::before {
        content: '';
        position: absolute;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 250px;
        background: url('./../../../../../public/media/promotion.png') no-repeat;
        background-size: cover;
    }
}
</style>