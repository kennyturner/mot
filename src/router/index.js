import Vue from 'vue'
import Router from 'vue-router'
import Lookup from '@/components/Lookup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Lookup',
      component: Lookup
    }
  ]
})
