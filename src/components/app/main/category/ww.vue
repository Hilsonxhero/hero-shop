<template>
    <div class="container">
        <div class="bg-gray-100 p-4 rounded-xl">
            <div class="">
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
                        slidesPerView: 6,
                        spaceBetween: 20
                    },
                    '1024': {
                        slidesPerView: 8,
                        spaceBetween: 20
                    },
                    '1200': {
                        slidesPerView: 10,
                        spaceBetween: 20
                    }
                
                }">
                    <swiper-slide v-for="(item, index) in 12">
                        <div class="flex flex-col items-center justify-center ">
                            <router-link to=""
                                class="h-12 w-12 border-2 border-purple-500 rounded-[50%] text-white www flex items-center justify-center">
                                <hx-icon class="w-6 h-6" icon="laptop"></hx-icon>
                            </router-link>
                            <h3 class="mt-3 text-gray-600 text-sm">کالای دیجیتال</h3>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// import SwiperClass, { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const modules = [];

</script>


<style scoped>
.www {
    background: radial-gradient(circle at -4% -12.9%, rgb(74, 98, 110) 0.3%, rgb(30, 33, 48) 90.2%);
}
</style>