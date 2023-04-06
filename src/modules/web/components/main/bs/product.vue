<template>
  <div class="hx-product__item">
    <div class="relative overflow-hidden">
      <div class="flex justify-between"></div>
      <img
        class="w-full h-[150px] object-contain"
        :src="product.media.thumb"
        alt=""
      />

      <div class="flex justify-between pb-2 px-2 w-full lg:pb-0">
        <div
          class="flex items-center p-2 max-w-max h-5 bg-gray-300 space-x-1 space-x-reverse rounded-[0.375rem]"
        >
          <div
            class="mr-auto w-[0.375rem] h-[0.375rem] rounded-full"
            style="background-color: #000000"
          ></div>
          <div
            class="mr-auto w-[0.375rem] h-[0.375rem] rounded-full"
            style="background-color: #fff"
          ></div>
        </div>
      </div>
    </div>

    <div class="mt-3">
      <router-link
        :to="{
          name: 'product detail',
          params: { id: product.id, slug: product.slug },
        }"
      >
        <h2 class="ellipsis-2">
          {{ product.title_fa }}
        </h2>
      </router-link>
    </div>

    <div class="flex flex-col items-center">
      <div class="mt-2 text-gray-500">
        <span class="">{{ product.default_variant.selling_price }}</span>
        <span class="mr-1">تومان</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck
const props = defineProps({
  product: {
    type: Object,
  },
});
</script>

<style lang="scss" scoped>
.hx-product__item {
  @apply bg-white shadow-md flex flex-col items-center rounded-md p-4 relative;
}

.t-percent {
  height: 1.75rem;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  border-radius: 0.375rem;
  border-width: 2px;
  border-color: rgba(255, 255, 255, 1);
  background-color: rgba(255, 106, 106, 1);
  padding-left: 0.25rem;
  padding-right: 0.5rem;
  color: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
</style>
