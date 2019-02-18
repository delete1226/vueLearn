import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Personal from '@/components/Personal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/components/Personal',
      name: 'Personal',
      component: Personal
    }
  ]
})
