<template>
    <aside class="hidden mt-10 lg:sticky lg:top-24 lg:block lg:space-y-3 lg:mt-0">
        <div class="seller-container divide-y lg:divide-y-0 p-5 border-2 border-gray-100 flex flex-col rounded-xl">

            <div class="space-y-6">
                <a href="" class="flex items-center justify-between">
                    <div class="seller-content">
                        <div class="container-company-name">
                            <div class="wrapper-company-name"><span class="company-name-title"> فروشنده
                                </span> <span class="company_name">
                                    فالکون
                                </span></div>
                        </div>
                        <div class="flex items-center"><span class="text-typo-lighter text-sm lg:mt-4">
                                عملکرد 3 از 5</span>

                            <hx-button icon variant="gray"
                                class="flex ml-2 mr-2 text-typo-lighter text-sm transition-all lg:hidden">
                                <hx-icon class="text-gray-500" icon="chevron-left"></hx-icon>
                            </hx-button>


                        </div>
                    </div>

                    <hx-button icon variant="gray" class="hidden ml-2 text-typo-lighter text-sm transition-all lg:flex">
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
            <section class="hidden flex-col px-3 w-full border-b border-gray-300 lg:flex">
                <div class="flex item-center mb-4 pt-3 border-t"><span class="ml-1 text-typo-light text-sm">رنگ :
                    </span> <span class="min-w-[7rem] min-h-[1.52rem] text-sm font-medium">مشکی</span>
                </div>
                <section class="scrollbar-hidden flex item-center flex-wrap pb-2 px-3 border-b overflow-x-auto">
                    <span class="mb-2 ml-4 last:pl-3 lg:ml-3">
                        <label class="relative flex items-center cursor-pointer"><span
                                class="rounded-full flex flex-shrink-0 justify-center items-center w-0 h-0 "><input
                                    type="radio" class="absolute opacity-0 cursor-pointer checked:bg-primary" value="1">
                                <span class="w-[0.625rem] h-[0.625rem] rounded-full bg-white  hidden "></span></span>
                            <span title="مشکی"
                                class="flex items-center p-1  rounded-lg transition-all duration-100 lg:rounded-lg border border-primary">
                                <div class="w-7 h-7 rounded-lg" style="background-color: rgb(0, 0, 0);">
                                </div>
                            </span>
                        </label>
                    </span>
                </section>
            </section>
            <section class="flex flex-col px-3 pt-3">

                <section class="px-4 py-3 bg-white shadow-design lg:px-0 lg:py-0 lg:shadow-none lg:bg-unset">
                    <div
                        class="flex flex-row-reverse items-center justify-between lg:flex-col lg:items-start lg:justify-start lg:space-y-4">
                        <section class="flex w-full">
                            <div class="flex flex-col lg:flex-row items-center w-full justify-evenly">
                                <section class="flex-row-reverse justify-end flex item-center">

                                    <span
                                        class="flex items-center text-typo-light text-xs leading-6 text-typo-light line-through lg:text-base">
                                        <span class="min-w-[3.375rem] text-left leading-6">
                                            4,335,000
                                        </span>
                                    </span>

                                    <div class="ml-2">
                                        <hx-badge size="sm" variant="danger">
                                            5
                                            <hx-icon class="mr-2 text-white w-4 h-4" icon="percentage-square"></hx-icon>
                                        </hx-badge>
                                    </div>
                                </section>

                                <div><span class="flex items-center font-bold">
                                        <span id="price"
                                            class="text-base text-left min-w-[4.5rem] min-h-[1.625rem] font-bold leading-6 lg:text-xl">
                                            4,129,000
                                        </span> <span class="font-normal text-sm leading-6 lg:text-sm mr-2">تومان</span>
                                    </span></div>
                            </div>
                        </section>
                        <section class="w-full">
                            <hx-button block>
                                افزودن به سبد خرید
                            </hx-button>
                        </section>
                    </div>
                </section>

            </section>
        </div>


    </aside>
</template>

<script setup lang="ts">

</script>

<style scoped>
</style>