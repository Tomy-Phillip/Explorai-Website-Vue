import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Homepage from './views/homepage'
import HomepageTest from './views/homepage-test'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Homepage',
      path: '/',
      component: Homepage,
    },
    {
      name: 'HomepageTest',
      path: '/homepage-test',
      component: HomepageTest,
    },
  ],
})
