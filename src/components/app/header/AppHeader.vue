<template>
  <header class="t-header t-sticky-top bg-white">
    <div class="container h-16">
      <div class="flex items-center h-full">
        <div class="flex items-center flex-grow">
          <router-link
            :to="{ name: 'landing' }"
            class="t-header__logo w-24 ml-4"
          >
            <hx-icon class="w-full" icon="logo"></hx-icon>
          </router-link>
          <nav
            class="hx-header__nav bg-white lg:bg-transparent flex flex-col w-[60%] lg:w-full z-[6]"
            :class="{ 'is-active': active }"
          >
            <a href="" class="mx-auto py-4 w-24 lg:hidden">
              <hx-icon class="w-full" icon="logo"></hx-icon>
            </a>
            <ul
              class="flex flex-col space-y-6 lg:space-y-0 p-5 lg:flex-row lg:items-center h-full"
            >
              <li class="ml-5" v-for="(item, index) in menus">
                <router-link :to="{ name: item.to }">
                  <span class="font-normal text-gray-700">{{
                    item.title
                  }}</span>
                </router-link>
              </li>
              <!-- <li class="ml-5">
                <a href="#">
                  <span class="font-normal text-gray-700">پیشنهادات ویژه</span>
                </a>
              </li>
              <li class="ml-5">
                <a href="#">
                  <span class="font-normal text-gray-700">مقالات</span>
                </a>
              </li> -->
            </ul>
          </nav>
        </div>

        <div class="flex items-center">
          <header-search></header-search>
          <div class="hidden lg:flex">
            <hx-button :to="{ name: 'auth' }" class="mr-2" variant="light">
              <hx-icon right icon="user"></hx-icon>
              حساب کاربری
            </hx-button>

            <hx-button
              :to="{ name: 'checkout cart' }"
              class="mr-2"
              variant="light"
            >
              <hx-icon right icon="shopping-bag"></hx-icon>
              سبد خرید
            </hx-button>
          </div>
          <hx-button
            class="block lg:hidden"
            icon
            variant="gray"
            v-clickoutside:hx-header__nav="hide"
            @click="showNavHandler"
          >
            <hx-icon class="text-gray-400" icon="menu"></hx-icon>
          </hx-button>
        </div>
      </div>
    </div>

    <hx-overlay :active="active"></hx-overlay>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import HeaderSearch from "./search.vue";

const active = ref(false);

const menus = ref([
  { title: "دسته بندی ها", to: "categories" },
  { title: "پیشنهادات ویژه", to: "categories" },
  { title: "مقالات", to: "categories" },
]);

const hide = () => {
  active.value = false;
};

const showNavHandler = () => {
  active.value = true;
};
</script>

<style lang="scss" scoped>
.hx-header__nav {
  @media (max-width: 1024px) {
    transition: all 0.5s ease-in-out;
    transform: translateX(100%);
    // z-index: 70;
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    display: flex;
    align-items: stretch;

    &.is-active {
      transform: translateX(0);
    }
  }
}
</style>
