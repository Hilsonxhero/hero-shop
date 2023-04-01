<template>
  <div class="block lg:hidden relative z-[999]">
    <nav>
      <div
        class="h-[3.75rem] fixed z-60 bottom-0 left-0 grid grid-cols-4 items-center justify-around w-full bg-white shadow-design"
      >
        <router-link
          :to="{ name: 'landing' }"
          class="flex flex-col items-center"
        >
          <div class="mb-2 w-5 h-5 text-typo-lighter">
            <hx-icon icon="home-bulk"></hx-icon>
          </div>
          <div class="text-typo-light text-xs">صفحه اصلی</div>
        </router-link>
        <router-link
          :to="{ name: 'categories' }"
          class="flex flex-col items-center"
          rel="nofollow noindex"
          ><div class="mb-2 w-5 h-5 text-typo-lighter">
            <hx-icon icon="category-bulk"></hx-icon>
          </div>
          <div class="text-typo-light text-xs">دسته بندی ها</div>
        </router-link>
        <router-link
          :to="{ name: 'checkout cart' }"
          class="flex flex-col items-center"
          ><span class="relative flex"
            ><span
              class="flex items-center justify-center absolute -right-2 -top-2 w-4 h-4 bg-danger rounded-full"
              style="display: none"
              ><span class="ml-px mt-px text-white text-2xs"> 0 </span></span
            >
            <div class="mb-2 w-5 h-5 text-typo-lighter">
              <hx-icon icon="bag-bulk"></hx-icon></div
          ></span>
          <div class="text-typo-light text-xs">سبد خرید</div>
        </router-link>
        <div
          rel="nofollow noindex"
          class="flex flex-col items-center"
          @click="handleUserClick"
        >
          <div class="mb-2 w-min h-5 text-typo-lighter">
            <hx-icon icon="user-bulk"></hx-icon>
          </div>
          <div class="text-typo-light text-xs">ورود</div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "@/modules/user";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();

const handleUserClick = () => {
  if (!userStore.loggedIn) {
    router.push({ name: "auth" });
  } else {
    router.push({ name: "user profile" });
  }
};
</script>

<style scoped></style>
