<template>
    <div class="container">
        <div class="w-full relative  overflow-hidden h-full">
            <div class="flex items-stretch justify-start relative z-10">
                <div class="flex-grow overflow-hidden">
                    <swiper class="h-full" :modules="modules" :breakpoints="config.breakpoints">
                        <swiper-slide>
                            <div
                                class="hx-pcc__box rounded-xl h-full flex justify-center flex-col space-y-8 items-center ">
                                <h4 class="text-center mb-2 text-blue-600 text-3xl">جدیدترین</h4>
                                <h4 class="text-center mb-2 text-blue-600 text-xl">تبلت ها</h4>
                                <hx-button outlined variant="primary" class="">
                                    مشاهده همه
                                    <hx-icon left icon="chevron-left"></hx-icon>
                                </hx-button>
                            </div>
                        </swiper-slide>
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
            slidesPerView: 1.5,
            spaceBetween: 10
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
            slidesPerView: 6,
            spaceBetween: 10
        }
    }
})
</script>

<style lang="scss" scoped>
.hx-pcc__box {
    background-image: radial-gradient(circle 1224px at 10.6% 8.8%, rgba(255, 255, 255, 1) 0%, rgba(153, 202, 251, 1) 100.2%);
}
</style>