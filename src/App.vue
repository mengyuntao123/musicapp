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

<style lang="less" scoped>
#app{
  height: 100%;
}
</style>