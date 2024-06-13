<template>
	<div class="error-container">
		<div class="error">
			<h1 class="not-found-error">404 Not Found</h1>
			<router-link class="error-not-found-redirect-home" to="/">
				Back To Home
			</router-link>
		</div>
	</div>
</template>

<script lang="ts">
</script>

<style lang="scss">
	@use './../assets/styles/modules/layout' as mix;

	.error-container {
		height: 100vh;
		@include mix.add-flex(center, center);
	}

	.error {
		@include mix.add-flex(center, center, column);
	}

	.not-found-error {
		font-size: 36px;
	}

	.error-not-found-redirect-home {
		text-decoration: none;
		font-weight: bolder;
		color: royalblue;
	}
</style>