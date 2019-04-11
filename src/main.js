import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";

import defaultLayout from "./layouts/DefaultLayout";
import blankLayout from "./layouts/BlankLayout";

Vue.component("default-layout", defaultLayout);
Vue.component("blank-layout", blankLayout);

window.$ = window.jQuery = require("jquery");

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
