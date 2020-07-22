import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import VueCarousel from 'vue-carousel'
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);
Vue.use(VueAwesomeSwiper)
Vue.use(VueCarousel);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
