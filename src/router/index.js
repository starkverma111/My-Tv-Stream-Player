import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import PlayPage from '../views/PlayPage.vue';
import AboutPage from '../views/AboutPage.vue';
import ContactPage from '../views/ContactPage.vue';
import CategoryPage from '../views/CategoryPage.vue';
import LoginPage from '../views/LoginPage.vue';
import SignupPage from '../views/SignupPage.vue';
import ProfilePage from '../views/ProfilePage.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/play',
    name: 'PlayPage',
    component: PlayPage,
    props: true,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = localStorage.getItem('authToken');
      isAuthenticated ? next() : next({ name: 'LoginPage' });
    },
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage,
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: ContactPage,
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = localStorage.getItem('authToken');
      isAuthenticated ? next({ name: 'HomePage' }) : next();
    },
  },
  {
    path: '/signup',
    name: 'SignupPage',
    component: SignupPage,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = localStorage.getItem('authToken');
      isAuthenticated ? next({ name: 'HomePage' }) : next();
    },
  },
  {
    path: '/profile',
    name: 'ProfilePage',
    component: ProfilePage,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = localStorage.getItem('authToken');
      isAuthenticated ? next() : next({ name: 'LoginPage' });
    },
  },
  {
    path: '/:category', // Dynamic route for categories
    name: 'CategoryPage',
    component: CategoryPage,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = localStorage.getItem('authToken');
      isAuthenticated ? next() : next({ name: 'LoginPage' });
    },
  },
  // Catch-all route to redirect invalid routes to the HomePage
  {
    path: '/:pathMatch(.*)*', // Catch-all wildcard
    redirect: { name: 'HomePage' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
