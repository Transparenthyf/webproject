<template>
  <div class="trolleylist">
    <div class="store">
      <div><input type="checkbox" name="store"></div>
      <p>这是一个商店名</p>
    </div>
    <div class="goods">
      <div>
        <img src="~assets/logo.png" alt="购物车图片">
      </div>
      <div class="goodsmessage">
        <div><p>商品的名称</p></div>
        <div>
          <select name="goodstype" id="goodstype">
          <option value="165">165</option>
          <option value="170">170</option>
          <option value="175">175</option>
          <option value="180">180</option>
          </select>
        </div>
        <div class="goodsprice">
          <div>
            <p>&#165;999</p>
          </div>
          <div>
            <input type="button" value=" - " @click="sub">
            <span> × {{goodsnum}}</span>
            <input type="button" value=" + " @click="add"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TrolleyList",
  data() {
    return{
      goodsnum : 1
    }
  },
  methods: {
    add() {
      this.goodsnum++
    },
    sub() {
      if(this.goodsnum > 0){
        this.goodsnum--
      }
    }
  }

}
</script>

<style>
.trolleylist{
  margin: 5px;
  border: 2px solid skyblue;
  border-radius: 15px;
  background-color: rgb(241, 226, 205);
}

/* 店铺名称 */
.store{
  display: flex;
  height: 20px;
  line-height: 20px;
  padding-left: 10px;
  padding-top: 3px;
  align-content: center;
}
.store p{
  padding-left: 5px;
}
/* 商品信息 */
.goods{
  display: flex;
  justify-content: space-around;

}
.goods img{
  width: 100px;
  flex-shrink: 0
}
.goodsmessage{
  width: 150px;
  text-align: left;
}
.goodsmessage div{
  margin: 5px 0 0 0;
}
.goodsprice{
  display: flex;
  justify-content: space-between;
}
</style>