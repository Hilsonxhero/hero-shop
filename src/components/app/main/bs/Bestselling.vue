<template>
    <div class="container">
        <div class="hx-bs__box w-full relative py-8 px-4 bg-gray-100 overflow-hidden h-full">
            <div class="flex items-stretch justify-start relative z-10">
                <div class="flex flex-col items-center w-60 min-w-[15rem]">
                    <h4 class="text-center mb-2 text-white text-3xl">تخفیفات ویژه</h4>
                    <div class="text-base text-white mt-6">مشاهده همه</div>
                    <img class="w-24 h-full flex justify-end object-contain mt-12" src="media/rocket.png" alt="" />
                </div>

                <div class="flex-grow overflow-hidden">
                    <swiper :breakpoints="{
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
                            slidesPerView: 6,
                            spaceBetween: 10
                        }
                    
                    }">
                        <swiper-slide v-for="(item, index) in 10">
                            <div class="hx-product__item">
                                <div class="relative overflow-hidden">
                                    <div class="flex justify-between">
                                        <div class="t-percent">
                                            <span class="text-sm">22</span>
                                            <hx-icon class="mr-2 text-white w-4 h-4" icon="percentage-square"></hx-icon>
                                        </div>
                                    </div>
                                    <img class="w-full" src="media/products/01.png" alt="">

                                    <div class="flex justify-between pb-2 px-2 w-full lg:pb-0">
                                        <div
                                            class="flex items-center p-2 max-w-max h-5 bg-gray-300 space-x-1 space-x-reverse rounded-[0.375rem]">
                                            <div class="mr-auto w-[0.375rem] h-[0.375rem] rounded-full"
                                                style="background-color:#000000;"></div>
                                            <div class="mr-auto w-[0.375rem] h-[0.375rem] rounded-full"
                                                style="background-color:#fff;"></div>
                                        </div>

                                    </div>
                                </div>

                                <div class="mt-3">
                                    <router-link to="/">
                                        <h2> کنسول بازی سونی مدل Playstation 5 Edition
                                        </h2>
                                    </router-link>
                                </div>
                                <div class="flex flex-col items-center">
                                    <div class="mt-2 text-gray-500">
                                        <del class="">9500000</del>

                                    </div>
                                    <div class="mt-2 text-gray-500">
                                        <span class="">8500000</span>
                                        <span class="mr-1">تومان</span>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SwiperClass, { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const modules = [Navigation, Pagination];

</script>

<style lang="scss" scoped>
.hx-bs__box {
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
        background: url('./../../../../../public/media/bs-bg.png') no-repeat;
        background-size: cover;
    }

    .hx-product__item {
        @apply bg-white shadow-md flex flex-col items-center rounded-md p-4 relative
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