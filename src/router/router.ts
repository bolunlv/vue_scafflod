import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import routes from './routes';

const router = createRouter({
  // history: createWebHashHistory(), // hash路由模式
  history: createWebHistory(),
  routes,
})

export default router
