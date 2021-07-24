<template>
  <div class="about">
    <div>
      <img src="~assets/logo.png" alt="小图标">
      <span>我的购物车</span>
    </div>
    <div>
      <img src="~assets/logo.png" alt="小图标">  
      <span>下载购物APP</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style>
.about div{
  height: 50px;
  line-height: 50px;
  font-size: 15px;
  display: flex;
  background-color: aliceblue;
  border-bottom: 1px solid antiquewhite;
}
.about img{
  width: 30px;
  margin: auto 10px;
}
</style>