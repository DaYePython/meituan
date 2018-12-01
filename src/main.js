// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 全局插件
import router from './router'
import fastClick from 'fastclick'
import Mint from 'mint-ui'
import 'babel-polyfill'
import VueLazyload from 'vue-lazyload'
// import VueAwesomeSwiper from 'vue-awesome-swiper'

// 全局css文件
import 'mint-ui/lib/style.css'
import 'style/border.css'
import 'style/reset.css'

Vue.config.productionTip = false

// 应用插件
fastClick.attach(document.body)
Vue.use(Mint)
Vue.use(VueLazyload, {
  loading: 'img/lazyload/loading-bars.svg'
})
// Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
