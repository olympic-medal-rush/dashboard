<script setup>
import AddMedal from './Forms/AddMedal.vue'
</script>

<template>
  <div class="Medals">
    <h2>Médailles 🏅</h2>
    <div class="Medals_Container">
      <div class="card">
        <AddMedal />
      </div>
    </div>
  </div>
</template>

<style scoped>
.Medals_Container{
  margin-top: 40px;
}
</style>
