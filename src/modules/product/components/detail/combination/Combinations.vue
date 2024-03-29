<template>
  <div>
    <section
      v-for="(combination, index) in combinations"
      class="flex-col lg:px-3 mb-4 w-full lg:flex"
    >
      <div
        class="flex item-center pt-3"
        v-if="selected_combinations[combination.group.id]"
      >
        <span class="ml-1 text-typo-light text-sm"
          >{{ combination?.group?.name }} :
        </span>
        <span class="min-w-[7rem] min-h-[1.52rem] text-sm font-medium">
          {{ selected_combinations[combination.group.id].label }}
        </span>
      </div>
      <template v-if="combination.group?.type == 'color'">
        <ul class="flex border-b py-3">
          <li
            v-for="(item, index) in combination.values"
            class="c-circle-variant__item ml-3"
          >
            <input
              type="radio"
              v-model="selected_combinations[combination.group.id].id"
              :value="item.id"
              name="color"
              :id="`c-${item.id}`"
              class="js-variant-selector js-color-filter-item"
              v-if="selected_combinations[combination.group.id]"
            />
            <label
              :for="`c-${item.id}`"
              class="js-circle-variant-color c-circle-variant c-circle-variant--color"
              :style="`background: ${item.value}`"
            >
            </label>
          </li>
        </ul>
      </template>
      <template v-if="combination.group?.type == 'select'">
        <hx-select
          v-if="selected_combinations[combination.group.id]"
          v-model="selected_combinations[combination.group.id].id"
          filterable
          placeholder="انتخاب سایز"
          value-key="id"
          label="name"
          :options="combination.values"
        >
        </hx-select>
      </template>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, PropType, Ref } from "vue";
import { UPDATE_MODEL_EVENT } from "@/core/constants";
import {
  ProductCombinationModel,
  ProductVariantModel,
  CombinationModel,
} from "@/modules/product/models/ProductModel";
const props = defineProps({
  combinations: {
    type: Array as PropType<ProductCombinationModel[]>,
  },
  variant: {
    type: Object as PropType<ProductVariantModel>,
    required: true,
  },
  variants: {
    type: Array as PropType<ProductVariantModel[]>,
    required: true,
  },
});

interface ISelectionCombination {
  group: number;
  id: number;
  label: string;
}

const emits = defineEmits([UPDATE_MODEL_EVENT]);

const entries: Ref<ISelectionCombination[]> = ref(
  [] as ISelectionCombination[]
);
const default_variant: Ref<ProductVariantModel> = ref(
  props.variant as ProductVariantModel
);
const selected_combinations: Ref<ISelectionCombination> = ref(
  {} as ISelectionCombination
);

watch(default_variant, (val: ProductVariantModel, oldVal) => {
  initDefaultVariant();
  emits(UPDATE_MODEL_EVENT, val);
});

watch(
  selected_combinations,
  (val, oldVal) => {
    entries.value = Object.values(val);
    let oo = handleSelectVariant(props.variants, entries.value);
    default_variant.value = oo;
  },
  { deep: true }
);

const handleSelectVariant = (
  variants: ProductVariantModel[],
  selectedVariants: ISelectionCombination[]
) => {
  const clone = JSON.parse(JSON.stringify(variants));
  clone.forEach((variant: any) => {
    variant.combinations.forEach((combination: any) => {
      combination.selected = !!selectedVariants.find(
        ({ group, id }) =>
          group === combination.group.id && id == combination.variant_id
      );
    });
  });
  let selectedVariant = clone.findIndex(({ combinations }) => {
    return combinations.every((combination: any) => combination.selected);
  });

  return variants[selectedVariant];
};

const initDefaultVariant = () => {
  if (default_variant.value) {
    default_variant.value.combinations.map((item: CombinationModel, index) => {
      const key = item.group.id;
      selected_combinations.value[key] = {
        group: key,
        id: item.variant_id,
        label: item.label,
      };
    });
  } else {
  }
};

onMounted(() => {
  initDefaultVariant();
});
</script>

<style scoped></style>
