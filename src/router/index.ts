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
    },{
      path: '/product/:id',
      name: 'product',
      component: () => import('../views/ProductDetail.vue'),
    },
  
  ]
})
const routeList=["/","/home","/login"]
router.beforeEach((to,from,next)=>{
  console.log(!routeList.includes(to.path));
  if (!routeList.includes(to.path)) {
    next({
      name:'login'
    })
  }
  else next()
})
export default router
