<template>
  <div id="categroylist">
    <!-- 导航列表 -->
    <div id="categroylistleft" >
      <div class="liststyle">
        <router-link to = "/category/now">正在流行</router-link>
      </div>
      <div class="liststyle">
        <router-link to = "/category/new">新款上架</router-link>
      </div>
      <div class="liststyle">
        <router-link to = "/category/sift">精选商品</router-link>
      </div>
    </div>
    
    <!-- 商品展示 -->
    <div id="categroylistshow">
       <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import Now from "./categroylist/Now.vue"

export default {
  name: "CategroyList",
  data() {
    return{
    }
  },
  computed: {
  },
  components: {
  }
}
</script>

<style>
#categroylist{
  display: flex;
  flex-wrap: wrap;
  margin-top: 46px;

}
#categroylistleft{
  width: 25%;
    /* 定位 */
  position: fixed;
  top: 46px;
  left: 2px;

}
#categroylistshow{
  width: 75%;
      /* 定位 */
  position: absolute;
  right: 0px;
}
.liststyle{
  background-color: bisque;
  height: 30px;
  line-height: 30px;
  /* border: 2px solid brown; */
  /* border-top: 0px solde black; */
  border-left: 2px solid brown;
  border-right: 2px solid brown;
  border-bottom: 2px solid brown;
}
.liststyle:first-child{
  border-top: 2px solid brown ;
}
.liststyle a{
  text-decoration: none;
}
</style>