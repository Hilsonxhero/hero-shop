<template>
  <div>
    <hx-header></hx-header>
    <main>
      <router-view />
    </main>
    <hx-footer></hx-footer>
  </div>
</template>
<script setup lang="ts">
// @ts-nocheck
import { computed, onMounted } from "vue";
import HxHeader from "@/components/app/header/AppHeader.vue";
import HxFooter from "@/components/app/footer/AppFooter.vue";
// import { useConfigStore } from "@/modules/config";
// import { storeToRefs } from "pinia";
// const store = useConfigStore();
// const { config } = storeToRefs(store);

// console.log("here");

// store.fetchConfig();
</script>
<style lang="scss"></style>
