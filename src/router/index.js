import { createRouter, createWebHistory } from 'vue-router'

// Import views
import Home from '@/views/Home.vue'
import Appointment from '@/views/Appointment.vue'
import Services from '@/views/Services.vue'
import Pricing from '@/views/Pricing.vue' // NEW

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/appointment',
    name: 'Appointment',
    component: Appointment,
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing, // NEW route
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
