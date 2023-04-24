<script lang="ts">
	import { productData } from './../../../data/product';
	
	export default {
		data() {
			return {
				products: productData
			}
		}
	}
</script>

<template>
	<div class="home-products">
		<div class="home-product" v-for="(item, index) in products" :key="index">
			<section class="home-product-thumbnail">
				<img class="home-product-thumbnail-image" :src="item.imgSrc" :alt="item.imgAlt" />
			</section>
			<section class="home-product-detail">
				<h3 class="home-product-price">{{ item.price }}</h3>
				<p class="home-product-description">{{ item.desc }}</p>
			</section>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@use './../../../assets/styles/modules/scrollbar' as mix;
	.home-products {
		background-color: var(--default-bg-color);
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: minmax(250px, auto);
		gap: 10px;
		overflow: hidden;
		overflow-y: scroll;
		padding: 10px;
		height: calc(100vh - 100px);
		@include mix.scrollbar(5px, var(--default-fg-color), var(--accent-color-1), 0px);
	}
	.home-product {
		box-shadow: 0 0 10px rgba(0,0,0,0.15);
		display: grid;
		border-radius: 10px;
		padding: 5px;
		background-color: var(--default-bg-color);
		color: var(--default-fg-color);
		grid-template-rows: 120px 1fr;
		&-thumbnail {
			display: flex;
			justify-content: center;
			&-image {
				max-width: 120px;
			}
		}
	}
</style>