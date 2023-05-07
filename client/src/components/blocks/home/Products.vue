<script lang="ts" setup>
	import { homeProducts } from '@/data/home/products/homeProducts';
</script>

<template>
	<div class="home-products">
		<router-link to="/product" class="home-product" v-for="(item, index) in homeProducts" :key="index">
			<section class="home-product-thumbnail">
				<img class="home-product-thumbnail-image" :src="item.imgSrc" :alt="item.imgAlt" />
			</section>
			<section class="home-product-detail">
				<h3 class="home-product-title">{{ item.title }}</h3>
				<h4 class="home-product-price">{{ item.price }}</h4>
				<p class="home-product-description">{{ item.desc }}</p>
			</section>
		</router-link>
	</div>
</template>

<style lang="scss" scoped>
	@use './../../../assets/styles/modules/scrollbar' as mix;

	.home-products {
		background-color: var(--default-bg-color);
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: auto;
		gap: 10px;
		overflow: hidden;
		overflow-y: scroll;
		padding: 10px;
		height: calc(100vh - 1px);
		@include mix.scrollbar(5px, var(--default-fg-color), var(--accent-color-1), 0px);
	}
	.home-product {
		box-shadow: 0 0 10px rgba(0,0,0,0.15);
		display: grid;
		border-radius: 10px;
		padding: 5px;
		text-decoration: none;
		background-color: var(--default-bg-color);
		color: var(--default-fg-color);
		grid-template-rows: min(120px) 1fr;
		&-thumbnail {
			display: flex;
			justify-content: center;
		}
	}
	.home-product {
		&-price {
			color: green;
			margin: 2.5px 0;
		}
		&-detail {
			font-size: small;
		}
		&-title {
			font-size: small;
		}
	}
	@media (max-width: 1200px) {
		.home-products {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	@media (max-width: 1000px) {
		.home-products {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (max-width: 800px) {
		.home-products {
			grid-template-columns: 1fr;
		}
	}
</style>