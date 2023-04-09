<script>
</script>

<template>
	<div class="product-info-section">
		<section>
			<h2 class="product-info-title">IPhone 14 Pro Max</h2>
			<p class="product-info-price">$1299.99</p>
			<p class="product-info-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quia, commodi, reprehenderit recusandae aspernatur labore ut animi maxime id odio vel quos voluptas aperiam expedita laborum adipisci culpa magnam blanditiis!</p>
		</section>
		<section class="product-detail-button-group">
			<v-btn class="product-detail-buy-button" prepend-icon="mdi-shopping">Buy Now</v-btn>
			<v-btn class="product-detail-cart-button" prepend-icon="mdi-cart">Add to Cart</v-btn>
			<v-btn class="product-detail-save-button" prepend-icon="mdi-content-save"></v-btn>
		</section>
	</div>
	
</template>

<style lang="scss" scoped>
	.product-info-section {
		margin-top: 100px;
		padding: 10px;
	}
	.product-info-price {
		font-weight: bolder;
		font-size: larger;
		color: green;
	}
	.product-detail {
		&-button-group {
			display: grid;
			margin-top: 20px;
			grid-template-columns: 150px 150px 20px;
			grid-gap: 10px;
		}
		&-buy-button {
			
		}
		&-cart-button {
			
		}
		&-save-button {
			background-color: steelblue;
			color: lightskyblue;
		}
	}
</style>