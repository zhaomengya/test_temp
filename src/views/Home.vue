<template>
  <div>
  <!-- <Home-Header :city='city'></Home-Header> -->
    <Home-Header></Home-Header>
    <!-- <home-swiper :list='SwiperList'></home-swiper> -->
    <home-swiper></home-swiper>
    <Home-Icons></Home-Icons>
    <Home-Recommend></Home-Recommend>
    <home-Weekend></home-Weekend>
  </div>
</template>

<script>
import HomeHeader from "./components/header";
import HomeSwiper from "./components/swiper";
import HomeIcons from "./components/icons";
import HomeRecommend from "./components/recommend";
import HomeWeekend from "./components/weekend";
// import axios from 'axios'
export default {
  name: "Home",
  components: {
    HomeHeader,
    // eslint-disable-next-line vue/no-unused-components
    HomeSwiper,
    // eslint-disable-next-line vue/no-unused-components
    HomeIcons,
    // eslint-disable-next-line vue/no-unused-components
    HomeRecommend,
    // eslint-disable-next-line vue/no-unused-components
    HomeWeekend
   
  }
  // data() {
  //   return {
  //     city:'',
  //     SwiperList:[]
  //   }
  // },
  // methods: {
  //   getHomeInfo(){
  //     axios.get('/api/index.json').then(this.getHomeInfoSucc)
  //   },
  //   getHomeInfoSucc(res){
  //     console.log(res);
      
  //     res = res.data
  //     if(res.ret && res.data){
  //       const data = res.data
  //       this.city = data.city
  //       this.SwiperList=data.list
  //     }
  //   }
  // },
  // mounted() {
  //   //页面挂载好后执行函数
  //     this.getHomeInfo()
  
  // },
};
</script>
