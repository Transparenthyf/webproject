<template>
  <div id="maintabbar">
    <router-view />
    <div id="tabbar">
      <router-link to="/">
        <tab-bar-item>
          <img src="~assets/logo.png" alt="" slot="tabbar-img"/>
          <div slot="tabbar-text">首页</div>
        </tab-bar-item>
      </router-link>
      <router-link to="/category">
        <tab-bar-item>
          <img src="~assets/logo.png" alt="" slot="tabbar-img"/>
          <div slot="tabbar-text">分类</div>
        </tab-bar-item>
      </router-link>
      <router-link to="/trolley">
        <tab-bar-item>
          <img src="~assets/logo.png" alt="" slot="tabbar-img"/>
          <div slot="tabbar-text">购物车</div>
        </tab-bar-item>
      </router-link>
      <router-link to="/profile">
        <tab-bar-item>
          <img src="~assets/logo.png" alt="" slot="tabbar-img"/>
          <div slot="tabbar-text">我的</div>
        </tab-bar-item>
      </router-link>
    </div>
  </div>
</template>

<script>
import TabBarItem from "components/maintabbar/TabBarItem.vue";

export default {
  name: "MainTabBar",
  components: {
    TabBarItem,
  },
};
</script>

<style>
#tabbar {
  background-color: aquamarine;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  height: 49px;
  display: flex;
  justify-content: space-evenly;

}
#tabbar a{
  text-decoration: none;
}
</style>