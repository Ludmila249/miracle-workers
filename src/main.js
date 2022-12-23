import hooper from 'hooper/dist/hooper.css';
import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import style from './styles/global.scss';



Vue.config.productionTip = false

new Vue({
  router,
  store,
  style,
  hooper,
  render: h => h(App)
}).$mount('#app')

