<template>
  <div id="category">
    <!-- 页眉 -->
    <TabBar>
      <div slot="toptabbar_center">商品分类</div>
    </TabBar>
    <!-- 分类组件 -->
    <CategroyList></CategroyList>
    <!-- 底部填充 -->
    <BottomSpace></BottomSpace>
  </div>
 
</template>

<script>

import TabBar from "components/toptabbar/TabBar.vue"
import CategroyList from "./CategoryList.vue"
import BottomSpace from "components/bottomspace/BottomSpace.vue";

export default {
  name: "Category",
  props: {

  },
  components: {
    TabBar,
    CategroyList,
    BottomSpace,
  },
};
</script>

<style>
#category .tabbar{
  background-color: aquamarine;
}
</style>