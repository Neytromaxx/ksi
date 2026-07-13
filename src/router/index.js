// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'landing', component: () => import('@/views/LandingView.vue') },
  { path: '/test', name: 'quiz', component: () => import('@/views/QuizView.vue') },
  {
    path: '/natija/:sessionId?',
    name: 'result',
    component: () => import('@/views/ResultView.vue'),
    props: true,
  },
  { path: '/admin', name: 'admin', component: () => import('@/views/AdminView.vue') },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})
