<template>
  <div
    :class="[
      ns.b('item'),
      ns.is('active', isActive),
      ns.is('disabled', disabled),
    ]"
  >
    <div
      role="tab"
      :aria-expanded="isActive"
      :aria-controls="ns.b(`content-${id}`)"
      :aria-describedby="ns.b(`content-${id}`)"
    >
      <div
        :id="ns.b(`head-${id}`)"
        :class="[
          ns.be('item', 'header'),
          ns.is('active', isActive),
          { focusing: focusing && !disabled },
        ]"
        role="button"
        :tabindex="disabled ? -1 : 0"
        @click="handleHeaderClick"
        @keypress.space.enter.stop.prevent="handleEnterClick"
        @focus="handleFocus"
        @blur="focusing = false"
      >
        <div>
          <slot name="title">{{ title }}</slot>
        </div>
        <!-- <icon :class="[ns.be('item', 'arrow'), ns.is('active', isActive)]">
          <arrow-right />
        </icon> -->

        <hx-icon
          icon="chevron-down"
          class="w-6 h-6"
          :class="[ns.be('item', 'arrow'), ns.is('active', isActive)]"
        ></hx-icon>
      </div>
    </div>
    <collapse-transition>
      <div
        v-show="isActive"
        :id="ns.b(`content-${id}`)"
        :class="ns.be('item', 'wrap')"
        role="tabpanel"
        :aria-hidden="!isActive"
        :aria-labelledby="ns.b(`head-${id}`)"
      >
        <div :class="ns.be('item', 'content')">
          <slot />
        </div>
      </div>
    </collapse-transition>
  </div>
</template>

<script setup lang="ts">
import { PropType, watch, ref, inject, computed } from "vue";

import {
  definePropType,
  generateId,
  isNumber,
  isString,
  mutable,
} from "@/core/utils";

import { useNamespace } from "@/core/hooks";

import { collapseContextKey } from "@/core/tokens";

import type { CollapseActiveName } from "./collapse";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  name: {
    type: definePropType<CollapseActiveName>([String, Number]),
    default: () => generateId(),
  },
  disabled: Boolean,
});

const collapse = inject(collapseContextKey);

const focusing = ref(false);
const isClick = ref(false);
const id = ref(generateId());

const isActive = computed(() =>
  collapse?.activeNames.value.includes(props.name)
);
const ns = useNamespace("collapse");

const handleFocus = () => {
  setTimeout(() => {
    if (!isClick.value) {
      focusing.value = true;
    } else {
      isClick.value = false;
    }
  }, 50);
};

const handleHeaderClick = () => {
  if (props.disabled) return;
  collapse?.handleItemClick(props.name);
  focusing.value = false;
  isClick.value = true;
};

const handleEnterClick = () => {
  collapse?.handleItemClick(props.name);
};

defineExpose({
  /** @description current collapse-item whether active */
  isActive,
});
</script>

<style scoped>
.collapse-transition {
  transition: 0.3s height ease-in-out, 0.3s padding-top ease-in-out,
    0.3s padding-bottom ease-in-out;
}
.collapse-transition-leave-active,
.collapse-transition-enter-active {
  transition: 0.3s max-height ease-in-out, 0.3s padding-top ease-in-out,
    0.3s padding-bottom ease-in-out;
}
.horizontal-collapse-transition {
  transition: 0.3s width ease-in-out, 0.3s padding-left ease-in-out,
    0.3s padding-right ease-in-out;
}
</style>
