<script lang="ts">
	import IPhone from './../../../assets/images/products/iphone.png';
	import MacBookPro from './../../../assets/images/products/macbook-pro.png';
	import IPadPro from './../../../assets/images/products/ipad-pro.png';

	export default {
		data() {
			return {
				pictures: [
					IPhone,
					IPadPro,
					MacBookPro
				]
			}
		}
	}
</script>

<template>
	<!-- <section class="home-carousel">
		<v-carousel cycle height="250" hide-delimiter-background show-arrows="hover">
			<v-carousel-item v-for="(img, i) in pictures" :key="i" :src="img"></v-carousel-item>
		</v-carousel>
	</section> -->
	  <swiper
    :slidesPerView="3"
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
  </swiper>
</template>

<style>
	.home-carousel {
		margin-top: 15px;
		border-radius: 10px;
	}
</style>