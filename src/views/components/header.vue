<template>
  <div class="header">
    <!-- 第一部分 -->
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>

    <input class="header-input" value="请输入城市景点游玩主题" />
    <router-link to="/city">
    <!-- <div class="header-right">城市{{this.city}}</div> -->
      <div class="header-right">城市</div>
    </router-link>
        
  </div>
</template>

<script>
export default {
  name: "HomeHeader"
  // props:{
  //   city:String
  // }
};
</script>

<style lang="stylus" scoped>

.header{
    display flex
    line-height :.86rem;
    background #00bcd4
    color #fff
    }
.header-left{
    width :.64rem
    height .86rem
    float left
    }
.header-input{
    flex 1
    background #ffffff
    border 1px solid #fff
    border-radius .1rem
    margin-top .1rem
    margin-bottom  .12rem
    margin-left .2rem
    color #cccccc
}
.header-right{
    width 1.24rem;
    float right ;
    height .86rem
    text-align center
    color #fff
}
</style>
