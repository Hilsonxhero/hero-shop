<template >
    <div>
        <hx-header></hx-header>
        <main>
            <router-view />
        </main>
        <hx-footer></hx-footer>

        <!-- <teleport to="body">
            <div id="hx-overlay" class="hx-overlay h-screen w-screen bg-gray-400 fixed inset-0 z-10 hidden"></div>
        </teleport> -->
    </div>
</template>
<script setup lang="ts">
import HxHeader from '@/components/app/header/header.vue';
import HxFooter from '@/components/app/footer/footer.vue';
</script>
<style lang="scss">
.hx-overlay {
    opacity: 0;

    &.is-active {
        display: block !important;
        opacity: .60 !important;
    }
}
</style>