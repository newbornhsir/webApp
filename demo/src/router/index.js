import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Tab from '@/components/tab/Tab'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Hello',
      component: Hello
    }, {
      path: '/login/tab',
      name: 'Tab',
      component: Tab
    }
  ]
})
