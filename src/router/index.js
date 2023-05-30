import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Appointments from '../views/Appointments.vue'
import Admin from '../views/Admin.vue'
import NotFound from '../views/NotFound'
import store from '../store';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: checkAuth
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    beforeEnter: checkAdmin
  },
  {
    path: '/appointments',
    name: 'Appointments',
    component: Appointments,
    beforeEnter: checkAuth
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

function checkAuth(to, from, next){
  if (store.state.user.loggedIn){
    next();
  } 
  else {
    next("/");
  }
}

function checkAdmin(to, from, next){
  if (store.state.user.loggedIn && store.state.user.data.userData.isAdmin){
    // console.log('access granted');
    next();
  } 
  else {
    // console.log('access denied');
    next("/");
  }
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router