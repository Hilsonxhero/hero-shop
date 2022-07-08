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
import HxHeader from "@/components/app/header/AppHeader.vue";
import HxFooter from "@/components/app/footer/AppFooter.vue";
</script>
<style lang="scss"></style>
