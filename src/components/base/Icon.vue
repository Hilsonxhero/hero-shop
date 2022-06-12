<template>
    <inline-svg fill="currentColor" :src="`media/icons/${icon}.svg`"></inline-svg>
</template>

<script setup lang="ts">

const props = defineProps({
    icon: {
        type: String
    }
})

</script>

<style scoped>
</style>