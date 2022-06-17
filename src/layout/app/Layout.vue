<template >
    <div>
        <hx-header></hx-header>
        <main>
            <router-view />
        </main>
        <hx-footer></hx-footer>
    </div>
</template>
<script setup lang="ts">
import HxHeader from '@/components/app/header/header.vue';
import HxFooter from '@/components/app/footer/footer.vue';
</script>
<style lang="scss">
</style>