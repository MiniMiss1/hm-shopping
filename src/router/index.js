import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/views/layout'
import Home from '@/views/layout/home'
import Category from '@/views/layout/category'
import Cart from '@/views/layout/cart'
import User from '@/views/layout/user'

import store from '@/store'
// 路由懒加载 按需加载
const Login = () => import('@/views/login')
const MyOrder = () => import('@/views/myorder')
const Pay = () => import('@/views/pay')
const ProDetail = () => import('@/views/prodetail')
const Search = () => import('@/views/search')
const Searchlist = () => import('@/views/search/list')
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      // 重定向
      component: Layout,
      redirect: '/home',
      // 二级路由
      children: [
        { path: 'home', component: Home },
        { path: 'category', component: Category },
        { path: 'cart', component: Cart },
        { path: 'user', component: User }
      ]
    },
    { path: '/login', component: Login },
    { path: '/myorder', component: MyOrder },
    { path: '/pay', component: Pay },
    // 动态路由传参，确认将来是哪个商品  路由参数中携带 id
    { path: '/prodetail/:id', component: ProDetail },
    { path: '/search', component: Search },
    { path: '/searchlist', component: Searchlist }
  ]
})

// 所有的路由在真正被访问到之前（解析渲染对应的组件页面前），都会先经过全局前置守卫
// 只有全局前置守卫放行了，才会到达对应的页面

// 全局前置导航守卫
// to: 到哪里去，到哪去的完整路由信息对象 （路径，参数）
// from: 从哪里来，从哪来的完整路由信息对象（路径，参数）
// next():是否放行
// （1）  next()  直接放行，放行到to要去的路径
// （2）  next(路径)  进行拦截，拦截到next里面配置的路径

// 定义一个数组，专门用于存放所有需要权限访问的页面
const authUrls = ['/pay', '/myorder']
router.beforeEach((to, from, next) => {
  // console.log(to, from, next)
  // 看to.path是否在authUrl中出现
  if (!authUrls.includes(to.path)) {
    // 非权限页面，直接放行
    next()
    return
  }
  // 是权限页面，需要判断token
  const token = store.getters.token
  if (token) {
    next()
  } else {
    next('/login')
  }
})

export default router
