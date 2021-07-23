<template>
  <div id="trolley">
    <!-- 页眉 -->
    <TabBar>
      <div slot="toptabbar_center">购物车</div>
    </TabBar>
    <!-- 购物车列表 -->
    <div id="trolleyshow">
      <TrolleyList></TrolleyList>
      <TrolleyList></TrolleyList>
      <TrolleyList></TrolleyList>
      <TrolleyList></TrolleyList>
      <TrolleyList></TrolleyList>
      <TrolleyList></TrolleyList>
      <TrolleyList></TrolleyList>
    </div>
    <!-- 商品推荐 -->
    <div class="recommend"><p>猜你喜欢</p></div>
    <Fashion></Fashion>
    <!-- 结账栏 -->
    <PayBar></PayBar>
    <!-- 底部填充 -->
    <BottomSpace></BottomSpace>
    <BottomSpace></BottomSpace>
  </div>
</template>

<script>
import TabBar from "components/toptabbar/TabBar.vue";
import TrolleyList from "./TrolleyList.vue"
import BottomSpace from "components/bottomspace/BottomSpace.vue";
import Fashion from "views/home/middletabbar/Fashion.vue"
import PayBar from "./PayBar.vue"

export default {
  name: "Trolley",
  props: {},
  components: {
    TabBar,
    TrolleyList,
    BottomSpace,
    Fashion,
    PayBar,
  },
};
</script>

<style>
#trolley .tabbar{
  background-color: aquamarine;
}
#trolleyshow>:first-child{
  margin-top: 50px;
}
.recommend{
  text-align: center;
  font-size: 20px;
  background-color: rgb(241, 226, 205);
  margin: 5px;
  border-radius: 5px;
}
</style>