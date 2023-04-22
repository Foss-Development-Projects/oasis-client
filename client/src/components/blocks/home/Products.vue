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
	.home-products {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: 250px;
		gap: 10px;
		padding: 10px;
	}
	.home-product {
		box-shadow: 0 0 10px black;
		display: grid;
		border-radius: 10px;
		padding: 5px;
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