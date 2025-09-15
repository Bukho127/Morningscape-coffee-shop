import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import MenuPage from '../views/MenuPage.vue'
import AboutUs from '../views/AboutUs.vue';
import ContactUs from '../views/ContactUs.vue';
import ServicesComponent from '../views/ServicesComponent.vue';
import ProductDetails from "@/views/ProductDetails.vue";

const routes = [
  { path: '/', name: 'LandingPage', component: LandingPage },
  { path: '/menu', name: 'MenuPage', component: MenuPage },
  {path: '/about', name: 'AboutUs', component: AboutUs  },
  {path: '/contact', name: 'ContactUs', component: ContactUs  },
  {path: '/services', name: 'ServicesComponent', component: ServicesComponent  },
  {path: "/featured-products/:id", name: "ProductDetails",component: ProductDetails },
];

const router = createRouter({
 history: createWebHistory('/'), 
  routes
})

export default router
