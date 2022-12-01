import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import ApiService from "@/core/services/ApiService";
import { initInlineSvg } from "@/core/plugins/inline-svg";
import { initVeeValidate } from "@/core/plugins/vee-validate";
import { createPinia } from "pinia";
import installer from "@/core/installer/index";
import { createHead } from "@vueuse/head"

const app = createApp(App);

app.config.globalProperties.$filters = {
  twoDigits(value) {
    if (value.toString().length <= 1) {
      return "0" + value.toString();
    }
    return value.toString();
  },
  separate(Number) {
    // var x, y, z
    // Number += '';
    // Number = Number.replace(',', '');
    // x = Number.split('.');
    // y = x[0];
    // z = x.length > 1 ? '.' + x[1] : '';
    // var rgx = /(\d+)(\d{3})/;
    // while (rgx.test(y))
    //   y = y.replace(rgx, '$1' + ',' + '$2');
    // return y + z;
    const value = Number / 10
    return value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  }
};

const clickoutside = {
  created(el: any, binding: any, vnode: any) { },

  beforeMount(el: any) { },

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
  beforeUpdate() { },
  updated() { },

  beforeUnmount(el: any) {
    document.body.removeEventListener("click", el.handler);
    document.body.removeEventListener("touchstart", el.handler);
  },

  unmounted(event: any) {
    // event.stopPropagation()
  },
};

const head = createHead()
const pinia = createPinia();

// app.directive("clickoutside", clickoutside);
ApiService.init(app);
installer.install(app);
initInlineSvg(app);
initVeeValidate(app);
app.use(head)
app.use(pinia);
app.use(router);
app.mount("#app");
