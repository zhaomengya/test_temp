<template>
  <div class="wrapper">
  <!-- <swiper :options="swiperOptions" v-if='showSwiper'> -->
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item of swiperList" :key="item.id" >
          <img :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  // props:{
  //   list:Array
  // }
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        loop:true //无限轮播
      },
      swiperList: [
        {
          id: "01",
          imgUrl:
            "https://imgs.qunarzz.com/vs_ceph_vs_tts/303beff5-3630-4e14-b329-884246baaa6e.jpg_r_390x260x95_f15b626b.jpg"
        },
        {
          id: "02",
          imgUrl:
            "https://imgs.qunarzz.com/vs_ceph_vs_tts/f2d07a18-7eba-4de2-8720-1f62550a92be.jpg_r_390x260x95_22559dd2.jpg"
        },
        {
          id: "03",
          imgUrl:
            "https://imgs.qunarzz.com/vs_ceph_vs_tts/e2035e96-5c7b-4393-96d1-e331dbfef17f.jpg_r_390x260x95_a1250249.jpg"
        }
      ]
    };
  }
  // computed: {
  //   showSwiper(){
  //     return this.list.length
  //     //解决轮播图默认显示最后一张
  //   }
  
};
</script>
<style lang="stylus" scoped>
.wrapper{
    width 100%
    overflow hidden
    height 0
    padding-bottom 31.25%
}
img{
    height 100%
    width 100%;
}
</style>
