<template>
  <div class="paybar">
    <div class="all">
      <div><input type="checkbox" name="allcheck" id="allcheck"></div>
      <label for="allcheck"><p>全选</p></label>
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
/* 全选按钮 */
.all{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  margin-left: 10px;
}
.all div{
  height: 13px;
  margin-right: 3px;
}
/* 结算按钮 */
.pay{
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  align-items: center;
}
.paybutton{
  margin: 0 10px;

}
.paybutton button{
    font-size: 20px;
}
</style>