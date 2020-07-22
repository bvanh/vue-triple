<template>
  <div class="footer">
    <a-row class="options">
      <a-col :span="8">
        <img :src="importImgFooter('delivery.png')" class="icon-expand" />
        <span>Delivery</span>
      </a-col>
      <a-col :span="8">
        <img :src="importImgFooter('placeholder2.png')" class="icon-expand" />
        <span>Store</span>
      </a-col>
      <a-col :span="8">
        <img :src="importImgFooter('comment-white.png')" class="icon-expand" />
        <span>Contact</span>
      </a-col>
    </a-row>
    <div class="info">
      <a-row>
        <a-col :span="24" :md="{span:8}">
          <img :src="importImgFooter('logo-tripler-footer.png')" class="info-logo" />
          <router-link to="/">Số 291 - 295 Âu Cơ, P. Phú Trung, Q. Tân Phú</router-link>
          <router-link to="/">Số 291 - 295 Âu Cơ, P. Phú Trung, Q. Tân Phú</router-link>
          <img :src="importImgFooter('khai-bao-bo-cong-thuong.png')" class="info-bct" />
        </a-col>
        <a-col :span="24" :md="{span:8}">
          <h3 class="info-title">INFOMATION</h3>
          <div v-for="item in menus" :key="item.name">
            <router-link :to="item.link">
              <img :src="importImgFooter('bg-content-link.png')" />
              {{item.name}}
            </router-link>
          </div>
        </a-col>
        <a-col :span="24" :md="{span:8}">
          <h3 class="info-title">INFOMATION</h3>
          <div v-for="item in menus" :key="item.name">
            <router-link :to="item.link">
              <img :src="importImgFooter('bg-content-link.png')" />
              {{item.name}}
            </router-link>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import { importImgFooter } from "../../ultils/importImg";
export default {
  name: "Footer",
  data() {
    return {
      menus: [
        { name: "Giới thiệu", link: "" },
        { name: "Liên hệ", link: "" },
        { name: "Bảo hành", link: "" },
        { name: "Vận chuyển", link: "" },
        { name: "Thanh toán", link: "" },
        { name: "Dổi trả", link: "" },
        { name: "Bảo mật", link: "" }
      ],
      socials: [
        { name: "Giới thiệu", link: "" },
        { name: "Liên hệ", link: "" },
        { name: "Bảo hành", link: "" },
        { name: "Vận chuyển", link: "" },
        { name: "Thanh toán", link: "" },
        { name: "Dổi trả", link: "" },
        { name: "Bảo mật", link: "" }
      ]
    };
  },
  methods: {
    importImgFooter(img) {
      return importImgFooter[img];
    }
  }
};
</script>

<style src='./style.scss' lang='scss'>
</style>