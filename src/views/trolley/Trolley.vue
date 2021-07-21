<template>
  <div class="trolley">
    <h1>This is an about page</h1>
    <TopTabBar>
      <div slot="toptabbar_left">左侧</div>
      <div slot="toptabbar_center">中间</div>
      <div slot="toptabbar_right">右侧</div>
    </TopTabBar>
  </div>
</template>

<script>
import TopTabBar from "components/toptabbar/TopTabBar.vue";


export default {
  name: "Trolley",
  props: {},
  components: {
    TopTabBar
  },
};
</script>

<style>
</style>