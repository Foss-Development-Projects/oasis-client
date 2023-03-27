<script setup lang="ts">

</script>

<template>
  <main>
	<section class="theme-switch">
	  <button class="ui-theme light">
		<img class="theme-icon" src="./../../assets/images/icons/light.svg" title="Light" alt="Light Theme Icon">
	  </button>
	  <button class="ui-theme system">
		<img class="theme-icon" src="./../../assets/images/icons/system.svg" title="System" alt="System Theme Icon">
	  </button>
	  <button class="ui-theme dark">
		<img class="theme-icon" src="./../../assets/images/icons/dark.svg" title="Dark" alt="Dark Theme Icon">
	  </button>
	</section>
  </main>
</template>
<style lang="less" scoped>
	@import url('./../../assets/styles/main.less');
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
			background-color: var(--theme-btn-bg-color);
			box-shadow: 0 0 10px var(--theme-btn-bg-color);
		}
	}
    .theme-icon {
			max-width: 18px;
			max-height: 18px;
    }
</style>

