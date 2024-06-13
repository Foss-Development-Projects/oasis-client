<script lang="ts">
	export default {
		data(){
			const data = [
				{ name: "Foster Z", icon: "mdi-account" },
				{ name: "Foster0123", icon: "mdi-account-circle" },
				{ name: "fosterunlimited0123@gmail.com", icon: "mdi-email" },
				{ name: "+91 9004 550 021", icon: "mdi-phone" },
				{ name: "India", icon: "mdi-map-marker" },
				{ name: "1 Year 6 Months", icon: "mdi-timelapse" },
				{ name: "Premium User", icon: "mdi-star-circle-outline" },
			]
			return {
				data
			}
		}
	}
</script>

<template>
	<header class="account-header">Overview</header>
	<section class="account-profile-image-section">
		<img class="account-profile-image" src="https://cdn-icons-png.flaticon.com/512/3237/3237447.png" alt="Profile Image" />
	</section>
	<section class="account-user-info-section">
		<div class="account-user-info-container">
			<section class="account-user-info" v-for="(item, index) in data" :key="index">
				<v-icon class="account-user-info-icon" :icon="item.icon"></v-icon>
				<p class="account-user-info">{{ item.name }}</p>
			</section>
		</div>
	</section>
</template>

<style lang="scss">
	@use './../../../../assets/styles/modules/layout' as mix;
	.account-header {
		text-align: center;
		font-size: 30px;
		font-family: "Roboto", sans-serif;
	}
	.account-profile-image-section {
		padding: 5px 0;
		@include mix.add-flex(center, center);
		.account-profile-image {
			width: 150px;
			height: 150px;
			object-fit: cover;
			border-radius: 50%;
		}
	}
	.account-user-info {
		@include mix.add-flex(center, flex-start);
		margin: 2.5px 0;
		 p {
			 font-size: larger;
			 font-family: "Roboto", sans-serif;
			 font-weight: bolder;
			 
		 }
	}
	.account-user-info-icon {
		margin-right: 10px;
	}
	.account-user-info-section {
		@include mix.add-flex(center, center, column);
	}
	.account-user-info-container {
		width: 100%;
		max-width: 300px;
	}
</style>