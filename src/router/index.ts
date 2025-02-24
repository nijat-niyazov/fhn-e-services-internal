import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const appUrl = import.meta.env.BASE_URL

const router = createRouter({ history: createWebHistory(appUrl), routes })

export default router
