import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "@/store";
import "@/api/common/requestInterceptors";

Vue.config.productionTip = false;

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@/assets/scss/variables.scss";
import Multiselect from "vue-multiselect";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.component("multiselect", Multiselect);
import "vue-multiselect/dist/vue-multiselect.min.css";
import "@/assets/scss/multiselect.scss";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
