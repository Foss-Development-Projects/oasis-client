<script lang="ts" setup>
	import { useAccountStore } from '@/stores/store';
	const store = useAccountStore();
</script>

<template>
	<aside class="sidebar" id="sidebar">
		<header class="sidebar-header">
			<v-icon icon="mdi-close-circle-outline"></v-icon>
		</header>
		<ul class="sidebar-list">
			<li class="sidebar-list-item" v-for="(item, index) in store.accountSidebarRoutes" :key="index">
				<a class="sidebar-list-item-link" :href="item.path">
					<v-icon class="sidebar-list-item-link-icon" :icon="item.icon"></v-icon>
					<p class="sidebar-list-item-link-title">{{ item.name }}</p>
				</a>
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