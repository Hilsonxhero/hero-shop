import { App } from "vue";
import HxIcon from '@/components/base/Icon.vue'
import HxButton from '@/components/base/button/Button.vue'
import HxBadge from '@/components/base/badge/badge.vue'
import HxOverlay from '@/components/base/overlay/overlay.vue'
import HxFormGroup from '@/components/base/form/Group.vue'
import HxFormInput from '@/components/base/form/Group.vue'
import HxFormTextarea from '@/components/base/form/Group.vue'
/**
 * Initialize Inline-Svg component
 * @param app vue instance
 */
export function registerComponents(app: App<Element>) {
    app.component('hx-icon', HxIcon);
    app.component('hx-button', HxButton);
    app.component('hx-badge', HxBadge);
    app.component('hx-form-group', HxFormGroup);
    app.component('hx-form-input', HxFormInput);
    app.component('hx-form-textarea', HxFormTextarea);
    app.component('hx-overlay', HxOverlay);
}
