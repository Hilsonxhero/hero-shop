<template>
  <div class="container my-12">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-12 lg:col-span-9">
        <div class="border rounded-xl">
          <div class="p-5 border-b-2" v-for="(item, index) in 3">
            <div class="grid grid-cols-12 gap-2 lg:gap-4">
              <div class="col-span-4 lg:col-span-2">
                <a href="">
                  <div class="h-28 w-28">
                    <img
                      class="object-contain w-full"
                      src="/media/products/11.jpg"
                      alt=""
                    />
                  </div>
                </a>
              </div>

              <div class="col-span-8 lg:col-span-10">
                <h4 class="text-gray-700 text-sm lg:text-xl">
                  لپ تاپ 13 اینچی اپل مدل MacBook Pro MYD82 2020 همراه با تاچ
                  بار
                </h4>

                <div class="flex flex-col lg:flex-row lg:items-center my-4">
                  <div class="flex items-center lg:mr-2">
                    <span
                      class="w-6 h-6 lg:w-5 lg:h-5 rounded-[50%]"
                      style="background: #333"
                    ></span>
                    <span class="mr-2 text-gray-500 text-sm">مشکی</span>
                  </div>

                  <div class="flex items-center lg:mr-2">
                    <span class="">
                      <hx-icon
                        class="text-gray-500 w-6 h-6 lg:w-6 lg:h-6"
                        icon="shield"
                      ></hx-icon>
                    </span>
                    <span class="mr-2 text-gray-500 text-sm">
                      ماهه یکپارچه (سازگار،آواژنگ،حامی،الماس...)</span
                    >
                  </div>

                  <div class="flex items-center lg:mr-2">
                    <span class="">
                      <hx-icon
                        class="text-gray-500 w-6 h-6 lg:w-6 lg:h-6"
                        icon="store"
                      ></hx-icon>
                    </span>
                    <span class="mr-2 text-gray-500 text-sm">فالکون</span>
                  </div>

                  <div class="flex items-center lg:mr-2">
                    <span class="">
                      <hx-icon
                        class="text-gray-500 w-6 h-6 lg:w-6 lg:h-6"
                        icon="user"
                      ></hx-icon>
                    </span>
                    <span class="mr-2 text-gray-500 text-sm"
                      >ارسال توسط فروشنده
                    </span>
                  </div>
                </div>
                <div class="flex justify-between items-center">
                  <div></div>

                  <div class="flex items-center">
                    <div class="flex items-center ml-10">
                      <div
                        class="border w-10 h-10 rounded-xl flex items-center justify-center text-2xl cursor-pointer text-link"
                        @click="increment"
                      >
                        <hx-icon
                          class="w-6 h-6 text-blue-500"
                          icon="plus"
                        ></hx-icon>
                      </div>
                      <div class="w-10 text-center">
                        <span class="number-picker-text">{{ counter }}</span>
                      </div>
                      <div
                        class="border w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer text-link"
                        @click="decrement"
                      >
                        <hx-icon
                          class="w-6 h-6 text-blue-500"
                          icon="minus"
                        ></hx-icon>
                      </div>
                    </div>

                    <div>24000000 تومان</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between py-6 px-4">
            <div class="flex items-center">
              <span class="ml-3">2 کالا در سبد خرید</span>
              <span class="ml-3"> حذف تمامی آیتم ها </span>
            </div>
            <div class="">
              <span>قابل پرداخت : </span>
              <span>41900000 تومان </span>
            </div>
          </div>
        </div>
      </div>
      <div class="relative col-span-12 lg:col-span-3">
        <div class="sticky top-20">
          <div class="border p-5 rounded-xl">
            <div class="text-gray-600 text-center mb-6">سفارش شما</div>
            <div class="flex flex-col space-y-6 border-b-2 pb-6">
              <div class="flex items-center justify-between">
                <span class="text-gray-600">مبلغ کالا ها</span>
                <span>425000000 تومان</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-600">تخفیف</span>
                <span class="text-red-500">1200000 تومان</span>
              </div>

              <div class="flex items-center justify-between">
                <span class="text-gray-600">مبلغ کل</span>
                <span class="">425000000 تومان</span>
              </div>
            </div>

            <div class="pt-6">
              <div class="flex items-center justify-between">
                <span class="text-gray-500">مبلغ قابل پرداخت</span>
                <span class="">425000000 تومان</span>
              </div>
              <div class="mt-6">
                <hx-button block>ادامه</hx-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const counter = ref(1);

const decrement = () => {
  counter.value === 1 ? false : (counter.value -= 1);
  // counter.value -= 1;
};

const increment = () => {
  counter.value += 1;
};
</script>

<style scoped></style>
