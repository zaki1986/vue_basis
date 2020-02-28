<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="link">
      <router-link to="/main" class="mainPage">Home</router-link>
      <router-link to="/person" class="personCenter">Persion</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
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

.link a {
  margin: 0 10px;
}
</style>
