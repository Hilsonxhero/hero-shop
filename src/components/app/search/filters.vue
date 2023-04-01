<template>
  <div>
    <div class="hidden lg:block w-full" v-if="filters">
      <div class="flex flex-col space-y-4">
        <!-- <div class="bg-gray-100 rounded-xl p-3">
          <h4 class="text-gray-800">جستجو در کالاها</h4>
          <div class="w-full mt-4">
            <hx-input
              class="border-2 border-gray-300"
              type="search"
              placeholder="نام کالا یا برند را وارد کنید .."
            ></hx-input>
          </div>
        </div> -->
        <div class="bg-gray-100 rounded-xl p-3">
          <div class="w-full border-b-2 pb-4">
            <hx-switch
              class="flex items-center flex-row-reverse"
              label="فقط کالا های موجود"
              name="available_stock"
              value="2"
              v-model="selected.available_stock"
            ></hx-switch>
          </div>

          <div class="border-b-2 pb-3">
            <hx-slider :max="range_price.max" :gap="1000" v-model="range_price">
              <template #price="prop">
                <div
                  class="flex justify-evenly items-center space-x-1 space-x-reverse my-6"
                >
                  <span>از</span>
                  <div class="relative rounded-xl">
                    <hx-input
                      v-model="range.min"
                      placeholder=""
                      type="text"
                      class="search-module-range__price text-center w-full outline-none bg-gray-100 transition-all ease-out duration-200 text-sm rounded-inherit border-2 border-gray-300 focus:bg-white focus:border-blue-500"
                    />
                  </div>
                  <span>تا</span>

                  <div class="relative rounded-xl">
                    <hx-input
                      v-model="range.max"
                      placeholder=""
                      type="text"
                      class="search-module-range__price block w-full outline-none text-center bg-gray-100 transition-all ease-out duration-200 text-sm rounded-inherit border-2 border-gray-300 focus:bg-white focus:border-blue-500"
                    />
                  </div>
                </div>
              </template>
            </hx-slider>
            <hx-button block class="mt-4" outlined @click="handleFilterPrice"
              >اعمال محدوده قیمت</hx-button
            >
          </div>

          <div class="">
            <div class="py-4">
              <hx-collapse accordion>
                <hx-collapse-item
                  class="border-b-2 mb-4"
                  v-for="(filter, index) in filters"
                  :title="filter.title"
                  :name="index"
                  :key="index"
                >
                  <div
                    class="flex max-h-[13rem] overflow-y-auto flex-col space-y-4 px-2"
                  >
                    <div>
                      <hx-checkbox
                        v-for="(option, i) in filter.values"
                        v-model="filter_features[index].values"
                        @change="
                          handleChangeFeature(option.id, filter_features[index])
                        "
                        class="flex items-center"
                        :key="i"
                        :true-label="option.id"
                        :label="option.id"
                        :value="option.id"
                      >
                        {{ option.title }}
                      </hx-checkbox>
                    </div>
                  </div>
                </hx-collapse-item>
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

    <hx-dialog v-model="active" title="فیلترها" @close="handleFilterModal">
      <hx-collapse accordion>
        <hx-collapse-item
          class="border-b-2 mb-4"
          v-for="(filter, index) in filters"
          :title="filter.title"
          :name="index"
          :key="index"
        >
          <div
            class="flex max-h-[13rem] overflow-y-auto flex-col space-y-4 px-2"
          >
            <div>
              <hx-checkbox
                v-for="(option, i) in filter.values"
                v-model="filter_features[index].values"
                @change="handleChangeFeature()"
                class="flex items-center"
                :key="i"
                :true-label="option.id"
                :label="option.id"
                :value="option.id"
              >
                {{ option.title }}
              </hx-checkbox>
            </div>
          </div>
        </hx-collapse-item>
      </hx-collapse>

      <template #footer="{ close }">
        <hx-button @click="close" class="block w-full my-2" outlined
          >اعمال فیلتر</hx-button
        >
      </template>
    </hx-dialog>
  </div>
</template>

<script setup lang="ts">
//@ts-nocheck
import { onMounted, ref, watch, watchEffect, nextTick } from "vue";
import { UPDATE_MODEL_EVENT } from "@/core/constants";
import { useRoute, useRouter } from "vue-router";

import useQueryFilters from "@/core/hooks/use-query-ref";

const props = defineProps({
  filters: {
    type: [Array, Object],
  },
  modelValue: {},
  features: {},
});
const emit = defineEmits([UPDATE_MODEL_EVENT]);
const { setFilters, queryFilters } = useQueryFilters();
const router = useRouter();
const route = useRoute();
const filter_features = ref([]);
const selected = ref({
  features: [],
  available_stock: false,
  range: {
    min: 0,
    max: 1000000000,
    applied: false,
  },
});

const range = ref({
  min: 0,
  max: 1000000000,
  applied: false,
});

const active = ref(false);
const show = ref(false);
const selectedFilter = ref(null);

const range_price = ref<any>({ min: 0, max: 900000000 });

watch(
  () => props.features,
  (val, oldVal) => {
    if (filter_features.value.length == 0) {
      filter_features.value = val;
    }
  }
);

watch(
  () => range_price.value,
  (val, oldVal) => {
    range.value.max = val.max;
    range.value.min = val.min;
  }
);

watch(
  () => selected.value,
  (val, oldVal) => {
    let filters = {};

    if (val.available_stock) {
      queryFilters.value["available_stock"] = true;
    } else {
    }

    if (val.range.applied) {
      queryFilters.value["min_price"] = range.value.min;
      queryFilters.value["max_price"] = range.value.max;
    } else {
    }

    if (val.features.length >= 1) {
      val.features.forEach((item, index) => {
        item.values.forEach((value, valueIndex) => {
          queryFilters.value[`feature_id[${item.feature_id}][${valueIndex}]`] =
            value;
        });
      });
    }

    setFilters(filters);

    emit(UPDATE_MODEL_EVENT, selected.value);
  },
  { deep: true }
);
const handleFetchFilters = () => {
  selected.value.features = filter_features.value.filter(
    (item, index) => item.values.length >= 1
  );
  handleFilterModal();
};

const handleChangeFeature = () => {
  selected.value.features = filter_features.value.filter(
    (item, index) => item.values.length >= 1
  );
};

const handleFilterPrice = () => {
  selected.value.range.max = range.value.max;
  selected.value.range.min = range.value.min;
  selected.value.range.applied = !selected.value.range.applied;
};

const handleFilterModal = () => {
  active.value = !active.value;
};

const handleFilterOption = (filter: any, index: any) => {
  if (filter.type == "checkbox") {
    selectedFilter.value
      ? (selectedFilter.value = null)
      : (selectedFilter.value = { ...filter, filter: index });
    show.value = !show.value;
  }
  return false;
};
watchEffect(() => {
  if (filter_features.value.length == 0) {
    filter_features.value = props.features;
  }
});

onMounted(() => {
  nextTick(() => {});
});
</script>

<style></style>
