<script lang="ts">
	import MacBookPro from '@/assets/images/products/macbook-pro.png';
	import IPadPro from '@/assets/images/products/ipad-pro.png';

	export default {
		data() {
			return {
				pictures: [
					IPadPro,
					MacBookPro
				]
			}
		}
	}
</script>

<template>
	<section class="home-carousel">
		<v-carousel cycle height="250" hide-delimiter-background show-arrows="hover">
			<v-carousel-item v-for="(img, i) in pictures" :key="i" :src="img"></v-carousel-item>
		</v-carousel>
	</section>
</template>

<style>
	
</style>