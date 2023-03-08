import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/login/Login.vue'), // 注意这里要带上 文件后缀.vue
  },
  {
    path: '/helloworld',
    name: 'HelloWorld',
    component: () => import('@/pages/helloworld/HelloWorld.vue'), 
  },
];

export default routes;
