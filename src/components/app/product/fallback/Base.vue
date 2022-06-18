<template>
    <div>
        <div eager="">
            <section class="feed-container lg:mt-[3.25rem]">
                <span class="block p-detail-heading p-detail-heading-border lg:mb-4">بازخورد
                    سفارش</span>
                <div>
                    <div class="gap-4 grid grid-cols-1">


                        <div class="lg:grid lg:grid-cols-2 lg:gap-4">
                            <div class="flex flex-col bg-gray-100 p-3 lg:p-4 rounded mb-3 lg:mb-0">
                                <div class="contents grid-cols-6 w-[95%]">
                                    <div class="flex item-center space-x-reverse space-x-3"><span
                                            class="text-xs text-typo-light">محمد
                                            عبداللهیان</span> <span
                                            class="rounded-full w-1.5 h-1.5 bg-typo-lighter"></span>
                                        <span class="text-typo-light text-xs">1401 خرداد
                                            06</span>
                                    </div>
                                    <p class="my-2 lg:my-0 h-full min-h-[3.75rem] lg:text-sm lg:font-medium">
                                        بسیار عالی وخوب
                                    </p>
                                </div>
                                <div class="whitespace-nowrap flex flex-col space-y-4">

                                    <section class="flex item-center"><span class="text-2xs text-typo-light">امتیاز به
                                            فالکون :
                                        </span>
                                        <div class="mr-2 flex item-center" style="color: rgb(55, 125, 255);">
                                            <span class="text-xs">فوق العاده</span>

                                        </div>
                                    </section>
                                </div>
                            </div>

                        </div>
                        <div>
                            <div class="v-portal" style="display: none;"></div>
                            <div class="v-portal" style="display: none;"></div>
                        </div>

                    </div>
                    <div class="rounded bg-white vue-portal-target">
                        <div class="w-full overflow-x-auto t-pagination text-typo-light lg:block" pagecount="1"
                            currentpage="1">
                        </div>
                    </div>
                    <div class="vue-portal-target"></div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
</style>