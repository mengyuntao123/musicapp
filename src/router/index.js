import Vue from 'vue'
import Router from 'vue-router'
import Happysing from '@/components/happysing'
import All from '@/components/all'
import Search from '@/components/search'
import Attention from '../components/attention/attention.vue'
import Nearby from '../components/nearby/nearby.vue'

Vue.use(Router)

let router=new Router({
  routes: [
    {
      path: '/nearby',
      name: 'Nearby',
      component: Nearby
    },
    {
      path: '/attention',
      name: 'Attention',
      component: Attention
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
    },
  ]
})
router.push('all');
export default router;
