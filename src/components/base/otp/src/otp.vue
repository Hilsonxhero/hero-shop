<template>
  <div class="flex items-center dir-ltr">
    <input
      maxlength="1"
      autofocus
      @keyup.delete="previous"
      class="form-input border-2 border-transparent focus:bg-white mr-2 h-10 focus:border-blue-500"
      type="text"
      v-for="(item, index) in length"
      v-model="values[index]"
      @input="next"
      placeholder="-"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
const props = defineProps({
  length: {
    type: Number,
    required: false,
    default: 4,
  },
});

defineOptions({
  name: "HxOtp",
});

const emit = defineEmits(["update:modelValue"]);

const values = ref(Array(length).fill(""));
const code = ref("");

const next = (e: any) => {
  let value = e.target.value;
  if (code.value.length < props.length) {
    e.target.nextSibling.nodeName == "INPUT" && value.trim().length >= 1
      ? e.target?.nextSibling?.focus()
      : false;
  }
};

const previous = (e: any) => {
  e.target.value = "";
  e.target.previousSibling.nodeName == "INPUT"
    ? e.target?.previousSibling?.focus()
    : false;
};

watch(
  () => [...values.value],
  (curVal: any, prevVal: any) => {
    let value = curVal.join("");
    code.value = value;
    emit("update:modelValue", code.value);
  },
  {
    deep: true,
  }
);
</script>

<style scoped>
.form-input {
  @apply block w-full text-center rounded-md outline-none bg-gray-100 transition-all ease-out duration-200 px-3 text-sm;
}
</style>
