<template>
  <!-- <img alt="Vue logo" src="./assets/banner1.png">  -->
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <router-link :to="{name: 'PaginaPrueba'}">Página prueba</router-link>  -->
  <barra-menu/>
  <router-view/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import BarraMenu from '@/components/Menu.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    BarraMenu
  }
}
</script>

<style>
/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
