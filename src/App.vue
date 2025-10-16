<script setup lang="ts">
	import { RouterView } from 'vue-router'
	import AppBar from '@/components/shared/AppBar.vue';
	import Footer from '@/components/shared/Footer.vue';
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
</script>

<template class="App">
	<PerfectScrollbar>
	<AppBar />
	<RouterView />
	<Footer />
</PerfectScrollbar>
</template>

<style lang="less" scoped>

</style>