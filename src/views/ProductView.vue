<script setup lang="ts">
	import ProductSlider from '../components/blocks/product/ProductSlider.vue';
	import ProductInfo from '../components/blocks/product/ProductInfo.vue';
	import ProductDescription from '../components/blocks/product/ProductDescription.vue';
</script>

<template>
	<div class="product-container">
		<div class="product-grid-1">
			<ProductSlider />
			<ProductInfo />
		</div>
		<ProductDescription />
	</div>
</template>

<style lang="scss">
	.product-container {
		background: var(--default-bg-color);
		color: var(--default-fg-color);
	}
	.product-grid-1 {
		display:grid;
		width: 100%;
		grid-template-columns: 600px 1fr;
	}

	@media (max-width: 1000px) {
		.product-grid-1 {
			grid-template-columns: 1fr;
			align-items: center;
			justify-content: center;
		}
	}
</style>