import Vue from "vue";
import Router from "vue-router";
//import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import UserIndex from '@/components/User/Index'
import UserCreate from '@/components/User/CreateUser'
import UserEdit from '@/components/User/EditUser'
import UserShow from '@/components/User/ShowUser'
import Login from '@/components/Login'

import LipstickIndex from"@/components/Lipsticks/Index";
import LipstickCreate from "@/components/Lipsticks/CreateLipstick";
import LipstickEdit from "@/components/Lipsticks/EditLipstick";
import LipstickShow from "@/components/Lipsticks/ShowLipstick";

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'user-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },


    {
      path: "/lipsticks",
      name: "lipsticks",
      component: LipstickIndex
    },
    {
      path: "/lipstick/create",
      name: "lipstick-create",
      component: LipstickCreate
    },
    {
      path: "/lipstick/edit/:lipstickId",
      name: "lipstick-edit",
      component: LipstickEdit
    },
    {
      path: "/lipstick/:lipstickId",
      name: "lipstick",
      component:LipstickShow
    },
  ]
})