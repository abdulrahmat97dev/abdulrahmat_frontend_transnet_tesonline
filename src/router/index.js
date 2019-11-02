import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import User from '../views/User.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta:{
      forAuth:true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta:{
      forVisitors:true
    }
  },
  {
    path: '/users',
    component: User,
    meta:{
      forAuth:true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(
  (to, from, next) => {
    if(to.matched.some(record => record.meta.forVisitors)){
      if(Vue.auth.isAuthenticated()){
        next({
          path: '/'
        })
      }else next()
    }else if(to.matched.some(record => record.meta.forAuth)){
      if(! Vue.auth.isAuthenticated()){
        next({
          path: '/admin/login'
        })
      }else next()
    }
    else next()
  }
)

export default router
