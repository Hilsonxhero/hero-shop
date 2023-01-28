<template>
    <div>
        <div class="flex flex-col mb-4  lg:hidden">
            <section class="section-color ">
                <div class="flex item-center justify-center mb-4 pt-3 border-t">
                    <!-- <span class="ml-1 text-typo-light text-sm">رنگ :
                    </span> -->
                    <span class=" text-sm font-medium">مشکی</span>
                </div>
                <ul class="flex justify-center  pb-2">
                    <li class=" c-circle-variant__item ml-3">
                        <input type="radio" v-model="color" value="8" name="color" id="c-black"
                            class="js-variant-selector js-color-filter-item" data-title="بنفش" data-type="color">
                        <label for="c-black" class="js-circle-variant-color c-circle-variant c-circle-variant--color"
                            style="background: #000000">
                        </label>
                    </li>
                    <li class=" c-circle-variant__item ml-3">
                        <input type="radio" v-model="color" value="2" name="color" id="C33030"
                            class="js-variant-selector js-color-filter-item" data-title="بنفش" data-type="color">
                        <label for="C33030" class="js-circle-variant-color c-circle-variant c-circle-variant--color"
                            style="background: #C33030">
                        </label>
                    </li>
                    <li class=" c-circle-variant__item ml-3">
                        <input type="radio" v-model="color" value="1" name="color" id="4F4F4F"
                            class="js-variant-selector js-color-filter-item" data-title="بنفش" data-type="color">
                        <label for="4F4F4F" class="js-circle-variant-color c-circle-variant c-circle-variant--color"
                            style="background: #4F4F4F">
                        </label>
                    </li>
                </ul>
            </section>


        </div>
        <div class="space-y-6 lg:hidden border p-4 rounded-xl">
            <a href="" class="w-full">
                <div class="seller-content flex items-center justify-between">
                    <div class="container-company-name">
                        <div class="wrapper-company-name"><span class="company-name-title"> فروشنده
                            </span> <span class="company_name">
                                فالکون
                            </span>
                        </div>
                    </div>
                    <div class="flex items-center"><span class="text-typo-lighter text-sm lg:mt-4">
                            عملکرد 3 از 5</span>

                        <hx-button icon variant="gray"
                            class="flex ml-2 mr-2 text-typo-lighter text-sm transition-all lg:hidden">
                            <hx-icon class="text-gray-500" icon="chevron-left"></hx-icon>
                        </hx-button>


                    </div>
                </div>

                <hx-button icon variant="gray" class="hidden  text-typo-lighter text-sm transition-all lg:flex">
                    <hx-icon class="text-gray-500" icon="chevron-left"></hx-icon>
                </hx-button>
            </a>

            <section class=" space-y-4">
                <div class="flex items-center">

                    <hx-button icon variant="gray">
                        <hx-icon class="text-gray-500" icon="shield"></hx-icon>
                    </hx-button>

                    <span class="text-typo text-xs font-medium mr-1"><span>گارانتی </span>
                        18 ماهه شرکتی</span>
                </div>
                <div class="flex items-center">
                    <hx-button icon variant="gray">
                        <hx-icon class="text-gray-500" icon="package"></hx-icon>
                    </hx-button>
                    <span class="text-typo text-xs font-medium mr-1">
                        آماده ارسال در انبار فالکون</span>
                </div>

            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const color = ref(null)

</script>

<style lang="scss" scoped>
.c-circle-variant__item input {
    display: none
}

.c-circle-variant--color {
    box-shadow: 0 0 0 .2rem rgba(0, 123, 255, .25);
    width: 25px;
    height: 25px;
    position: relative;
    color: #535353;
    font-size: 15px;
    border: 2px solid #e4e4e4;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    cursor: pointer
}

input[type=radio]:checked+.c-circle-variant--color {
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 50%) !important;
}
</style>