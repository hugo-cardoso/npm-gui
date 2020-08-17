<template>
  <div id="app">
    <system-bar />
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import SystemBar from '@/components/SystemBar/SystemBar'

  export default {
    components: {
      SystemBar
    },
    name: 'npm-gui'
  }
</script>

<style lang="scss">
  @import './assets/scss/colors';

  * {
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
  }

  html,
  body,
  #app {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  .main-content {
    width: 100vw;
    height: calc(100vh - 25px);
    overflow: auto;
  }
</style>
