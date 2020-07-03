<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="item border-bottom">
        <div class="item-img-wapper">
          <img
            src="//imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg"
            class="item-img"
          />
        </div>
        <div class="item-info">
          <p class="item-tiele">
            北京当地游 3天自由行
          </p>
          <p class="item-desc">
            北京延庆3天2晚自由行-Club Med Joyview 北京延庆度假村
          </p>
         
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeWeekend"
};
</script>
<style lang="stylus" scoped>
.title
    margin-top: .2rem
    line-height :.8rem
    background #eeeeee
    text-indent .2rem
.item-img-wapper
    overflow hidden
    height 0
    padding-bottom 33.9%
    .item-img
        width 100%
    .item-info
        padding .1rem
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
       

</style>
