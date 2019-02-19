import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
// import Personal from '@/components/Personal'

// 实现路由懒加载
const Personal = () => import('@/components/Personal')

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
