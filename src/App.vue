<template>
  <!-- <router-view v-slot="{ Component }">
    <transition name="scale" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view> -->
  <!-- <router-view :key="route.fullPath"></router-view> -->
  <router-view :key="route.path"></router-view>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useConfigStore } from "@/modules/config";
import { storeToRefs } from "pinia";
const route = useRoute();

const store = useConfigStore();
const { config } = storeToRefs(store);
store.fetchConfig();
</script>

<style lang="scss">
@import "@/assets/sass/main.scss";

// .scale-enter-active,
// .scale-leave-active {
//   transition: all 0.5s ease;
// }
// .scale-enter-from,
// .scale-leave-to {
//   opacity: 0;
//   transform: scale(0.9);
// }
</style>
