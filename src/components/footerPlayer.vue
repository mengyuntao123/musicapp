<template>
  <div class="footplayer">
      <div class="hjhimg">
        <img src="./../assets/mymusic/home-banner-11.png@3x.png" alt="">
      </div>
      <div class="hmusicname">
        <p>Price Tag (Doman & Gooding Remix)</p>
        <p>G.E.M 邓紫棋</p>
      </div>
      <div class="hplay">
      
          <a href="#"><img src="./../assets/mymusic/home-icon-10.png@3x.png" alt=""></a>
          <a href="#"><img src="./../assets/mymusic/home-icon-11.png@3x.png" alt=""></a>
       
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped lang='less'>
@media screen and(min-width: 370) {
    .hplay{
      width: .1.28rem;
    }
}
  .footplayer{
    width: 100%;
    position:fixed;
    bottom:0;
    height: .98rem;
    background: rgb(42,42,42);
    .hjhimg{
      width: .6rem;
      height: .6rem;
      border-radius: 50%;
      overflow: hidden;
      float: left;
      margin:.19rem .24rem  .19rem .32rem;
      img{
        width: 100%;
        height: auto;
      }
    }
    .hmusicname{
      margin: .22rem 0 .21rem 0;
      float: left;
      p{
        color:#fff;
        font-size: .22rem;
        line-height: .33rem;
        text-align: left;
        &:nth-child(2){
          color: rgb(153,153,153);
        }
      }
    }
    .hplay{
      float: right;width: 1.48rem;
      margin:.28rem .32rem 0 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      a{
        display: block;
        &:nth-child(1){
          width: .27rem;
          height: .44rem;
          img{
            width: .27rem;
            height: .44rem;
          }
        }
        &:nth-child(2){
           width: .44rem;
          height: .44rem;
          img{
            width: .44rem;
            height: .44rem;
          }
        }
      }

    }
  }
</style>
