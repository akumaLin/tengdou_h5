// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store';
import VueResource from 'vue-resource';
Vue.use(VueResource);
import './common/scss/index.scss';
import {InfiniteScroll} from 'mint-ui'

Vue.use(InfiniteScroll);
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
