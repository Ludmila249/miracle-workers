import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import style from './styles/global.scss';
import VueSplide from '@splidejs/vue-splide';

Vue.config.productionTip = false

new Vue({
  VueSplide,
  router,
  store,
  style,
  render: h => h(App)
}).$mount('#app')

