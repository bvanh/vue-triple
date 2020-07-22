<template>
  <div class="section-container">
    <h2>SALE</h2>
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item in listBestSeller" :key="item.id">
        <router-link to>
          <img :src="importImgBestSeller('demo-seller.jpg')" width="100%" />
          <h4 class="product-name">{{ item.productName }}</h4>
          <p class="product-price">{{ item.price }}</p>
        </router-link>
      </swiper-slide>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import {
  importImgBestSeller,
  importImgOptions
} from "../../../ultils/importImg";
import "swiper/swiper-bundle.css";
export default {
  name: "Bestseller",
  data() {
    return {
      swiperOptions: {
        slidesPerView: 6,
        spaceBetween: 50,
        centeredSlides: true,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
            margin: 10
          },
          576: {
            slidesPerView: 3,
            margin: 10
          },
          768: {
            slidesPerView: 3
          },
          1024: {
            slidesPerView: 4
          },
          1280: {
            slidesPerView: 5
          }
        }
      },
      listBestSeller: [
        { id: 0, productName: "NATRUE PRINT SHIRT", price: 300000 },
        { id: 1, productName: "NATRUE PRINT SHIRT", price: 300000 },
        { id: 2, productName: "NATRUE PRINT SHIRT", price: 300000 },
        { id: 3, productName: "NATRUE PRINT SHIRT", price: 300000 }
      ]
    };
  },
  methods: {
    importImgBestSeller(img) {
      return importImgBestSeller[img];
    },
    importImgOptions(img){
        return importImgOptions[img];
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
};
</script>

<style src="./style.scss" lang="scss"></style>
