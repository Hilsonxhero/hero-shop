<template>
  <div class="container">
    <section
      class="relative overflow-hidden rounded-xl my-3 promotion-module__section"
    >
      <div class="container">
        <div
          class="flex flex-col justify-center items-center py-[120px] relative z-10"
        >
          <h2 class="text-3xl font-normal promotion-module__head">
            محصولات شگفت انگیز
          </h2>
          <p class="text-xs mt-2 text-center promotion-module__content">
            انواع های شگفت انگیز های مختلف رو میتونی اینجا پیدا کنی ! :)
          </p>
          <!-- <div class="mt-3">
            <Countdown
              class="text-4xl font-normal heading-color-gradiernt"
              :date="discount_expire"
            />
          </div> -->
        </div>
        <img
          class="absolute left-[20%] top-[50%] right-auto bottom-auto max-w-full w-[60px] lg:w-[130px] z-10"
          src="/media/promotion/05.png"
          alt=""
        />
        <img
          class="absolute left-auto top-[55%] right-[25%] bottom-auto max-w-full w-[60px] lg:w-[130px] promotion-vector-rotate z-10"
          src="/media/promotion/05.png"
          alt=""
        />
        <!-- <img
          class="absolute left-[16%] -top-[45%] right-auto bottom-auto max-w-full h-full"
          src="/media/promotion/01.png"
          alt=""
        />
        <img
          class="absolute left-[0%] top-auto right-auto bottom-[0%] max-w-full h-full"
          src="/media/promotion/02.png"
          alt=""
        />
        <img
          class="absolute left-auto top-[0%] right-[0%] bottom-auto max-w-full h-full"
          src="/media/promotion/04.png"
          alt=""
        /> -->
        <div class="flex items-center overflow-x-auto my-3 z-10 relative pb-2">
          <div class="pr-3 cursor-pointer">
            <div
              class="whitespace-nowrap cursor-pointer"
              :class="{ 'heading-color-gradiernt': !selected_category }"
              @click="handleSetAllCategories()"
            >
              همه دسته بندی ها
            </div>
          </div>

          <div
            class="pr-3 cursor-pointer"
            v-for="(category, index) in categories"
            :key="index"
            @click="handleChangeCategory(category)"
          >
            <div
              class="whitespace-nowrap cursor-pointer"
              :class="{
                'heading-color-gradiernt': selected_category == category.id,
              }"
            >
              {{ category.title }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <div clss="my-4">
      <hx-skeleton animated :loading="loading">
        <template #template>
          <hx-skeleton-item variant="card"></hx-skeleton-item>
          <hx-skeleton-item variant="card"></hx-skeleton-item>
          <hx-skeleton-item variant="card"></hx-skeleton-item>
          <hx-skeleton-item variant="card"></hx-skeleton-item>
          <hx-skeleton-item variant="card"></hx-skeleton-item>
          <hx-skeleton-item variant="card"></hx-skeleton-item>
          <hx-skeleton-item variant="card"></hx-skeleton-item>
          <hx-skeleton-item variant="card"></hx-skeleton-item>
        </template>
        <template #default>
          <div>
            <section
              class="grid grid-cols-12 gap-2"
              v-infinite-scroll="loadProducts"
            >
              <div
                class="col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2"
                v-for="(product, index) in products"
                :key="index"
              >
                <product :product="product"></product>
              </div>
            </section>
          </div>
        </template>
      </hx-skeleton>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck
import Countdown from "@/components/common/countdown.vue";
import { onMounted, ref } from "vue";
import Product from "@/components/app/main/promotion/product.vue";
import ApiService from "@/core/services/ApiService";
import { fa } from "@/core/locale";

const discount_expire = ref(9000 * 1000);
const products = ref([]);
const categories = ref([]);
const selected_category = ref(null);
const pager = ref({
  current_page: 0,
});
const paginate = ref({});
const must_fetch = ref(true);
const loading = ref(true);

const handleSetAllCategories = () => {
  selected_category.value = null;
  must_fetch.value = true;
  products.value = [];
  pager.value.current_page = 0;
  loadProducts();
};

const handleChangeCategory = (category) => {
  selected_category.value = category.id;
  must_fetch.value = true;
  products.value = [];
  pager.value.current_page = 0;
  loadProducts();
};

const loadProducts = () => {
  if (must_fetch.value) {
    const params = new URLSearchParams();

    pager.value.current_page = +pager.value.current_page + 1;

    if (selected_category.value) {
      params.append(`category_id`, selected_category.value);
    }

    params.append(`page`, +pager.value?.current_page ?? 1);
    loading.value = true;
    ApiService.query("promotion/products", {
      params: params,
    }).then(({ data }) => {
      data.data.products.map((item, index) => {
        products.value.push(item);
      });
      loading.value = false;
      pager.value = data.data.pager;
      categories.value = data.data.categories;
      if (+pager.value.current_page == +pager.value.pages) {
        must_fetch.value = false;
      }
    });
  }
};

onMounted(() => {
  loadProducts();
});
</script>

<style scoped></style>
