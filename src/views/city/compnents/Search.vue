<template>
  <div class="search">
    <input type="text" class="search-input" placeholder="请输入城市名或拼音" />
  </div>
</template>

<script>
export default {
  name: "CitySearch"
};
</script>
<style lang="stylus" scope>
.search
    height .72rem
    background #00bcd4
    padding 0 .1rem
    .search-input
        box-sizing border-box
        width 100%
        height .62rem
        line-height .62rem
        text-align center
        border-radius 0.06rem
        color #666
</style>
