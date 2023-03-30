<template>
  <aside class="mt-10 lg:sticky lg:top-24 lg:block lg:space-y-3 lg:mt-0">
    <div
      v-if="default_variant.has_stock"
      class="seller-container lg:divide-y-0 p-5 border-2 border-gray-100 flex flex-col rounded-xl"
    >
      <div class="space-y-6">
        <!-- <a href="" class="flex items-center justify-between">
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
        </a> -->

        <section class="">
          <div class="flex items-center">
            <hx-button icon variant="gray">
              <hx-icon class="text-gray-500" icon="shield"></hx-icon>
            </hx-button>

            <span class="text-typo text-xs font-medium mr-1">
              {{ default_variant?.warranty?.title }}</span
            >
          </div>
          <div class="flex items-center">
            <hx-button icon variant="gray">
              <hx-icon class="text-gray-500" icon="package"></hx-icon>
            </hx-button>
            <span class="text-typo text-xs font-medium mr-1">
              {{ default_variant?.shipment?.title }}</span
            >
          </div>
        </section>
      </div>

      <section class="flex flex-col lg:px-3">
        <section class="bg-white lg:px-0 lg:py-0 lg:shadow-none lg:bg-unset">
          <div
            class="flex items-center justify-between lg:flex-col lg:items-start lg:justify-start lg:space-y-4"
          >
            <section class="hidden lg:flex w-full">
              <div class="flex flex-col items-center w-full lg:justify-evenly">
                <section
                  v-if="
                    default_variant?.is_incredible ||
                    default_variant?.is_promotion
                  "
                  class="flex item-center"
                >
                  <div class="ml-2 flex justify-center">
                    <hx-badge size="sm" type="danger">
                      {{ default_variant?.discount }}
                      <hx-icon
                        class="mr-2 text-white w-4 h-4"
                        icon="percentage-square"
                      ></hx-icon>
                    </hx-badge>
                  </div>

                  <span
                    class="flex items-center text-typo-light text-xs text-typo-light line-through lg:text-base"
                  >
                    <span class="min-w-[3.375rem] text-left leading-6">
                      {{ $filters.separate(default_variant?.rrp_price) }}
                    </span>
                    <span class="font-normal text-sm leading-6 lg:text-sm mr-2"
                      >تومان</span
                    >
                  </span>
                </section>

                <div>
                  <span class="flex items-center font-bold">
                    <span
                      id="price"
                      class="text-base text-left min-w-[4.5rem] min-h-[1.625rem] font-bold leading-6 lg:text-xl"
                    >
                      {{ $filters.separate(default_variant?.selling_price) }}
                    </span>
                    <span class="font-normal text-sm leading-6 lg:text-sm mr-2"
                      >تومان</span
                    >
                  </span>
                </div>

                <div
                  class="text-red-400 text-xs mt-3"
                  v-if="default_variant.stock <= 3"
                >
                  تنها {{ default_variant.stock }} عدد در انبار باقی مانده
                </div>
              </div>
            </section>
            <section class="hidden lg:w-full lg:flex lg:justify-center">
              <template v-if="current_variant">
                <Counter
                  :loader="loader"
                  :disabled="disableIncrement"
                  :value="current_variant.quantity"
                  @increment="handleIncrement()"
                  @decrement="handleDecrement()"
                  @delete="handleDelete()"
                />
              </template>
              <template v-else>
                <hx-button :loading="loader" @click="handleIncrement" block>
                  افزودن به سبد خرید
                </hx-button>
              </template>
            </section>
          </div>
        </section>
      </section>
    </div>
    <div
      v-else
      class="seller-container divide-y lg:divide-y-0 p-5 border-2 border-gray-100 flex flex-col rounded-xl"
    >
      <p class="text-gray-500">
        این کالا فعلا موجود نیست اما می‌توانید زنگوله را بزنید تا به محض موجود
        شدن، به شما خبر دهیم
      </p>
      <hx-button
        variant="danger"
        class="mt-3"
        @click="addToAnnouncemente()"
        block
      >
        <template v-if="default_variant.is_announcemented_availability">
          لغو اطلاع رسانی !
        </template>
        <template v-else> خبرم کن ! </template>
      </hx-button>
    </div>
  </aside>

  <teleport to="body">
    <div class="sticky z-20 bottom-0 inset-x-0">
      <section
        class="px-4 py-3 bg-white shadow-design lg:px-0 lg:py-0 lg:shadow-none lg:bg-unset lg:hidden"
      >
        <div
          class="flex flex-row-reverse items-center justify-between lg:flex-col lg:items-start lg:justify-start lg:space-y-4"
        >
          <section class="flex">
            <div
              class="flex flex-col lg:space-y-4 lg:flex-col-reverse lg:space-y-reverse justify-evenly"
            >
              <span class="hidden text-sm font-medium lg:block">قیمت</span>
              <div>
                <span class="flex items-center font-bold">
                  <span
                    id="price"
                    class="text-base text-left min-w-[4.5rem] min-h-[1.625rem] font-bold leading-6 lg:text-xl"
                  >
                    {{ $filters.separate(default_variant?.selling_price) }}
                  </span>
                  <span class="font-normal text-sm leading-6 lg:text-sm mr-2"
                    >تومان</span
                  >
                </span>
              </div>
            </div>
          </section>
          <section class="w-full">
            <!-- <hx-button class="">افزودن به سبد خرید</hx-button> -->
            <template v-if="current_variant">
              <Counter
                :loader="loader"
                :disabled="disableIncrement"
                :value="current_variant.quantity"
                @increment="handleIncrement()"
                @decrement="handleDecrement()"
                @delete="handleDelete()"
              />
            </template>
            <template v-else>
              <hx-button :loading="loader" @click="handleIncrement">
                افزودن به سبد خرید
              </hx-button>
            </template>
          </section>
        </div>
      </section>
    </div>
  </teleport>
</template>

<script setup lang="ts">
//@ts-nocheck
import { ref, onMounted, watch, computed } from "vue";
import { useCartStore } from "@/modules/checkout";
import { storeToRefs } from "pinia";
import Counter from "@/components/common/counter.vue";
import { UPDATE_MODEL_EVENT } from "@/core/constants";
import ApiService from "@/core/services/ApiService";
import { HxMessage } from "@/components/base/message";
import { fa } from "@/core/locale";

const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);

const emit = defineEmits([UPDATE_MODEL_EVENT]);

const props = defineProps({
  variant: {
    type: Object,
  },
});

const default_variant = ref(props.variant);
const selected = ref({});
const entries = ref([]);
const current_variant = ref<any>(null);
const loader = ref<any>(false);

// watch(
//   selected,
//   (val, oldVal) => {
//     entries.value = Object.values(val);
//     let oo = handleSelectVariant(props.variants, entries.value);
//     default_variant.value = oo;
//   },
//   { deep: true }
// );

watch(
  () => props.variant,
  (val, oldVal) => {
    default_variant.value = val;
    current_variant.value = checkVariantExistsInCart();
  },
  { deep: true }
);

// watch(default_variant, (val, oldVal) => {
//   initDefaultVariant();
//   emit(UPDATE_MODEL_EVENT, val);
//   current_variant.value = checkVariantExistsInCart();
// });

watch(
  () => cart,
  (val, oldVal) => {
    initDefaultVariant();
    current_variant.value = checkVariantExistsInCart();
  },
  { deep: true }
);

const disableIncrement = computed(() => {
  if (
    current_variant.value.quantity + 1 > default_variant.value.order_limit ||
    current_variant.value.quantity + 1 > default_variant.value.stock
  ) {
    return true;
  } else {
    return false;
  }
});

const addToAnnouncemente = () => {
  default_variant.value.is_announcemented_availability =
    !default_variant.value.is_announcemented_availability;
  let reqType = default_variant.value.is_announcemented_availability
    ? "post"
    : "delete";
  const data = {
    type: "availability",
    via_sms: true,
    via_email: true,
  };
  ApiService[reqType](`announcements/${default_variant.value.id}`, data).then(
    ({ data }) => {
      if (data.success) {
        if (default_variant.value.is_announcemented_availability) {
          HxMessage({
            message: "محصول به لیست اطلاع رسانی موجودی اضافه شد",
            type: "success",
            duration: 4000,
            center: true,
            offset: 100,
            "custom-class": "",
          });
        } else {
          HxMessage({
            message: "محصول از لیست اطلاع رسانی  موجودی حذف شد",
            type: "success",
            duration: 4000,
            center: true,
            offset: 100,
            "custom-class": "",
          });
        }
      }
    }
  );
};

const checkVariantExistsInCart = () => {
  const items = cartStore.cart_preview?.cart_items;
  const res = items.find((item) => item.variant.id == default_variant.value.id);
  if (res) return res;
  return false;
};

const handleIncrement = async () => {
  loader.value = true;
  const data = {
    variant_id: default_variant.value.id,
  };
  await cartStore.add(data);
  loader.value = false;
};
const handleDecrement = async () => {
  // cart.value.cart_items.find(
  //   (cart_item, i) => cart_item.variant.id == default_variant.value.id
  // );

  loader.value = true;
  const data = {
    cart_item_id: current_variant.value.id,
    quantity: current_variant.value.quantity - 1,
  };
  await cartStore.update(data);
  loader.value = false;
};

const handleDelete = async () => {
  loader.value = true;
  await cartStore.remove(current_variant.value.id);
  loader.value = false;
};

const handleSelectVariant = (
  variants: Array<unknown>,
  selectedVariants: Array<any>
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
  default_variant.value.combinations.map((item, index) => {
    const key = item.group.id;
    selected.value[key] = {
      group: key,
      id: item.variant_id,
      label: item.label,
    };
  });
};

onMounted(() => {
  // initDefaultVariant();
});
</script>
