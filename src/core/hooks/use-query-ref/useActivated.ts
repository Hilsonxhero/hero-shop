import {
    onActivated,
    onDeactivated,
    ref,
    shallowRef,
} from 'vue'
export function useActivated(
    config = {
        isReactive: false,
    },
) {
    const isLocked = (config.isReactive ? ref : shallowRef)(false)
    onActivated(() => {
        isLocked.value = false
    })

    onDeactivated(() => {
        isLocked.value = true
    })

    return {
        isLocked,
    }
}
