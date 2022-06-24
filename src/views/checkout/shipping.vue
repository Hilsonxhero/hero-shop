<template>
  <div class="container my-12">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-12 lg:col-span-9">
        <div
          class="bg-white shadow-lg lg:bg-transparent lg:shadow-transparent lg:border rounded-xl mb-4"
        >
          <div class="p-5">
            <h2 class="text-xl mb-6">آدرس تحویل سفارش</h2>

            <div
              class="flex flex-col lg:flex-row lg:items-center justify-between"
            >
              <div>
                <h5 class="text-gray-600">
                  استان فارس - شیراز - خ. بهشتی نرسیده به خ. ولیعصر جنوبی
                </h5>
                <div class="flex items-center">
                  <div class="ml-2">
                    <span class="text-sm text-gray-500 ml-2">کد پستی : </span>
                    <span class="text-sm">463232134</span>
                  </div>

                  <div class="">
                    <span class="text-gray-500 ml-2"> گیرنده : </span>
                    <span class="text-sm">امیرحسین وطن دوست</span>
                    <span class="mx-2">-</span>
                    <span class="text-sm">09010105397</span>
                  </div>
                </div>
              </div>

              <div class="mt-6 flex justify-end">
                <div
                  class="flex items-center text-blue-600 cursor-pointer"
                  @click="handleAddressModal"
                >
                  <span class="ml-2">تغییر آدرس</span>
                  <hx-icon class="w-5 h-5" icon="chevron-left"></hx-icon>
                </div>

                <hx-modal
                  :show="AddressModal"
                  title="تغییر آدرس"
                  @close="AddressModal = false"
                >
                  <div class="flex flex-col items-start">
                    <div class="p-2">
                      <hx-radio
                        class="flex border-b py-4 cursor-pointer"
                        name="www"
                        value="2"
                        v-model="www"
                        v-for="(item, index) in 3"
                      >
                        <div class="flex-grow">
                          <h6 class="text-right text-gray-600">
                            شیراز،خ. قصرالدشت، نرسیده به فلکه قصر الدشت
                          </h6>
                          <div class="flex flex-col space-y-4 mt-4">
                            <div class="flex items-center">
                              <span class="ml-2">
                                <hx-icon
                                  class="w-6 h-6 text-gray-500"
                                  icon="envelope"
                                ></hx-icon>
                              </span>

                              <span>34343434</span>
                            </div>

                            <div class="flex items-center">
                              <span class="ml-2">
                                <hx-icon
                                  class="w-6 h-6 text-gray-500"
                                  icon="mobile"
                                ></hx-icon>
                              </span>

                              <span>09013334444</span>
                            </div>

                            <div class="flex items-center">
                              <span class="ml-2">
                                <hx-icon
                                  class="w-6 h-6 text-gray-500"
                                  icon="user"
                                ></hx-icon>
                              </span>

                              <span>امیر</span>
                            </div>

                            <div class="flex items-center">
                              <span class="ml-2">
                                <hx-icon
                                  class="w-6 h-6 text-gray-500"
                                  icon="trip"
                                ></hx-icon>
                              </span>

                              <span>70</span>
                            </div>
                          </div>
                        </div>
                      </hx-radio>
                    </div>
                  </div>
                </hx-modal>
              </div>
            </div>
          </div>
        </div>
        <div
          class="bg-white shadow-lg lg:bg-transparent lg:shadow-transparent lg:border rounded-xl"
        >
          <div class="">
            <div class="border-b flex items-center justify-between p-5">
              <div>نحوه ارسال</div>
              <div class="text-gray-600">
                سفارش شما در 1 مرسوله ارسال خواهد شد
              </div>
            </div>

            <div class="p-5">
              <div
                class="border-b-2 last-of-type:border-transparent py-6"
                v-for="(item, index) in 2"
                :key="index"
              >
                <div class="flex flex-wrap items-center">
                  <div class="flex items-center ml-2">
                    <span class="ml-2">
                      <hx-icon
                        class="w-6 h-6 text-gray-500"
                        icon="package"
                      ></hx-icon>
                    </span>
                    <span class="text-sm text-gray-500"
                      >سفارش شما از طریق فالکون ارسال می شود</span
                    >
                  </div>

                  <div class="flex items-center ml-2">
                    <span class="text-sm text-gray-500">
                      مرسوله 1 (زمان تقریبی تحویل 3 تا 5 روز کاری)
                    </span>
                  </div>

                  <div class="flex items-center ml-2">
                    <span class="ml-2 text-sm">هزینه ارسال :</span>
                    <span class="text-sm text-gray-500"> رایگان </span>
                  </div>
                </div>

                <div class="flex flex-wrap items-center my-6">
                  <div
                    class="flex flex-col mb-3 ml-2 border rounded-xl"
                    v-for="(item, index) in 4"
                    :key="index"
                  >
                    <router-link
                      class="w-24 h-24 lg:w-20 lg:h-20 relative p-2"
                      to="/"
                    >
                      <img
                        class="object-contain h-full w-full"
                        src="/media/products/11.jpg"
                        alt=""
                      />
                    </router-link>
                    <!-- <div
                      class="lg:flex hidden items-center justify-center text-sm text-gray-500"
                    >
                      <span>2</span>
                    </div> -->
                  </div>
                </div>
              </div>
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
                <span class="text-gray-600">هزینه ارسال</span>
                <span class="">150000 تومان</span>
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

  <teleport to="body">
    <div class="sticky z-20 bottom-0 inset-x-0">
      <section
        class="px-4 py-3 bg-white shadow-design lg:px-0 lg:py-0 lg:shadow-none lg:bg-unset lg:hidden"
      >
        <div
          class="flex flex-row-reverse items-center justify-between lg:flex-col lg:items-start lg:justify-start lg:space-y-4"
        >
          <section class="flex">
            <div
              class="flex flex-col lg:space-y-4 lg:flex-col-reverse lg:space-y-reverse justify-evenly"
            >
              <span class="hidden text-sm font-medium lg:block">قیمت</span>
              <div>
                <span class="flex items-center font-bold">
                  <span
                    id="price"
                    class="text-base text-left min-w-[4.5rem] min-h-[1.625rem] font-bold leading-6 lg:text-xl"
                  >
                    55,600,000
                  </span>
                  <span class="font-normal text-sm leading-6 lg:text-sm mr-2"
                    >تومان</span
                  >
                </span>
              </div>
            </div>
          </section>
          <section class="w-full ml-3">
            <hx-button block> ادامه </hx-button>
          </section>
        </div>
      </section>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { ref } from "vue";

const AddressModal = ref(false);
const www = ref(1);

const handleAddressModal = () => {
  AddressModal.value = true;
};
</script>

<style scoped></style>
