import firebase from 'firebase';
import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '@/views/Dashboard.vue'
import Project from '@/views/Project.vue'
import Team from '@/views/Team.vue'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/project',
      name: 'project',
      component: Project,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/team',
      name: 'team',
      component: Team,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    }
  ]
});

router.beforeEach((to, from, next) =>{
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if(requiresAuth && !currentUser) next('login');
  else if(!requiresAuth && currentUser) next('dashboard');
  else next();
});

export default router;