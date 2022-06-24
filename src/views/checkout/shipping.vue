<template>
  <div class="container my-12">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-12 lg:col-span-9">
        <div class="border rounded-xl mb-4">
          <div class="p-5">
            <h2 class="text-xl mb-6">آدرس تحویل سفارش</h2>

            <div class="flex items-center justify-between">
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

              <div>
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

                      <!-- <label
                        class="flex item border-b py-4 cursor-pointer"
                        v-for="(item, index) in 3"
                      >
                        <input class="ml-2 mt-1" type="radio" name="address" />
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
                      </label> -->
                    </div>
                  </div>
                </hx-modal>
              </div>
            </div>
          </div>
        </div>
        <div class="border rounded-xl">
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
                <div class="flex items-center">
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
                    class="flex flex-col ml-2"
                    v-for="(item, index) in 3"
                    :key="index"
                  >
                    <router-link
                      class="lg:w-20 lg:h-2w-20 relative border rounded-xl p-2"
                      to="/"
                    >
                      <img
                        class="object-contain"
                        src="/media/products/11.jpg"
                        alt=""
                      />

                      <div
                        class="flex items-center justify-center text-sm text-gray-500"
                      >
                        <span>2</span>
                      </div>
                    </router-link>
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

const AddressModal = ref(false);
const www = ref(1);

const handleAddressModal = () => {
  AddressModal.value = true;
};
</script>

<style scoped></style>
