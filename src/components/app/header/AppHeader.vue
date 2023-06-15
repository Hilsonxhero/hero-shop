<template>
  <header class="t-header t-sticky-top bg-white">
    <a
      v-if="banners?.top_header_banner"
      class="block w-full"
      :href="banners?.top_header_banner?.url"
      target="_blank"
    >
      <div class="h-10 lg:h-14">
        <img
          class="object-cover w-full h-full"
          :src="banners?.top_header_banner?.banner"
          alt=""
        />
      </div>
    </a>
    <div class="container">
      <div class="h-16">
        <div class="flex items-center h-full justify-between">
          <div class="flex items-center">
            <hx-button
              class="block lg:hidden"
              icon
              variant="gray"
              @click="showNavHandler"
            >
              <hx-icon class="text-gray-400" icon="menu-bulk"></hx-icon>
            </hx-button>

            <div class="hidden lg:block">
              <router-link
                :to="{ name: 'landing' }"
                class="t-header__logo w-24"
              >
                <img :src="config.logo" class="max-h-75px" />
              </router-link>
            </div>

            <nav
              ref="navRef"
              class="hx-header__nav bg-white lg:bg-transparent flex flex-col w-[60%] lg:w-full z-[6]"
              :class="{ 'is-active': active }"
            >
              <a href="" class="mx-auto py-4 w-24 lg:hidden">
                <img :src="config.logo" class="max-h-75px" />
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
              </ul>
            </nav>
          </div>
          <div
            class="flex lg:hidden items-center absolute left-1/2 transform -translate-x-1/2"
          >
            <router-link :to="{ name: 'landing' }" class="t-header__logo w-24">
              <img :src="config.logo" class="max-h-75px" />
            </router-link>
          </div>

          <div class="flex items-center">
            <header-search></header-search>
            <div class="hidden lg:flex">
              <hx-button :to="{ name: 'auth' }" class="mr-2" variant="light">
                <hx-icon icon="user-bulk"></hx-icon>
              </hx-button>

              <hx-button
                :to="{ name: 'checkout cart' }"
                class="mr-2"
                variant="light"
              >
                <hx-icon icon="bag-bulk"></hx-icon>
              </hx-button>
            </div>
            <!-- v-clickoutside:hx-header__nav="hide" -->
            <div class="flex items-center lg:hidden">
              <!-- <router-link :to="{ name: 'auth' }">
                <hx-icon icon="user" class="text-gray-400 w-6 h-6"></hx-icon>
              </router-link> -->
              <!-- <router-link :to="{ name: 'checkout cart' }">
                <div class="relative">
                  <hx-icon
                    icon="shopping-bag"
                    class="text-gray-400 w-6 h-6 mr-4"
                  ></hx-icon>
                  <div
                    v-if="cart.items_count >= 1"
                    class="absolute h-[17px] min-w-[17px] bg-red-500 text-xs text-white rounded-md right-[10px] -bottom-[5px] flex items-center justify-center"
                  >
                    {{ cart.items_count }}
                  </div>
                </div>
              </router-link> -->
              <!-- <div>
                <hx-icon icon="search-bulk" class="w-6 h-6 mr-4"></hx-icon>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <hx-overlay :active="active"></hx-overlay>
  </header>
</template>

<script setup lang="ts">
//@ts-nocheck
import { ref } from "vue";
import HeaderSearch from "./search.vue";
import { onClickOutside } from "@vueuse/core";
import { useConfigStore } from "@/modules/config";
import { storeToRefs } from "pinia";
import { useCartStore } from "@/modules/checkout";

const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);
const store = useConfigStore();
const { config, banners } = storeToRefs(store);
const navRef = ref(null);
const active = ref(false);

const menus = ref([
  { title: "دسته بندی ها", to: "categories" },
  { title: "پیشنهادات ویژه", to: "promotion index" },
  { title: "مقالات", to: "articles index" },
]);

onClickOutside(navRef, (event) => {
  active.value = false;
});

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
