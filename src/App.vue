<template>
  <div id="app">
    <h1>Vue Home</h1>
    
    <router-view />
  </div>
</template>

<script>
  import { Slide } from 'vue-burger-menu';

  export default {
    components: {
      Slide
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
    background: url(./assets/images/billiards-wallpapers-large.jpg) no-repeat center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    color: #FFFFFF;

    h1 {
      padding: 10px 0 5px 0;
      font-size: 3em;
      font-weight: 900;
      letter-spacing: 10px;
    }
  }
  #nav
  {
    padding: 15px 30px 15px 30px;
    margin-bottom: 50px;
    border-top: 1px solid #484848;
    border-bottom: 1px solid #484848;
    background-color: #202020;
    a {
      font-weight: bold;
      color: #FFFFFF;
      &.router-link-exact-active {
        color: #42b983;
      letter-spacing: 3px;
      }
    }
  }
</style>
