<template>
    <div class="flex flex-col items-start justify-start" :id="groupId" :class="ns.b('group')" role="group"
        :aria-label="!isLabeledByFormItem ? label || 'checkbox-group' : undefined"
        :aria-labelledby="isLabeledByFormItem ? elFormItem.labelId : undefined">
        <slot />
    </div>
</template>

<script lang="ts" setup>
// @ts-nocheck
import { computed, nextTick, provide, toRefs, watch } from 'vue'
import { UPDATE_MODEL_EVENT } from '@/core/constants'
import { debugWarn } from '@/core/utils'
import { useNamespace, useSize } from '@/core/hooks'
import {
    checkboxGroupEmits,
    useCheckboxGroup,
    useCheckboxGroupId,
    useCheckboxGroupProps,
} from './checkbox'

defineOptions({
    name: 'HxCheckboxGroup',
})

const props = defineProps(useCheckboxGroupProps)
const emit = defineEmits(checkboxGroupEmits)

const { elFormItem } = useCheckboxGroup()
const { groupId, isLabeledByFormItem } = useCheckboxGroupId(props, {
    elFormItem,
})
const checkboxGroupSize = useSize()
const ns = useNamespace('checkbox')

const changeEvent = (value) => {
    emit(UPDATE_MODEL_EVENT, value)
    nextTick(() => {
        emit('change', value)
    })
}

const modelValue = computed({
    get() {
        return props.modelValue
    },
    set(val) {
        changeEvent(val)
    },
})

provide('CheckboxGroup', {
    name: 'ElCheckboxGroup',
    modelValue,
    ...toRefs(props),
    checkboxGroupSize,
    changeEvent,
})

watch(
    () => props.modelValue,
    () => {
        if (props.validateEvent) {
            elFormItem.validate?.('change').catch((err) => debugWarn(err))
        }
    }
)
</script>
