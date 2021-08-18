import { createRouter, createWebHistory } from 'vue-router'
//backend page
import Dashboard from '../views/backend/dashboard';

import admin from '../views/backend/admin/adminHome';
import adminLayout from '../views/backend/admin/adminLayout';
import bookEntry from '../views/backend/admin/bookEntry';
import bookList from '../views/backend/admin/bookList';
import entryList from '../views/backend/admin/entryList';
import newEntry from '../views/backend/admin/newEntry';
import adminProfile from '../views/backend/admin/adminProfile';
import users from '../views/backend/admin/users';

import studentLayout from '../views/backend/student/studentLayout';
import student from '../views/backend/student/studentHome';
import studentBookList from '../views/backend/student/bookList';
import studentProfile from '../views/backend/student/studentProfile';

import management from '../views/backend/management/managementHome';
import managementLayout from '../views/backend/management/managementLayout';
import managementProfile from '../views/backend/management/managementProfile';
import managementBookList from '../views/backend/management/bookList';
import managementEntryList from '../views/backend/management/entryList';
import managementNewEntry from '../views/backend/management/newEntry';
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
        path: '/admin-profile',
        name: 'adminProfile',
        component: adminProfile,
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
      {
        path: '/entry-list',
        name: 'entryList',
        component: entryList,
      },
      {
        path: '/entry-list',
        name: 'newEntry',
        component: newEntry,
      },
     
    ],
  },
//student routes
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
        path: '/student-profile',
        name: 'studentProfile',
        component: studentProfile,
      },
      {
        path: '/book-List',
        name: 'studentBookList',
        component: studentBookList,
      },
      
    ],
  },
// Management routes
 
  {
    path: '/management',
    component: managementLayout,
    children: [
      {
        path: '',
        name: 'management',
        component: management,
      },
      {
        path: '/management-profile',
        name: 'managementProfile',
        component: managementProfile,
      },
      {
        path: '/book-list',
        name: 'managementBookList',
        component: managementBookList,
      },
      {
        path: '/entry-list',
        name: 'managementEntryList',
        component: managementEntryList,
      },
      {
        path: '/new-entry',
        name: 'managementNewEntry',
        component: managementNewEntry,
      },
      
    ],
  },
  //auth routes
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
