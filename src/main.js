import Vue from 'vue'
import App from './App.vue'
import "less-loader"
import "u-reset.css"
import "less"
import router1 from './router'
import store from './store'
Vue.config.productionTip = false;
new Vue({
  router:router1,
  store:store,
  render: h => h(App),
}).$mount('#app');
