import Vue from 'vue'
import Router from 'vue-router'
import Happysing from '@/components/happysing'
import All from '@/components/all'
import Start from '../components/start.vue'
import Lead from '../components/lead.vue'
import Login from '../components/login.vue'

Vue.use(Router)

let router=new Router({
  routes: [
    // {
    //   path: '/all',
    //   name: 'All',
    //   component: All
    // },
    // {
    //   path: '/happysing',
    //   name: 'Happysing',
    //   component: Happysing
    // },
    //  {
    //   path: '/start',
    //   name: 'Start',
    //   component: Start
    // },
    {
      path: '/lead',
      name: 'Lead',
      component: Lead
    },
    // {
    //   path: '/login',
    //   name: 'Login',
    //   component: Login
    // },
  ]
})
router.push('lead');
export default router;
