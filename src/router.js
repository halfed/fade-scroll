import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './components/HelloWorld'

Vue.use(Router)

function lazyLoad(view){
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  return() => import(/* webpackChunkName: ex."about" */ `@/views/${view}.vue`)
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: lazyLoad('Home')
    }
  ]
})
