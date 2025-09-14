import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import MenuPage from '../views/MenuPage.vue'
import AboutUs from '../views/AboutUs.vue';
import ContactUs from '../views/ContactUs.vue';

const routes = [
  { path: '/', name: 'LandingPage', component: LandingPage },
  { path: '/menu', name: 'MenuPage', component: MenuPage },
  {path: '/about', name: 'AboutUs', component: AboutUs  },
  {path: '/contact', name: 'ContactUs', component: ContactUs  },
]

const router = createRouter({
 history: createWebHistory('/'), 
  routes
})

export default router
