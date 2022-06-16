<template>
    <div class="col-span-3 relative mx-3 rounded-xl lg:w-auto lg:overflow-hidden over group w-[13.5rem] h-[13.5rem] lg:h-[18.75rem] "
        v-for="(item, index) in 4">
        <a target="_blank" href="https://www.mobit.ir/mag/best-amazfit-smartwatches/">
            <span
                class="w-full h-full rounded transition duration-300 lg:transform group-hover:lg:scale-105 min-w-[13.5rem] min-h-[13.5rem] block"><img
                    data-name="image-img"
                    src="https://cdnn.mobit.ir/mag/wp-content/uploads/2022/06/06114500/%D8%AA%D8%B5%D9%88%DB%8C%D8%B1-%D8%B4%D8%A7%D8%AE%D8%B5.jpg"
                    loading="lazy" class="w-full h-full transition-opacity duration-500 rounded object-cover">

            </span>
            <div class="rounded-b liniear-gr"></div>
            <div
                class="absolute bottom-5 px-3 text-white whitespace-normal text-sm font-medium lg:z-30 lg:right-3 lg:px-0 lg:text-base lg:transform lg:transition-all lg:duration-300 lg:group-hover:bottom-3">
                بهترین ساعت هوشمند امیزفیت
            </div>
        </a>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.liniear-gr {
    background: linear-gradient(0deg, #020024, #050000 4%, #2d2525 13%, rgba(61, 54, 54, .03125) 54%);
    position: absolute;
    bottom: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    transition-duration: 700ms;
}
</style>