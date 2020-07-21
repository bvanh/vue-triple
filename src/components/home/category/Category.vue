<template>
  <div class="section-container">
    <a-row :gutter="[16,16]">
      <a-col :span="24" :md="{span:12}" v-for="item in categories" :key="item.id">
        <img :src="importImgCategory('demo-category.jpg')" width="100%" />
        <router-link to="/" class="category-name">{{item.name}}</router-link>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { importImgCategory } from "../../../ultils/importImg";
export default {
  data() {
    return {
      categories: [
        { id: 1, name: "JEANS" },
        { id: 2, name: "JEANS" },
        { id: 3, name: "JEANS" },
        { id: 4, name: "JEANS" }
      ]
    };
  },
  methods: {
    importImgCategory(img) {
      return importImgCategory[img];
    }
  }
};
</script>

<style src='./style.scss' lang='scss'>
</style>