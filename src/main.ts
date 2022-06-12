import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ApiService from "@/core/services/ApiService";
import { initInlineSvg } from "@/core/plugins/inline-svg";
import { registerComponents } from "@/core/base/registerComponents";
const app = createApp(App);
ApiService.init(app);
initInlineSvg(app);
registerComponents(app);
app.use(store)
app.use(router)
app.mount('#app')
