<template>
    <div class="container">
        <div class="grid grid-cols-12 gap-6">
            <div class="col-span-4" v-for="(item, index) in 3">
                <div class="relative w-full overflow-hidden ">
                    <img class="rounded-xl shadow-xl" src="media/banners/02.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
</style>