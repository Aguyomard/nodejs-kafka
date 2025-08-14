import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import KafkaTest from '../views/KafkaTest.vue';
import ClothingShop from '../views/ClothingShop.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld,
  },
  {
    path: '/kafka-test',
    name: 'KafkaTest',
    component: KafkaTest,
  },
  {
    path: '/clothing-shop',
    name: 'ClothingShop',
    component: ClothingShop,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
