<script setup lang="ts">
	import { RouterView } from 'vue-router'
	import AppBar from '@/components/shared/AppBar.vue';
	import NavBar from '@/components/shared/NavBar.vue';
	import Footer from '@/components/shared/Footer.vue';
</script>

<template class="App">
	<AppBar />
	<RouterView />
	<Footer />
</template>

<style lang="less" scoped>

</style>