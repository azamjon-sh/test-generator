import { createRouter, createWebHistory } from 'vue-router'
import DemoForm1 from '@/views/DemoForm.vue';

const routes = [
  { path: '/', component: DemoForm1 },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router
