<template>
  <div id="toptabbar">
    <TabBar>
      <div slot="toptabbar_left">左侧</div>
      <div slot="toptabbar_center">中间</div>
      <div slot="toptabbar_right">右侧</div>
    </TabBar>
  </div>
</template>

<script>
import TabBar from './TabBar.vue';

export default {
  name: "TopTabBar",
  components: { 
    TabBar 
  },

};
</script>

<style>
#toptabbar .tabbar{
  background-color: aquamarine;


 
  /* height: 46px;
  width: 100%;
   display: flex;
  align-items: center;
  justify-content: space-between; */

}

</style>