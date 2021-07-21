<template>
  <div id="app">
    <MainTabBar></MainTabBar>

    <!-- <div id="nav">
      <router-view />
      <router-link to="/">首页</router-link> |
      <router-link to="/about">分类</router-link> |
      <router-link to="/category">购物车</router-link> |
      <router-link to="/profile">我的</router-link>
    </div> -->
  </div>
</template>

<script>
import MainTabBar from "components/maintabbar/MainTabBar.vue";

export default {
  name: "app",
  components: {
    MainTabBar,
  },
};
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
