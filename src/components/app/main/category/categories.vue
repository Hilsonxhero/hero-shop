<template>
    <div class="container">
        <div class="bg-white p-4 border-2 rounded-xl">
            <div class="">
                <swiper class="swiper sw-categories" :grid="{ rows: 2 }" :modules="modules" :slides-per-view="8"
                    :navigation="{ nextEl: '.swiper-next-ct', prevEl: '.swiper-prev-ct', }">

                    <swiper-slide class="text-center my-12" v-for="(item, index) in 20">
                        <div class="flex flex-col items-center justify-center ">
                            <router-link to=""
                                class="h-20 w-20   rounded-[50%] text-white bg-gray-100 flex items-center justify-center">
                                <hx-icon class="w-16 h-1w-16" icon="mobile-c"></hx-icon>
                            </router-link>
                            <h3 class="mt-3 text-gray-600 text-sm">کالای دیجیتال</h3>
                        </div>
                    </swiper-slide>

                    <button type="button" class="swiper-prev-ct mr-8 ml-2" slot="button-prev">
                        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                            <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                        </svg>

                    </button>
                    <button type="button" class="swiper-next-ct" slot="button-next">
                        <div class="flex">
                            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
                            </svg>
                        </div>
                    </button>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SwiperClass, { Pagination, Navigation, Grid } from "swiper";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css";
import 'swiper/css/grid'
import "swiper/css/pagination";
import "swiper/css/navigation";
const modules = [Grid, Navigation];

</script>


<style >
.www {
    background: radial-gradient(circle at -4% -12.9%, rgb(74, 98, 110) 0.3%, rgb(30, 33, 48) 90.2%);
}

.sw-categories>.swiper-wrapper {
    flex-direction: row !important;
}

.swiper-next-ct {
    left: 10px;
    right: auto;
}

.swiper-prev-ct {
    right: 10px;
    left: auto;
}

.swiper-prev-ct,
.swiper-next-ct {
    position: absolute;
    top: 50%;
    width: calc(var(--swiper-navigation-size)/ 44 * 27);
    height: var(--swiper-navigation-size);
    margin-top: calc(0px - (var(--swiper-navigation-size)/ 2));
    z-index: 10;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--swiper-navigation-color, var(--swiper-theme-color));
}
</style>