import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue';
import ProductView from '@/views/ProductView.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';

const AccountView = () => import('@/views/AccountView.vue');
const AccountOverview = () => import('@/components/blocks/account/pages/AccountOverview.vue');
const AccountProfile = () => import('@/components/blocks/account/pages/AccountProfile.vue');
const AccountPayment = () => import('@/components/blocks/account/pages/AccountPayment.vue');
const AccountCard =  () => import('@/components/blocks/account/pages/AccountCard.vue');
const AccountProduct = () => import('@/components/blocks/account/pages/AccountProduct.vue');
const AccountBill = () => import('@/components/blocks/account/pages/AccountBill.vue');
const AccountCart = () => import('@/components/blocks/account/pages/AccountCart.vue');
const AccountSales = () => import('@/components/blocks/account/pages/AccountSales.vue');

import NotFoundView from '@/pages/404.vue';

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
			component: AccountView,
			children: [
				{
					path: '',
					name: 'general',
					component: AccountOverview
				},
				{
					path: 'profile',
					name: 'profile',
					component: AccountProfile
				},
				{
					path: 'cart',
					name: 'cart',
					component: AccountCart
				},
				{
					path: 'payments',
					name: 'payments',
					component: AccountPayment
				},
				{
					path: 'bills',
					name: 'account-bills',
					component: AccountBill
				},
				{
					path: 'products',
					name: 'account-products',
					component: AccountProduct
				},
				{
					path: 'cards',
					name: 'account-cards',
					component: AccountCard
				}, 
				{
					path: 'sales',
					name: 'account-sales',
					component: AccountSales
				}
			],
		},
		{
			path: '/store',
			name: 'store',
			component: ProductView
		},
		{
			path: '/login',
			name: 'login',
			component: LoginView
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