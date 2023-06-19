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
  },
  medal: {
    type: Object,
    required: false
  }
})

// Ref
const eventName = ref()
const sport = ref()
const datetime = ref()
const city = ref()
const type = ref()
const zone = ref()
const athlete = ref()
const nationality = ref()
const description = ref()
const coverUrl = ref()

defineExpose({
  eventName,
  sport,
  datetime,
  city,
  type,
  zone,
  athlete,
  nationality,
  description,
  coverUrl,
})
</script>

<template>
  <h5>Médaille n°{{props.idMedal}}</h5>
  <form action="" method="post">
      <label for="event_name">Nom de l'événement : </label>
      <input type="text" id="event_name" ref="eventName" :value="props.medal?.event_name">
      <br>
      <label for="sport">Sport :</label>
      <input type="text" id="sport" ref="sport" :value="props.medal?.sport">
      <br>
      <label for="datetime">Date et heure :</label>
      <input type="datetime" id="datetime" ref="datetime" :value="props.medal?.datetime">
      <br>
      <label for="city">Ville :</label>
      <input type="city" id="city" ref="city" :value="props.medal?.city">
      <br>
      <label for="type">Type de médaille : </label>
      <select ref="type" id="type" :value="props.medal?.type">
        <option disabled value="">Choisir un type</option>
        <option value="2">Or</option>
        <option value="1">Argent</option>
        <option value="0">Bronze</option>
      </select>
      <br>
      <label for="zone">Zone d'apparation : </label>
      <select ref="zone" id="zone" :value="2">
        <option disabled value="">Choisir une zone</option>
        <option v-for="data in Object.keys(terrainData.mapping)" :value="data" :key="data">{{ terrainData.mapping[data] }}</option>
      </select>
      <br>
      <label for="medalAthlete">Athlète de l'épreuve : </label>
      <input type="text" id="medalAthlete" ref="athlete" :value="props.medal?.athlete">
      <br>
      <label for="pays">Pays de l'athlète : </label>
      <select ref="nationality" id="pays" :value="props.medal?.nationality">
        <option disabled value="">Choisir un pays</option>
        <option v-for="data in Object.keys(countriesFR.countries)" :value="countries.alpha2ToAlpha3(data)" :key="data">{{getFlagEmoji(data) }} - {{ countriesFR.countries[data] }}</option>
      </select>
      <br>
      <label for="cover_url">Cover URL : </label>
      <input type="text" id="cover_url" ref="coverUrl" :value="props.medal?.cover_url">
      <br>
      <label for="description">Description : </label>
      <textarea rows="5" cols="50" id="description" ref="description" :value="props.medal?.description"></textarea>
    </form>
</template>

<style scoped>
h5 {
  margin-bottom: 10px;
}
</style>