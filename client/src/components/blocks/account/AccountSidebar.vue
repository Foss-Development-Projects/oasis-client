<script lang="ts" setup>
	import { accountSidebarRoutes } from '@/data/account/routes/accountRoutes'
</script>

<template>
	<aside class="sidebar" id="sidebar">
		<header class="sidebar-header">
			<v-icon icon="mdi-close-circle-outline"></v-icon>
		</header>
		<ul class="sidebar-list">
			<li class="sidebar-list-item" v-for="(item, index) in accountSidebarRoutes" :key="index">
				<router-link class="sidebar-list-item-link" :to="item.path">
					<v-icon class="sidebar-list-item-link-icon" :icon="item.icon"></v-icon>
					<p class="sidebar-list-item-link-title">{{ item.name }}</p>
				</router-link>
			</li>
		</ul>
	</aside>
</template>


<style>
	@media (max-width: 500px){
		#sidebar {
			position: absolute;
			left: 0px;
			top: 0px;
		}
	}
</style>