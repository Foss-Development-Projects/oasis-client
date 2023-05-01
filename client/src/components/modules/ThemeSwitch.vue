<script setup lang="ts">

</script>

<template>
	<section class="theme-switch">
	  <button class="ui-theme light">
		<img class="theme-icon" src="./../../assets/images/icons/vector/light.svg" title="Light" alt="Light Theme Icon">
	  </button>
	  <button class="ui-theme system">
		<img class="theme-icon" src="./../../assets/images/icons/vector/system.svg" title="System" alt="System Theme Icon">
	  </button>
	  <button class="ui-theme dark">
		<img class="theme-icon" src="./../../assets/images/icons/vector/dark.svg" title="Dark" alt="Dark Theme Icon">
	  </button>
	</section>
</template>
<style lang="scss" scoped>
	@use './../../assets/styles/main';
    .theme-switch {
			background-color: var(--theme-switch-bg-color);
			border-radius: 20px;
			height: 30px;
			width: 85px;
			padding: 5px;
			display: flex;
			justify-content: space-between;
			align-items: center;
    }
	.ui-theme {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		padding: 3px;
		font-weight: bolder;
		font-size: 18px;
		outline: none;
		border: none;
		cursor: pointer;
		&:focus {
			background-color: var(--accent-color-1);
			box-shadow: 0 0 10px var(--accent-color-1);
		}
	}
    .theme-icon {
			max-width: 18px;
			max-height: 18px;
    }
</style>

