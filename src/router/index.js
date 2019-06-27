import Vue from 'vue'
import Router from 'vue-router'
import Happysing from '@/components/happysing'
import All from '@/components/all'
import Search from '@/components/search'
import SgxLeaderboard from '@/components/sgxLeaderboard'
import Sgxview from '@/components/sgxview'
import My from '@/components/my'
import Sidebar from '@/components/sidebar'

Vue.use(Router)

let router=new Router({
  routes: [
    {
      path: '/sgxLeaderboard',
      name: 'SgxLeaderboard',
      component: SgxLeaderboard
    },
    {
      path: '/sgxview',
      name: 'Sgxview',
      component: Sgxview
    },
    {
      path: '/sidebar',
      name: 'Sidebar',
      component: Sidebar
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/all',
      name: 'All',
      component: All
    },
    {
      path: '/happysing',
      name: 'Happysing',
      component: Happysing
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
    ,
    {
      path: '/sgxLeaderboard',
      name: 'SgxLeaderboard',
      component: SgxLeaderboard
    },
    ,
    {
      path: '/sgxview',
      name: 'Sgxview',
      component: Sgxview
    },
  ]
})
router.push('all');
export default router;
