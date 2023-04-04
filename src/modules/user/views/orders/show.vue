<template>
  <div class="container">
    <hx-skeleton animated :loading="loading">
      <template #template>
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-6">
            <hx-skeleton-item variant="card"></hx-skeleton-item>
          </div>
          <div class="col-span-6">
            <hx-skeleton-item variant="card"></hx-skeleton-item>
          </div>
        </div>
      </template>
      <template #default>
        <div class="border rounded-xl">
          <div
            class="flex flex-wrap items-center justify-between border-b border-grat-600 p-3"
          >
            <div class="flex items-center">
              <hx-button
                icon
                variant="gray"
                :to="{
                  name: 'user profile orders',
                }"
              >
                <hx-icon class="text-gray-500 w-5 h-5" icon="arrow-right-av">
                </hx-icon>
              </hx-button>
              <h5 class="lg:text-xl mr-1">جزئیات سفارش</h5>
            </div>

            <div>
              <div class="flex items-center cursor-pointer">
                <hx-icon
                  class="text-blue-500 w-4 h-4 lg:w-5 lg:h-5"
                  icon="archive-book"
                >
                </hx-icon>
                <span class="text-xs lg:text-base mr-1 text-blue-600">
                  مشاهده فاکتور</span
                >
              </div>
            </div>
          </div>

          <div class="p-3 border-b border-grat-600 mb-3">
            <div
              class="flex flex-wrap space-y-2 lg:space-y-0 justify-start items-start space-x-reverse lg:space-x-2 pb-3"
            >
              <div class="flex items-center">
                <div class="text-gray-400">تاریخ ثبت سفارش</div>
                <div class="font-semibold text-gray-700 mr-1">
                  {{ order.create_at }}
                </div>
              </div>
              <div class="flex items-center">
                <div class="text-gray-400">کد پیگیری سفارش</div>
                <div class="font-semibold text-gray-700 mr-1">
                  {{ order.reference_code }}
                </div>
              </div>
            </div>

            <div
              class="flex flex-wrap space-y-2 lg:space-y-0 justify-start items-start space-x-reverse lg:space-x-2"
            >
              <div class="flex items-center">
                <div class="text-gray-400">تحویل گیرنده</div>
                <div class="font-semibold text-gray-700 mr-1">
                  {{ order.user?.username }}
                </div>
              </div>
              <div class="flex items-center">
                <div class="text-gray-400">شماره موبایل</div>
                <div class="font-semibold text-gray-700 mr-1">
                  {{ order.user?.phone }}
                </div>
              </div>

              <div class="flex items-center mr-2">
                <div class="text-gray-400">آدرس</div>
                <div class="font-semibold text-gray-700 mr-1">
                  {{ order.address?.address }}
                </div>
              </div>
            </div>
          </div>
          <div class="p-3 border-b border-grat-600 mb-3">
            <div
              class="flex flex-wrap justify-start items-start space-x-reverse"
            >
              <div class="flex items-center ml-2">
                <div class="text-gray-400">مبلغ</div>
                <div class="font-semibold text-gray-700 mr-1">
                  {{ $filters.separate(order.price.payable_price) }}
                </div>
              </div>
              <div class="flex items-center ml-2">
                <div class="text-gray-400">سود شما از خرید</div>
                <div class="font-semibold text-gray-700 mr-1">
                  {{ $filters.separate(order.price.payable_price) }}
                </div>
              </div>

              <div class="flex items-center ml-2">
                <div class="text-gray-400">نوع پرداخت</div>
                <div class="font-semibold text-gray-700 mr-1">
                  {{ order?.payment_method?.title }}
                </div>
              </div>
            </div>
          </div>

          <div class="p-3">
            <div
              class="border rounded-lg p-3 mb-3"
              v-for="(shipment, index) in order.shipments"
              :key="index"
            >
              <div class="mb-3">
                <div class="flex items-center">
                  <div class="ml-4">
                    مرسوله {{ index + 1 }} از {{ order.shipments.length }}
                  </div>
                  <div>{{ shipment.shipment?.title }}</div>
                </div>
              </div>
              <div class="mb-3">
                <div
                  class="flex justify-start items-start space-x-reverse space-x-2"
                >
                  <div class="flex items-center">
                    <div class="text-gray-400">زمان تحویل</div>
                    <div class="font-semibold text-gray-700 mr-1">
                      {{ shipment.date }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <div class="flex flex-wrap items-center justify-between">
                  <div
                    class="flex flex-wrap justify-start items-start space-x-reverse"
                  >
                    <div class="flex items-center ml-2">
                      <div class="text-gray-400">هزینه ارسال</div>
                      <div class="font-semibold text-gray-700 mr-1">
                        <span v-if="shipment.shipment?.shipping_cost == 0"
                          >رایگان</span
                        >
                        <span v-else>{{
                          $filters.separate(shipment.shipment?.shipping_cost)
                        }}</span>
                      </div>
                    </div>
                    <div class="flex items-center ml-2">
                      <div class="text-gray-400">مبلغ مرسوله</div>
                      <div class="font-semibold text-gray-700 mr-1">
                        {{ $filters.separate(shipment.order_items_cost) }}
                      </div>
                    </div>
                  </div>
                  <div class="flex-grow mt-2 lg:mt-0">
                    <div class="flex items-center">
                      <div class="text-gray-400">کد پیگیری مرسوله</div>
                      <div class="font-semibold text-gray-700 mr-1">
                        ۱۰۲۳۵۴۸۸۶
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                v-for="(product, index) in shipment.order_items"
                :key="index"
              >
                <div class="grid grid-cols-12 gap-2 lg:gap-4 my-5">
                  <div class="col-span-4 lg:col-span-2">
                    <router-link
                      :to="{
                        name: 'product detail',
                        params: {
                          id: product?.product.id,
                          slug: product?.product.slug,
                        },
                      }"
                    >
                      <div class="lg:h-20 lg:w-20">
                        <img
                          class="object-contain w-full"
                          :src="product?.product.media?.thumb"
                          alt=""
                        />
                      </div>
                    </router-link>
                  </div>

                  <div class="col-span-8 lg:col-span-10">
                    <h4 class="text-gray-700 text-sm">
                      {{ product?.product.title_fa }}
                    </h4>

                    <div class="flex flex-col lg:flex-row lg:items-center my-4">
                      <div
                        class="flex items-center lg:mr-2"
                        v-for="(combination, index) in product?.variant
                          ?.combinations"
                      >
                        <hx-icon
                          icon="cube-scan-bulk"
                          class="w-6 h-6"
                        ></hx-icon>

                        <span class="mr-2 text-gray-500 text-sm">{{
                          combination.label
                        }}</span>
                      </div>

                      <div class="flex items-center lg:mr-2">
                        <span class="">
                          <hx-icon
                            class="text-gray-500 w-6 h-6 lg:w-6 lg:h-6"
                            icon="shield-tick"
                          ></hx-icon>
                        </span>
                        <span class="mr-2 text-gray-500 text-sm">
                          {{ product?.variant?.warranty?.title }}
                        </span>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </hx-skeleton>
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck

import { onMounted, ref, watch } from "vue";
import ApiService from "@/core/services/ApiService";
import { useRoute } from "vue-router";
const order = ref<any>({});
const tabs = ref([]);
const loading = ref<boolean>(true);
const order_id = ref(null);
const route = useRoute();
const html2Pdf = ref(null);

const fetchOrder = () => {
  loading.value = true;

  ApiService.get(`user/orders/${order_id.value}`).then(({ data }) => {
    order.value = data.data;
    loading.value = false;
  });
};

onMounted(() => {
  order_id.value = route.params.id;
  // fetchOrders();
  fetchOrder();
});
</script>

<style scoped></style>
