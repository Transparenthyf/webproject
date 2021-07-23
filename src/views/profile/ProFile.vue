<template>
  <div id="profile">
     <TabBar>
      <div slot="toptabbar_center">我的</div>
    </TabBar>
  </div>
</template>

<script>
import TabBar from "components/toptabbar/TabBar.vue";

export default {
  name: "ProFile",
  props: {},
  components: {
    TabBar,
  },
};
</script>

<style>
#profile .tabbar{
  background-color: aquamarine;
}
</style>