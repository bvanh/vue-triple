<template>
  <div class="home">
    <BannerAndEvent />
    <BestSeller />
    <Category />
    <Sale/>
  </div>
</template>

<script>
import BannerAndEvent from "../components/home/banner/BannerAndEvent";
import BestSeller from "../components/home/bestseller/BestSeller";
import Category from "../components/home/category/Category";
import Sale from "../components/home/sale/Sale";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    BannerAndEvent,
    BestSeller,
    Category,
    Sale
  }
};
</script>

