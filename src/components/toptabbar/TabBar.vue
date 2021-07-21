<template>
  <div class="tabbar">
    <div class="left"><slot name="toptabbar_left"></slot></div>
    <div class="center"><slot name="toptabbar_center"></slot></div>
    <div class="right"><slot name="toptabbar_right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBar"

}
</script>

<style>
.tabbar{
  height: 46px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tabbar .left {
  width: 40px;
  margin-left: 3px;
}
.tabbar .center {
  flex-grow: 1;
}
.tabbar .right {
  margin-right: 3px;
  width: 40px;
}
</style>