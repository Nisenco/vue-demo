import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import HelloWorld from '@/components/HelloWorld'
Vue.use(Vuex);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
