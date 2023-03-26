<script setup lang="ts">
  import LightLogo from '';
  import SystemLogo from './../assets/images/system.svg';
  import DarkLogo from './../assets/images/dark.svg';
</script>

<template>
  <main>
	<section class="theme-switch">
	  <button class="ui-theme light">
		<img class="theme-icon" src="./../assets/images/icons/light.svg" title="Light" alt="Light Theme Icon">
	  </button>
	  <button class="ui-theme system">
		<img class="theme-icon" src="./../assets/images/icons/system.svg" title="System" alt="System Theme Icon">
	  </button>
	  <button class="ui-theme dark">
		<img class="theme-icon" src="./../assets/images/icons/dark.svg" title="Dark" alt="Dark Theme Icon">
	  </button>
	</section>
  </main>
</template>
<style lang="less" scoped>
	:root {
		--dark-theme-btn-bg-color:black;
		--system-theme-btn-bg-color: orangered;
		--light-theme-btn-bg-color:white;
	}
  .theme-switch {
	background-color: rgba(0,0,0,0.85);
	border-radius: 20px;
	height: 25px;
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
	padding: 5px;
	font-weight: bolder;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	&:focus {
		background-color: #FAA572;
	}
  }
  .theme-icon {
	max-width: 15px;
	max-height: 15px;
  }

</style>

