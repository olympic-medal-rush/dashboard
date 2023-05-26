<script setup>
import { ref } from 'vue'
import MedalForm from './MedalForm.vue'

const nbMedals = ref(1)
const medalsForm = ref([])

const submit = () => {
  
  const data = []
  
  medalsForm.value.forEach(medalForm => {
    data.push({
      type: parseInt(medalForm.medalType.value),
      titre: medalForm.medalTitle.value,
      iso: medalForm.medalPays.value,
      zone: parseInt(medalForm.medalZone.value),
      athlete: medalForm.medalAthlete.value
    })
  })
  
  console.log(data);
  fetch(`${import.meta.env.OLYMPIC_WSS}/admin/medal`, {
        method: 'POST',
        body: JSON.stringify(data[0]),
        mode: "no-cors"
  })
}

const handleNbMedalChange = (e) => {
  nbMedals.value = parseInt(e.target.value)
}


</script>

<template>
  <div class="Form AddMedal">
    <h3>Ajouté des médailles</h3>
    <label>Nombre de médailles a ajouté : </label>
    <input type="number" min="1" max="10" :value="nbMedals" v-on:change="handleNbMedalChange">
    <MedalForm v-for="num in nbMedals" :key="num" :idMedal="num" ref="medalsForm"/>
    <br>
    <a class="submit" v-on:click="submit" >ENVOYER</a>
  </div>
</template>

<style scoped>
</style>