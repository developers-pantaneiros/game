import Vue from 'vue'
import App from './App.vue'
import router from './globals/router'
import store from './commons/store'

// TODO: Configurar corretamente o firebase no projeto, escondendo as credenciais.
// import '@/globals/libs/firebase'

import 'nes.css/css/nes.css'
import '@/assets/scss/main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
