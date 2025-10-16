<script lang="ts" setup>

</script>

<template>
	<div class="account-preview">
		<router-view></router-view>
	</div>
</template>

<style lang="scss">
	.account-preview {
		height: calc(100vh - 1px);
		overflow: hidden;
		overflow-y: scroll;
		padding: 5px;
		border-left: 1px solid black;
		background-color: var(--default-bg-color);
	}
</style>