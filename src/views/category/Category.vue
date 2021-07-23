<template>
  <div id="category">
    <!-- 顶部标签 -->
    <TabBar>
      <div slot="toptabbar_center">商品分类</div>
    </TabBar>
    <!-- 分类组件 -->
    <CategroyList></CategroyList>
  </div>
 
</template>

<script>

import TabBar from "components/toptabbar/TabBar.vue"
import CategroyList from "./CategoryList.vue"

export default {
  name: "Category",
  props: {

  },
  components: {
    TabBar,
    CategroyList,
  },
};
</script>

<style>
#category .tabbar{
  background-color: aquamarine;
}
</style>