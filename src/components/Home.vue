<script setup>
import { getFlagEmoji } from '../assets/js/utils'
import countriesFR from 'i18n-iso-countries/langs/fr.json'
import countries from 'i18n-iso-countries'

const onlinePays = ['FRA', 'AFG', 'USA', 'ESP']
const nbPlayerPays = ['136', '3547', '647', '12']

</script>

<template>
  <div class="Home">
    <h2>Hello, Admin ! </h2>
    <!-- <div class="Home_Container">
      <div class="card">
        <h3>List des pays en jeux </h3>
        <div class="Home_Pays-List" v-for="pays, index in onlinePays" :key="pays">
          <p>{{getFlagEmoji(countries.alpha3ToAlpha2(pays))}} {{ countriesFR.countries[countries.alpha3ToAlpha2(pays)] }}</p>
          <span>{{ nbPlayerPays[index] }} <img src="https://cdn-icons-png.flaticon.com/128/59/59045.png"></span>
        </div>
      </div> 
      <div class="card">
        <h3>List des medailles en jeux </h3>
        <div class="Home_Pays-List" v-for="pays, index in onlinePays" :key="pays">
          <p></p>
          <span></span>
        </div>
      </div> 
    </div> -->
  </div>
</template>

<style scoped>
.Home_Container{
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.Home_Pays-List{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.Home_Pays-List span{
  margin-left: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.Home_Pays-List span img{
  width: 15px;
  margin-left: 5px ;
}
</style>
