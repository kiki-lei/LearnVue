import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// fortawesome
import 'font-awesome/css/font-awesome.css'


import App from './App.vue'

import router from "./router";

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
Vue.config.productionTip = false;


new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
