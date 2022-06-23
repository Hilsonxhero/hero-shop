import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import ApiService from "@/core/services/ApiService";
import { initInlineSvg } from "@/core/plugins/inline-svg";
import installer from "@/core/installer/index";

const app = createApp(App);

const clickoutside = {
  created(el: any, binding: any, vnode: any) {},

  beforeMount(el: any) {},

  mounted(el: any, binding: any, vnode: any) {
    const parent = `.${binding.arg}`;
    el.handler = (event: any) => {
      if (!event.target.closest(parent) && !el.contains(event.target)) {
        binding.value(event, el);
      }
    };
    document.body.addEventListener("click", el.handler);
    document.body.addEventListener("touchstart", el.handler);
  },
  beforeUpdate() {},
  updated() {},

  beforeUnmount(el: any) {
    document.body.removeEventListener("click", el.handler);
    document.body.removeEventListener("touchstart", el.handler);
  },

  unmounted(event: any) {
    // event.stopPropagation()
  },
};

app.directive("clickoutside", clickoutside);

ApiService.init(app);
installer.install(app);
initInlineSvg(app);
// registerComponents(app);
app.use(store);

app.use(router);
app.mount("#app");
