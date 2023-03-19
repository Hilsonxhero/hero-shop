<template>
  <!-- <router-view v-slot="{ Component }">
    <transition name="scale" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view> -->
  <router-view :key="route.fullPath"></router-view>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
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
