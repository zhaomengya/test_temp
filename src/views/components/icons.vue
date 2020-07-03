<template>
  <div class="icons">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <img :src="item.imgUrl" alt="" class="banner" />
          <p class="massage">{{ item.msg }}</p>
        </div> 
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  data() {
    return {
      // swiperOptions:{
      //   autoplay:false
      // },
      imgList: [
        {
          id: "01",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/flight.png",
          msg: "机票"
        },
        {
          id: "02",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/flight.png",
          msg: "机票"
        },
        {
          id: "03",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/flight.png",
          msg: "机票"
        },
        {
          id: "04",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/flight.png",
          msg: "机票"
        },
        {
          id: "05",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/flight.png",
          msg: "机票"
        },
        {
          id: "06",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/flight.png",
          msg: "机票"
        },
        {
          id: "07",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/flight.png",
          msg: "机票"
        },
        {
          id: "08",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/flight.png",
          msg: "机票"
        },
        {
          id: "09",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/flight.png",
          msg: "机票"
        }
      ]
    };
    
  },
  computed: {
    pages() {
      const pages = [];
      this.imgList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>

<style lang="stylus" scoped>
.icons
    overflow hidden
    height 0
    padding-bottom 50%

    .icon
        float left
        width 25%
        padding-bottom .2rem

        .banner

            margin-left .2rem
            width 70%
.massage
 margin-left .5rem
 margin-top .1rem
</style>
