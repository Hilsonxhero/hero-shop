<template>
  <div>
    <div class="hidden lg:block w-full">
      <div class="flex flex-col space-y-4">
        <div class="bg-gray-100 rounded-xl p-3">
          <h4 class="text-gray-800">جستجو در کالاها</h4>
          <div class="w-full mt-4">
            <hx-input
              class="border-2 border-gray-300"
              type="search"
              placeholder="نام کالا یا برند را وارد کنید .."
            ></hx-input>
          </div>
        </div>
        <div class="bg-gray-100 rounded-xl p-3">
          <div class="w-full border-b-2 pb-4">
            <hx-switch
              class="flex items-center flex-row-reverse"
              label="فقط کالا های موجود"
              name="test"
              value="2"
            ></hx-switch>
          </div>

          <div class="border-b-2 pb-8">
            <hx-slider
              :max="20000000"
              :gap="1000"
              v-model="price"
              :max-price="maxPriceInp"
              :min-price="minPriceInp"
            >
              <template #price="prop">
                <div
                  class="flex justify-evenly items-center space-x-3 space-x-reverse my-6"
                >
                  <span>از</span>
                  <div class="relative lg:max-w[6rem] h-10 rounded-xl">
                    <input
                      v-model="prop.min"
                      @input="prop.chnage"
                      placeholder=""
                      type="text"
                      class="input-min block text-right w-full h-full outline-none bg-gray-100 transition-all ease-out duration-200 pl-12 pr-2 text-sm rounded-inherit border-2 border-gray-300 focus:bg-white focus:border-blue-500"
                    />

                    <div
                      class="absolute text-sm inset-y-0 z-10 left-0 top-0 flex items-center justify-center w-12"
                    >
                      تومان
                    </div>
                  </div>
                  <span>تا</span>

                  <div class="relative lg:max-w[6rem] h-10 rounded-xl">
                    <input
                      v-model="prop.max"
                      @input="prop.chnage"
                      placeholder=""
                      type="text"
                      class="block w-full h-full outline-none text-right bg-gray-100 transition-all ease-out duration-200 pl-12 pr-2 text-sm rounded-inherit border-2 border-gray-300 focus:bg-white focus:border-blue-500"
                    />

                    <div
                      class="absolute text-sm inset-y-0 z-10 left-0 top-0 flex items-center justify-center w-12"
                    >
                      تومان
                    </div>
                  </div>
                </div>
              </template>
            </hx-slider>
          </div>

          <div class="">
            <div class="py-4">
              <hx-collapse accordion>
                <collapse-item
                  class="border-b-2 mb-4"
                  v-for="(item, index) in 4"
                  title="رنگ"
                  :name="index"
                >
                  <div
                    class="flex max-h-[13rem] overflow-y-auto flex-col space-y-4 px-2"
                  >
                    <div v-for="(item, index) in 10">
                      <hx-checkbox
                        class="flex items-center"
                        label="مشکی"
                      ></hx-checkbox>
                    </div>
                  </div>
                </collapse-item>
              </hx-collapse>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center lg:hidden">
      <div class="flex items-center">
        <hx-button icon variant="gray" class="ml-2" @click="handleFilterModal">
          <hx-icon class="text-gray-500 w-6 h-6" icon="slider"></hx-icon>
        </hx-button>

        <hx-button icon variant="gray">
          <hx-icon class="text-gray-500 w-6 h-6" icon="sort"></hx-icon>
        </hx-button>
      </div>
    </div>

    <hx-modal fs :show="active" title="فیلترها" @close="handleFilterModal">
      <template #header="{ close }">
        <h5>فیلترها</h5>
        <hx-button icon variant="gray" @click="close()">
          <hx-icon icon="close" class="w-6 h-6"></hx-icon>
        </hx-button>
      </template>
      <div class="flex flex-col">
        <div
          class="flex items-center justify-between border-b py-3"
          v-for="(filter, index) in filters"
        >
          <div>
            <span class="text-gray-600">{{ filter.title }}</span>
          </div>
          <div>
            <template v-if="filter.type == 'checkbox'">
              <hx-button icon variant="gray">
                <hx-icon
                  class="text-gray-600 w-6 h-6"
                  icon="chevron-left"
                ></hx-icon>
              </hx-button>
            </template>
            <template v-if="filter.type == 'switch'">
              <hx-switch name="test" value="2"></hx-switch>
            </template>
          </div>
        </div>
      </div>
    </hx-modal>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const props = defineProps({
  filters: {
    type: [Array, Object],
  },
});

const minPriceInp = ref<any>(null);
const maxPriceInp = ref<any>(null);

const active = ref(false);
const price = ref<any>({
  min: 0,
  max: 0,
});

const handleFilterModal = () => {
  active.value = !active.value;
};
</script>

<style scoped></style>
