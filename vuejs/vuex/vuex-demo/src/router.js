import Vue from 'vue'
import Router from 'vue-router'

import ContactList from './components/ContactList.vue'
import ContactDetail from './components/ContactDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkClass: "nav-link",
  linkActiveClass: "active",
  routes: [
    {
      path: '/contacts',
      name: 'list',
      component: ContactList    },
    {
      path: '/contacts/:id',
      name: 'detail',
      component: ContactDetail
    },
  ]
})