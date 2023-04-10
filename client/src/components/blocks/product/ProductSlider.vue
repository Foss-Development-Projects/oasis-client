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
	<div class="product-slider-container">
		<v-carousel class="product-slider" hide-delimiter-background delimiter-icon="mdi-hexagon" show-arrows="hover" cycle>
			<v-carousel-item class="product-slider-item" v-for="(img, i) in pictures" :key="i"
				:src="img"></v-carousel-item>
		</v-carousel>
	</div>

</template>

<style lang="scss" scoped>
	.product-slider-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.product-slider {
		border-radius: 10px;
		padding: 10px;
		max-width: 100%;
		max-height: 550px;

		.product-slider-item {
			object-fit: fill;
		}
	}

	@media (max-width: 800px) {
		.product-slider {
			max-width: 500px;
			max-height: 400px;
		}
	}

	@media (max-width: 600px) {
		.product-slider {
			max-width: 600px;
			max-height: 550px;
		}
	}
	@media (max-width: 400px) {
		.product-slider {
			max-width: 100%;
			max-height: 500px;
		}
	}
</style>