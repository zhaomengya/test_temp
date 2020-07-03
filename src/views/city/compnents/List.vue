<template>
  <div class="list">
    <div class="area">
      <div class="title boder-topbottom">当前城市</div>
      <div class="button-list">
        <div class="button-wrap">
          <div class="button">北京</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title boder-topbottom">热门城市</div>
      <div class="button-list">
        <div class="button-wrap">
          <div class="button">北京</div>
        </div>
        <div class="button-wrap">
          <div class="button">北京</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title boder-topbottom">A</div>
      <div class="item-list">
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
      </div>
    </div>
     <div class="area">
      <div class="title boder-topbottom">A</div>
      <div class="item-list">
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
      </div>
    </div>
     <div class="area">
      <div class="title boder-topbottom">A</div>
      <div class="item-list">
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
      </div>
    </div>
     <div class="area">
      <div class="title boder-topbottom">A</div>
      <div class="item-list">
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
        <div class="item border-bottom">阿拉尔</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityList',
};
</script>
<style lang="stylus" scope>
.list
    overflow hidden
    position absolute
    top 1.6rem
    bottom 0
    left 0
    right 0
.title
    line-height :.4rem





    
    background #eeeeee
    padding-left .2rem
    color #666
    font-size .26rem
    border-bottom 1px solid #ccc
.button-list
    padding .1rem .6rem .1rem .1rem
    overflow hidden
    .button-wrap
        float left
        width 33.33%
        .button
            text-align center
            margin .1rem
            border .02rem solid #ccc
            padding .1rem 0
            border-radius radius

.item-list
    .item
        line-height .76rem
        color:#666
        padding-left .2rem
        border-bottom 1px solid #ccc
</style>
