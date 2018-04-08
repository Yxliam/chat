// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import axios from 'axios'
import 'normalize.css/normalize.css'
Vue.config.productionTip = false
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import './utils/rem'
Vue.use(Mint);
axios.defaults.baseURL = 'http://localhost:3000'
axios.interceptors.request.use(
	config => {
		const token = localStorage.getItem('userToken');
		if (token) {
			// Bearer是JWT的认证头部信息
			config.headers.common['Authorization'] = 'yxl ' + token;
		}
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 这个名字决定了你其他组件调用的情况 this.$store这样使用
  components: { App },
  template: '<App/>'
})
