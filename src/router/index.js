import Vue from 'vue'
import Router from 'vue-router'
import Login from '@pages/login/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    }
  ]
})

// router.beforeEach((to, from) => {
//   console.log(to, from, 'from____________')
//   // if (from === VueRouter.START_LOCATION) {
//   //   // 初始导航
//   // }
// })

// export default router
