<template>
  <div id="goodsshow">
    <TabBarItem>
      <img src="~assets/logo.png" alt="" slot="tabbar-img"/>
      <div slot="tabbar-text">今日新品</div>
    </TabBarItem>
    <TabBarItem>
      <img src="~assets/logo.png" alt="" slot="tabbar-img"/>
      <div slot="tabbar-text">今日新品</div>
    </TabBarItem>
    <TabBarItem>
      <img src="~assets/logo.png" alt="" slot="tabbar-img"/>
      <div slot="tabbar-text">今日新品</div>
    </TabBarItem>
    <TabBarItem>
      <img src="~assets/logo.png" alt="" slot="tabbar-img"/>
      <div slot="tabbar-text">今日新品</div>
    </TabBarItem>
    <TabBarItem>
      <img src="~assets/logo.png" alt="" slot="tabbar-img"/>
      <div slot="tabbar-text">今日新品</div>
    </TabBarItem>
    <TabBarItem>
      <img src="~assets/logo.png" alt="" slot="tabbar-img"/>
      <div slot="tabbar-text">今日新品</div>
    </TabBarItem>
    <TabBarItem>
      <img src="~assets/logo.png" alt="" slot="tabbar-img"/>
      <div slot="tabbar-text">今日新品</div>
    </TabBarItem>
    <TabBarItem>
      <img src="~assets/logo.png" alt="" slot="tabbar-img"/>
      <div slot="tabbar-text">今日新品</div>
    </TabBarItem>
    <TabBarItem>
      <img src="~assets/logo.png" alt="" slot="tabbar-img"/>
      <div slot="tabbar-text">今日新品</div>
    </TabBarItem>
    <TabBarItem>
      <img src="~assets/logo.png" alt="" slot="tabbar-img"/>
      <div slot="tabbar-text">今日新品</div>
    </TabBarItem>
    <TabBarItem>
      <img src="~assets/logo.png" alt="" slot="tabbar-img"/>
      <div slot="tabbar-text">今日新品</div>
    </TabBarItem>
    <TabBarItem>
      <img src="~assets/logo.png" alt="" slot="tabbar-img"/>
      <div slot="tabbar-text">今日新品</div>
    </TabBarItem>
    <TabBarItem>
      <img src="~assets/logo.png" alt="" slot="tabbar-img"/>
      <div slot="tabbar-text">今日新品</div>
    </TabBarItem>
    <TabBarItem>
      <img src="~assets/logo.png" alt="" slot="tabbar-img"/>
      <div slot="tabbar-text">今日新品</div>
    </TabBarItem>
    <TabBarItem>
      <img src="~assets/logo.png" alt="" slot="tabbar-img"/>
      <div slot="tabbar-text">今日新品</div>
    </TabBarItem>
    <TabBarItem>
      <img src="~assets/logo.png" alt="" slot="tabbar-img"/>
      <div slot="tabbar-text">今日新品</div>
    </TabBarItem>
    <TabBarItem>
      <img src="~assets/logo.png" alt="" slot="tabbar-img"/>
      <div slot="tabbar-text">今日新品</div>
    </TabBarItem>
    <TabBarItem>
      <img src="~assets/logo.png" alt="" slot="tabbar-img"/>
      <div slot="tabbar-text">今日新品</div>
    </TabBarItem>
  </div>
</template>

<script>
import TabBarItem from "components/maintabbar/TabBarItem.vue"

export default {
name: 'GoodsShow',
components: {
    TabBarItem,
  },
}
</script>

<style>
#goodsshow{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  

}
#goodsshow>div{
  background-color: aqua;
  width: 46%;
  height: 200px;
  margin-top: 10px;
  position: relative;
}
#goodsshow img{
  width: 150px;
}
#goodsshow .tabbaritem div{
  position: absolute;
  bottom: 3px;
  width: 100%;
}
</style>