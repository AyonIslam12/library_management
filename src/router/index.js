import { createRouter, createWebHistory } from 'vue-router'
//backend page
import Dashboard from '../views/backend/dashboard';

import admin from '../views/backend/admin/adminHome';
import adminLayout from '../views/backend/admin/adminLayout';
import bookEntry from '../views/backend/admin/bookEntry';
import bookList from '../views/backend/admin/bookList';
import users from '../views/backend/admin/users';

import studentLayout from '../views/backend/student/studentLayout';
import student from '../views/backend/student/studentHome';
import studentBookList from '../views/backend/student/bookList';

import management from '../views/backend/management';
//frontend page
import authLayout from '../views/frontend/authLayout';
import Login from '../views/frontend/login';
import Signup from '../views/frontend/signup';
import Protfolio from '../views/frontend/protfolio';


const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },
 //admin routes
  {
    path: '/admin',
    component: adminLayout,
    children: [
      {
        path: '',
        name: 'admin',
        component: admin,
      },
      {
        path: '/users',
        name: 'users',
        component: users,
       
      },
      {
        path: '/book-entry',
        name: 'bookEntry',
        component: bookEntry,
       
      },
      {
        path: '/book-list',
        name: 'bookList',
        component: bookList,
       
      },
    ],
  },

  {
    path: '/student',
    component: studentLayout,
    children: [
      {
        path: '',
        name: 'student',
        component: student,
      },
      {
        path: '/book-List',
        name: 'studentBookList',
        component: studentBookList,
      },
      
    ],
  },



  {
    path: '/management',
    name: 'management',
    component: management,
  },
  {
    path: '/auth',
    component: authLayout,
    children: [
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
    ],
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
