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
			<li class="account-card-item">
				<section class="account-card-number-section">
					<v-text-field
						:append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
						prepend-inner-icon="mdi-credit-card"
						:type="show1 ? 'text' : 'password'"
						name="user_credit_card_number"
						label="Card Number"
						variant="solo"
						placeholder="Card Number"
						persistent-placeholder
						hide-details="auto"
						class="input-group--focused"
						@click:append="show1 = !show1"
					></v-text-field>
				</section>
				<section class="account-card-detail-section">
					<v-text-field 
						class="form-input" 
						prepend-inner-icon="mdi-account-circle" 
						label="Card Holder Name" 
						variant="solo"
						hide-details="auto"
						persistent-placeholder
					>
					</v-text-field>
					<v-text-field 
						class="form-input" 
						prepend-inner-icon="mdi-calendar-range" 
						label="Card Validity" 
						variant="solo"
						hide-details="auto"
						persistent-placeholder
					></v-text-field>
				</section>
			</li>
		</ul>
	</section>
</template>

<style lang="scss">
	@use './../../../../assets/styles/modules/layout' as mix;
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