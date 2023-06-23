<script setup>

</script>

<template>
  <div class="Menu">
    <div class="Menu_Logo">
      <img src="https://stillmed.olympics.com/media/Images/OlympicOrg/IOC/The_Organisation/The-Olympic-Rings/Olympic_rings_TM_c_IOC_All_rights_reserved_1.jpg" alt="">
      <h1>Olympics <br> Medal Rush</h1>
      <span>Dashboard</span>
    </div>
    <div class="Menu_Container">
      <router-link to="/">Acceuil</router-link>
      <span class="divider"></span>
      <router-link to="/medals">Médailles</router-link>
      <router-link to="/boosts">Boosts</router-link>
    </div>
  </div>
</template>

<style scoped>
.Menu {
  background-color: white;
  width: 200px;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  color: #242424;
}

.Menu_Logo {
  margin: 30px;
}

.Menu_Logo img{
  max-width: 150px;
}

.Menu_Logo h1{
  margin: 0 ;
  line-height: 1.2;
  font-size: 20px;
}

.Menu_Logo span{
  font-size: 12px;
  display: inline-block;
}

.Menu_Container{
  padding-left: 30px;
  display: flex;
  flex-direction: column;
}

.Menu_Container span{
  display: inline-block;
  margin: 7px 0;
}
</style>
