import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/planking',
    name: 'Planking',
    component: () => import(/* webpackChunkName: "about" */ '../views/Planking.vue'),
  },
  {
    path: '/progress',
    name: 'Progress',
    component: () => import(/* webpackChunkName: "about" */ '../views/Progress.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
