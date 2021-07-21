<template>
  <div id="goodsnav">
    <TabBarItem>
      <img src="~assets/logo.png" alt="" slot="tabbar-img"/>
      <div slot="tabbar-text">今日新品</div>
    </TabBarItem>
    <TabBarItem>
      <img src="~assets/logo.png" alt="" slot="tabbar-img"/>
      <div slot="tabbar-text">十点抢卷</div>
    </TabBarItem>
    <TabBarItem>
      <img src="~assets/logo.png" alt="" slot="tabbar-img"/>
      <div slot="tabbar-text">好物特购</div>
    </TabBarItem>
    <TabBarItem>
      <img src="~assets/logo.png" alt="" slot="tabbar-img"/>
      <div slot="tabbar-text">内购福利</div>
    </TabBarItem>
    <TabBarItem>
      <img src="~assets/logo.png" alt="" slot="tabbar-img"/>
      <div slot="tabbar-text">新品爆款</div>
    </TabBarItem>
    <TabBarItem>
      <img src="~assets/logo.png" alt="" slot="tabbar-img"/>
      <div slot="tabbar-text">猜你喜欢</div>
    </TabBarItem>
    <TabBarItem>
      <img src="~assets/logo.png" alt="" slot="tabbar-img"/>
      <div slot="tabbar-text">精品促销</div>
    </TabBarItem>
    <TabBarItem>
      <img src="~assets/logo.png" alt="" slot="tabbar-img"/>
      <div slot="tabbar-text">天天特卖</div>
    </TabBarItem>
  </div>
  
</template>

<script>
import TabBarItem from "components/maintabbar/TabBarItem.vue"

export default {
  name: 'GoodsNav',
  data() {
    return{

    }
  },
  components: {
    TabBarItem,
  }

}
</script>

<style>
#goodsnav{
  background-color: bisque;
  height: 200px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
  margin-top: 3px;
}
#goodsnav>div{
  background-color: blue;
  width: 23%;
  height: 70px;

}
#goodsnav img{
  width: 70px;
}
</style>