<template>
  <div id="balance">
    <div>
      <div class="first"><span>0.00</span>元</div>
      <div class="second">我的余额</div>
    </div>
    <div>
      <div class="first"><span>0</span>个</div>
      <div class="second">我的优惠</div>
    </div>
    <div>
      <div class="first"><span>0</span>分</div>
      <div class="second">我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Balance"

}
</script>

<style>
#balance{
  width: 100%;
  height: 60px;
  display: flex;
  background-color: aliceblue;
  align-items: center;

}
#balance>div{
  flex-grow: 1;
}
#balance span{
  font-size: 20px;
  color: darkorange;
}
</style>