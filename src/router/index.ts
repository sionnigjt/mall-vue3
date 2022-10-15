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
      component: ()=> import('../views/Home.vue'),
      meta:{
        keepAlive:true
      }
    },{
      path:'/category',
      name: 'category',
      component: ()=> import('../views/Category.vue'),
      meta:{
        keepAlive:true
      }
    },{
      path: '/product/:id',
      name: 'product',
      component: () => import('../views/ProductDetail.vue'),
      meta:{
        keepAlive:true
      }
    },{
      path:'/cart',
      name: 'cart',
      component: ()=> import('../views/Cart.vue'),
      meta:{
        keepAlive:true
      }
    },{
      path:'/user',
      name: 'user',
      component: ()=> import('../views/User.vue'),
      meta:{
        keepAlive:true
      }
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
