import { createRouter, createWebHistory } from 'vue-router'

import HomeView from './../views/HomeView.vue';
import ProductView from './../views/ProductView.vue';
import RegisterView from './../views/RegisterView.vue';
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/store',
			name: 'store',
			component: ProductView
		},
		{
			path: '/register',
			name: 'register',
			component: RegisterView
		}
	]
})

export default router