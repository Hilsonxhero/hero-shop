
import { createApp, VNode } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ApiService from "@/core/services/ApiService";
import { initInlineSvg } from "@/core/plugins/inline-svg";
import { registerComponents } from "@/core/base/registerComponents";

// import registerDirectives from "@/core/directives";
const app = createApp(App);


const clickoutside = {
    created(el: any, binding: any, vnode: any) {

        const parent = `.${binding.arg}`

        const handler = (event: any) => {
            let overlay = document.getElementById("hx-overlay")
            overlay?.classList.add('is-active')
            document.body.classList.add('overflow-hidden')
            if (!event.target.closest(parent)) {
                binding.value(event, el);
                overlay?.classList.remove('is-active')
                document.body.classList.remove('overflow-hidden')
            }
        }
        // register click and touch events
        document.body.addEventListener('click', handler)
        document.body.addEventListener('touchstart', handler)


    },

    beforeMount(el: any) {

    },

    mounted() {

    },
    beforeUpdate() { },
    updated() { },

    beforeUnmount(el: any) {
        document.body.removeEventListener('click', el.clickOutsideEvent)
        document.body.removeEventListener('touchstart', el.clickOutsideEvent)
    },

    unmounted(event: any) {
        // event.stopPropagation()
    }
}

app.directive('clickoutside', clickoutside)



ApiService.init(app);
initInlineSvg(app);
registerComponents(app);
app.use(store)
app.use(router)
app.mount('#app')
