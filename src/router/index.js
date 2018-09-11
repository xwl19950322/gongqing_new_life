import Vue from 'vue'
import Router from 'vue-router'
// 引入底部选项卡路由组件
import Home_page from '../Tab/Home_page/Home_page'
import Found_page from '../Tab/Found_page/Found_page'
import My_page from '../Tab/My_page/My_page'
// 功能组件
import Convenient from '../page/convenient/convenient'
import Security from '../page/security/security'
import Government from '../page/Government/Government'
import Features from '../page/features/features'
Vue.use(Router)

export default new Router({
  routes: [
    /*
    首页
    */
    {
      path: '/home_page',
      component: Home_page,
      meta:{
        showFooter:true
      }
    },
    /*
    功能发现
    */
    {
      path: '/found_page',
      component: Found_page,
      meta:{
        showFooter:true
      }
    },
    /*
    个人空间
    */
    {
      path: '/my_page',
      component: My_page,
      meta:{
        showFooter:true
      }
    },
    // 便民服务
    {
      path:'/convenient',
      component:Convenient
    },
    // 公安政务服务
    {
      path:'/security',
      component:Security
    },
    // 政务应用
    {
      path:'/government',
      component:Government
    },
    // 特色模板
    {
      path:'/features',
      component:Features
    },
    {
      path: '/',
      redirect: '/home_page'
    }
  ]
})
