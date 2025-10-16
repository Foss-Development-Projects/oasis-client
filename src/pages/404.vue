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

	.error-container {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.error {
		display: flex;
		align-items: center;
		justify-content: center;
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