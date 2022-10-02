<template>
  <div class="relative t-header__box hidden lg:flex">
    <div class="relative w-full t-header__search">
      <!-- v-clickoutside:t-header__box="hide" -->
      <input
        class="bg-gray-100 leading-6 rounded-xl text-sm w-full"
        type="text"
        placeholder="جستجو در محصولات ،دسته بندی و .."
        @click="showBox"
      />
      <hx-icon
        icon="search"
        class="w-6 h-6 absolute top-1/2 mr-1 text-gray-400 cursor-pointer"
      >
      </hx-icon>
    </div>
    <div
      v-show="visiableSearchBox"
      class="absolute w-full top-0 left-0 bg-white shadow-md rounded-xl"
    >
      <div class="flex-grow">
        <div class="flex flex-col h-full">
          <div class="p-4">
            <div class="relative w-full">
              <input
                class="text-sm w-full py-2 pr-8 border-b-2 border-blue-300"
                type="text"
                placeholder="جستجو  .."
              />
              <hx-icon
                icon="search"
                class="w-6 h-6 absolute top-1/2 mr-1 text-gray-400 cursor-pointer transform-50"
              >
              </hx-icon>
            </div>

            <div>
              <div class="flex flex-col w-full my-4 max-h-96 overflow-auto">
                <router-link
                  to="/"
                  class="flex items-center rounded-md p-2 m-2 content-between mb-3 hover:bg-gray-100 transition-all ease-out duration-150"
                  v-for="(item, index) in 20"
                >
                  <div class="flex items-center flex-grow">
                    <span>
                      <hx-icon
                        class="h-6 w-6 text-gray-400"
                        icon="search"
                      ></hx-icon>
                    </span>

                    <span class="text-gray-500 mr-3"> گوشی موبایل </span>
                  </div>
                  <div>
                    <hx-icon
                      class="h-6 w-6 text-gray-400"
                      icon="chevron-left"
                    ></hx-icon>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hx-overlay :active="visiableSearchBox"></hx-overlay>
</template>

<script setup lang="ts">
import { ref } from "vue";
const visiableSearchBox = ref(false);

const emit = defineEmits(["show"]);
const showBox = () => {
  visiableSearchBox.value = true;
};

const hide = () => {
  visiableSearchBox.value = false;
};
</script>

<style scoped>
.dropdown_menu-8 {
  animation: downOut 300ms ease-out forwards;
  transform-origin: center center;
}

@keyframes downOut {
  0% {
    transform: translateZ(200px) transLateY(-200px);
  }

  80% {
    transform: translateZ(-10px) transLateY(0px);
  }

  100% {
    transform: translateZ(0px) transLateY(0px);
  }
}
</style>
