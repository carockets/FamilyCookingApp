<template>
  <div id="app" class="app-container">
    <!--
    <img alt="Vue logo" src="./assets/logo.png">
    -->
    <div class="welcome">Familien Kochplan</div>
    <hr/>
    <div class="navigation">
      <router-link class="button-primary button-navigation" to="/familien">Familienliste</router-link>
      <router-link class="button-primary button-navigation" to="/kochplan">Kochplan ansehen</router-link>
      <router-link class="button-primary button-navigation" to="/kochplan_erstellen">Kochplan erstellen</router-link>
    </div>
    <hr/>
      <!-- route outlet -->
      <!-- component matched by the route will render here -->
      <router-view></router-view>
  </div>
</template>

<script>
import FamilyList from './pages/FamilyList.vue'
import AddFamily from './pages/AddFamily.vue'
import CreateCookingPlan from './pages/CreateCookingPlan.vue'

export default {
  name: 'app',
  components: {
    FamilyList,
    AddFamily,
    CreateCookingPlan
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

hr {
  border-top-color: #ff6f69;
}

.app-container {
  margin: 60px 200px 60px 200px
}

.welcome {
  font-family: 'Fredericka the Great', cursive;
  font-size: 90px;
  color: #ff6f69;
  margin-bottom: 30px;
}

.button-navigation {
  height: 50px;
  padding: 10px;
  border-radius: 5px;
  margin: 20px;
  margin-bottom: 40px;
}

.button-primary{
  background-color: rgba(255,111,105) !important;
  border: none !important;
  color: rgba(255,238,173);
  font-weight: 500;
}

.button-primary:hover {
    background-color: rgba(135,185,162) !important;
    color:#fff !important;
}
</style>
