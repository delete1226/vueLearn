import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import List from '@/components/comm/List'
// import Personal from '@/components/Personal'
// import Login from '@/components/Login'

// 实现路由懒加载
const Personal = () => import('@/components/Personal')
const Login = () => import('@/components/Login')
const Len = () => import('@/components/Len')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default: Index
      }
    },
    {
      path: '/components/Personal',
      name: 'Personal',
      components: {
        default: Personal
      }
    },
    {
      path: '/components/Login',
      name: 'Login',
      components: {
        default: Login,
        a: List
      }
    },
    {
      path: '/components/Len',
      name: 'Len',
      components: {
        default: Len
      }
    }
  ]
})
