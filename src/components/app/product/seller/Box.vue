<template>
  <aside class="hidden mt-10 lg:sticky lg:top-24 lg:block lg:space-y-3 lg:mt-0">
    <div
      class="seller-container divide-y lg:divide-y-0 p-5 border-2 border-gray-100 flex flex-col rounded-xl"
    >
      <div class="space-y-6">
        <a href="" class="flex items-center justify-between">
          <div class="seller-content">
            <div class="container-company-name">
              <div class="wrapper-company-name">
                <span class="company-name-title"> فروشنده </span>
                <span class="company_name"> فالکون </span>
              </div>
            </div>
            <div class="flex items-center">
              <span class="text-typo-lighter text-sm lg:mt-4">
                عملکرد 3 از 5</span
              >

              <hx-button
                icon
                variant="gray"
                class="flex ml-2 mr-2 text-typo-lighter text-sm transition-all lg:hidden"
              >
                <hx-icon class="text-gray-500" icon="chevron-left"></hx-icon>
              </hx-button>
            </div>
          </div>

          <hx-button
            icon
            variant="gray"
            class="hidden ml-2 text-typo-lighter text-sm transition-all lg:flex"
          >
            <hx-icon class="text-gray-500" icon="chevron-left"></hx-icon>
          </hx-button>
        </a>

        <section class="space-y-4">
          <div class="flex items-center">
            <hx-button icon variant="gray">
              <hx-icon class="text-gray-500" icon="shield"></hx-icon>
            </hx-button>

            <span class="text-typo text-xs font-medium mr-1">
              {{ variant?.warranty?.title }}</span
            >
          </div>
          <div class="flex items-center">
            <hx-button icon variant="gray">
              <hx-icon class="text-gray-500" icon="package"></hx-icon>
            </hx-button>
            <span class="text-typo text-xs font-medium mr-1">
              {{ variant?.shipment?.title }}</span
            >
          </div>
        </section>
      </div>
      <section
        v-for="(combination, index) in combinations"
        class="hidden flex-col px-3 w-full border-b border-gray-300 lg:flex"
      >
        <div class="flex item-center mb-4 pt-3 border-t">
          <span class="ml-1 text-typo-light text-sm"
            >{{ combination?.group?.name }} :
          </span>
          <span class="min-w-[7rem] min-h-[1.52rem] text-sm font-medium">
            <!-- {{ combination.value }} -->
            -
          </span>
        </div>
        <template v-if="combination.group?.type == 'color'">
          <ul class="flex border-b pb-2">
            <li
              v-for="(item, index) in combination.values"
              class="c-circle-variant__item ml-3"
            >
              <input
                type="radio"
                v-model="color"
                :value="item.id"
                name="color"
                :id="`c-${item.id}`"
                class="js-variant-selector js-color-filter-item"
                data-title="بنفش"
                data-type="color"
              />
              <label
                for="c-black"
                class="js-circle-variant-color c-circle-variant c-circle-variant--color"
                :style="`background: ${item.variant.value}`"
              >
              </label>
            </li>
          </ul>
        </template>
        <template v-if="combination.group?.type == 'size'">
          <select>
            <option
              v-for="(item, index) in combination.values"
              :key="index"
              value="{{item.variant.value}}"
            >
              {{ item.variant.name }}
            </option>
          </select>
        </template>
      </section>
      <section class="flex flex-col px-3 pt-3">
        <section
          class="px-4 py-3 bg-white shadow-design lg:px-0 lg:py-0 lg:shadow-none lg:bg-unset"
        >
          <div
            class="flex flex-row-reverse items-center justify-between lg:flex-col lg:items-start lg:justify-start lg:space-y-4"
          >
            <section class="flex w-full">
              <div
                class="flex flex-col lg:flex-row items-center w-full justify-evenly"
              >
                <section
                  v-if="variant?.is_incredible || variant?.is_promotion"
                  class="flex-row-reverse justify-end flex item-center"
                >
                  <span
                    class="flex items-center text-typo-light text-xs leading-6 text-typo-light line-through lg:text-base"
                  >
                    <span class="min-w-[3.375rem] text-left leading-6">
                      {{ variant?.selling_price }}
                    </span>
                  </span>

                  <div class="ml-2">
                    <hx-badge size="sm" variant="danger">
                      {{ variant?.discount }}
                      <hx-icon
                        class="mr-2 text-white w-4 h-4"
                        icon="percentage-square"
                      ></hx-icon>
                    </hx-badge>
                  </div>
                </section>

                <div>
                  <span class="flex items-center font-bold">
                    <span
                      id="price"
                      class="text-base text-left min-w-[4.5rem] min-h-[1.625rem] font-bold leading-6 lg:text-xl"
                    >
                      {{ variant?.rrp_price }}
                    </span>
                    <span class="font-normal text-sm leading-6 lg:text-sm mr-2"
                      >تومان</span
                    >
                  </span>
                </div>
              </div>
            </section>
            <section class="w-full">
              <hx-button block> افزودن به سبد خرید </hx-button>
            </section>
          </div>
        </section>
      </section>
    </div>
  </aside>
</template>

<script setup lang="ts">
//@ts-nocheck

import { ref } from "vue";

const props = defineProps({
  variant: {
    type: Object,
  },
  combinations: {
    type: Object,
  },
});

const color = ref(null);
</script>

<style lang="scss" scoped>
.c-circle-variant__item input {
  display: none;
}

.c-circle-variant--color {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  width: 25px;
  height: 25px;
  position: relative;
  color: #535353;
  font-size: 15px;
  border: 2px solid #e4e4e4;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  cursor: pointer;
}

input[type="radio"]:checked + .c-circle-variant--color {
  box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 50%) !important;
}
</style>
