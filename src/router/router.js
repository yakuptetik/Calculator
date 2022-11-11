import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Theme1.vue'),
    },
  
    {
      path: '/theme2',
      name: 'Theme2',
      component: () => import('../views/Theme2.vue'),
  
    },
      {
      path: '/theme3',
      name: 'Theme3',
      component: () => import('../views/Theme3.vue'),
    },
       
  ];
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router;