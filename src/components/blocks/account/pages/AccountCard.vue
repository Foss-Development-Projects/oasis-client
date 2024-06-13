<script lang="ts">
	export default {
	    data () {
	      return {
	        show1: false,
	      }
	    },
	  }
</script>

<template>
	<header class="account-header">Cards</header>
	<section class="account-cards">
		<ul class="account-card-list">
			
		</ul>
	</section>
</template>

<style lang="scss">
	@use './../../../../assets/styles/modules/layout' as mix;
	.account-header {
		text-align: center;
		font-size: 30px;
		font-family: "Roboto", sans-serif;
	}
	.account-cards {
		height: 100%;
		width: 100%;
		@include mix.add-flex(center, center);
	}
	.account-card-item {
		max-width: 500px;
		background-color: indigo;
		border-radius: 5px;
		padding: 5px;
		
	}
	.account-card-list {
		width: 100%;
		list-style: none;
	}
	.account-card-detail-section {
		width: 100%;
		display: grid;
		gap: 5px;
		grid-template-columns: repeat(2, 1fr);
	}
	.account-card-number-section {
		margin-bottom: 5px;
	}
	
	@media (max-width: 450px) {
		.account-card-detail-section {
			grid-template-columns: 1fr;
		}
	}
</style>