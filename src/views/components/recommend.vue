<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom">
        <img
          src="//imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg"
          class="item-img"
        />

        <div class="item-info">
          <p class="item-tiele">
            北京当地游 3天自由行
          </p>
          <p class="item-desc">北京延庆3天2晚自由行-Club Med Joyview 北京延庆度假村</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeRecommend"
};
</script>
<style lang="stylus" scoped>
.title
    margin-top: .2rem
    line-height :.8rem
    background #eeeeee
    text-indent .2rem
.item
    overflow hidden
    display flex
    height 1.9rem

    .item-img
        height 1.7rem
        width 1.7rem
        padding .1rem
    .item-info
        flex 1
        padding .1rem
        min-width 0 
        .item-tiele
            line-height .54rem
            font-size .32rem
            overflow hidden
            white-space 0
            text-overflow ellipsis
        .item-desc
            //line-height .4rem
            color #cccccc
            overflow hidden
            white-space 0
            text-overflow ellipsis
        .item-button
            background #ff9300
            padding 0 .2rem
            border-radius .06rem 
            color #ffffff
            line-height .44rem

</style>
