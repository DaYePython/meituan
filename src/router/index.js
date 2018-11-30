import Vue from 'vue'
import Router from 'vue-router'

// 路由懒加载
const Index = (resolve) => {
  import('@/components/index/Index').then((module) => {
      resolve(module)
  })
}

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }
  ]
})
