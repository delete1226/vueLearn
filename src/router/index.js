import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import List from '@/components/comm/List'
// import Personal from '@/components/Personal'

// 实现路由懒加载
const Personal = () => import('@/components/Personal')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default: Index,
        a: List
      }
    },
    {
      path: '/components/Personal',
      name: 'Personal',
      components: {
        default: Personal
      }
    }
  ]
})
