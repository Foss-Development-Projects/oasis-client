import { defineStore } from 'pinia';
import { accountSidebarRoutes } from './../states/account/accountSidebar';
import { homeSidebarRoutes } from './../states/home/homeSidebar';
import { homeProducts } from './../states/home/homeProducts';

export const useAccountStore = defineStore('account', {
	state: () => ({
		accountSidebarRoutes: accountSidebarRoutes
	})
})

export const useHomeStore = defineStore('home', {
	state: () => ({
		homeSidebarRoutes: homeSidebarRoutes,
		homeProducts: homeProducts
	})
})