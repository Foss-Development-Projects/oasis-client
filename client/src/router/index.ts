import { createRouter, createWebHistory } from 'vue-router'

import HomeView from './../views/HomeView.vue';
import ProductView from './../views/ProductView.vue';
import RegisterView from './../views/RegisterView.vue';
import NotFoundView from './../pages/404.vue';

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
		},
		{
			path: '/:pathMatch(.*)*',
			name: '404 Not Found',
			component: NotFoundView
		}
	]
})

export default router