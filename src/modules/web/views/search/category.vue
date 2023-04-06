<template>
  <div class="w-full relative container">
    <!-- <hx-skeleton animated :loading="loading">
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
        <div class="grid lg:grid-cols-9 gap-2 my-6">
          <div class="col-span-12 lg:col-span-2">
            <Filters
              :filters="filters"
              v-model="selected_filters"
              :features="features"
            />
          </div>
          <div class="col-span-12 lg:col-span-7">
            <Sort />
            <Products :products="products" />
          </div>
        </div>
      </template>
    </hx-skeleton> -->
    <!-- :class="[!loading ? 'grid' : 'hidden']" -->
    <div class="grid lg:grid-cols-9 gap-4 my-6">
      <div class="col-span-12 lg:col-span-2">
        <Filters
          :filters="filters"
          v-model="selected_filters"
          :features="features"
        />
      </div>
      <div class="col-span-12 lg:col-span-7">
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
              <Sort />
              <Products :products="products" />
            </div>
          </template>
        </hx-skeleton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck

import { ref, onMounted, watch } from "vue";
import Products from "@/components/app/search/products.vue";
import Filters from "@/components/app/search/filters.vue";
import Sort from "@/components/app/search/sort.vue";
import ApiService from "@/core/services/ApiService";
import { useRouter, useRoute } from "vue-router";

const filters = ref([]);
const products = ref([]);
const router = useRouter();
const route = useRoute();
const selected_features = ref([]);
const selected_filters = ref({
  features: [],
  available_stock: false,
  range: {
    min: 0,
    max: 1000000000,
    applied: false,
  },
});

const features = ref([]);

const loading = ref(true);

watch(
  () => selected_filters.value,
  (val, oldVal) => {
    fetchSearch();
  },
  { deep: true }
);

const fetchSearch = async () => {
  const params = new URLSearchParams();

  if (selected_filters.value?.features.length >= 1) {
    selected_filters.value?.features.forEach((item, index) => {
      item.values.forEach((value, valueIndex) => {
        params.append(`feature_id[${item.feature_id}][]`, value);
      });
    });
  }
  if (selected_filters.value.available_stock) {
    params.append(`available_stock`, 1);
  }
  if (selected_filters.value.range.applied) {
    params.append(`max_price`, selected_filters.value.range.max);
    params.append(`min_price`, selected_filters.value.range.min);
  }

  params.append(`category_slug`, route.params.category);

  loading.value = true;

  const { data } = await ApiService.query("search/products", {
    params: params,
  });
  loading.value = false;
  filters.value = data.data.features;
  features.value = filters.value.map((item, index) => {
    return { feature_id: item.id, values: [] };
  });
  products.value = data.data.products;

  // ApiService.query("search/products", {
  //   params: params,
  // }).then(({ data }) => {
  //   loading.value = false;
  //   filters.value = data.data.features;
  //   features.value = filters.value.map((item, index) => {
  //     return { feature_id: item.id, values: [] };
  //   });
  //   products.value = data.data.products;
  // });
};

onMounted(() => {
  fetchSearch();
  // ApiService.query("search/products", {
  //   params: { category_slug: route.params.category, q: route.query.q },
  // }).then(({ data }) => {
  //   filters.value = data.data.features;
  //   // filters.value.map((item, index) => {
  //   //   features.value.push({ feature_id: item.id, values: [] });
  //   // });
  //   features.value = filters.value.map((item, index) => {
  //     return { feature_id: item.id, values: [] };
  //   });
  //   products.value = data.data.products;
  //   loading.value = false;
  // });
});
</script>

<style scoped></style>
