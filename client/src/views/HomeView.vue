<script lang="ts" setup>
	import Trending from '@/components/blocks/home/Trending.vue'
	import HomeSideBar from '@/components/blocks/home/HomeSideBar.vue'
	import Products from '@/components/blocks/home/Products.vue'
</script>

<template>
	<div class="home-container">
		<Trending class="trending" />
		<HomeSideBar class="sidebar" />
		<Products class="products" />
	</div>
	
</template>

<style lang="scss">
	.home-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
	}
</style>