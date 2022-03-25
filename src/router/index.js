import {createRouter,createWebHashHistory} from 'vue-router'
import Layout from '../layout/index.vue'
const routes = [
  {
    path: '/',
    name: '/',
    component: Layout,
    redirect: '/finder',
    hiddent:true,
  },
  {
    path: '/finder',
    name: 'finder',
    component: Layout,
    redirect: '/finder/home',
    meta: { icon: '', title: '视频号' },
    children: [
      {
        path: '/finder/home',
        name: 'finder/home',
        component: ()=>import('../view/audit.vue'),
        meta: { icon: '', title: '动态信息' }
      },
      {
        path: '/finder/wxpage',
        name: 'finder/wxpage',
        component: ()=>import('../view/wxIndex.vue'),
        meta: { icon: '', title: '视频号信息' }
      }
    ]
  },
  {
    path: '/wxgame',
    name: 'wxgame',
    component: Layout,
    redirect: '/wxgame/home',
    meta: { icon: '', title: '微信游戏' },
    children: [
      {
        path: '/wxgame/home',
        name: 'wxgame/home',
        component: ()=>import('../view/wangzherongyao.vue'),
        meta: { icon: '', title: '王者荣耀' }
      },
      {
        path: '/wxgame/hepingjingying',
        name: 'hepingjingying',
        component: ()=>import('../view/hepingjingying.vue'),
        meta: { icon: '', title: '和平精英' }
      }
    ]
  },
]

export default createRouter({
  history:createWebHashHistory(),
  routes,
})

