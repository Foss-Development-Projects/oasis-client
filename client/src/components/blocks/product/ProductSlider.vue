<script lang="ts">
	import IPhone1 from './../../../assets/images/products/iphone-1.png';
	import IPhone2 from './../../../assets/images/products/iphone-2.png';
	import IPhone3 from './../../../assets/images/products/iphone-3.png';

	export default {
		data() {
			return {
				pictures: [
					IPhone1,
					IPhone2,
					IPhone3
				]
			}
		}
	}
</script>

<template>
	<v-carousel class="product-slider" hide-delimiter-background delimiter-icon="mdi-hexagon" cycle>
		<v-carousel-item class="product-slider-item" v-for="(img, i) in pictures" :key="i" :src="img"></v-carousel-item>
	</v-carousel>
</template>

<style lang="scss">
	.product-slider {
		border-radius: 10px;
		max-width: 400px;

		.product-slider-item {
			object-fit: fill;
		}
	}

	@media (max-width: 600px) {
		.product-slider {
			max-width: 600px;
		}
	}
</style>