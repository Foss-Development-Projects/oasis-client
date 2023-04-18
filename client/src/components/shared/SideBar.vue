<script lang="ts">
	import SvgIcon from '@jamescoyle/vue-icon';
	import { mdiHomeVariantOutline } from '@mdi/js';
	export default {
		data() {
			return {
				drawer: true,
				items: [
				]
			}
		},
	}
</script>

<template>
	<aside class="sidebar" id="sidebar">
		<ul class="sidebar-list">
			<li class="sidebar-list-item">
				<a class="sidebar-list-item-link" href="#">
					<v-icon class="sidebar-list-item-link-icon" icon="mdi-home-variant-outline"></v-icon>
					<p class="sidebar-list-item-link-title">Home</p>
				</a>
			</li>
			<li class="sidebar-list-item">
				<a class="sidebar-list-item-link" href="#">
					<v-icon class="sidebar-list-item-link-icon" icon="mdi-home-variant-outline"></v-icon>
					<p class="sidebar-list-item-link-title">Home</p>
				</a>
			</li>
		</ul>
	</aside>
</template>

<style lang="scss">
	@use './../../assets/styles/modules/scrollbar' as mix;
	.sidebar {
		height: 100%;
		width: 250px;
		background: var(--default-bg-color);
		color: var(--default-fg-color);
	}
	.sidebar-list {
		padding: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow: hidden;
		overflow-y: scroll;
		height: 100%;
		@include mix.scrollbar(10px, orange, blue);
		&-item {
			margin-bottom: 5px;
			width: 100%;
			&-link {
				display: grid;
				grid-template-columns: 24px 1fr;
				grid-gap: 5px;
				padding: 5px;
				align-items: center;
				color: inherit;
				text-decoration: none;
				width: 100%;
				border-radius: 5px;
				background-color: rgba(0,0,0,0.85);
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
				&-icon {
					
				}
			}
		}
		
	}
	
</style>