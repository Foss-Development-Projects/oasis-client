<script setup lang="ts">
	import ProductSlider from '../components/blocks/product/ProductSlider.vue';
	import ProductInfo from '../components/blocks/product/ProductInfo.vue';
</script>

<template>
	<div class="product-container">
		<ProductSlider />
		<ProductInfo />
	</div>
</template>

<style lang="scss">
	.product-container {
		display:grid;
		width: 100%;
		grid-template-columns: 600px 1fr;
	}
	
	@media (max-width: 800px) {
		.product-container {
			grid-template-columns: 1fr;
			align-items: center;
			justify-content: center;
		}
	}
</style>