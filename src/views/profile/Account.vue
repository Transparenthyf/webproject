<template>
  <div class="account">
    <div>
      <img src="~assets/logo.png" alt="小图标">
      我的消息
    </div>
    <div>
      <img src="~assets/logo.png" alt="小图标">
      <span>积分商城</span>
    </div>
    <div>
      <img src="~assets/logo.png" alt="小图标">  
      <span>会员卡</span>
    </div>

  </div>
</template>

<script>
export default {
  name: "Account"

}
</script>

<style>
.account{
  padding: 10px 0;
  background-color: antiquewhite;
}
.account div{
  height: 50px;
  line-height: 50px;
  font-size: 15px;
  display: flex;
  background-color: aliceblue;
  border-bottom: 1px solid antiquewhite;
}
.account img{
  width: 30px;
  margin: auto 10px;
}
</style>