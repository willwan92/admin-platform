import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
import BlankLayout from '@/layout/BlankLayout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: '首页', icon: 'home' }
      }
    ]
  },
  {
    name: 'setting',
    path: '/setting',
    component: Layout,
    redirect: '/setting/system',
    meta: {
      title: '系统设置',
      icon: 'el-icon-setting'
    },
    children: [
      {
        name: 'system',
        path: 'system',
        redirect: '/setting/system/time',
        component: BlankLayout,
        meta: { title: '系统设置' },
        children: [
          {
            name: 'time',
            path: 'time',
            component: () => import('@/views/setting/system/time'),
            meta: { title: '时间管理' }
          },
          {
            name: 'conf',
            path: 'conf',
            component: () => import('@/views/setting/system/conf'),
            meta: { title: '配置管理' }
          },
          {
            name: 'update',
            path: 'update',
            component: () => import('@/views/setting/system/update'),
            meta: { title: '软件升级' }
          },
          {
            name: 'auth',
            path: 'auth',
            component: () => import('@/views/setting/system/auth'),
            meta: { title: '授权管理' }
          },
          {
            name: 'log',
            path: 'log',
            component: () => import('@/views/setting/system/log'),
            meta: { title: '日志管理' }
          },
          {
            name: 'host',
            path: 'host',
            component: () => import('@/views/setting/system/host'),
            meta: { title: '主机管理' }
          }
        ]
      },
      {
        name: 'management',
        path: 'management',
        component: BlankLayout,
        redirect: '/setting/management/method',
        meta: { title: '管理配置' },
        children: [
          {
            name: 'method',
            path: 'method',
            component: () => import('@/views/setting/management/method'),
            meta: { title: '管理方式' }
          },
          {
            name: 'creditable-host',
            path: 'creditable-host',
            component: () => import('@/views/setting/management/creditable-host'),
            meta: { title: '可信主机' }
          },
          {
            name: 'account',
            path: 'account',
            component: () => import('@/views/setting/management/account'),
            meta: { title: '管理员账号' }
          },
          {
            name: 'snmp',
            path: 'snmp',
            component: () => import('@/views/setting/management/snmp'),
            meta: { title: 'SNMP配置' }
          }
        ]
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
