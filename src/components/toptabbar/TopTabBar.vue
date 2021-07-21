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
#toptabbar {
  background-color: aquamarine;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
    z-index: 100;
 
  /* height: 46px;
  width: 100%;
   display: flex;
  align-items: center;
  justify-content: space-between; */

}

</style>