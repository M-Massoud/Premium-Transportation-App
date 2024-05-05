import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import CompanyProfile from './pages/CompanyProfile.vue';
import BookRide from './pages/BookRide.vue';
import Rides from './pages/Rides.vue';
import NotFound from './components/NotFound.vue';

export const navbarRoutes = [
  { path: '/company-profile', name: 'Company Profile', component: CompanyProfile },
  { path: '/book-ride', name: 'Book a Ride', component: BookRide },
  { path: '/rides', name: 'Rides', component: Rides },
];

const routes = [
  { path: '/', name: 'Home', component: Home },
  ...navbarRoutes,
  { path: '/:pathMatch(.*)', name: 'not-found', component: NotFound },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
