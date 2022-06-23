<template>
  <div>
    <div class="bg-white p-5 lg:shadow-design-base rounded-3xl">
      <h1 class="flex justify-start mb-6 text-typo text-xl">ورود</h1>
      <div class="w-full">
        <div>
          <div class="h-full">
            <form class="h-full space-y-6" @submit="sendCodeHandler">
              <template v-if="otp">
                <div class="block mb-4">
                  <div class="flex items-center justify-between mb-6">
                    <div class="text-typo-300 text-sm cursor-pointer">
                      {{ username }}
                    </div>
                    <div
                      class="text-primary text-sm cursor-pointer lg:mr-0"
                      @click="otp = false"
                    >
                      ویرایش شماره موبایل
                    </div>
                  </div>

                  <div>
                    <hx-otp :length="4" v-model="code"></hx-otp>
                  </div>
                </div>
              </template>

              <template v-else>
                <div class="block mb-4">
                  <hx-form-group label="شماره موبایل">
                    <hx-input type="text" v-model="username"></hx-input>
                  </hx-form-group>
                </div>
                <span class="text-justify lg:text-xs text-typo-400">
                  با ورود به ،
                  <a target="_blank" href="" class="cursor-pointer"
                    ><span class="text-link"> شرایط </span></a
                  >
                  و

                  <a target="_blank" href="" class="cursor-pointer"
                    ><span class="text-link"> قوانین حریم ‌خصوصی </span></a
                  >

                  آن را می‌پذیرید.
                </span>
              </template>

              <div
                class="border-gray-300 border lg:auth-content-reverse-padding"
              ></div>
              <div class="flex flex-col justify-between lg:items-center">
                <div class="w-full">
                  <hx-button type="submit" variant="primary" block
                    >ورود</hx-button
                  >
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
import { ref } from "vue";

const username = ref(null);

const code = ref(null);

const otp = ref(false);

const sendCodeHandler = (e: any) => {
  e.preventDefault();

  otp.value = true;
};
</script>

<style scoped></style>
