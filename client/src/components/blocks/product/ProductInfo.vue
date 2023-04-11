<script lang="ts">
	export default {
		data() {
			return {
				features : [
					{ name: "Model", value: "IPhone 14 Pro Max" },
					{ name: "Screen Size", value: "6.7 Inch" },
					{ name: "USB Type", value: "Type-C" },
					{ name: "Battery", value: "4000MAh" },
					{ name: "Cameras", value: "3" },
				]
			}
		}
	}
</script>

<template>
	<div class="product-info-section">
		<section>
			<h2 class="product-info-title">IPhone 14 Pro Max</h2>
			<p class="product-info-price">$1299.99</p>
		</section>
		<section class="product-detail-button-group">
			<v-btn class="product-detail-buy-button" rounded="xl" prepend-icon="mdi-shopping">Buy Now</v-btn>
			<v-btn class="product-detail-cart-button" rounded="xl" prepend-icon="mdi-cart">Add to Cart</v-btn>
			<v-btn class="product-detail-save-button" rounded="xl" prepend-icon="mdi-content-save">
				Save for Later
				
			</v-btn>
		</section>
		<section>
			<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut unde veniam quos? Iusto cumque illo omnis quaerat repellendus accusantium laborum earum facere dolores, illum ipsum non excepturi id obcaecati delectus? Consectetur doloribus dolorum perferendis, nisi omnis fugit illo. Veritatis distinctio, beatae dolorum magnam harum iste quod velit quasi aperiam totam?</p>
		</section>
		<section>
			<v-table theme="light" density="compact" class="product-info-table">
			    <thead>
			      <tr>
			        <th class="text-left">
			          Features
			        </th>
			        <th class="text-left">
			          Description
			        </th>
			      </tr>
			    </thead>
			    <tbody>
			      <tr
			        v-for="item in features"
			        :key="item.name"
			      >
			        <td>{{ item.name }}</td>
			        <td>{{ item.value }}</td>
			      </tr>
			    </tbody>
			  </v-table>
		</section>
	</div>
	
</template>

<style lang="scss" scoped>
	.product-info-section {
		margin-top: 90px;
		padding: 10px;
	}
	.product-info-price {
		font-weight: bolder;
		font-size: larger;
		color: green;
	}
	.product-info-table {
		margin-top: 15px;
		border: 1px solid darkgray;
		border-radius: 10px;
	}
	.product-detail {
		&-button-group {
			display: grid;
			align-items: center;
			margin: 20px 0;
			grid-template-columns: 150px 150px 200px;
			grid-gap: 10px;
		}
		&-buy-button {
			background-color: yellowgreen;
			color: white;
		}
		&-cart-button {
			background-color: darkgoldenrod;
			color: white;
		}
		&-save-button {
			background-color: steelblue;
			color: white;
			border-radius: 50%;
		}
	}
	@media (max-width: 1150px) {
		.product-detail-button-group {
			justify-content: center;
			grid-template-columns: 1fr;
		}
	}
	@media (max-width: 1000px) {
		.product-detail-button-group {
			justify-content: flex-start;
			grid-template-columns: 150px 150px 200px;
		}
	}
	@media (max-width: 600px) {
		.product-detail-button-group {
			justify-content: center;
			grid-template-columns: 1fr;
		}
	}
</style>