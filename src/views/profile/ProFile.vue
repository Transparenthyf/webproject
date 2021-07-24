<template>
  <div id="profile">
    <!-- 页眉 -->
    <TabBar>
      <div slot="toptabbar_center">我的</div>
    </TabBar>
    <!-- 登陆 -->
    <LogIn></LogIn>
    <!-- 余额 -->
    <Balance></Balance>
    <!-- 账户信息 -->
    <Account></Account>
    <!-- 关于 -->
    <About></About>


  </div>
</template>

<script>
import TabBar from "components/toptabbar/TabBar.vue";
import LogIn from "./LogIn.vue"
import Account from "./Account.vue"
import Balance from "./Balance.vue"
import About from "./About.vue"

export default {
  name: "ProFile",
  props: {},
  components: {
    TabBar,
    LogIn,
    Account,
    Balance,
    About
  },
};
</script>

<style>
#profile .tabbar{
  background-color: aquamarine;
}

</style>