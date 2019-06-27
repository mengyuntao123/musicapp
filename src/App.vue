<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Rem from './assets/js/rem.js'
export default {
  name: 'App',
  mounted () {
    Rem.rem();
    window.onresize=Rem.rem;
  }
}
</script>

<style  lang="less" scoped>
@import url('../static/css/common.css');
#app{
  height: 100%;
  html,body{
    background: black;
  }

  
}
</style>