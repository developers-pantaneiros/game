import Vue from "vue";
import App from "./App.vue";
import router from "./globals/router";
import store from "./commons/store";

import "@/globals/libs/firebase";

import "nes.css/css/nes.css";
import "@/assets/scss/main.scss";

import VModal from "vue-js-modal";
import VueClipboard from "vue-clipboard2";

import registerServiceWorker from '../registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(VModal, { dynamic: true, dynamicDefaults: { clickToClose: false } })
Vue.use(VueClipboard)

new Vue({
  router,
  store,
  registerServiceWorker,
  render: h => h(App)
}).$mount("#app");
