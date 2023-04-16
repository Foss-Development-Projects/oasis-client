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
					<i class="sidebar-list-item-link-icon"><v-icon icon="mdi-home-variant-outline"></v-icon></i>
					<p class="sidebar-list-item-link-title">Home</p>
				</a>
			</li>
		</ul>
	</aside>
</template>

<style lang="scss">
	.sidebar {
		height: 100%;
		width: 250px;
		background: red;
	}
</style>