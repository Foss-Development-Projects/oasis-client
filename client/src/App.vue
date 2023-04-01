<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppBarVue from '@/components/shared/AppBar.vue';
import FooterVue from '@/components/shared/Footer.vue';
</script>

<template>
  <AppBarVue />
  <RouterView />
  <FooterVue />
</template>

<style lang="less" scoped>
 
</style>