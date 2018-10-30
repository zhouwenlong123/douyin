import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('@/views/index');
const home = () => import('@/views/home');
const follow = () => import('@/views/follow');
const plus = () => import('@/views/plus');
const news = () => import('@/views/news');
const my = () => import('@/views/my');
const Recommend = () => import('@/views/Recommend');
const City = () => import('@/views/City');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index,
      children:[
        {
          path: '/index/home',
          name: 'home',
          component: home,
          redirect:'/index/home/Recommend',
          children:[
            {
              path: '/index/home/Recommend',
              name: 'Recommend',
              component: Recommend,
            },
            {
              path: '/index/home/City',
              name: 'City',
              component: City,
            }
          ]
        },
        {
          path: '/index/follow',
          name: 'follow',
          component: follow,
        },
        {
          path: '/index/plus',
          name: 'plus',
          component: plus,
        },
        {
          path: '/index/news',
          name: 'news',
          component: news,
        },
        {
          path: '/index/my',
          name: 'my',
          component: my,
        }
      ]
    },
    {
      path: '*',
      redirect: '/index/home/Recommend'
    }
  ]
})
