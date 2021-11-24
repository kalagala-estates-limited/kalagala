<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  setup() {},
};
</script>

<style>
#app {
  font-family: Questrial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@font-face {
  font-family: "Questrial";
  src: url("./assets/Questrial-Regular.ttf");
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
