<template>
  <div class="hjhplay">
    <div class="zhuangtai"></div>
    <div class="hplaynav">
      <span class="hback"></span>
      <span class="hsongname">我是歌名</span>
      <span class="hsonglist"></span>
    </div>
    <div class="hjhuser">
      <span class="hjhgang"></span>
      <span class="husername">我是歌手名字</span>
      <span class="hjhgang"></span>
    </div>
    <ul class="hjhtest">
      <li>标准</li>
      <li>MV</li>
      <li>音效</li>
    </ul>
    <div class="hjhsonghead">
      <img src alt>
    </div>
    <ul class="hjhlrc">
      <li>我是歌词</li>
      <li>我是歌词</li>
      <li>我是歌词</li>
    </ul>
    <div class="hjhshare">
      <a href="#">
        <img src="./../assets/hplayer_slices/icon01@2x.png" alt>
      </a>
      <a href="#">
        <img src="./../assets/hplayer_slices/icon02@2x.png" alt>
      </a>
      <a href="#">
        <img src="./../assets/hplayer_slices/icon03@2x.png" alt>
      </a>
    </div>
    <div class="hjhscroll">
      <span>2:00</span>
      <div class="hjhscrollp">
        <div class="hjhscrollmove">
          <span class="hjhscrollball"></span>
        </div>
      </div>
      <span>3:49</span>
    </div>
    <div class="hjhbtn">
      <a href="#">
        <img src="./../assets/hplayer_slices/icon04@2x.png" alt>
      </a>
      <a href="#">
        <img src="./../assets/hplayer_slices/icon05@2x.png" alt>
      </a>
      <a href="#">
        <img src="./../assets/hplayer_slices/icon06@2x.png" alt>
      </a>
      <a href="#">
        <img src="./../assets/hplayer_slices/icon07@2x.png" alt>
      </a>
      <a href="#">
        <img src="./../assets/hplayer_slices/icon08@2x.png" alt>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang="less">
.hjhplay {
  height: 100%;
  overflow: auto;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
  background: url("./../assets/img/happysing/happybg.jpg") no-repeat center
    center;
  .zhuangtai {
    height: 0.37rem;
  }
  .hplaynav {
    padding: 0 0.31rem;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .hback {
      display: block;
      width: 0.21rem;
      height: 0.36rem;
      background: url("./../assets/hplayer_slices/nav-icon01@2x.png") no-repeat
        center center;
      background-size: cover;
    }
    .hsongname {
      display: block;
      font-size: 0.36rem;
      line-height: 0.36rem;
    }
    .hsonglist {
      display: block;
      width: 0.36rem;
      height: 0.08rem;
      background: url("./../assets/hplayer_slices/nav-icon02@2x.png") no-repeat
        center center;
      background-size: cover;
    }
  }
  .hjhuser {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 0.49rem;
    .hjhgang {
      display: block;
      width: 0.15rem;
      height: 0.03rem;
      background: #fff;
    }
    .husername {
      margin: 0 0.13rem;
    }
  }
  .hjhtest {
    width: 4.08rem;
    height: 0.6rem;
    margin: 0 auto;
    margin-top: 0.25rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    li {
      width: 1.2rem;
      height: 0.6rem;
      text-align: center;
      line-height: 0.6rem;
      border-radius: 0.3rem;
      background: url("./../assets/hplayer_slices/icon10@2x.png") no-repeat
        center center;
      background-size: cover;
      color: rgb(248, 93, 61);
      font-size: 0.28rem;
    }
  }
  .hjhsonghead {
    width: 3.2rem;
    height: 3.2rem;
    margin: 0.8rem auto 0;

    background: url("./../assets/hplayer_slices/cricle-incon01.png") no-repeat
      center center;
    background-size: cover;
    border-radius: 50%;
    img {
      width: 3.04rem;
      height: 3.04rem;
      margin: 0.08rem 0 0 0.08rem;
    }
  }
  .hjhlrc {
    width: 3.2rem;
    height: 1.2rem;
    overflow: hidden;
    margin: 0.84rem auto 0.8rem;
    li {
      height: 0.4rem;
      line-height: 0.4rem;
      font-size: 0.28rem;
      text-align: center;
    }
  }
  .hjhshare {
    width: 5.55rem;
    height: 0.45rem;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    a {
      display: block;
      width: 0.44rem;
      height: 0.44rem;
      img {
        width: 0.44rem;
      }
    }
  }
  .hjhscroll {
    padding: 0 0.34rem;
    margin-top: 0.8rem;
    height: 0.22rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .hjhscrollp {
      width: 5.2rem;
      height: 0.04rem;
      background: #fff;
    //   overflow: hidden;
      .hjhscrollmove {
        width: 2.6rem;
        height: 0.04rem;
        background: linear-gradient(right, rgb(254, 44, 95), rgb(246, 105, 52));
        position: relative;
   
        .hjhscrollball {
          display: block;
          width: 0.08rem;
          height: 0.08rem;
          position:absolute;
          right:0;
          transform: translateY(-.02rem);
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 0 0.1rem 0.05rem rgb(254, 44, 95);
        }
      }
    }
  }
  .hjhbtn {
    margin-top: 0.9rem;
    padding: 0 0.5rem .98rem 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    a {
      display: block;
      width: 0.44rem;
      height: 0.44rem;
      img {
        width: 0.44rem;
        height: 0.44rem;
      }
    }
    a:nth-child(3) {
      width: 0.56rem;
      height: 0.56rem;
      img {
        width: 0.56rem;
        height: 0.56rem;
      }
    }
  }
}
</style>
