<template>
    <button class="hx-button" :disabled="disabled || loading" :type="type" :class="[
        `hx-button__${size}`,
        `hx-button__${variant}`,
        {
            'hx-button__disabled': disabled,
            'hx-button__loading': loading,
            'hx-button__plain': plain,
            'rounded-full': pill,
            'hx-button__icon': icon
        }
    ]">
        <!-- <i class="el-icon-loading" v-if="loading"></i> -->
        <span class="hx-button__cotent" v-if="$slots.default">
            <slot></slot>
        </span>
    </button>
</template>

<script setup lang="ts">


import { computed, PropType } from 'vue'

const props = defineProps({
    size: {
        type: String,
        default: 'normal'
    },
    variant: {
        type: String,
        default: 'primary'
    },
    type: {
        type: [String] as PropType<'button' | 'reset' | 'submit'>,
        default: 'button'
    },
    loading: {
        type: Boolean,
        default: () => false
    },
    disabled: {
        type: Boolean,
        default: () => false
    },
    plain: {
        type: Boolean,
        default: () => false
    },
    pill: {
        type: Boolean,
        default: () => false
    },
    block: {
        type: Boolean,
        default: () => false
    },
    squared: {
        type: Boolean,
        default: () => false
    },
    outlined: {
        type: Boolean,
        default: () => false
    },
    text: {
        type: Boolean,
        default: () => false
    },
    icon: {
        type: Boolean,
        default: () => false
    },
    to: {
        type: [String, Object],
    },
})

</script>

<style lang="scss" scoped>
// @import '@/assets/sass/core/components/button.scss'
</style>