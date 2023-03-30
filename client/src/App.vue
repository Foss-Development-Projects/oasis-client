<script setup lang="ts">
import { RouterView } from 'vue-router'
import { register } from 'swiper/element/bundle';
import AppBarVue from '@/components/shared/AppBar.vue';

register();

</script>

<template>
  <AppBarVue />
  <RouterView />
</template>

<style lang="less" scoped>
 
</style>