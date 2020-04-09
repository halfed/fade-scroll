<template>
  <div id="app">
    <h1>Vue Home</h1>
    
    <router-view />
  </div>
</template>

<script>
  export default {
    components: {
    }
  }
</script>

<style lang="scss">
  @import './styles/main';
  #app
  {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    h1 {
      padding: 10px 0 5px 0;
      font-size: 3em;
      font-weight: 900;
      letter-spacing: 10px;
    }
  }
</style>
