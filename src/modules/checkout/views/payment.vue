<template>
  <div class="container my-12">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-12 lg:col-span-9">
        <div
          class="bg-white shadow-lg lg:bg-transparent lg:shadow-transparent lg:border rounded-xl mb-4"
        >
          <div class="p-5">
            <h2 class="text-xl mb-6">انتخاب شیوه پرداخت</h2>

            <p class="text-gray-500 text-sm">
              روش مناسب را جهت پرداخت مبلغ سفارش انتخاب کنید
            </p>

            <div class="mt-6">
              <section
                v-for="(payment_method, index) in payment_methods"
                :key="index"
              >
                <hx-radio
                  class="flex items-center bg-blue-100 p-4 cursor-pointer rounded-xl"
                  :value="payment_method.id"
                  v-model="selected_method"
                  :label="payment_method.id"
                  name="payment_method"
                >
                  <div
                    class="flex flex-grow flex-wrap w-full items-center justify-between"
                  >
                    <h4 class="text-blue-600">{{ payment_method.title }}</h4>
                    <p class="text-sm text-gray-500 mr-2">
                      {{ payment_method.description }}
                    </p>
                    <hx-icon
                      class="text-blue-600 h-8 w-8 hidden lg:block mr-2"
                      icon="online-order"
                    ></hx-icon>
                  </div>
                </hx-radio>
              </section>
            </div>
          </div>
        </div>
        <div
          class="bg-white shadow-lg lg:bg-transparent lg:shadow-transparent lg:border rounded-xl"
        >
          <div class="flex items-center justify-between p-5">
            <div class="flex items-center">
              <span class="ml-2">
                <hx-icon class="text-red-600 h-7 w-7" icon="location"></hx-icon>
              </span>
              <span class="text-gray-6500">
                {{ address?.address }}
              </span>
            </div>
            <div class="flex items-center flex-wrap">
              <div class="flex items-center ml-3">
                <span class="ml-2">
                  <hx-icon
                    class="w-6 h-6 text-gray-500"
                    icon="envelope"
                  ></hx-icon>
                </span>
                <span>{{ address?.postal_code }}</span>
              </div>
              <div class="flex items-center ml-3">
                <span class="ml-2">
                  <hx-icon class="w-6 h-6 text-gray-500" icon="user"></hx-icon>
                </span>
                <span>{{ address?.username }}</span>
              </div>

              <div class="flex items-center ml-3">
                <span class="ml-2">
                  <hx-icon
                    class="w-6 h-6 text-gray-500"
                    icon="mobile"
                  ></hx-icon>
                </span>
                <span>{{ address?.mobile }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative col-span-12 lg:col-span-3">
        <div class="space-y-6 sticky top-20">
          <div class="">
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
                <div class="mt-6 hidden lg:block">
                  <hx-button @click="handlePayment" block
                    >پرداخت و تایید نهایی سفارش</hx-button
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="w-full lg:block">
            <div class="relative">
              <div class="relative w-full h-10 rounded-xl">
                <input
                  placeholder="کد تخفیف را وارد کنید"
                  type="text"
                  class="block w-full h-full outline-none text-right bg-gray-100 transition-all ease-out duration-200 pl-3 pr-12 text-sm rounded-inherit border-2 border-transparent focus:bg-white focus:border-blue-500"
                />

                <div
                  class="absolute inset-y-0 z-10 left-0 top-0 flex items-center justify-center w-16"
                >
                  <div>
                    <button type="submit" class="cursor-pointer">
                      <span class="text-link"> ثبت </span>
                    </button>
                    <button type="button" class="cursor-pointer hidden">
                      <span class="text-danger"> حذف </span>
                    </button>
                  </div>
                </div>

                <div
                  class="absolute inset-y-0 z-10 right-0 top-0 flex items-center justify-center w-16"
                >
                  <div>
                    <hx-icon
                      icon="gift"
                      class="w-6 h-6 text-gray-500"
                    ></hx-icon>
                  </div>
                </div>
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
            <hx-button block> پرداخت و تایید نهایی سفارش </hx-button>
          </section>
        </div>
      </section>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import ApiService from "@/core/services/ApiService";

const selected_method = ref(null);
const payment_methods = ref<Array<any>>([]);
const address = ref<any>({});

const handlePayment = () => {
  const formData = {
    payment_method: selected_method.value,
  };
  ApiService.post("payment", formData)
    .then(({ data }) => {
      window.location.replace(data.data);
    })
    .catch(() => {});
};

onMounted(() => {
  ApiService.get("payment")
    .then(({ data }) => {
      address.value = data.data.address;
      payment_methods.value = data.data.payment_methods;

      payment_methods.value.map((item) => {
        if (item.is_default) selected_method.value = item.id;
      });
    })
    .catch(() => {});
});
</script>

<style scoped></style>
