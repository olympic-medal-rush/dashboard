<script setup>
import Menu from './components/Menu.vue'
</script>

<template>
  <Menu />
  <div class="Dashbord">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.Dashbord{
  margin-left: 200px;
  padding: 40px 80px;
}
</style>
