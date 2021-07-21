<template>
  <div class="home">
    <!-- 顶部导航栏 -->
    <TopTabBar></TopTabBar>

    <!-- 轮播图 -->
    <!-- <img alt="Vue logo" src="~assets/logo.png" /> -->
    <Slideshow></Slideshow>

    <!-- 商品导航栏 -->
    <GoodsNav></GoodsNav>

    <!-- 商品展示 -->
    <MiddleTabBar></MiddleTabBar>

    <!-- 底部填充 -->
    <BottomSpace></BottomSpace>
  </div>
</template>

<script>
// @ is an alias to /src
import TopTabBar from "components/toptabbar/TopTabBar.vue";
import Slideshow from "./Slideshow.vue";
import GoodsNav from "./GoodsNav.vue";
import MiddleTabBar from "./middletabbar/MiddleTabBar.vue";
import BottomSpace from "components/bottomspace/BottomSpace.vue";


export default {
  name: "Home",
  components: {
    BottomSpace,
    TopTabBar,
    Slideshow,
    GoodsNav,
    MiddleTabBar,
  },
};
</script>

<style scoped>
.home{
  padding-top: 50px;
}
</style>
