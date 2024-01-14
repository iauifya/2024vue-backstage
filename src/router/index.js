import { createRouter, createWebHistory } from 'vue-router'
// import { useUserStore } from '@/stores/user.js';
// import { storeToRefs } from "pinia";
import HomeView from '@/views/HomeView.vue'
// import _ from "lodash"
const router = createRouter ({
  history: createWebHistory(import.meta.env.VITE_BASE_URL), // 專案路徑
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
			"path": "/menu/list",
			"name": "menuList",
			"component": () => import('@/views/menu/MenuList.vue')
		},
		{
			"path": "/menu/add",
			"name": "menu-add",
			"component": () => import('@/views/menu/addorupdate.vue')
    },
    {
			"path": "/menu/:id/edit",
			"name": "menu-edit",
			"component": () => import('@/views/menu/addorupdate.vue')
		},
		{
			"path": "/role/list",
			"name": "roleList",
			"component": () => import('@/views/role/roleList.vue')
		},
    {
			"path": "/role/addorupdate",
			"name": "roleAddOrUpdate",
			"component": () => import('@/views/role/AddOrUpdate.vue')
		},
		{
			"path": "/role/permissions",
			"name": "rolePermissions",
			"component": () => import('@/views/role/Permissions.vue')
		},
		{
			"path": "manufacturer/list",
			"name": "manufacturerList",
			"component": () => import('@/views/manufacturer/ManufacturerList.vue')
		},
    {
			"path": "manufacturer/add",
			"name": "manufacturerAdd",
			"component": () => import('@/views/manufacturer/manufacturerAdd.vue')
		},
    {
			"path": "account/list",
			"name": "accountList",
			"component": () => import('@/views/manufacturer/AccountList.vue')
		},
    {
			"path": "account/addorupdate",
			"name": "accountAddOrUpdate",
			"component": () => import('@/views/manufacturer/AccountAddOrUpdate.vue')
		},
    {
			"path": "branchCampus/list",
			"name": "branchCampusList",
			"component": () => import('@/views/manufacturer/BranchCampusList.vue')
		},
    {
			"path": "branchCampus/addorupdate",
			"name": "branchCampusAddOrUpdate",
			"component": () => import('@/views/manufacturer/BranchCampusAddOrUpdate.vue')
		},
    {
			"path": "logo/list",
			"name": "logoList",
			"component": () => import('@/views/manufacturer/LogoList.vue')
		},
    {
			"path": "logo/addorupdate",
			"name": "logoAddOrUpdate",
			"component": () => import('@/views/manufacturer/LogoAddOrUpdate.vue')
		},
    { path: '/:catchAll(.*)', name: '404', component: HomeView } // router 例外處理
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 , behavior: 'smooth'})
      }, 300)
    })
  }
})

// router.beforeEach((to, from, next) => {
//   const userStore = useUserStore();
//   const { empno, state } = storeToRefs(userStore);
//   userStore.fetchUser()
//   if(_.isEmpty(empno.value)) {
//     alert('請重新登入')
//     location.href = 'http://192.168.1.242/manage/staff/index.asp';
//   } else if (state.value == -1 && to.meta.auth) {
//     cookieAllDate();
//     alert('您沒有權限，請洽工程部！');
//     location.href = 'http://192.168.1.242/manage/staff/index.asp';
//   } else {
//     next()
//   }
// })

export default router