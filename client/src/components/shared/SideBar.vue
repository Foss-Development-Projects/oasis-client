<script lang="ts">
	import { sidebarRoutes } from './../../data/sidebar'
	export default {
		data() {
			return {
				sidebarRoutes
			}
		},
	}
</script>

<template>
	<aside class="sidebar" id="sidebar">
		<header class="sidebar-header">
			<v-icon icon="mdi-close-circle-outline"></v-icon>
		</header>
		<ul class="sidebar-list">
			<li class="sidebar-list-item" v-for="(item, index) in sidebarRoutes" :key="index">
				<a class="sidebar-list-item-link" :href="item.path">
					<v-icon class="sidebar-list-item-link-icon" :icon="item.icon"></v-icon>
					<p class="sidebar-list-item-link-title">{{ item.name }}</p>
				</a>
			</li>
		</ul>
	</aside>
</template>

<style lang="scss">
	@use './../../assets/styles/modules/scrollbar' as mix;

	.sidebar {
		height: calc(100vh - 50px);
		width: 250px;
		background: var(--default-bg-color);
		color: var(--default-fg-color);
	}
	.sidebar-header {
		text-align: right;
		padding: 10px;
		i {
			cursor: pointer;
			border-radius: 50%;
			font-size: 40px;
			transition: background-color, box-shadow, 200ms ease-in-out;
			&:hover {
				transition: background-color, box-shadow, 200ms ease-in-out;
				box-shadow: 0 0 10px white;
			}
		}
		
	}
	.sidebar-list {
		padding: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow: hidden;
		overflow-y: scroll;
		padding-bottom: 55px;
		width: 250px;
		height: calc(100% - 60px);
		@include mix.scrollbar(5px, var(--default-fg-color), var(--accent-color-1), 5px);

		&-item {
			margin-bottom: 5px;
			width: 100%;

			&-link {
				display: grid;
				grid-template-columns: 24px 1fr;
				grid-gap: 5px;
				padding: 10px 5px;
				align-items: center;
				color: inherit;
				text-decoration: none;
				width: 100%;
				border-radius: 5px;
				background-color: rgba(0, 0, 0, 0.85);
				transition: background-color, color, 200ms ease-in-out;

				&:hover {
					background-color: var(--default-fg-color);
					color: var(--default-bg-color);
					transition: background-color, color, 200ms ease-in-out;
				}

				&-title {
					font-size: 20px;
					font-family: "Montserrat Alternates", sans-serif;
				}

				&-icon {}
			}
		}

	}
</style>