<script lang="ts" setup>
	import Trending from '@/components/blocks/home/Trending.vue'
	import HomeSideBar from '@/components/blocks/home/HomeSideBar.vue'
	import Products from '@/components/blocks/home/Products.vue'
</script>

<template>
	<div class="home-container">
		<HomeSideBar class="sidebar" />
		<section class="home-container-product-section">
			<Trending class="trending" />
			<Products class="products" />
		</section>
		
	</div>
	
</template>

<style lang="scss">
	.home-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		position: relative;
	}
</style>