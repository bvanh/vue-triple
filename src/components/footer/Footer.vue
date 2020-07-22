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
      <a-row type="flex">
        <a-col :span="24" :md="{span:6}">
          <img :src="importImgFooter('logo-tripler-footer.png')" class="info-logo" />
          <router-link to="/">Số 291 - 295 Âu Cơ, P. Phú Trung, Q. Tân Phú</router-link>
          <router-link to="/">Số 291 - 295 Âu Cơ, P. Phú Trung, Q. Tân Phú</router-link>
          <img :src="importImgFooter('khai-bao-bo-cong-thuong.png')" class="info-bct" />
        </a-col>
        <a-col :span="24" :md="{span:6}">
          <h3 class="info-title">INFOMATION</h3>
          <router-link :to="item.link" v-for="item in menus" :key="item.name">
            <img :src="importImgFooter('bg-content-link.png')" />
            {{item.name}}
          </router-link>
        </a-col>
        <a-col :span="24" :md="{span:6}">
          <h3 class="info-title">FOLLOW US</h3>
          <div class="icon-socials">
            <router-link :to="item.link" v-for="item in socials" :key="item.name">
              <img :src="importImgFooter(`${item.name}.png`)" />
            </router-link>
          </div>
          <a-input placeholder="Email..." class="info-mail">
            <a-icon slot="suffix" type="mail" />
          </a-input>
          <a v-for="item in contacts" :key="item.value"><span>{{item.type}}</span>: {{item.value}}</a>
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
        { name: "Đổi trả", link: "" },
        { name: "Bảo mật", link: "" }
      ],
      socials: [
        { name: "facebook-black", link: "" },
        { name: "instagram-black", link: "" },
        { name: "linkedin-black", link: "" },
        { name: "twitter", link: "" },
        { name: "youtube", link: "" }
      ],
      contacts: [
        { type: "Phone", value: "0110111011" },
        { type: "Mail", value: "vue-triple@gmail.com" },
        { type: "Site", value: "www.demo.vn" }
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