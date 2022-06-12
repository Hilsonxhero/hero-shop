import { App } from "vue";
import HxIcon from '@/components/base/Icon.vue'
import HxButton from '@/components/base/button/Button.vue'

/**
 * Initialize Inline-Svg component
 * @param app vue instance
 */
export function registerComponents(app: App<Element>) {
    app.component('hx-icon', HxIcon);
    app.component('hx-button', HxButton);
}
