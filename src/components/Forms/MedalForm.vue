<script setup>
import { ref } from 'vue'
import { getFlagEmoji } from '../../assets/js/utils'
import terrainData from '../../assets/json/terrain_data.json'
import countriesFR from 'i18n-iso-countries/langs/fr.json'
import countries from 'i18n-iso-countries'

const props = defineProps({
  idMedal: {
    type: Number,
    required: true
  }
})

// Ref
const medalTitle = ref()
const medalType = ref()
const medalZone = ref()
const medalAthlete = ref()
const medalPays = ref()

defineExpose({
  medalTitle,
  medalType,
  medalZone,
  medalAthlete,
  medalPays
})
</script>

<template>
  <h5>Médaille n°{{props.idMedal}}</h5>
  <form action="" method="post">
      <label for="medalTitle">Nom de l'épreuve : </label>
      <input type="text" id="medalTitle" ref="medalTitle">
      <br>
      <label for="type">Choisir un type : </label>
      <select ref="medalType" id="type">
        <option disabled value="">Choisir un type</option>
        <option value="2">Or</option>
        <option value="1">Argent</option>
        <option value="0">Bronze</option>
      </select>
      <br>
      <label for="zone">Choisir une zone : </label>
      <select ref="medalZone" id="zone">
        <option disabled value="">Choisir une zone</option>
        <option v-for="data in Object.keys(terrainData.mapping)" :value="data" :key="data">{{ terrainData.mapping[data] }}</option>
      </select>
      <br>
      <label for="medalAthlete">Athlète de l'épreuve : </label>
      <input type="text" id="medalAthlete" ref="medalAthlete">
      <br>
      <label for="pays">Pays de l'athlète : </label>
      <select ref="medalPays" id="pays">
        <option disabled value="">Choisir un pays</option>
        <option v-for="data in Object.keys(countriesFR.countries)" :value="countries.alpha2ToAlpha3(data)" :key="data">{{getFlagEmoji(data) }} - {{ countriesFR.countries[data] }}</option>
      </select>
      <br>
    </form>
</template>

<style scoped>
h5 {
  margin-bottom: 10px;
}
</style>