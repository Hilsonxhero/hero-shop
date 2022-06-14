<template>
    <div class="h-10 rounded-xl overflow-hidden relative">
        <input class="form-input rounded-inherit border-2 border-transparent focus:bg-white focus:border-blue-500"
            :type="type" v-model="computedValue" :disabled="disabled" :value="value" :placeholder="placeholder">
    </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps(['modelValue', 'value', 'disabled', 'placeholder'])
const emits = defineEmits(['update:modelValue'])
const computedValue = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emits("update:modelValue", value);
    },
});
</script>

<style scoped lang="scss">
.rounded-inherit {
    border-radius: inherit;
}

.form-input {
    @apply block w-full h-full outline-none text-right bg-gray-100 transition-all ease-out duration-200 shadow-md px-3 text-sm
}
</style>