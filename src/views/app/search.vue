<template>
  <div class="w-full relative container">
    <div class="grid lg:grid-cols-9 gap-4 my-6">
      <div class="col-span-12 lg:col-span-2">
        <Filters :filters="filters" />
      </div>
      <div class="col-span-12 lg:col-span-7">
        <Sort />
        <Products />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Products from "@/components/app/search/products.vue";
import Filters from "@/components/app/search/filters.vue";
import Sort from "@/components/app/search/sort.vue";

const activeName = ref("1");

const filters = ref({
  brands: {
    type: "checkbox",
    title: "برند",
    options: [
      {
        id: 33528,
        code: "general-luxe-it",
        title: "جنرال لوکس",
        title_en: "GENERAL LUXE",
        url: {
          uri: "/brand/general-luxe-it/",
        },
        visibility: true,

        is_premium: false,
      },
      {
        id: 719,
        code: "miscellaneous",
        title: "متفرقه",
        title_en: "Miscellaneous",
        url: {
          uri: "/brand/miscellaneous/",
        },
        visibility: true,

        is_premium: false,
      },
      {
        id: 21414,
        code: "blackview",
        title: "بلک ویو",
        title_en: "BLACKVIEW",
        url: {
          uri: "/brand/blackview/",
        },
        visibility: true,

        is_premium: false,
      },
      {
        id: 10920,
        code: "dox",
        title: "داکس",
        title_en: "DOX",
        url: {
          uri: "/brand/dox/",
        },
        visibility: true,
        is_premium: false,
      },
    ],
  },
  colors: {
    type: "checkbox",
    title: "رنگ",
    options: [
      {
        id: 1,
        title: "مشکی",
        hex_code: "#212121",
      },
      {
        id: 4,
        title: "آبی",
        hex_code: "#2196f3",
      },
      {
        id: 2,
        title: "سفید",
        hex_code: "#FFFFFF",
      },
      {
        id: 11,
        title: "خاکستری",
        hex_code: "#9E9E9E",
      },
      {
        id: 6,
        title: "سبز",
        hex_code: "#00e676",
      },
      {
        id: 12,
        title: "نقره ای",
        hex_code: "#dedede",
      },
    ],
  },

  has_selling_stock: {
    type: "switch",
    title: "فقط کالاهای موجود",
    options: [
      {
        id: 0,
        title: "کالاهای موجود",
      },
    ],
  },
});
</script>

<style scoped></style>
