<template>
  <div class="header">
    <a-row class="nav">
      <a-row class="container" type="flex" justify="space-between" align="center">
        <a-col>
          <img :src="importImg('facebook-logo.png')" />
          <img :src="importImg('instagram.png')" />
          <img :src="importImg('linkedin-logo.png')" />
        </a-col>
        <a-col>
          <img :src="importImg('placeholder.png')" />
          <img :src="importImg('user.png')" />
          <img :src="importImg('heart-outline.png')" />
          <img :src="importImg('shopping-bag.png')" />
        </a-col>
      </a-row>
    </a-row>
    <a-row class="header-center">
      <a-row type="flex" justify="space-between" class="container">
        <a-col :span="8" :order="3" :lg="{order:1}" class="menu-toggle">
          <Slide :closeOnNavigation="true">
            <a id="home" href="#">
              <span>Home</span>
            </a>
          </Slide>
        </a-col>
        <a-col :span="8" :order="1" :lg="{order:2}">
          <img :src="importImg('logo-tripler.png')" />
        </a-col>
        <a-col :span="8" class="search" :order="2" :lg="{order:3}">
          <a-input placeholder="Search for products..." />
        </a-col>
      </a-row>
    </a-row>
    <a-row class="header-menu" type='flex' jutify='center' align='center'>
      <router-link to='/'>HOME</router-link>
      <router-link to='/'>CLOTHING</router-link>
      <router-link to='/'>COUPLE</router-link>
      <router-link to='/'>EVENT</router-link>
      <router-link to='/'>BLOG</router-link>
      <router-link to='notice'>NOTICE</router-link>
    </a-row>
  </div>
</template>
<script>
import { importImgHeader } from "../../ultils/importImg";
import { Slide } from "vue-burger-menu";
export default {
  name: "Header",
  methods: {
    importImg(img) {
      return importImgHeader[img];
    }
  },
  components: {
    Slide
  }
};
</script>
<style src='./header.scss' lang='scss'>
</style>