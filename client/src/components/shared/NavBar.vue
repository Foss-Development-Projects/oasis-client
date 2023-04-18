<script lang="ts">
	import { Swiper, SwiperSlide } from 'swiper/vue';
	import { Pagination, Navigation } from 'swiper';
	import 'swiper/css';
	import 'swiper/css/pagination';
	import 'swiper/css/navigation';
	export default {
		components: {
			Swiper,
			SwiperSlide,
		},
		setup() {
			return {
				modules: [Pagination, Navigation],
				navRoutes: [
					{ id: 1, name: "Home", path: "/" },
					{ id: 2, name: "Store", path: "/store" },
					{ id: 3, name: "Register", path: "/register" },
					{ id: 4, name: "Account", path: "/account" },
					{ id: 5, name: "Developer", path: "/developer" },
					{ id: 6, name: "Privacy Policy", path: "/legal" },
					{ id: 7, name: "Terms & Service", path: "#" },
				]
			};
		},

	};
</script>
<template>
	<nav class="navbar">
		<swiper class="navbar-list" :freeMode="true" :slidesPerView="3" :spaceBetween="15" :modules="modules" :navigation="true" :breakpoints="{
					'200': {
						slidesPerView: 1
					},
					'400': {
						slidesPerView: 2,
					},
					'640': {
						slidesPerView: 2,
					},
					'768': {
						slidesPerView: 4,
					},
					'1024': {
						slidesPerView: 5,
					},
			    }">
			<swiper-slide v-for="route in navRoutes" :key="route.id">
				<router-link :to="route.path" class="navbar-link">{{ route.name }}</router-link>
			</swiper-slide>
		</swiper>
	</nav>
</template>



<style lang="scss">
	.navbar {
		background-color: var(--default-bg-color);
		display: flex;
		height: 50px;
		align-items: center;
		justify-content: center;
		position: sticky;
		bottom: 0;
		z-index: 1;
	}

	.navbar-list {
		padding: 0 50px 0 40px;
	}

	.navbar-link {
		display: inline-block;
		text-decoration: none;
		font-size: 20px;
		font-weight: lighter;
		color: var(--default-fg-color);
		padding: 5px;
		border-radius: 5px;
		width: 100%;
		text-align: center;
		position: relative;
		z-index: 2;
		&::after {
			content: '';
			top: 0;
			left: 0;
			position: absolute;
			width: 100%;
			height: 100%;
			display: block;
			border-radius: 5px;
			transform: scaleY(0);
			transform-origin: bottom;
			transition: transform 200ms ease-in-out;
			background-color: var(--default-fg-color);
			z-index: -1;
		}
		&:hover {
			color: var(--default-bg-color);
		}
		&:hover:after {
			transform: scaleY(1);
			transition: transform, 200ms ease-in-out;
		}
	}
	.swiper-button-prev::after, .swiper-button-next::after {
		font-size: 24px;
		font-weight: bolder;
		color: peachpuff;
	}
	.swiper-button-prev {
		left: .5px;
	}
	.swiper-button-next {
		right: .5px;
	}
</style>