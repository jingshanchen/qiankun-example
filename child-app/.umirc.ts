import { defineConfig } from 'umi';

export default defineConfig({
  history: {
    type: 'hash'
  },
  base: '/child-app',
  qiankun: {
    slave: {}
  },
  routes: [
    { path: '/index', component: '@/pages/index' },
    { path: '/about', component: '@/pages/about' },
  ],
});
