<template>
  <div id="app">
      <h1>{{title}}</h1>
      <ninja></ninja>
  </div>
</template>

<script>
import Ninja from './Ninja.vue';

export default {
  components: { 
    'ninja':Ninja 
  },
  data () {
    return {
      title:'Ninja App'
    }
  }
}
</script>

<style>
</style>
