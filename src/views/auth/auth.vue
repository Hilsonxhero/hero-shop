<template>
    <div>
        <div class="bg-white p-5 lg:shadow-design-base rounded-3xl">
            <h1 class="flex justify-start mb-6 text-typo text-xl font-extrabold">
                ورود به
            </h1>
            <div class="w-full">
                <div>
                    <div data-name="form-container" class="h-full">
                        <form class="h-full space-y-4">

                            <div>

                                <hx-form-group label="شماره موبایل">
                                    <hx-form-input type="text"></hx-form-input>
                                </hx-form-group>

                            </div>
                            <span class="text-justify  lg:text-xs text-typo-400">
                                با ورود به ،
                                <a target="_blank" href="/page/terms-of-use" class="cursor-pointer"><span
                                        class="text-link">
                                        شرایط </span></a>
                                و

                                <a target="_blank" href="/page/privacy-policy" class="cursor-pointer"><span
                                        class="text-link">
                                        قوانین حریم ‌خصوصی </span></a>

                                آن را می‌پذیرید.
                            </span>
                            <div class="border-gray-300 border lg:auth-content-reverse-padding">
                            </div>
                            <div class="flex flex-col justify-between lg:items-center">
                                <div class="w-full">
                                    <hx-button variant="primary" block>ورود</hx-button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import HxFormGroup from '@/components/base/form/Group.vue';
import HxFormInput from '@/components/base/form/input/Input.vue';

</script>

<style scoped>
</style>