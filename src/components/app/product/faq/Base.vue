<template>
    <div>
        <section class="flex flex-col space-y-3 lg:items-center lg:space-y-0 lg:flex-row lg:space-x-reverse">
            <!---->
        </section>
        <div eager="">
            <section class="comments-container">
                <div class="hidden lg:block mb-4"><span class="p-detail-heading p-detail-heading-border">پرسش و
                        پاسخ</span></div>
                <section class="flex">
                    <!---->
                    <div class="w-full mt-1 lg:mt-0">
                        <div class="h-full">
                            <form class="h-full">
                                <div class="space-y-3 lg:space-y-3">
                                    <div class=""><label
                                            class="   text-right mb-1 leading-6 label-style text-typo-light">
                                            پرسش خود را مطرح کنید
                                            *
                                        </label>
                                        <div class="overflow-hidden relative min-content-height  rounded-xl  mt-1 ">
                                            <textarea inputmode="text" type="text" placeholder="بنویسید ..." value=""
                                                rows="3"
                                                class="block h-full w-full  outline-none  rounded-inherit  focus:border-primary  text-input-placeholder-black text-dark border border border-solid border-gray-300 focus:border-gray-600   transition shadow-sm disabled:opacity-50 pr-3  pl-3  pt-2  text-right  border-transparent focus:border-[initial] border-2 input-bg focus:bg-white input-styles"></textarea>
                                            <!---->
                                            <!---->
                                        </div>
                                        <!---->
                                    </div>
                                    <div
                                        class="flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center">
                                        <label
                                            class="notify-check flex justify-start items-center cursor-pointer "><span
                                                class="bg-transparent border-gray-400 w-5 h-5 border-2 mr-2 relative rounded-xs flex flex-shrink-0 justify-center items-center"><input
                                                    type="checkbox" class="absolute opacity-0 cursor-pointer" value="">
                                                <svg viewBox="0 0 20 20"
                                                    class="hidden w-4 h-4 text-white fill-current pointer-events-none">
                                                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"></path>
                                                </svg></span> <span class="mr-2 input-styles text-xs leading-5">
                                                هر زمان که پاسخی برای من ارسال شد,از طریق پیامک
                                                مطلعم کن.
                                            </span> </label> <button to="" type="submit"
                                            class="self-end lg:self-start t-btn-normal bg-primary hover:bg-primary t-btn-base  transition hover:-md text-white disabled:bg-gray-200 lg:lg:h-11 h-11.5 btn-md h-11.5 btn-sm  overflow-hidden flex justify-center items-center px-4 py-2  relative rounded-base border-1 focus:outline-none whitespace-nowrap w-min  whitespace-nowrap text-base lg:max-w-[14rem]">
                                            <!---->
                                            <!----> <span class=" text-sm font-extrabold"><span
                                                    class="text-white text-sm">
                                                    ثبت پرسش
                                                </span></span>
                                            <!---->
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="hidden" rounded="true" teleportto="end-of-body" bottomsheetmaxsize="md">
                            <div>
                                <div>
                                    <!---->
                                    <div
                                        class="transition-opacity fixed z-60 bottom-0 left-0 right-0 top-0 flex items-center justify-center opacity-0 w-0 h-0 overflow-hidden duration-300 ease-out">
                                        <div
                                            class="max-w-[25%] z-30  rounded shadow-design scrollbar-sm max-h-full overflow-y-auto overflow-hidden scrollbar-sm bg-white w-max  w-0 h-0 overflow-hidden">
                                            <div>
                                                <!---->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!---->
                </section>
                <div class="flex w-full items-start">
                    <!---->
                    <div class="flex flex-col flex-grow" style="display: none;">
                        <section class="flex w-full lg:items-center mb-4 mr-4">
                            <div class="flex item-center justify-between"><span
                                    class="block p-detail-heading p-detail-heading-border">پرسش
                                    های کاربران</span>
                                <!---->
                            </div>
                            <!---->
                        </section>
                        <div>
                            <div class="lg:mr-4 flex-grow gap-4 grid grid-cols-1">
                                <!---->
                                <div>
                                    <div class="v-portal" style="display: none;"></div>
                                    <div class="v-portal" style="display: none;"></div>
                                </div>
                                <!---->
                            </div>
                            <div class="rounded bg-white vue-portal-target">
                                <div class="w-full overflow-x-auto t-pagination text-typo-light lg:block"
                                    style="display: none;" pagecount="0" currentpage="1">
                                    <section class="flex justify-between  py-3 text-gray-700">

                                    </section>
                                </div>
                            </div>
                            <div class="vue-portal-target">
                                <div class="py-2 min-h-8 lg:hidden">
                                    <!---->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div class="hidden" rounded="true" teleportto="last-of-body" bottomsheetmaxsize="md">
            <div>
                <div>
                    <!---->
                    <div
                        class="transition-opacity fixed z-60 bottom-0 left-0 right-0 top-0 flex items-center justify-center opacity-0 w-0 h-0 overflow-hidden duration-300 ease-out">
                        <div
                            class="max-w-[75%] z-30  rounded shadow-design scrollbar-sm max-h-full overflow-y-auto overflow-hidden scrollbar-sm bg-white w-max  w-0 h-0 overflow-hidden">
                            <div>
                                <!---->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
</style>