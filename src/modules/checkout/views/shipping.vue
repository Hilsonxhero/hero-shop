<template>
  <div class="container my-12">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-12 lg:col-span-9">
        <Address
          v-model="selected_address"
          :default-address="shipping?.default_address"
        />

        <div
          class="bg-white shadow-lg lg:bg-transparent lg:shadow-transparent lg:border rounded-xl"
        >
          <div class="">
            <div class="border-b flex items-center justify-between p-5">
              <div>نحوه ارسال</div>
              <div class="text-gray-600">
                سفارش شما در {{ shipping.packages_count }} مرسوله ارسال خواهد شد
              </div>
            </div>

            <div class="p-5">
              <shipping-item
                v-for="(item, index) in shipping.packages"
                :key="index"
                :package="item"
                :package-key="index"
                :package-number="index + 1"
                @change="onChangeHandler"
              ></shipping-item>
            </div>
          </div>
        </div>
      </div>
      <div class="relative col-span-12 lg:col-span-3">
        <div class="sticky top-36">
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
                <hx-button @click="handleShipping" block>ادامه</hx-button>
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
import ApiService from "@/core/services/ApiService";
import { ref } from "vue";

import ShippingItem from "@/modules/checkout/components/shipping/ShippingItem.vue";
import Address from "@/modules/checkout/components/shipping/Address.vue";
import { useRouter } from "vue-router";
const router = useRouter();

const shipping = ref<any>({});

const selected_address = ref<any>({});

const packages = ref<Array<any>>([]);

const onChangeHandler = (val) => {
  let selected = packages.value.find(
    (item, index) => item.delivery_id == val.delivery_id
  );
  selected.time_scope = val.time_scope;
};

const handleShipping = () => {
  const formData = {
    address_id: selected_address.value,
    packages: packages.value,
  };
  ApiService.post(`shipping`, formData).then(({ data }) => {
    if (data.success) {
      router.push({ name: "checkout payment" });
    }
  });
};

ApiService.get(`shipping`).then(({ data }) => {
  shipping.value = data.data;
  shipping.value.packages.map((item, index) => {
    packages.value.push({
      delivery_id: item.delivery_id,
    });
  });
});
</script>

<style scoped></style>
