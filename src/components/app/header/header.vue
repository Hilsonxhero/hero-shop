<template>
  <header class="t-header t-sticky-top bg-white">
    <div class="container h-16">
      <div class="flex items-center h-full">
        <div class="flex items-center flex-grow">
          <a href="" class="t-header__logo w-24 ml-4">
            <hx-icon class="w-full" icon="logo"></hx-icon>
          </a>
          <ul class="flex items-center h-full">
            <li class="ml-5">
              <a href="#">
                <span class="font-normal   text-gray-700">دسته بندی ها</span>
              </a>
            </li>
            <li class="ml-5">
              <a href="#">
                <span class="font-normal   text-gray-700">پیشنهادات ویژه</span>
              </a>
            </li>
            <li class="ml-5">
              <a href="#">
                <span class="font-normal   text-gray-700">مقالات</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="flex items-center">
          <header-search></header-search>
          <div>
            <hx-button class="mr-2" variant="light">
              <hx-icon right icon="user"></hx-icon>
              حساب کاربری
            </hx-button>

            <hx-button class="mr-2" variant="light">
              <hx-icon right icon="shopping-bag"></hx-icon>
              سبد خرید
            </hx-button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import HeaderSearch from './search.vue';
name: 'header'



</script>

<style scoped>
</style>