import { createRouter, createWebHistory } from 'vue-router'
//backend page
import Dashboard from '../views/backend/dashboard';
import admin from '../views/backend/admin';
import student from '../views/backend/student';
import management from '../views/backend/management';
//frontend page
import Login from '../views/frontend/login';
import Signup from '../views/frontend/signup';
import Protfolio from '../views/frontend/protfolio';


const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin,
  },
  {
    path: '/student',
    name: 'student',
    component: student,
  },
  {
    path: '/management',
    name: 'management',
    component: management,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
   
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
   
  },
  {
    path: '/protfolio',
    name: 'protfolio',
    component: Protfolio,
   
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
