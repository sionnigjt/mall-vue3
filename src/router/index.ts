import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'login',
      component: ()=> import('../views/Login.vue')
    },
    {
      path:'/home',
      name: 'home',
      component: ()=> import('../views/Home.vue')
    },{
      path:'/category',
      name: 'category',
      component: ()=> import('../views/Category.vue')
    }
  
  ]
})

export default router
