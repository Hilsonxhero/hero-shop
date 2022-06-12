<template>
    <header class="t-header t-sticky-top bg-white">
        <div class="container h-16">
            <div class="flex items-center h-full">
                <div class="flex items-center flex-grow">
                    <a href="" class="t-header__logo">
                        <hx-icon icon="logo"></hx-icon>
                    </a>
                    <ul class="flex items-center h-full">
                        <li class="ml-5">
                            <a href="#">
                                <span class="font-normal text-sm  text-gray-700">دسته بندی ها</span>
                            </a>
                        </li>
                        <li class="ml-5">
                            <a href="#">
                                <span class="font-normal text-sm  text-gray-700">پیشنهادات ویژه</span>
                            </a>
                        </li>
                        <li class="ml-5">
                            <a href="#">
                                <span class="font-normal text-sm  text-gray-700">مقالات</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <div class="relative">
                        <div class="relative w-full t-header__search">
                            <input class="bg-gray-100 rounded h-9 pr-9 text-sm  w-full" type="text"
                                placeholder="جستجو در محصولات ،دسته بندی و ..">
                            <hx-icon icon="search" class="w-6 h-6 absolute top-1/2 mr-1 text-gray-400 cursor-pointer">
                            </hx-icon>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
name: 'header'

</script>

<style scoped>
</style>