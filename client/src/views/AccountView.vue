<script lang="ts" setup>
	import AccountSidebar from '@/components/blocks/account/AccountSidebar.vue'
	import AccountPreview from '@/components/blocks/account/AccountPreview.vue'
</script>

<template>
	<div class="account-container">
		<AccountSidebar />
		<AccountPreview />
	</div>
</template>

<style lang="scss">
	.account-container {
		background: var(--default-bg-color);
		color: var(--default-fg-color);
		display: grid;
		gap: 5px;
		grid-template-columns: 250px 1fr;
		position: relative;
	}
	@media (max-width: 500px){
		.account-container {
			grid-template-columns: 1fr;
		}
	}
</style>