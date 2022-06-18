<template>
    <div class="mt-16">
        <section class="flex flex-col space-y-3 lg:items-center lg:space-y-0 lg:flex-row lg:space-x-reverse">

        </section>
        <div eager="">
            <section class="comments-container">

                <section class="flex lg:hidden lg:px-[3.375rem]">
                    <div class="lg:w-[5.56rem] lg:min-w-[5.56rem]"><i color="#666"
                            class="question-icon lg:mt-8 lg:ml-4 material-icons t-icon-help_outline-24px "></i>
                    </div>
                    <div class="w-full mt-1 lg:mt-0">
                        <div class="h-full">
                            <form class="h-full">
                                <div class="space-y-3 lg:space-y-3">

                                    <hx-form-group label="پرسش خود را مطرح کنید">
                                        <hx-form-textarea placeholder="بنویسید ..."></hx-form-textarea>
                                    </hx-form-group>

                                    <div
                                        class="flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center">
                                        <hx-button bock>ثبت پرسش</hx-button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="hidden" teleportto="end-of-body" bottomsheetmaxsize="md">
                            <div>
                                <div>

                                    <div
                                        class="transition-opacity fixed z-60 bottom-0 left-0 right-0 top-0 flex items-center justify-center opacity-0 w-0 h-0 overflow-hidden duration-300 ease-out">
                                        <div
                                            class="max-w-[25%] z-30  rounded-xl shadow-design scrollbar-sm max-h-full overflow-y-auto overflow-hidden scrollbar-sm bg-white w-max  w-0 h-0 overflow-hidden">
                                            <div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-[5.56rem] lg:min-w-[5.56rem]"></div>
                </section>
                <div class="flex w-full items-start">
                    <section
                        class="hidden border border-gray-300 rounded-xl p-4 lg:flex lg:flex-col sticky min-w-[18.75rem] max-w-[18.75rem] lg:top-24 lg:left-0 z-10">
                        <div class="w-full mt-1 lg:mt-0">
                            <div class="h-full">
                                <form class="h-full">
                                    <div class="space-y-3 lg:space-y-3">
                                        <hx-form-group label="پرسش خود را مطرح کنید">
                                            <form-textarea placeholder="بنویسید ..."></form-textarea>
                                        </hx-form-group>
                                        <div class="flex flex-col space-y-3 lg:space-y-4">
                                            <hx-button bock>ثبت پرسش</hx-button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="hidden" teleportto="end-of-body" bottomsheetmaxsize="md">
                                <div>
                                    <div>

                                        <div
                                            class="transition-opacity fixed z-60 bottom-0 left-0 right-0 top-0 flex items-center justify-center opacity-0 w-0 h-0 overflow-hidden duration-300 ease-out">
                                            <div
                                                class="max-w-[25%] z-30  rounded-xl shadow-design scrollbar-sm max-h-full overflow-y-auto overflow-hidden scrollbar-sm bg-white w-max  w-0 h-0 overflow-hidden">
                                                <div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="lg:w-[2rem] lg:min-w-[2rem]"></div>
                    </section>
                    <div class="flex flex-col flex-grow" style="">
                        <section class="flex w-full lg:items-center mb-4 mr-4">
                            <div class="t-row justify-between"><span
                                    class="block p-detail-heading p-detail-heading-border">پرسش های کاربران</span> <i
                                    color="#666" name="t-icon-sort-24px"
                                    class="block text-4xl text-typo-light ml-4 mr-4 lg:mr-32 material-icons t-icon-sort-24px "></i>
                            </div> <span
                                class="block cursor-pointer px-2 py-2 lg:py-2 lg:px-4 rounded-xl lg:flex lg:items-center lg:h-[3rem] text-sm">
                                جدیدترین ها
                            </span><span
                                class="block cursor-pointer px-2 py-2 lg:py-2 lg:px-4 rounded-xl lg:flex lg:items-center lg:h-[3rem] text-sm font-bold bg-gray-100 text-link transition-all duration-300 ease-out">
                                کاربردی ترین ها
                            </span>
                        </section>
                        <div>
                            <div class="lg:mr-4 flex-grow gap-4 grid grid-cols-1">


                                <div class="flex w-full">
                                    <div
                                        class="rounded-xl lg:rounded-xl bg-gray-100 lg:px-4 overflow-x-hidden lg:overflow-x-visible w-full">
                                        <div class="lg:flex lg:justify-evenly lg:w-full">
                                            <div class="t-row justify-center"><i color="#666"
                                                    name="t-icon-help_outline-24px"
                                                    class="question-icon material-icons t-icon-help_outline-24px "></i>
                                            </div>
                                            <section
                                                class="group flex items-end justify-between p-3 lg:px-6 lg:py-4 lg:flex-grow w-full lg:w-auto">
                                                <section class="space-y-2 w-full border-b pb-2 border-gray-300">
                                                    <div class="t-row justify-between lg:justify-start"><span
                                                            class="text-xs font-medium lg:ml-4">حسین
                                                            قنبرزاده
                                                            افروزی</span> <span
                                                            class="text-typo-light text-xs lg:text-sm">1401
                                                            خرداد 28</span></div>
                                                    <div class="flex justify-between items-end">
                                                        <p class="text-sm lg:font-medium">
                                                            سلام وقت بخیر.با چه گارانتی ای ارسال میشه؟
                                                        </p>
                                                        <section
                                                            class="hidden lg:flex lg:items-center lg:justify-end text-typo-light group-hover:text-link lg:w-max lg:whitespace-nowrap">
                                                            <i color="#666" name="t-icon-reply_black_24dp"
                                                                class="text-3xl ml-4 transition-all opacity-0 group-hover:opacity-100 material-icons t-icon-reply_black_24dp "></i>
                                                            <span class="text-xs font-medium cursor-pointer">پاسخ
                                                                به این پرسش</span>
                                                        </section>
                                                    </div>
                                                </section>
                                            </section>
                                            <div></div>
                                        </div>

                                        <div class="flex mb-3">
                                            <div
                                                class="hidden lg:flex items-center justify-center lg:min-w-[5.56rem] lg:w-[5.56rem] text-sm text-typo-light">
                                                پاسخ
                                            </div>
                                            <div
                                                class="flex w-full px-3 py-3 lg:p-6 rounded-xl h-full lg:flex-col justify-between bg-gray-200 border-b lg:border-none mx-4 lg:mx-0 lg:flex-grow border-none">
                                                <i color="#666" name="t-icon-reply_black_24dp"
                                                    class="text-3xl ml-4 text-typo-lighter lg:hidden material-icons t-icon-reply_black_24dp "></i>
                                                <section
                                                    class="space-y-3 lg:space-y-5 w-full h-full flex-col justify-between">
                                                    <div class="t-row justify-between lg:justify-start"><span
                                                            class="text-sm lg:font-medium lg:ml-4">پشتیبانی
                                                            مبیت</span> <span
                                                            class="text-typo-light text-xs lg:text-sm">1401
                                                            خرداد 28</span></div>
                                                    <div
                                                        class="flex flex-col items-end space-y-3 lg:space-y-0 lg:flex-row lg:justify-between">
                                                        <p class="block w-full text-sm lg:font-medium">
                                                            دوست خوب مبیت سلام،گارانتی ها بصورت رندم ارسال میشود و همه ی
                                                            گارانتی های طرح قرارداد،جز معتبرترین گارانتی های کشور است.
                                                        </p>
                                                        <section
                                                            class="t-row transition-opacity text-typo-light space-x-reverse lg:space-x-reverse space-x-4 lg:space-x-5 mr-1">
                                                            <div class="t-row cursor-pointer space-x-reverse space-x-3">
                                                                <span>0</span> <i color="#666"
                                                                    name="t-icon-thumb_down_black_24dp"
                                                                    class="text-lg material-icons t-icon-thumb_down_black_24dp "></i>
                                                            </div>
                                                            <div class="t-row cursor-pointer space-x-reverse space-x-3">
                                                                <span>0</span> <i color="#666"
                                                                    name="t-icon-thumb_down_black_-1"
                                                                    class="text-lg material-icons t-icon-thumb_down_black_-1 "></i>
                                                            </div>
                                                        </section>
                                                    </div>
                                                </section>
                                            </div>
                                        </div>
                                        <div class="t-flex-center py-4 lg:hidden text-link">
                                            <i color="#666" name="t-icon-reply_black_24dp"
                                                class="text-xl ml-4 material-icons t-icon-reply_black_24dp "></i>
                                            <div>پاسخ شما</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="v-portal" style="display: none;"></div>
                                    <div class="v-portal" style="display: none;"></div>
                                </div>

                            </div>
                            <div class="rounded-xl bg-white vue-portal-target">
                                <div class="w-full overflow-x-auto t-pagination text-typo-light lg:block" style=""
                                    pagecount="1" currentpage="1">
                                    <section class="flex justify-between  py-3 text-gray-700">

                                    </section>
                                </div>
                            </div>
                            <div class="vue-portal-target"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div class="hidden" teleportto="last-of-body" bottomsheetmaxsize="md">
            <div>
                <div>

                    <div
                        class="transition-opacity fixed z-60 bottom-0 left-0 right-0 top-0 flex items-center justify-center opacity-0 w-0 h-0 overflow-hidden duration-300 ease-out">
                        <div
                            class="max-w-[75%] z-30  rounded-xl shadow-design scrollbar-sm max-h-full overflow-y-auto overflow-hidden scrollbar-sm bg-white w-max  w-0 h-0 overflow-hidden">
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import FormTextarea from '@/components/base/form/textarea/textarea.vue';




</script>

<style scoped>
</style>