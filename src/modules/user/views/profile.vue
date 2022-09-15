<template>
  <div class="container p-20 text-center flex flex-col justify-center w-full">
    <h1 class="text-3xl uppercase">user profile</h1>
    <h1>{{ user?.phone }}</h1>
    <hx-button variant="danger" @click="handleLogout"
      >خروج از حساب کاربری</hx-button
    >
    <hx-button class="mt-4" :to="{ name: 'landing' }">صفحه اصلی</hx-button>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/modules/auth";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
const store = useAuthStore();
const { user } = storeToRefs(store);

const router = useRouter();

const handleLogout = async () => {
  try {
    await store.logout();
    router.push({ name: "auth" });
  } catch (error) {}
};
</script>

<style scoped></style>
