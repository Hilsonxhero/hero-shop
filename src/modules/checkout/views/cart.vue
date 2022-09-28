<template>
  <div class="container my-12">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-12 lg:col-span-9">
        <div class="border rounded-xl">
          <div
            class="p-5 border-b-2"
            v-for="(item, index) in cart?.cart_items"
            :key="index"
          >
            <div class="grid grid-cols-12 gap-2 lg: gap-4">
              <div class="col-span-4 lg:col-span-2">
                <router-link
                  :to="{
                    name: 'product detail',
                    params: { id: item?.product.id, slug: item?.product.slug },
                  }"
                >
                  <div class="h-28 w-28">
                    <img
                      class="object-contain w-full"
                      :src="item?.product.media?.thumb"
                      alt=""
                    />
                  </div>
                </router-link>
              </div>

              <div class="col-span-8 lg:col-span-10">
                <h4 class="text-gray-700 text-sm lg:text-xl">
                  {{ item?.product.title_fa }}
                </h4>

                <div class="flex flex-col lg:flex-row lg:items-center my-4">
                  <div
                    class="flex items-center lg:mr-2"
                    v-for="(combination, index) in item?.variant?.combinations"
                  >
                    <template v-if="combination.type == 'color'">
                      <span
                        class="w-6 h-6 lg:w-5 lg:h-5 rounded-[50%]"
                        :style="`background: ${combination.value}`"
                      ></span>
                    </template>
                    <span class="mr-2 text-gray-500 text-sm">{{
                      combination.label
                    }}</span>
                  </div>

                  <div class="flex items-center lg:mr-2">
                    <span class="">
                      <hx-icon
                        class="text-gray-500 w-6 h-6 lg:w-6 lg:h-6"
                        icon="shield"
                      ></hx-icon>
                    </span>
                    <span class="mr-2 text-gray-500 text-sm">
                      {{ item?.variant.warranty?.title }}
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

                  <div class="flex items-center lg:mr-2">
                    <span class="">
                      <hx-icon
                        class="text-gray-500 w-6 h-6 lg:w-6 lg:h-6"
                        icon="user"
                      ></hx-icon>
                    </span>
                    <span class="mr-2 text-gray-500 text-sm">
                      {{ item?.variant.shipment?.title }}
                    </span>
                  </div>
                </div>
                <div class="flex justify-between items-center">
                  <div></div>

                  <div class="flex items-center">
                    <Counter
                      :disabled="item.disabled"
                      :value="item.quantity"
                      @increment="handleIncrement(item)"
                      @decrement="handleDecrement(item)"
                      @delete="handleDelete(item)"
                    />

                    <div class="min-w-[10rem]">
                      {{ $filters.separate(item?.variant.price) }}

                      تومان
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between py-6 px-4">
            <div class="flex items-center">
              <span class="ml-3">
                {{ store?.cart?.items_count }}
                کالا در سبد خرید
              </span>
              <span class="ml-3"> حذف تمامی آیتم ها </span>
            </div>
            <div class="">
              <span>قابل پرداخت : </span>
              <span>
                {{ $filters.separate(cart?.payable_price) }}
                تومان
              </span>
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
                <span>
                  {{ $filters.separate(cart?.rrp_price) }}
                  تومان</span
                >
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-600">تخفیف</span>
                <span class="text-red-500">
                  {{ $filters.separate(cart?.items_discount) }}
                  تومان</span
                >
              </div>
            </div>

            <div class="pt-6">
              <div class="flex items-center justify-between">
                <span class="text-gray-500">مبلغ قابل پرداخت</span>
                <span class="">
                  {{ $filters.separate(cart?.payable_price) }}
                  تومان</span
                >
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
import { ref, onMounted } from "vue";
import { useCartStore } from "@/modules/checkout";
import { storeToRefs } from "pinia";
import Counter from "@/components/common/counter.vue";

const store = useCartStore();
const loader = ref<any>(false);
const { cart } = storeToRefs(store);

const handleIncrement = async (variant) => {
  variant.disabled = true;
  const data = {
    variant_id: variant.variant.id,
  };
  await store.add(data);

  variant.disabled = false;
};
const handleDecrement = async (variant) => {
  variant.disabled = true;
  const data = {
    cart_item_id: variant.id,
    quantity: variant.quantity - 1,
  };
  await store.update(data);
  variant.disabled = false;
};
const handleDelete = async (variant) => {
  variant.disabled = true;
  await store.remove(variant.id);
  variant.disabled = false;
};

onMounted(async () => {
  await store.get();
});
</script>

<style scoped></style>
