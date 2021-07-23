<template>
  <div id="finish">
    <TabBarItem v-for="(item,index) in list" :key="index">
      <img src="~assets/logo.png" alt="" slot="tabbar-img"/>
      <div slot="tabbar-text">流行商品{{item}}</div>
    </TabBarItem>
    <!-- <TabBarItem>
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
    </TabBarItem> -->
  </div>
</template>

<script>
import TabBarItem from "components/maintabbar/TabBarItem.vue"

export default {
name: 'Finish',
data() {
  return{
    list: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  }
},
components: {
    TabBarItem,
  },
}
</script>

<style>
#finish{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  

}
#finish>div{
  background-color: aqua;
  width: 46%;
  /* height: 200px; */
  margin-top: 10px;
  position: relative;
}
#finish img{
  width: 90%;
  margin-bottom: 30px;
}
#finish .tabbaritem div{
  position: absolute;
  bottom: 3px;
  width: 100%;
}
</style>