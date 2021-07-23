<template>
  <div class="paybar">
    <div class="all">
      <div><input type="checkbox" name="allcheck"></div>
      <div><p>全选</p></div>
    </div>
    <div class="pay">
      <div class="total">合计：&#165; 0 </div>
      <div class="paybutton">
        <button>结算</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PayBar"

}
</script>

<style>
.paybar{
  display: flex;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  position: fixed;
  bottom: 46px;
  background-color: lawngreen;
  align-items: center;
}
.all{
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  margin-left: 10px;
}
.pay{
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
}
.paybutton{
  margin: 0 10px;
}
</style>