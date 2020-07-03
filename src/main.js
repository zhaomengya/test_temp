import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import fastClick from "fastclick"; //解决移动端300毫秒点击延迟问题
import "./plugins/element.js";
import "@/assets/styles/reset.css"; //浏览器重置样式
import "@/assets/styles/border.css"; //解决移动端1像素边框问题
import "@/assets/styles/iconfont.css";
import VueAwesomeSwiper from "vue-awesome-swiper"; //引入swiper插件
import "swiper/css/swiper.css";
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;
fastClick.attach(document.body); //解决移动端300毫秒点击延迟问题

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
