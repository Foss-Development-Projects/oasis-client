import { createRouter, createWebHistory } from 'vue-router'

import HomeView from './../views/HomeView.vue';
import ProductView from './../views/ProductView.vue';
import RegisterView from './../views/RegisterView.vue';
import AccountView from './../views/AccountView.vue';
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
			path: '/account',
			name: 'account',
			component: AccountView
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
			name: 'notfound',
			component: NotFoundView
		}
	]
})

export default router