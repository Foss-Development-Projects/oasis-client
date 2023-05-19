<script lang="ts" setup>
	import { accountSalesRoutes } from '@/data/account/services/accountSalesServices';
	
</script>

<template>
	<div class="account-sales">
		<div class="account-sales-cards-container">
			<a v-for="(item, i) in accountSalesRoutes" :key="i" href="#" class="account-sales-card">
				<header class="account-sales-card-header">
					<fa-icon class="account-sales-icon" :icon="item.icon" />
					<p class="account-sales-title">{{ item.name }}</p>
				</header>
				<p class="account-sales-card-content">{{ item.content }}</p>
			</a>
		</div>
	</div>
</template>

<style lang="scss">
	.account-sales {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 10px;
	}
	.account-sales-cards-container {
		display: grid;
		grid-template-columns: repeat(3, 250px);
		grid-template-rows: repeat(auto-fit, 1fr);
		gap: 30px;

	}

	.account-sales-card {
		padding: 10px;
		border-radius: 10px;
		box-shadow: 0 0 10px var(--default-bg-color);
		text-decoration: none;
		color: var(--default-fg-color);
		border: 1px solid peachpuff;
		box-shadow: 0 0 5px peachpuff;
		&:hover {
			box-shadow: 0 0 20px peachpuff;
		}
	}

	.account-sales-card-header {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		margin-bottom: 10px;
	}

	.account-sales-card-content {
		font-size: smaller;
		margin-left: 26px;
	}

	.account-sales-icon {
		margin-right: 5px;
		font-size: 20px;
	}

	.account-sales-title {
		font-size: 20px;
		font-family: "Open Sans", sans-serif;
		font-weight: lighter;
	}
</style>