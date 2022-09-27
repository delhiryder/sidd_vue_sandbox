<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <MarkerIOWidget/>
</template>

<script>
import LogRocket from 'logrocket';
import HelloWorld from './components/HelloWorld.vue'
import MarkerIOWidget from './components/MarkerIOWidget.vue'

LogRocket.init('vtonhp/sidd_vue_sandbox');

export default {
  name: 'App',
  components: {
    MarkerIOWidget,
    HelloWorld
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
