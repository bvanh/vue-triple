<template>
  <div>
    <swiper :options="swiperOptions">
      <swiper-slide>
        <img :src="importImgBanner('cover-tripler.jpg')" />
      </swiper-slide>
    </swiper>
    <div class="banner-event">
      <img :src="importImgBanner('banner-on-home.jpg')" />
      <div>
        <img :src="importImgBanner('banner-web-2.jpg')" />
        <div class="shop-now">
          <h2>tripleR</h2>
          <p>Real Style – Real People – Real Design</p>
          <a>SHOP NOW</a>
          <a>PROMOTIONS</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { importImgBanner } from "../../../ultils/importImg";
// import "swiper/css/swiper.css";
export default {
  name: "",
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 0,
        freeMode: false
        // loop: true
      }
    };
  },
  methods: {
    importImgBanner(url) {
      return importImgBanner[url];
    }
  },
  components: {
    Swiper,
    SwiperSlide
    // directive
  }
};
</script>

<style src='./style.scss' lang='scss' scoped>
</style>