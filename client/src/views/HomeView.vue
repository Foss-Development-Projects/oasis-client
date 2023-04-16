<script lang="ts" setup>
	import Trending from '@/components/blocks/home/Trending.vue'
	import SideBar from '@/components/shared/SideBar.vue'
</script>

<template>
	<div class="home-container">
		<Trending />
		<SideBar />
	</div>
	
</template>

<style lang="scss">
	.home-container {
		display: flex;
		width: 100%;
	}
</style>