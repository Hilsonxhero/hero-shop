<template>
  <div class="pb-[3.75rem] lg:pb-0">
    <hx-header></hx-header>
    <main>
      <router-view />
    </main>
    <hx-footer></hx-footer>

    <BaseFooterMenu />
  </div>
</template>
<script setup lang="ts">
// @ts-nocheck
import { computed, onMounted } from "vue";
import BaseFooterMenu from "@/components/app/footer/BaseFooterMenu.vue";
import HxHeader from "@/components/app/header/AppHeader.vue";
import HxFooter from "@/components/app/footer/AppFooter.vue";
// import { useConfigStore } from "@/modules/config";
// import { storeToRefs } from "pinia";
// const store = useConfigStore();
// const { config } = storeToRefs(store);

// store.fetchConfig();
</script>
<style lang="scss"></style>
