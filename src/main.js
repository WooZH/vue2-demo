/* eslint-disable */

import Vue from 'vue';
import VueRouter from 'vue-router';
import vueResource from 'vue-resource';

import App from 'src/App';
import home from 'src/views/home.vue';
import about from 'src/views/about.vue';

Vue.use(VueRouter);
Vue.use(vueResource);

// 开启debug模式
Vue.config.debug = true;
// 让 vue-resource 使用 content-type urlencode 的格式进行ajax请求
Vue.http.options.emulateJSON = true

//2.0 router
const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
});

//替换 router.start
export default new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

