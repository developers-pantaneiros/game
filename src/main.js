import Vue from "vue";
import App from "./App.vue";
import router from "./globals/router";
import store from "./commons/store";

import "@/globals/libs/firebase";

import "nes.css/css/nes.css";
import "@/assets/scss/main.scss";

import VModal from "vue-js-modal";

Vue.config.productionTip = false;

Vue.use(VModal, { dynamic: true, dynamicDefaults: { clickToClose: false } })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
