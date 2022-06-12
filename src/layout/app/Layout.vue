<template >
    <div>
        <Header />
        <main style="height:70rem ;">
            <router-view />
        </main>
        <Footer />
    </div>
</template>
<script setup lang="ts">
import Header from '@/components/app/header/header.vue';
import Footer from '@/components/app/footer/footer.vue';
</script>
<style >
</style>