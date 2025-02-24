import HomeView from '@/views/HomeView.vue'

/* ------------------------------ Code Splitted ----------------------------- */
const AboutView = () => import('@/views/AboutView.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting

    component: AboutView,
  },
]

export default routes
