<template>
  <div id="app" class="container mt-5"> 
    <h1>My Shop</h1>
    <p class="animated fadeInRight">Take a look at our offering</p>
    <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
  </div>
</template>

<script>

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"
export default {
  name: 'App',
  components: {
    FontAwesomeIcon,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
