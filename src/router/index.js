import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from 'views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('views/home/Home.vue'),
    children: [
      {
        path: '',
        name: 'fashion',
        component: () => import('views/home/middletabbar/Fashion.vue')
      },
      {
        path: 'fashion',
        name: 'fashion',
        component: () => import('views/home/middletabbar/Fashion.vue')
      },
      {
        path: 'newstyle',
        name: 'NewStyle',
        component: () => import('views/home/middletabbar/NewStyle.vue')
      },
      {
        path: 'choiceness',
        name: 'Choiceness',
        component: () => import('views/home/middletabbar/Choiceness.vue')
      }
    ]
  },
  {
    path: 'trolley',
    name: 'Trolley',
    component: () => import('views/trolley/Trolley.vue'),
    
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('views/category/Category.vue')
  },
  {
    path: '/profile',
    name: 'ProFile',
    component: () => import('views/profile/ProFile.vue')
  },


  // 子组件路由
 
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
