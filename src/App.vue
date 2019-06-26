<template>
  <div id="app">
    <!-- <Music></Music> -->
    <Hjhplayer></Hjhplayer>
    <router-view/>
    <!-- <footplayer></footplayer> -->
  </div>
</template>

<script>
import setRem from "./../src/assets/js/rem";
import footplayer from "./components/footerPlayer.vue";
// import Music from "./components/hjhMUsic";
import Hjhplayer from './components/hjhplayer.vue'
export default {
  name: "App",
  components: {
    footplayer,
    Hjhplayer
    // Music
  },
  mounted() {
    setRem.rem();
    window.onresize = setRem.rem;

    this.$router.push("./home");
   
  }
};
</script>

<style lang='less'>
@import url("./../static/reset.css");
html{

  #app {
    height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  color: #FFF;
  background: #000;
}
}
</style>
