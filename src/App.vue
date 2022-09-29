<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <MarkerIOWidget :outer-destination-id="destination_id" />
</template>

<script>
import LogRocket from 'logrocket';
import HelloWorld from './components/HelloWorld.vue'

LogRocket.init('vtonhp/sidd_vue_sandbox');

import MarkerIOWidget from './components/MarkerIOWidget.vue'


export default {
  name: 'App',
  components: {
    MarkerIOWidget,
    HelloWorld
  },
  data() {
    return {
      destination_id: '6331d30396c72b3b4f0613b9'
    }
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
