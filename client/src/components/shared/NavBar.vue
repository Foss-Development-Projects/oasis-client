<script lang="ts">
	import { Swiper, SwiperSlide } from 'swiper/vue';
	import { Pagination } from 'swiper';
	import 'swiper/css';
	import 'swiper/css/pagination';
	export default {
		components: {
			Swiper,
			SwiperSlide,
		},
		setup() {
			return {
				modules: [Pagination],
			};
		},
	};
</script>
<template>
	<nav class="navbar">
		<swiper class="navbar-list" :slidesPerView="3" :spaceBetween="15" :pagination="{
				clickable: true,
			}">
			<swiper-slide>
				<a href="/" class="navbar-link">Home</a>
			</swiper-slide>
			<swiper-slide>
				<a href="#" class="navbar-link">Store</a>
			</swiper-slide>
			<swiper-slide>
				<a href="#" class="navbar-link">Account</a>
			</swiper-slide>
			<swiper-slide>
				<a href="#" class="navbar-link">About us</a>
			</swiper-slide>
			<swiper-slide>
				<a href="#" class="navbar-link">Developer</a>
			</swiper-slide>
		</swiper>
	</nav>
</template>



<style>
	.navbar {
		background-color: var(--navbar-bg-color);
		display: flex;
		height: 50px;
		align-items: center;
		justify-content: center;
		position: sticky;
		bottom: 0;
	}

	.navbar-list {
		padding: 0 15px 0 7px;
	}

	.navbar-link {
		display: inline-block;
		text-decoration: none;
		font-size: 20px;
		font-weight: lighter;
		color: white;
		background-color: rgba(0, 0, 0, 0.5);
		padding: 5px;
		border-radius: 5px;
		width: 100%;
		text-align: center;
	}
</style>