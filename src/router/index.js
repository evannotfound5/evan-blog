import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Article.vue')
    },{
      path: '/photos',
      name: 'photos',
      component: () => import('../views/Photos.vue')
    }, {
      path: '/shuoshuo',
      name: 'shuoshuo',
      component: () => import('../views/ShuoShuo.vue')
    }, {
      path: '/links',
      name: 'links',
      component: () => import('../views/Links.vue')
    }, {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    }, {
      path: '/404',
      name: '404',
      component: () => import('../views/NotFound.vue')
    },
    {
      path: '/:pathMatch(.*)',
      name: '*',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

export default router
