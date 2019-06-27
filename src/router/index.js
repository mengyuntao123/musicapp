import Vue from 'vue'
import Router from 'vue-router'
import Happysing from '@/components/happysing'
import All from '@/components/all'
import Search from '@/components/search'
import SgxLeaderboard from '@/components/sgxLeaderboard'
import Sgxview from '@/components/sgxview'

Vue.use(Router)

let router=new Router({
  routes: [
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
router.push('sgxview');
export default router;
