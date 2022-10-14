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
    },{
      path:'/cart',
      name: 'cart',
      component: ()=> import('../views/Cart.vue')
    },
  
  ]
})
const routeList=["/","/home","/login"]
router.beforeEach((to,from,next)=>{
  
  if (!(routeList.includes(to.path)||localStorage.getItem('token')!=null)) {
    next({
      name:'login'
    })
  }
  else next()
})
export default router
