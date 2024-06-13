<script lang="ts">
	import MacBookPro from '@/assets/images/products/macbook-pro.png';
	import IPadPro from '@/assets/images/products/ipad-pro.png';
	import IPhone from '@/assets/images/products/iphone-1.png';
	export default {
		data() {
			return {
				pictures: [
					IPadPro,
					IPhone,
					MacBookPro
				]
			}
		}
	}
</script>

<template>
	<section class="home-carousel">
		<v-carousel  
			color="orange" 
			class="product-carousel" 
			cycle 
			height="250" 
			hide-delimiter-background 
			show-arrows="hover"
		>
			<v-carousel-item v-for="(img, i) in pictures" :key="i" :src="img"></v-carousel-item>
		</v-carousel>
	</section>
</template>

<style lang="scss">
	.product-carousel {
		background: transparent;
	}
	.home-product {
		border-radius: 10px;
	}
</style>