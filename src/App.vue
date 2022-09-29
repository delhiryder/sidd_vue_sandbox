<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <button type="button" @click="$userback.show()">Show</button>
  <button type="button" @click="$userback.hide()">Hide</button>

  <button type="button" @click="$userback.open('bug')">Open Bugs</button>
  <button type="button" @click="$userback.open('general', 'screenshot')">Screenshot me!</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
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
