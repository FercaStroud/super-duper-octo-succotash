import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import './utils/axios';
import './assets/styles/style.scss'

Vue.config.productionTip = false

const app = new Vue({
  store,
  router,
  vuetify,
  render: h => h(App),
});

router.onReady(() => {
  app.$mount('#app');
})